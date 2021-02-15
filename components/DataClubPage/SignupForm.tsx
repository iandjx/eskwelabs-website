import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import Spinner from '../shared/Spinner';
import Alert from '../shared/Alert';
import { DataClubApplicant } from './types';
import { CREATE_DATACLUB_APPLICANT } from '../../lib/queries/DataClub';

const SignupForm = (): JSX.Element => {
  const { register, handleSubmit, reset, errors } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      preferredName: '',
      gender: '',
      age: '',
      phoneNumber: '',
      email: '',
      educationalAttainment: '',
      dataExperience: '',
      work: '',
      goal: '',
      computer: '',
    },
  });

  const [
    createDataClubApplicant,
    {
      loading: createDataClubApplicantLoading,
      data: createDataClubApplicantData,
      error: createDataClubApplicantError,
    },
  ] = useMutation(CREATE_DATACLUB_APPLICANT, {
    context: { clientName: 'api' },
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(true);
  const [showErrorAlert, setShowErrorAlert] = useState(true);

  const onSubmit = async (applicant: DataClubApplicant): Promise<void> => {
    await createDataClubApplicant({
      variables: {
        applicant,
      },
    });
    if (window && window.fbq) {
      window.fbq('track', 'DataClubApplication');
    }
    if (window && window.gtag) {
      window.gtag('event', 'DataClubApplication', { method: 'web_signup' });
    }
    reset();
  };

  return (
    <div>
      <div className="container md:grid md:gap-32 mx-auto md:grid-cols-1 p-4">
        <aside className=" text-white">
          <div>
            {createDataClubApplicantLoading && <Spinner />}

            {createDataClubApplicantData &&
              createDataClubApplicantData.createDataClubApplicant.success && (
                <Alert
                  visible={showSuccessAlert}
                  closeFn={() => setShowSuccessAlert(false)}
                  title="Thank you"
                  kind={'SUCCESS'}
                >
                  <span>
                    <br />
                    Thank you for contacting us. We will be in contact with you shortly.
                  </span>
                </Alert>
              )}

            {createDataClubApplicantError && (
              <Alert
                visible={showErrorAlert}
                closeFn={() => setShowErrorAlert(false)}
                title="Error"
                kind={'ERROR'}
              >
                <span>
                  <br /> Please try your request again later
                  <br />
                  <small>Error code: {createDataClubApplicantError?.message}</small>
                </span>
              </Alert>
            )}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset
              disabled={createDataClubApplicantLoading}
              className="flex flex-col md:grid md:gap-4 md:grid-cols-2"
            >
              <div className="w-full">
                <input
                  name="firstName"
                  placeholder="First Name *"
                  ref={register({ required: 'First Name is required', maxLength: 80 })}
                  className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-gallery-off-white text-xs"
                />
                {errors.firstName && (
                  <p className="text-red mt-2 text-xs">{errors.firstName.message}</p>
                )}
              </div>
              <div className="w-full">
                <input
                  name="lastName"
                  placeholder="Last Name *"
                  ref={register({ required: 'Last Name is required', maxLength: 80 })}
                  className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-gallery-off-white text-xs"
                />
                {errors.lastName && (
                  <p className="text-red mt-2 text-xs">{errors.lastName.message}</p>
                )}
              </div>

              <div className="w-full">
                <input
                  name="preferredName"
                  placeholder="Preferred Name *"
                  ref={register({ required: 'Preferred name is required', maxLength: 80 })}
                  className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-gallery-off-white text-xs"
                />
                {errors.preferredName && (
                  <p className="text-red mt-2 text-xs">{errors.preferredName.message}</p>
                )}
              </div>

              <div className="w-full m-2 mt-4 md:m-0">
                <select
                  name="gender"
                  className="p-2 border border-white text-white rounded bg-transparent placeholder-white text-xs w-full"
                  ref={register}
                >
                  <option value="" disabled selected>
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="preferNotToSay">Prefer Not To Say</option>
                </select>
              </div>

              <div className="w-full m-2 mt-4 md:m-0">
                <select
                  name="age"
                  className="p-2 border border-white text-white rounded bg-transparent placeholder-white text-xs w-full"
                  ref={register}
                >
                  <option value="" disabled selected>
                    Age
                  </option>
                  <option value="<18">Less than 18</option>
                  <option value="18-21">18-21</option>
                  <option value="22-25">22-25</option>
                  <option value="26-30">26-30</option>
                  <option value="31-35">31-35</option>
                  <option value="36-40">36-40</option>
                  <option value="40-45">41-45</option>
                  <option value="46-50">46-50</option>
                  <option value="50+">50+</option>
                </select>
              </div>

              <div className="w-full">
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number *"
                  ref={register({ required: 'Phone number is required', maxLength: 80 })}
                  className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-gallery-off-white text-xs"
                />
                {errors.phoneNumber && (
                  <p className="text-red mt-2 text-xs">{errors.phoneNumber.message}</p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-gallery-off-white text-xs"
                />
              </div>

              <div className="w-full m-2 mt-4 md:m-0">
                <select
                  name="educationalAttainment"
                  className="w-full p-2 border border-white text-white rounded bg-transparent placeholder-white text-xs w-full"
                  ref={register}
                >
                  <option value="" disabled selected>
                    Highest level of education attained
                  </option>
                  <option value="highSchool">High School</option>
                  <option value="1-2YearsCollege">1-2 Years of College</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="masteral">Masteral</option>
                  <option value="doctorate">Doctorate</option>
                </select>
              </div>

              <div className="w-full m-2 mt-4 md:m-0">
                <select
                  name="dataExperience"
                  className="p-2 border border-white text-white rounded bg-transparent placeholder-white text-xs w-full"
                  ref={register}
                >
                  <option value="" disabled selected>
                    {`What's your experience with data?`}
                  </option>
                  <option value="mac">Only heard about it</option>
                  <option value="pc">Watched online courses</option>
                  <option value="no">Worked in a job that uses data</option>
                  <option value="no">Working as a data analyst/scientist</option>
                </select>
              </div>

              <div className="w-full m-2 mt-4 md:m-0">
                <select
                  name="work"
                  className="p-2 border border-white text-white rounded bg-transparent placeholder-white text-xs w-full"
                  ref={register}
                >
                  <option value="" disabled selected>
                    Current Work Industry
                  </option>
                  <option value="student">Student</option>
                  <option value="servicesManufacturing">Services/Manufacturing</option>
                  <option value="hrOperations">HR/Operations</option>
                  <option value="designMedia">Design/Media</option>
                  <option value="marketingSales">Marketing/Sales</option>
                  <option value="accountingFinance">Accounting/Finance</option>
                  <option value="IT">IT/Tech</option>
                </select>
              </div>

              <div className="w-full m-2 mt-4 md:m-0">
                <select
                  name="goal"
                  className="p-2 border border-white text-white rounded bg-transparent placeholder-white text-xs w-full"
                  ref={register}
                >
                  <option value="" disabled selected>
                    What is your main goal for joining Data Club?{' '}
                  </option>
                  <option value="insights">To get insights from analyzing data</option>
                  <option value="career">To switch or launch a career in data science</option>
                  <option value="likeminded">
                    To meet a like-minded community of data learners
                  </option>
                  <option value="options">
                    To understand data and give myself another option in the future
                  </option>
                  <option value="competitive">To stay competitive in my current field</option>
                </select>
              </div>

              <div className="w-full m-2 mt-4 md:m-0">
                <select
                  name="computer"
                  className="p-2 border border-white text-white rounded bg-transparent placeholder-white text-xs w-full"
                  ref={register}
                >
                  <option value="" disabled selected>
                    Do you have access to a laptop or computer?{' '}
                  </option>
                  <option value="mac">Yes (Mac)</option>
                  <option value="pc">Yes (PC)</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="col-span-2 place-self-center ">
                <button className="button">Submit</button>
              </div>
            </fieldset>
          </form>
        </aside>
      </div>
    </div>
  );
};

export default SignupForm;
