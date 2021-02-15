import { Dispatch, SetStateAction, useState } from 'react';
import { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { ReactFacebookLoginInfo } from 'react-facebook-login-typed';
import CourseSignUpForm from './CourseSignupForm';
import { FetchResult, MutationFunctionOptions, useMutation } from '@apollo/client';
import { APPLY_TO_COURSE } from './queries';
import LMSLogin from './LMSLogin';
import createUUID from '../../shared/uuid';
import SignupProgressBar from '../Progress/ProgressBar';
import Spinner from '../../shared/Spinner';
import Alert from '../../shared/Alert';
import FacebookLoginButton from './FacebookLoginButton';
import GoogleLoginButton from './GoogleLoginButton';
import MailIcon from '../../svgs/MailIcon';

export interface UserProfile {
  uuid: string;
  email: string;
  firstName: string;
  lastName: string;
  provider: string;
  login: string;
}

export interface ISignupProps {
  courseCode: string;
}

interface SignupProps extends ISignupProps {
  stepNames: string;
  progressBar: boolean;
}

interface SocialSignupProps extends ISignupProps {
  setUserProfile: Dispatch<SetStateAction<UserProfile>>;
  setStep: (num: number) => void;
}

export interface FacebookLoginResponse {
  email: string;
  first_name: string;
  last_name: string;
}

type ErrorMessages = {
  serverDown: JSX.Element;
  emailAlreadyExists: JSX.Element;
  noDataReturnedFromProvider: JSX.Element;
};

type CourseMutationFunc = (
  options?: MutationFunctionOptions<unknown, Record<string, unknown>> | undefined
) => Promise<FetchResult<unknown, Record<string, unknown>, Record<string, unknown>>>;

type Application = {
  uuid: string;
  email: string;
  firstName: string;
  lastName: string;
  course: string;
};

export const generateErrorMessages = (
  showAlert: boolean,
  setShowAlert: Dispatch<SetStateAction<boolean>>
): ErrorMessages => ({
  serverDown: (
    <Alert title="Error" kind="ERROR" visible={showAlert} closeFn={() => setShowAlert(false)}>
      <span className="block sm:inline">
        The server is unavailable. Please try again again later
      </span>
    </Alert>
  ),
  emailAlreadyExists: (
    <Alert title="Error" kind="ERROR" visible={showAlert} closeFn={() => setShowAlert(false)}>
      <span className="block sm:inline">
        Sorry, you have already signed up for this course. Please{' '}
        <a href="https://courses.eskwelabs.com/login" target="_blank" rel="noreferrer">
          click here to login or reset your password
        </a>
      </span>
    </Alert>
  ),
  noDataReturnedFromProvider: (
    <Alert title="Error" kind="ERROR" visible={showAlert} closeFn={() => setShowAlert(false)}>
      <span className="block sm:inline">
        Please check that you have accepted the correct permissions
      </span>
    </Alert>
  ),
});

const gtag = (type: string, eventName: string, options: { method: string }): void => {
  if (window && window.gtag) {
    window.gtag(type, eventName, options);
  }
};

const submitApplication = async (
  applyToCourse: CourseMutationFunc,
  errorMessages: ErrorMessages,
  setAlert: (contents: JSX.Element) => void,
  application: Application
): Promise<boolean> => {
  // FIXME: Do not use try/catch. Check the return value.
  try {
    await applyToCourse({
      variables: {
        application,
      },
    });
  } catch (err) {
    if (err.message === 'Failed to fetch') {
      setAlert(errorMessages.serverDown);
      return false;
    }
    if (
      // TODO: Is there a better way we can do this?
      err.message ===
      'Application validation failed: email: Email already exists for this course application type'
    ) {
      setAlert(errorMessages.emailAlreadyExists);
      return false;
    } else {
      throw err;
    }
  }

  return true;
};

enum ResponseHandlers {
  FACEBOOK = 'FACEBOOK',
  GOOGLE = 'GOOGLE',
}

const generateResponseHandler = (
  handlerType: ResponseHandlers,
  uuid: string,
  courseCode: string,
  errorMessages: ErrorMessages,
  setAlert: (contents: JSX.Element) => void,
  setUserProfile: Dispatch<SetStateAction<UserProfile>>,
  setStep: (num: number) => void,
  applyToCourse: CourseMutationFunc
): ((response: never) => Promise<boolean>) => {
  const googleResponseHandler = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ): Promise<boolean> => {
    gtag('event', `${courseCode}_sign_up`, {
      method: 'google_button',
    });

    if (!(response as GoogleLoginResponse).profileObj) {
      setAlert(errorMessages.noDataReturnedFromProvider);
      return false;
    }

    const { profileObj } = response as GoogleLoginResponse;

    const userDetails = {
      uuid,
      email: profileObj.email,
      firstName: profileObj.givenName,
      lastName: profileObj.familyName,
    };

    const application = { ...userDetails, course: courseCode };

    setUserProfile({ ...userDetails, provider: 'google', login: userDetails.email });

    // apply to course
    await submitApplication(applyToCourse, errorMessages, setAlert, application);

    setStep(2);
    return true;
  };

  const facebookResponseHandler = async (
    response: ReactFacebookLoginInfo | FacebookLoginResponse
  ): Promise<boolean> => {
    gtag('event', `${courseCode}_sign_up`, {
      method: 'bottom_facebook_button',
    });

    if (!response.email) {
      setAlert(errorMessages.noDataReturnedFromProvider);
      return false;
    }

    const userDetails = {
      uuid,
      email: response.email,
      firstName: (response as FacebookLoginResponse).first_name,
      lastName: (response as FacebookLoginResponse).last_name,
    };

    const application = { ...userDetails, course: courseCode };

    setUserProfile({ ...userDetails, provider: 'facebook', login: userDetails.email });

    await submitApplication(applyToCourse, errorMessages, setAlert, application);

    setStep(2);
    return true;
  };

  switch (handlerType) {
    case ResponseHandlers.GOOGLE:
      return googleResponseHandler;
    case ResponseHandlers.FACEBOOK:
      return facebookResponseHandler;
  }
};

