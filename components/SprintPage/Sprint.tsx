import ReactMarkdownWithHtml from 'react-markdown/with-html';
import { Sprint } from '../shared/types';
import SprintBadge from './SprintBadge';
import ArrowLeft from '../svgs/ArrowLeft';
import Link from 'next/link';

interface ISprintBio {
  sprint: Sprint;
}

const SprintPage = (props: ISprintBio): JSX.Element => {
  const { sprint } = props;

  return (
    <div key={sprint.name} className="pt-24">
      <Link href="/data-club">
        <p className="container mx-auto flex flex-row mb-4 hover:text-tundora cursor-pointer">
          <ArrowLeft className="ml-3 w-4 h-4 fill-current mt-1" />{' '}
          <span className="font-semibold ml-3">Back</span>
        </p>
      </Link>
      <div className="grid md:grid-cols-4 container mx-auto mb-32">
        <div className="flex flex-col flex-grow p-4 md:col-span-3">
          <h1 className="text-5xl mb-6 font-medium leading-12 tracking-wide text-pickled-bluewood">
            {sprint.title}
          </h1>
          <div className="team-member-bio mb-2 text-tundora text-base font-normal tracking-wider leading-8">
            <ReactMarkdownWithHtml allowDangerousHtml>
              {sprint.fullDescription}
            </ReactMarkdownWithHtml>
          </div>
        </div>
        <div className="md:col-span-1">
          <SprintBadge sprint={sprint} />
        </div>
      </div>
    </div>
  );
};

export default SprintPage;
