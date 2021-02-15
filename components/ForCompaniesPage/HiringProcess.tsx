import { FOR_COMPANIES_OUR_APPROACH } from '../../lib/queries/ForCompanies';
import { useQuery } from '@apollo/client';
import SkeletonBox from '../SkeletonBox';
import { HiringProcessStepSection } from './types';
import HiringProcessStep from './HiringProcessStep';

const HiringProcess = (): JSX.Element => {
  const { loading, error, data } = useQuery(FOR_COMPANIES_OUR_APPROACH);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="container mx-auto pb-6">
      <h3 className="mb-6 leading-none text-center pt-24">
        <SkeletonBox loading={loading} classNames="w-32 h-12">
          <span className="text-3xl text-pickled-bluewood font-medium">
            {data && data.forCompany.ourApproachTitle}
          </span>
        </SkeletonBox>
      </h3>
      <div className="w-full p-4 md:w-1/2 mx-auto">
        {data &&
          data.companiesOurApproachSteps.map((d: HiringProcessStepSection) => (
            <HiringProcessStep step={d} key={d.title} />
          ))}
      </div>
    </div>
  );
};

export default HiringProcess;
