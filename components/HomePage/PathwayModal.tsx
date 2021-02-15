import { useEffect } from 'react';
import Image from 'next/image';
import { Pathway, PathCourseItem } from './types';
import imageUrl from '../../lib/helpers/imageUrl';
import Close from '../svgs/Close';
import PathCourseItemBox from './PathCourseItemBox';

interface IPathwayModal {
  pathway: Pathway;
  visible: boolean;
  closeFn: () => void;
}

const PathwayModal = (props: IPathwayModal): JSX.Element => {
  const { pathway, visible, closeFn } = props;

  useEffect(() => {
    const close = (e: { keyCode: number }): void => {
      if (e.keyCode === 27 && visible) {
        closeFn();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [closeFn, visible]);

  if (!visible) {
    return <div />;
  }

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center pb-20 pt-4 px-4 min-h-screen text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="bg-black absolute inset-0 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div
          className="pathway-modal relative inline-block align-bottom text-left bg-pickled-bluewood rounded-lg shadow-xl overflow-hidden transform transition-all sm:align-middle sm:my-8 sm:w-full sm:max-w-3xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="pathway-modal-image relative h-52 w-full md:h-72">
            <Image
              src={imageUrl(pathway.image.url)}
              layout="fill"
              objectFit="cover"
              objectPosition="top center"
              alt={pathway.title}
            />
          </div>
          <div className="absolute right-0 top-0 px-4 py-3">
            <button
              type="button"
              className="text-hit-pink hover:text-terracotta-darker"
              onClick={closeFn}
            >
              <Close className="w-6 h-6 fill-current" />
            </button>
          </div>
          <div className="relative p-6 md:-top-24">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h4 className="mb-4 text-pickled-bluewood text-2xl">{pathway.title}</h4>
                <p className="text-pickled-bluewood text-xs tracking-wider leading-6">
                  {pathway.description}
                </p>
              </div>
            </div>
          </div>
          <div className="container relative grid gap-4 md:-top-12 md:grid-cols-2 md:px-6">
            {pathway.path_course_items.map((pathCourseItem: PathCourseItem) => {
              return (
                <PathCourseItemBox key={pathCourseItem.title} pathCourseItem={pathCourseItem} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathwayModal;
