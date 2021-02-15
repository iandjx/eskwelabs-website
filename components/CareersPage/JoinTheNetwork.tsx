import { CAREERS_JOIN_THE_NETWORK } from '../../lib/queries/Careers';
import { useQuery } from '@apollo/client';
import SkeletonBox from '../../components/SkeletonBox';
import imageUrl from '../../lib/helpers/imageUrl';

// TODO: networkLogos should be sliced into individual images

const JoinTheNetwork = (): JSX.Element => {
  const { loading, error, data } = useQuery(CAREERS_JOIN_THE_NETWORK);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="container mx-auto">
      <h3 className="mb-6 leading-none  text-center pt-24">
        <SkeletonBox loading={loading} classNames="w-32 h-12">
          <span className="text-xl text-pickled-bluewood font-medium">
            {data.career.joinNetworkTitle}
          </span>
        </SkeletonBox>
      </h3>
      <div className=" gap-4 p-4 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  w-full justify-items-center items-center">
        {data.career.networkLogos.map((logo: { url: string }, index: number) => {
          return (
            <img src={imageUrl(logo.url)} key={index} className="w-10/12 mx-auto" alt={logo.url} />
          );
        })}
      </div>
    </div>
  );
};

export default JoinTheNetwork;
