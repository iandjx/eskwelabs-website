import Image from 'next/image';
import imageUrl from '../../lib/helpers/imageUrl';
import { WhatWeDoBox } from './types';

interface IWhatWeDoCard {
  box: WhatWeDoBox;
}

const WhatWeDoCard = (props: IWhatWeDoCard): JSX.Element => {
  const { box } = props;

  return (
    <article
      key={box.title}
      className="what-we-do-box flex flex-col mx-3 box-content text-left text-pickled-bluewood border border-mischka hover:border-pickled-bluewood hover:bg-pickled-bluewood hover:text-white rounded-lg w-96 bg-white-lilac"
    >
      <div className="what-we-do-image relative w-96 h-72 overflow-x-hidden">
        <Image
          src={imageUrl(box.picture.url)}
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
          className="rounded-lg"
          alt={box.title}
        />
      </div>
      <div className="flex flex-col flex-grow p-4">
        <p className="mb-2 text-base font-normal tracking-normal leading-6">{box.title}</p>
      </div>
    </article>
  );
};

export default WhatWeDoCard;
