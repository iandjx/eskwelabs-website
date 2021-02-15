import { CAREERS_CONTACT_US, CREATE_APPLICANT } from '../../lib/queries/Careers';
import { useQuery, useMutation } from '@apollo/client';
import SkeletonBox from '../../components/SkeletonBox';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import { useForm } from 'react-hook-form';
import { AlertInput, Applicant, UseAlert } from './types';
import Alert from '../shared/Alert';
import { useState } from 'react';
import Spinner from '../shared/Spinner';

const useAlert = ({ error, data }: AlertInput): UseAlert => {
  const [visible, setVisible] = useState(false);

  const children = error ? (
    <div>
      Sorry, we encountered a server error. Please try again.
      <br />
      <small>Error code: {error.toString()}</small>
    </div>
  ) : data ? (
    <div className="font-xs">
      Thank you for your interest in becoming a mentor. <br />
      Your submission has been received and we will reach out to you on email shortly.
      <br />
      If you do not receive your email confirmation within a few minutes kindly check your Spam or
      Promotions folder
    </div>
  ) : (
    <div />
  );

  const title = error ? 'Error' : 'Thank you';
  const kind = error ? 'ERROR' : 'SUCCESS';

  const closeFn = (): void => setVisible(false);

  return { children, title, kind, visible, closeFn, setVisible };
};

const SignupForm = (): JSX.Element => {
  const { loading, error, data } = useQuery(CAREERS_CONTACT_US);

  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      currentEmployer: '',
      city: '',
      linkedinProfile: '',
      availableHours: '',
      subjectInterest: '',
    },
  });
  const [
    createApplicant,
    { data: createApplicantData, loading: createApplicantLoading, error: createApplicantError },
  ] = useMutation(CREATE_APPLICANT, {
    context: { clientName: 'api' },
  });

  const { setVisible, ...alertProps } = useAlert({
    data: createApplicantData,
    error: createApplicantError,
  });

  const { visible } = alertProps;

  const onSubmit = async (data: Applicant): Promise<void> => {
    await createApplicant({
      variables: {
        applicant: { ...data },
      },
    });
    reset();
    setVisible(true);
  };

  if (createApplicantError && !visible) {
    setVisible(true);
  }

  if (error) {
    return <div className="error">{error.message}</div>;
  }

  return (
    <div>
      <div className="container md:grid md:gap-32 mx-auto md:grid-cols-3 p-4 pb-16">
        <div className="md:col-span-1 pt-24">
          <h1 className="hero-heading-letter-spacing mb-6 leading-none">
            <SkeletonBox loading={loading} classNames="w-32 h-12">
              <span className="text-4xl text-white">{data.career.contactUsTitle}</span>
            </SkeletonBox>
          </h1>
          <div className="about-hero text-white mb-12 text-sm">
            <SkeletonBox loading={loading} classNames="w-64 h-12">
              <ReactMarkdownWithHtml allowDangerousHtml>
                {data.career.contactUsDescription}
              </ReactMarkdownWithHtml>
            </SkeletonBox>
          </div>
        </div>
        <aside className="md:pt-24 md:col-span-2 text-white">
          {createApplicantLoading && <Spinner label="Submitting..." />}
          {visible && (
            <div className="font-xs">
              <Alert {...alertProps} />
            </div>
          )}
          <form
            className="flex flex-col md:grid md:gap-4 md:grid-cols-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="w-full">
              <input
                type="text"
                placeholder="First Name *"
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
                placeholder="Last Name *"
                name="lastName"
                ref={register({ required: 'Last Name is required', maxLength: 80 })}
                className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-silver text-xs"
              />
              {errors.lastName && (
                <p className="text-red mt-2 text-xs">{errors.lastName.message}</p>
              )}
            </div>

            <div className="w-full">
              <input
                type="text"
                placeholder="Email Address *"
                name="email"
                ref={register({ required: 'Email is required', pattern: /^\S+@\S+$/i })}
                className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-silver text-xs"
              />
              {errors.email && <p className="text-red mt-2 text-xs">{errors.email.message}</p>}
            </div>
            <div className="w-full">
              <input
                type="tel"
                placeholder="Phone number *"
                name="phoneNumber"
                ref={register({ required: 'Phone number is required', maxLength: 12 })}
                className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-silver text-xs"
              />
              {errors.email && <p className="text-red mt-2 text-xs">{errors.email.message}</p>}
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Current Employer *"
                name="currentEmployer"
                ref={register({ required: 'Current Employer is required' })}
                className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-silver text-xs"
              />
              {errors.currentEmployer && (
                <p className="text-red mt-2 text-xs">{errors.currentEmployer.message}</p>
              )}
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="LinkedIn Profile *"
                name="linkedinProfile"
                ref={register({ required: 'LinkedIn profile is required' })}
                className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-silver text-xs"
              />
              {errors.linkedinProfile && (
                <p className="text-red mt-2 text-xs">{errors.linkedinProfile.message}</p>
              )}
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Current City *"
                name="city"
                ref={register({ required: 'City is required' })}
                className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-silver text-xs"
              />
              {errors.city && <p className="text-red mt-2 text-xs">{errors.city.message}</p>}
            </div>

            <div className="m-2 mt-4 md:m-0 w-full">
              <p className="text-sm mb-4">Interested in instructing or mentoring for: *</p>
              <div className="flex flex-row text-xs w-full">
                <div className="mr-12">
                  <input
                    name="subjectInterest"
                    type="radio"
                    value="data_analytics"
                    ref={register({ required: 'Choose between Data Analytics or Data Science' })}
                  />
                  <label htmlFor="analytics" className="ml-4">
                    Data Analytics
                  </label>
                </div>
                <div>
                  <input
                    name="subjectInterest"
                    type="radio"
                    value="data_science"
                    ref={register({ required: 'Choose between Data Analytics or Data Science' })}
                  />
                  <label htmlFor="dataScience" className="ml-4">
                    Data Science
                  </label>
                </div>
              </div>
              {errors.subjectInterest && (
                <p className="text-red mt-2 text-xs">{errors.subjectInterest.message}</p>
              )}
            </div>

            <div className="m-2 mt-4 md:m-0 w-full">
              <p className="text-sm mb-4">Hours per week available for mentoring? *</p>
              <select
                name="availableHours"
                className="p-2 border border-white text-white rounded bg-transparent placeholder-silver text-xs w-full"
                ref={register({ required: 'Available hours is required' })}
              >
                <option value="" disabled selected>
                  Select from options
                </option>
                <option value="less_than_15">less than 15 hours</option>
                <option value="15_to_30">15-30 hours</option>
                <option value="30_to_40">30-40 hours</option>
              </select>
              {errors.availableHours && (
                <p className="text-red mt-2 text-xs">{errors.availableHours.message}</p>
              )}
            </div>

            <div className="col-start-2 mt-6 place-self-end">
              <button className="button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </aside>
      </div>
    </div>
  );
};

export default SignupForm;
