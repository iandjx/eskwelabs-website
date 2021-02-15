import Image from 'next/image';
import imageUrl from '../../lib/helpers/imageUrl';
import { CourseResource } from '../shared/types';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

interface CourseIResourceCard {
  resource: CourseResource;
}

const CourseResourceCard = (props: CourseIResourceCard): JSX.Element => {
  const { resource } = props;

  return (
    <article
      key={resource.title}
      className="resource-card flex flex-col m-3 text-left border border-mischka hover:border-pickled-bluewood rounded-lg bg-white"
      style={{ maxWidth: '350px' }}
    >
      <Image
        src={imageUrl(resource.image.url)}
        layout="responsive"
        width={350}
        height={220}
        className="rounded-t-lg"
      />
      <div className="flex flex-col flex-grow p-4">
        <h4 className="mb-2 text-pickled-bluewood text-lg font-semibold tracking-normal uppercase leading-6">
          {resource.title}
        </h4>
        <div className="text-tundora text-xs tracking-wide leading-7-p my-6 flex-grow">
          <ReactMarkdownWithHtml allowDangerousHtml>{resource.description}</ReactMarkdownWithHtml>
        </div>
        <div className="flex flex-col">
          <a
            href={resource.buttonURL}
            target="_blank"
            rel="noreferrer"
            className="learn-more-button flex-column border-tradewind border rounded-lg py-3 hover:bg-tradewind hover:text-white text-center text-tradewind text-xs tracking-wider focus:outline-none uppercase"
          >
            {resource.buttonText}
          </a>
        </div>
      </div>
    </article>
  );
};

export default CourseResourceCard;
