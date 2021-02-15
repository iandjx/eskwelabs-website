import { StepNames } from '../../shared/types';

interface ISignupProgressBar {
  step: number;
  stepNames: string;
}

const DEFAULT_STEP_NAMES = ['Sign-up', 'Complete details', 'Receive Free Prep Course'];
const LOGIN_TO_LMS_STEP_NAMES = ['Sign-up', 'Complete details', 'Login to view'];

const ProgressBar = ({ step = 1, stepNames }: ISignupProgressBar): JSX.Element => {
  const steps =
    stepNames == StepNames.FREE_PREP_COURSE ? DEFAULT_STEP_NAMES : LOGIN_TO_LMS_STEP_NAMES;

  return (
    <div className="container my-12">
      <ul className="step flex flex-nowrap">
        <li className={'step-item' + (step === 1 ? ' active' : '')} id="sign-up-method">
          <a href="#sign-up-method-tab" className="text-xs">
            Step 1:
            <br /> {steps[0]}
          </a>
        </li>
        <li className={'step-item' + (step === 2 ? ' active' : '')} id="sign-up-form-details">
          <a href="#complete-details-tab" className="text-xs">
            Step 2:
            <br /> {steps[1]}
          </a>
        </li>
        <li className={'step-item' + (step === 3 ? ' active' : '')} id="login-to-lms">
          <a href="#login-to-lms-tab" className="text-xs">
            Step 3:
            <br /> {steps[2]}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProgressBar;
