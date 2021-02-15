import { Pathway } from './types';
import imageUrl from '../../lib/helpers/imageUrl';
import Image from 'next/image';
import ArrowRight from '../svgs/ArrowRight';
import PathwayModal from './PathwayModal';
import { useState } from 'react';

interface IPathCourseItemBox {
  pathway: Pathway;
}

const PathwayBox = ({ pathway }: IPathCourseItemBox): JSX.Element => {
  const [modalOpen, toggleModal] = useState(false);

  return (
    <article
      className="pathway-box border-mercury relative m-2 w-72 hover:text-white hover:bg-pickled-bluewood bg-white-lilac border box-content md:m-0 md:w-1/3 md:border-none"
      key={pathway.title}
    >
      <div className="pathway-image relative w-72 h-52 md:w-full md:h-72">
        <Image
          src={imageUrl(pathway.image.url)}
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
          alt={pathway.title}
        />
      </div>
      <div className="px-4">
        <h4 className="mb-4 text-pickled-bluewood text-2xl">{pathway.title}</h4>
        <p className="text-pickled-bluewood text-xs tracking-wider leading-6">
          {pathway.description}
        </p>
        <button
          className="learn-more-button flex-column flex my-6 p-0 text-wild-blue-yonder text-xs tracking-wider focus:outline-none uppercase"
          onClick={() => toggleModal(true)}
        >
          Learn more <ArrowRight className="ml-3 w-4 h-4 fill-current" />
        </button>
        <PathwayModal pathway={pathway} visible={modalOpen} closeFn={() => toggleModal(false)} />
      </div>
    </article>
  );
};

export default PathwayBox;
