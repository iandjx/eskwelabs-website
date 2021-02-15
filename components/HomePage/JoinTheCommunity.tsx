import { useQuery } from '@apollo/client';
import { JOIN_THE_COMMUNITY } from '../../lib/queries/Home';
import TestimonialCard from './TestimonialCard';
import ArrowRight from '../svgs/ArrowRight';
import { Testimonial } from './types';

const JoinTheCommunity = (): JSX.Element => {
  const { loading, error, data } = useQuery(JOIN_THE_COMMUNITY);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="py-16">
      <div className="container mx-auto p-2 text-center">
        <h2 className="mb-9 text-pickled-bluewood text-5xl">{data.home.joinTheCommunityTitle}</h2>
      </div>
      <div className="text-silver relative md:hidden">
        <ArrowRight className="fill-current ml-3 w-4 h-4 animate-bounce-left-right absolute top-0 right-0" />
      </div>
      <div className="community-testimonial-boxes container flex items-center mx-auto p-2 text-left overflow-x-scroll md:overflow-x-auto">
        {data.joinTheCommunityTestimonials.map((t: Testimonial) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
    </div>
  );
};

export default JoinTheCommunity;
