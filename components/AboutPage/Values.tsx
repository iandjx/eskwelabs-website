import { ABOUT_US_VALUES } from '../../lib/queries/About';
import { useQuery } from '@apollo/client';
import SkeletonBox from '../../components/SkeletonBox';
import { ValuesSection } from './types';
import ValuesCard from './ValuesCard';

const Values = (): JSX.Element => {
  const { loading, error, data } = useQuery(ABOUT_US_VALUES);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="mb-8">
      <div className="container mx-auto p-2 text-center">
        <h2 className="mb-9 pt-16 text-pickled-bluewood text-5xl">
          <SkeletonBox loading={loading} classNames="w-24 h-6">
            <span>{data.aboutUs.valuesTitle}</span>
          </SkeletonBox>
        </h2>
      </div>
      <div className="container mx-auto flex flex-row p-2 text-left">
        <SkeletonBox loading={loading} classNames="w-96 h-96">
          <div className="mx-4 md:mx-48">
            {data.values.map((d: ValuesSection) => (
              <ValuesCard key={d.title} valuesSection={d} />
            ))}
          </div>
        </SkeletonBox>
      </div>
    </div>
  );
};

export default Values;
