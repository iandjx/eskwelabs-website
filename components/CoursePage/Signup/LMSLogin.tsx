import React, { useState } from 'react';
import Spinner from '../../shared/Spinner';
import useInterval from '../../shared/useInterval';
import MailIcon from '../../svgs/MailIcon';

const getCanvasHost = (): string => process.env.NEXT_PUBLIC_CANVAS_URL || 'courses.eskwelabs.com';

const getSignupAPI = (): string =>
  process.env.NEXT_PUBLIC_SIGN_UP_HOST || ' https://api.eskwelabs.com';

enum ApplicationStatus {
  INCOMPLETE = 'INCOMPLETE',
  SUBMITTED = 'SUBMITTED',
  PROCESSED = 'PROCESSED',
}

async function fetchApplicationStatus(signupAPI: string, uuid: string): Promise<ApplicationStatus> {
  const response = await fetch(`${signupAPI}/api/v1/application/${uuid}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();

  return result.status as ApplicationStatus;
}

interface ILMSLogin {
  provider: string;
  uuid: string;
  courseCode: string;
}

const LMSLogin = ({ provider, uuid }: ILMSLogin): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);
  const signupAPI = getSignupAPI();

  useInterval(
    async () => {
      const status = await fetchApplicationStatus(signupAPI, uuid);
      if (status === ApplicationStatus.PROCESSED) {
        setIsLoaded(true);
      }
    },
    isLoaded ? null : 1000
  );

  if (!isLoaded) {
    return <Spinner />;
  }

  const canvasHost = getCanvasHost();

  if (provider === 'email' || provider === '') {
    return (
      <div>
        <div className="lead">
          To get started, please check your inbox to confirm your email address and set a password.
        </div>
        <br />
        <div className="d-flex justify-content-center mt-5">
          <MailIcon className="fill-current" />
        </div>
      </div>
    );
  }

  return (
    <div className="my-6" id="login-link">
      <a
        href={`https://${canvasHost}/login/${provider ? provider : ''}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-hit-pink px-4 py-2 text-gallery-white text-xs font-semibold hover:bg-hit-pink-darker rounded-lg uppercase duration-200 ease-in-out w-full block text-center mb-2 mr-2"
      >
        Login to the LMS
      </a>
    </div>
  );
};

export default LMSLogin;
