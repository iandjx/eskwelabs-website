import { FOR_COMPANIES_WHY_PARTNER } from '../../lib/queries/ForCompanies';
import { useQuery } from '@apollo/client';
import SkeletonBox from '../SkeletonBox';
import { WhyPartnerSection } from './types';
import WhyPartnerCard from './WhyPartnerCard';

const WhyPartner = (): JSX.Element => {
  const { loading, error, data } = useQuery(FOR_COMPANIES_WHY_PARTNER);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="pb-16">
      <div className="container mx-auto p-2 text-center">
        <h2 className="mb-9 pt-16 text-tradewind text-5xl">
          <SkeletonBox loading={loading} classNames="w-24 h-6">
            <span>{data && data.forCompany.whyPartnerTitle}</span>
          </SkeletonBox>
        </h2>
      </div>
      <div className="container mx-auto flex flex-col p-2 text-left">
        <SkeletonBox loading={loading} classNames="w-96 h-96">
          <div className="mx-4 md:grid md:grid-cols-3">
            {data &&
              data.partnerResources.map((d: WhyPartnerSection) => (
                <WhyPartnerCard key={d.title} partnerReason={d} />
              ))}
          </div>
        </SkeletonBox>
      </div>
    </div>
  );
};

export default WhyPartner;
