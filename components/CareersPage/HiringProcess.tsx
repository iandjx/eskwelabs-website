import { CAREERS_HIRING_PROCESS } from '../../lib/queries/Careers';
import { useQuery } from '@apollo/client';
import SkeletonBox from '../../components/SkeletonBox';
import { HiringProcessStepSection } from './types';
import HiringProcessStep from './HiringProcessStep';

const HiringProcess = (): JSX.Element => {
  const { loading, error, data } = useQuery(CAREERS_HIRING_PROCESS);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="container mx-auto pb-6">
      <h3 className="mb-6 leading-none text-center pt-24">
        <SkeletonBox loading={loading} classNames="w-32 h-12">
          <span className="text-3xl text-pickled-bluewood font-medium">
            {data.career.ourHiringProcess}
          </span>
        </SkeletonBox>
      </h3>
      <div className="w-full p-4 md:w-1/2 mx-auto">
        {data.hiringProcessSteps.map((d: HiringProcessStepSection) => (
          <HiringProcessStep step={d} key={d.title} />
        ))}
      </div>
    </div>
  );
};

export default HiringProcess;
