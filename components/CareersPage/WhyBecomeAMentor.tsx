import { CAREERS_WHY_MENTOR } from '../../lib/queries/Careers';
import { useQuery } from '@apollo/client';
import SkeletonBox from '../../components/SkeletonBox';
import { WhyMentorSection } from './types';
import WhyMentorCard from './WhyMentorCard';

const WhyBecomeAMentor = (): JSX.Element => {
  const { loading, error, data } = useQuery(CAREERS_WHY_MENTOR);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="pb-16">
      <div className="container mx-auto p-2 text-center pb-9">
        <h2 className="mb-9 pt-16 text-tradewind text-4xl">
          <SkeletonBox loading={loading} classNames="w-24 h-6">
            <span>{data.career.whyMentorTitle}</span>
          </SkeletonBox>
        </h2>
      </div>
      <div className="container md:px-12 mx-auto flex flex-col p-2 text-left">
        <SkeletonBox loading={loading} classNames="w-96 h-96">
          <div className="mx-4 md:grid md:grid-cols-3">
            {data.whyMentorResources.map((d: WhyMentorSection) => (
              <WhyMentorCard key={d.title} mentorReason={d} />
            ))}
          </div>
        </SkeletonBox>
      </div>
    </div>
  );
};

export default WhyBecomeAMentor;
