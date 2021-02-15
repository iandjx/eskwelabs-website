import { useQuery } from '@apollo/client';
import { CHOOSE_YOUR_PATH } from '../../lib/queries/Home';
import PathwayBox from './PathwayBox';
import { Pathway } from './types';
import ArrowRight from '../svgs/ArrowRight';

const ChooseYourPath = (): JSX.Element => {
  const { loading, error, data } = useQuery(CHOOSE_YOUR_PATH);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <div className="container mx-auto p-2 text-center">
        <h2 className="mb-9 pt-16 text-pickled-bluewood text-5xl">
          {data.home.chooseYourPathTitle}
        </h2>
        <p className="mx-auto p-2 text-tundora text-base text-center">
          <span dangerouslySetInnerHTML={{ __html: data.home.chooseYourPathSubtitle }} />
        </p>
      </div>
      <div className="text-silver relative md:hidden">
        <ArrowRight className="fill-current ml-3 w-4 h-4 animate-bounce-left-right absolute top-0 right-0" />
      </div>
      <div className="flex mt-6 cursor-pointer overflow-x-scroll md:overflow-auto">
        {data.chooseYourPaths.map((pathway: Pathway) => {
          return <PathwayBox key={pathway.title} pathway={pathway} />;
        })}
      </div>
    </div>
  );
};

export default ChooseYourPath;
