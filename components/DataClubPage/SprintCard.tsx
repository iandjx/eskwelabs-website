import Image from 'next/image';
import ArrowRight from '../svgs/ArrowRight';
import imageUrl from '../../lib/helpers/imageUrl';
import { Sprint, SprintTag } from '../shared/types';
import { useRouter } from 'next/router';

interface ISprintCard {
  sprint: Sprint;
}

const SprintCard = (props: ISprintCard): JSX.Element => {
  const { sprint } = props;
  const router = useRouter();

  const handleClick = (slug: string, title: string): void => {
    if (window && window.fbq) {
      window.fbq('track', `${title} read more clicked`);
    }
    if (window && window.gtag) {
      window.gtag('event', `${title} read more clicked`, { method: 'web' });
    }
    router.push(`/sprints/${slug}`);
  };

  return (
    <article
      key={sprint.slug}
      className="blog-post-card flex flex-col m-3 text-left border border-mischka hover:border-pickled-bluewood rounded-lg"
      style={{ width: '292px' }}
    >
      <Image
        src={sprint.image ? imageUrl(sprint.image.url) : 'https://picsum.photos/290/182'}
        layout="fixed"
        width={290}
        height={182}
        className="rounded-t-lg"
      />
      <div className="flex flex-col flex-grow p-4">
        <h4 className="mb-2 text-pickled-bluewood text-lg font-semibold tracking-normal leading-6">
          {sprint.title}
        </h4>
        <p className="flex-grow text-tundora text-xs tracking-wide leading-6">{sprint.blurb}</p>
        <div className="flex flex-wrap my-4">
          {sprint.data_club_tags.map((d: SprintTag) => {
            return (
              <div
                className="text-wild-blue-yonder-darker bg-wild-blue-yonder-200 border-wild-blue-yonder-darker flex items-center justify-center m-1 px-2 py-1 font-medium border rounded-full"
                key={d.name}
              >
                <span className="flex-initial max-w-full text-xs font-normal leading-none">
                  {d.name}
                </span>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => handleClick(sprint.slug, sprint.title)}
          className="learn-more-button flex-column hover:text-wild-blue-yonder-darker flex p-0 text-wild-blue-yonder text-xs tracking-wider focus:outline-none uppercase"
        >
          Read more <ArrowRight className="ml-3 w-4 h-4 fill-current" />
        </button>
      </div>
    </article>
  );
};

export default SprintCard;