export const SocialLogin = ({
  setUserProfile,
  setStep,
  courseCode,
}: SocialSignupProps): JSX.Element => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(<div />);

  const errorMessages = generateErrorMessages(showAlert, setShowAlert);

  const uuid = createUUID();
  const [applyToCourse, { loading }] = useMutation(APPLY_TO_COURSE, {
    context: { clientName: 'api' },
  });

  const setAlert = (contents: JSX.Element): void => {
    setAlertMessage(contents);
    setShowAlert(true);
  };

  const selectUsernamePassword = (): void => {
    gtag('event', `${courseCode}_sign_up`, {
      method: 'email_and_password_button',
    });

    setUserProfile({
      uuid,
      firstName: '',
      lastName: '',
      email: '',
      provider: '',
      login: '',
    });
    setStep(2);
  };

  const responseGoogle = generateResponseHandler(
    ResponseHandlers.GOOGLE,
    uuid,
    courseCode,
    errorMessages,
    setAlert,
    setUserProfile,
    setStep,
    applyToCourse
  ) as (response: GoogleLoginResponse | GoogleLoginResponseOffline) => Promise<boolean>;

  const responseFacebook = generateResponseHandler(
    ResponseHandlers.FACEBOOK,
    uuid,
    courseCode,
    errorMessages,
    setAlert,
    setUserProfile,
    setStep,
    applyToCourse
  ) as (response: ReactFacebookLoginInfo) => Promise<boolean>;

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="row justify-content-center">
      {showAlert && (
        <Alert title="Error" kind="ERROR" visible={showAlert} closeFn={() => setShowAlert(false)}>
          <span className="block sm:inline">{alertMessage}</span>
        </Alert>
      )}
      <div className="flex flex-col md:flex-row">
        <FacebookLoginButton responseFacebook={responseFacebook} />
        <GoogleLoginButton responseGoogle={responseGoogle} />
        <button
          className="bg-gallery-white px-4 py-2 text-tundora text-xs font-semibold hover:bg-gallery-off-white rounded-lg uppercase duration-200 ease-in-out w-full lg:w-auto mb-2"
          onClick={selectUsernamePassword}
        >
          <div className="flex flex-row align-middle">
            <MailIcon className="w-8 h-8 text-tundora fill-current mr-2" />{' '}
            <span className="block flex-grow align-middle mt-2">Use email and password</span>
          </div>
        </button>
      </div>
    </div>
  );
};

const CourseSignUp = ({ stepNames, progressBar, courseCode }: SignupProps): JSX.Element => {
  const [step, setStep] = useState(1);
  const [userProfile, setUserProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    uuid: '',
    provider: '',
    login: '',
  });

  const CurrentStep = (): JSX.Element => {
    switch (step) {
      case 3:
        return (
          <LMSLogin
            courseCode={courseCode}
            provider={userProfile.provider}
            uuid={userProfile.uuid}
          />
        );
      case 2:
        return (
          <CourseSignUpForm courseCode={courseCode} userProfile={userProfile} setStep={setStep} />
        );
      case 1:
      default:
        return (
          <SocialLogin courseCode={courseCode} setUserProfile={setUserProfile} setStep={setStep} />
        );
    }
  };

  return (
    <div>
      {progressBar ? <SignupProgressBar step={step} stepNames={stepNames} /> : ''}
      <CurrentStep />
    </div>
  );
};

export default CourseSignUp;
