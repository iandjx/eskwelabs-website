import { RefObject } from 'react';
import { useQuery } from '@apollo/client';
import { NOT_SURE_WHERE_TO_START } from '../../lib/queries/Home';

interface INotSureWhereToStartProps {
  individualsRef: RefObject<HTMLElement>;
}

const NotSureWhereToStart = (props: INotSureWhereToStartProps): JSX.Element => {
  const { loading, error, data } = useQuery(NOT_SURE_WHERE_TO_START);

  const { individualsRef } = props;

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="py-16 p-2 mx-auto w-full md:w-max">
      <div className="text-center self-center flex flex-col md:flex-row">
        <h2 className="text-pickled-bluewood text-4xl">{data.home.notSureWhereToStartTitle}</h2>
        <button
          className="hover:bg-tradewind-darker mx-6 my-6 md:my-0 md:ml-12 px-8 py-3 text-white text-xs tracking-wider bg-tradewind rounded-lg uppercase"
          onClick={() =>
            individualsRef.current && individualsRef.current.scrollIntoView({ behavior: 'smooth' })
          }
        >
          {data.home.notSureWhereToStartButtonText}
        </button>
      </div>
    </div>
  );
};

export default NotSureWhereToStart;
