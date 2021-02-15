import { FOR_COMPANIES_PARTNERS } from '../../lib/queries/ForCompanies';
import { useQuery } from '@apollo/client';
import SkeletonBox from '../SkeletonBox';
import imageUrl from '../../lib/helpers/imageUrl';

const JoinTheNetwork = (): JSX.Element => {
  const { loading, error, data } = useQuery(FOR_COMPANIES_PARTNERS);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="container mx-auto">
      <h3 className="mb-6 leading-none  text-center pt-24">
        <SkeletonBox loading={loading} classNames="w-32 h-12">
          <span className="text-xl text-pickled-bluewood font-medium">
            {data && data.forCompany.partnerLogosTitle}
          </span>
        </SkeletonBox>
      </h3>

      <div className="p-4 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  w-full justify-items-center items-center gap-4">
        {data &&
          data.forCompany.partnerLogos.map((logo: { url: string }, index: number) => {
            return (
              <img
                src={imageUrl(logo.url)}
                key={index}
                className="w-10/12 mx-auto"
                alt={logo.url}
              />
            );
          })}
      </div>
    </div>
  );
};

export default JoinTheNetwork;
