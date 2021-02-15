import { PathCourseItem } from './types';
import imageUrl from '../../lib/helpers/imageUrl';
import Image from 'next/image';

interface IPathCourseItemBox {
  pathCourseItem: PathCourseItem;
}

const PathCourseItemBox = ({ pathCourseItem }: IPathCourseItemBox): JSX.Element => {
  return (
    <article className="relative flex flex-col" key={pathCourseItem.title}>
      <div className="relative w-full h-48 md:w-full">
        <Image
          src={imageUrl(pathCourseItem.image.url)}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt={pathCourseItem.title}
        />
      </div>
      <div className="px-4 flex flex-col flex-grow">
        <h5 className="mb-2 mt-4 text-hit-pink text-lg font-normal tracking-tight">
          {pathCourseItem.title}
        </h5>
        <div className="flex-grow">
          <p className="text-white text-xs tracking-wider leading-6">
            {pathCourseItem.description}
          </p>
        </div>
        <div className="flex flex-col">
          <a
            href={pathCourseItem.buttonURL}
            className="mt-6 p-3 px-9 text-pixie-green hover:text-white text-xs tracking-wider hover:bg-pixie-green border border-pixie-green rounded-lg uppercase text-center"
          >
            {pathCourseItem.buttonText}
          </a>
        </div>
      </div>
    </article>
  );
};

export default PathCourseItemBox;
