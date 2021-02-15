import { useState } from 'react';
import { FOR_COMPANIES_CONTACT_US } from '../../lib/queries/ForCompanies';
import { useQuery, useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import SkeletonBox from '../SkeletonBox';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import { CREATE_BUSINESS_CONTACT } from '../../lib/queries/ForCompanies';
import Spinner from '../shared/Spinner';
import Alert from '../shared/Alert';
import { BusinessContact } from './types';

const SignupForm = (): JSX.Element => {
  const { loading, error, data } = useQuery(FOR_COMPANIES_CONTACT_US);
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      company: '',
      jobTitle: '',
      numberOfLearners: '',
      companySize: '',
      needs: '',
    },
  });
  const [
    createBusinessContact,
    {
      loading: createBusinessContactLoading,
      data: createBusinessContactData,
      error: createBusinessContactError,
    },
  ] = useMutation(CREATE_BUSINESS_CONTACT, {
    context: { clientName: 'api' },
  });
  const [showSuccessAlert, setShowSuccessAlert] = useState(true);
  const [showErrorAlert, setShowErrorAlert] = useState(true);

  const onSubmit = async (businessContact: BusinessContact): Promise<void> => {
    const contact = { ...businessContact };
    contact.numberOfLearners = Number(contact.numberOfLearners);

    await createBusinessContact({
      variables: {
        contact,
      },
    });
    reset();
  };

  return (
    <div>
      <div className="container md:grid md:gap-32 mx-auto md:grid-cols-3 p-4 pb-16">
        <div className="md:col-span-1 pt-24">
          <h1 className="hero-heading-letter-spacing mb-6 leading-none">
            <SkeletonBox loading={loading} classNames="w-32 h-12">
              <span className="text-4xl text-white">{data && data.forCompany.contactUsTitle}</span>
            </SkeletonBox>
          </h1>
          <div className="about-hero text-white mb-12 text-sm">
            <SkeletonBox loading={loading} classNames="w-64 h-12">
              <ReactMarkdownWithHtml allowDangerousHtml>
                {data && data.forCompany.contactUsDescription}
              </ReactMarkdownWithHtml>
            </SkeletonBox>
          </div>
        </div>
        <aside className="md:pt-24 md:col-span-2 text-white">
          <div>
            {createBusinessContactLoading && <Spinner />}

            {createBusinessContactData && createBusinessContactData.createBusinessContact.success && (
              <Alert
                visible={showSuccessAlert}
                closeFn={() => setShowSuccessAlert(false)}
                title="Thank you"
                kind="SUCCESS"
              >
                <span>
                  <br />
                  Thank you for contacting us. We will be in contact with you shortly.
                </span>
              </Alert>
            )}

            {error ||
              (createBusinessContactError && (
                <Alert
                  visible={showErrorAlert}
                  closeFn={() => setShowErrorAlert(false)}
                  title="Error"
                  kind="ERROR"
                >
                  <span>
                    <br /> Please try your request again later
                    <br />
                    <small>Error code: {(error || createBusinessContactError)?.message}</small>
                  </span>
                </Alert>
              ))}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset
              disabled={createBusinessContactLoading}
              className="flex flex-col md:grid md:gap-4 md:grid-cols-2"
            >
              <div className="w-full">
                <input
                  name="firstName"
                  placeholder="First Name *"
                  ref={register({ required: 'First Name is required', maxLength: 80 })}
                  className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-gallery-off-white text-xs"
                />
                {errors.firstName && <p className="text-red mt-2">{errors.firstName.message}</p>}
              </div>
              <div className="w-full">
                <input
                  name="lastName"
                  placeholder="Last Name *"
                  ref={register({ required: 'Last Name is required', maxLength: 80 })}
                  className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-gallery-off-white text-xs"
                />
                {errors.lastName && <p className="text-red mt-2">{errors.lastName.message}</p>}
              </div>
              <div className="w-full">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number *"
                  ref={register({ required: 'Mobile Number is required', maxLength: 80 })}
                  className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-gallery-off-white text-xs"
                />
                {errors.mobile && <p className="text-red mt-2">{errors.mobile.message}</p>}
              </div>
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email *"
                  ref={register({ required: 'Email is invalid', pattern: /^\S+@\S+$/i })}
                  className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-gallery-off-white text-xs"
                />
                {errors.email && <p className="text-red mt-2">{errors.email.message}</p>}
              </div>
              <div className="w-full">
                <input
                  name="company"
                  placeholder="Company *"
                  ref={register({ required: true, maxLength: 80 })}
                  className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-gallery-off-white text-xs"
                />
                {errors.company && <p className="text-red mt-2">{errors.company.message}</p>}
              </div>
              <div className="w-full">
                <input
                  name="companySize"
                  placeholder="Company size *"
                  ref={register({ required: 'Company Size is required', maxLength: 80 })}
                  className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-gallery-off-white text-xs"
                />
                {errors.companySize && (
                  <p className="text-red mt-2">{errors.companySize.message}</p>
                )}
              </div>
              <input
                name="jobTitle"
                placeholder="Job title"
                ref={register}
                className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-gallery-off-white text-xs"
              />
              <input
                name="numberOfLearners"
                placeholder="Number of employees who need training or upskilling? *"
                type="number"
                ref={register({ required: true })}
                className="w-full p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-gallery-off-white text-xs"
              />

              <div className="m-2 mt-4 md:m-0 md:col-span-2">
                <p className="text-sm mb-4">Please briefly describe your needs:</p>
                <textarea
                  id="needs"
                  name="needs"
                  ref={register}
                  className="w-full h-24 p-2 m-2 md:m-0 border border-white text-white rounded bg-transparent placeholder-gallery-off-white text-xs"
                />
              </div>

              <div className="col-start-2 mt-6 place-self-center md:place-self-end">
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
