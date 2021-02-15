import Image from 'next/image';
import imageUrl from '../../lib/helpers/imageUrl';
import { CourseSpotlights } from '../shared/types';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import { useState } from 'react';

interface ICourseSpotlightsProps {
  spotlights: [CourseSpotlights];
}

const Spotlights = (props: ICourseSpotlightsProps): JSX.Element => {
  const [slide, setSlide] = useState(0);

  const { spotlights } = props;

  const buttonTitles = spotlights.map((r) => r.buttonText);
  const content = spotlights[slide];

  if (!spotlights.length) {
    return <div />;
  }

  return (
    <div className="mx-auto container">
      <nav className="flex flex-row py-6 md:hidden">
        {buttonTitles.map((b, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={`${
              idx == slide ? 'bg-hit-pink hover:bg-hit-pink-darker' : ''
            } px-1 py-1 mx-2 text-gallery-white text-2xs font-semibold  hover:border-hit-pink-darker border-transparent border rounded-lg uppercase duration-200 ease-in-out`}
          >
            {b}
          </button>
        ))}
      </nav>
      <div className="md:grid md:grid-cols-5">
        <aside className="p-6 md:p-0 md:col-span-2">
          <Image src={imageUrl(content.image.url)} layout="responsive" width={512} height={665} />
        </aside>
        <article className="md:col-span-3 p-6">
          <nav className="md:flex md:flex-row hidden">
            {buttonTitles.map((b, idx) => (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={`${
                  idx == slide ? 'bg-hit-pink hover:bg-hit-pink-darker' : ''
                } px-2 py-2 mx-2 text-gallery-white text-xs font-semibold  hover:border-hit-pink-darker border-transparent border rounded-lg uppercase duration-200 ease-in-out`}
              >
                {b}
              </button>
            ))}
          </nav>
          <div className="p-2">
            <h4 className="md:mt-12 text-2xl text-tradewind uppercase">{content.title}</h4>
            <span className="uppercase my-4 text-sm text-gallery-white">{content.subtitle}</span>
            <div className="text-white text-sm tracking-wide leading-7-p my-6">
              <ReactMarkdownWithHtml allowDangerousHtml>
                {content.description}
              </ReactMarkdownWithHtml>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Spotlights;
