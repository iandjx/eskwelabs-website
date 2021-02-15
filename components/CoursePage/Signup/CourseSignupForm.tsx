import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { APPLY_TO_COURSE } from './queries';
import Spinner from '../../shared/Spinner';
import { ISignupProps, UserProfile } from './CourseSignUp';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Alert from '../../shared/Alert';

declare global {
  interface Window {
    fbq: (...args: string[]) => void;
  }
}

const CourseSignupForm = ({ userProfile, setStep, courseCode }: CourseSignupForm): JSX.Element => {
  const [showErrorAlert, setShowErrorAlert] = useState(true);
  const router = useRouter();
  const [applyToCourse, { loading, data, error }] = useMutation(APPLY_TO_COURSE, {
    context: { clientName: 'api' },
  });
  const { register, handleSubmit, errors, reset } = useForm();
  const [UTMParams, setUTMParams] = useState<IUTMParams>({
    utm_source: '',
    utm_campaign: '',
    utm_medium: '',
  });

  const onSubmit = async (data: SignupData): Promise<void> => {
    if (window && window.gtag) {
      window.gtag('event', `${courseCode}_sign_up_complete`, {
        method: 'form_sign_up',
      });
    }
    const application = {
      ...data,
      uuid: userProfile.uuid,
      course: courseCode,
      state: 'SUBMITTED',
      utmParams: UTMParams,
      ...('provider' in userProfile === true
        ? {
            socialSignup: {
              provider: userProfile.provider,
              login: userProfile.login,
            },
          }
        : {}),
    };

    await applyToCourse({
      variables: {
        application,
      },
    });

    if (window && window.fbq) {
      window.fbq('track', 'SubmitApplication');
    }
    reset();
  };

  useEffect(() => {
    const params = router.query as IUTMParams;
    if ('utm_source' in params || 'utm_campaign' in params || 'utm_medium' in params) {
      setUTMParams({ ...params });
    }
  }, [router.query]);

  if (loading) {
    return <Spinner />;
  }
  if (data) {
    setStep(3);
  }

  if (data && courseCode === 'ARAL_ARAL_PLUS') {
    const applicationId = data.updateApplication.applicationId;
    if (window) {
      window.open(
        `https://portal.eskwelabs.com/payment/cart?application_id=${applicationId}&course=${courseCode}`,
        '_self'
      );
    }
    return <Spinner />;
  }

  return (
    <div>
      {error && (
        <Alert
          visible={showErrorAlert}
          closeFn={() => setShowErrorAlert(false)}
          title="Error"
          kind="ERROR"
        >
          <div>
            Application failed to submit. Please try again later or email hello@eskwelabs.com
          </div>
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-2">
          <div className="w-full">
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              ref={register({ required: 'First Name is required', maxLength: 80 })}
              className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-silver text-xs"
            />

            {errors.firstName && (
              <p className="text-red mt-2 text-xs">{errors.firstName.message}</p>
            )}
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              ref={register({ required: 'Last Name is required', maxLength: 100 })}
              className=" w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-silver text-xs"
            />
            {errors.lastName && <p className="text-red mt-2 text-xs">{errors.lastName.message}</p>}
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="Preferred Name"
              name="preferredName"
              ref={register}
              className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-silver text-xs"
            />
          </div>
          <div className="w-full">
            <input
              type="email"
              placeholder="Email"
              name="email"
              ref={register({ required: 'Email is invalid', pattern: /^\S+@\S+$/i })}
              className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-silver text-xs"
            />
            {errors.email && <p className="text-red mt-2 text-xs">{errors.email.message}</p>}
          </div>

          <input
            type="text"
            placeholder="Club/Organization"
            name="organization"
            ref={register}
            className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-silver text-xs"
          />
          <input
            type="text"
            placeholder="Linkedin Profile"
            name="linkedInProfile"
            ref={register}
            className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-silver text-xs"
          />
          <select
            name="gender"
            ref={register}
            className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-silver text-xs"
          >
            <option value="" disabled selected>
              Gender{' '}
            </option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="PREFER_NOT_TO_SAY">Prefet Not To Say</option>
          </select>
          <select
            name="ageRange"
            ref={register({ required: true })}
            className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-silver text-xs"
          >
            <option value="" disabled selected>
              Age Range{' '}
            </option>
            <option value="LESS_THAN_18">{'<18'}</option>
            <option value="18_TO_24">18 to 24</option>
            <option value="25_TO_29">25 to 29</option>
            <option value="30_TO_34">30 to 34</option>
            <option value="35_TO_44">35 to 44</option>
            <option value="45_TO_54">45 to 54</option>
            <option value="55_TO_64">55 to 64</option>
            <option value="65_AND_OVER">65 and above</option>
          </select>
        </div>
        <div className="mt-6">
          <input
            type="submit"
            className="bg-hit-pink px-4 py-2 text-gallery-white text-xs font-semibold hover:bg-hit-pink-darker rounded-lg uppercase duration-200 ease-in-out w-full mb-2 mr-2"
          />
        </div>
      </form>
    </div>
  );
};

export default CourseSignupForm;

interface SignupData {
  firstName: string;
  lastName: string;
  preferredName: string;
  email: string;
  organization: string;
  linkedInProfile: string;
  ageRange: string;
  gender: string;
}

interface IUTMParams {
  utm_source?: string;
  utm_campaign?: string;
  utm_medium?: string;
}

interface CourseSignupForm extends ISignupProps {
  userProfile: UserProfile;
  setStep: (num: number) => void;
}
