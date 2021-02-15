import { IImage } from '../shared/types';
import ReactPlayer from 'react-player/lazy';
import Image from 'next/image';
import imageUrl from '../../lib/helpers/imageUrl';

interface IApplicationProcessSection {
  title: string;
  videoURL: string;
  image: IImage;
}

const ApplicationProcess = (props: IApplicationProcessSection): JSX.Element => {
  const { title, videoURL, image } = props;

  if (!title) {
    return <div />;
  }

  const ApplicationProcessMedia = (): JSX.Element => {
    if (videoURL) {
      return (
        <div className="container">
          <div className="player-wrapper">
            <ReactPlayer
              controls
              light
              config={{ youtube: { embedOptions: { modestbranding: 1 } } }}
              url={videoURL}
              className="react-player"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      );
    }

    return (
      <div className="w-screen">
        <div className="container mx-auto max-w-2/3">
          <Image src={imageUrl(image.url)} layout="responsive" width="768" height="548" />
        </div>
      </div>
    );
  };

  return (
    <div>
      <h3 className="text-center text-3xl font-medium tracking-wide text-pickled-bluewood p-12">
        {title}
      </h3>
      <div className="w-max mx-auto my-2 mb-16 md:my-16">
        <ApplicationProcessMedia />
      </div>
    </div>
  );
};

export default ApplicationProcess;
