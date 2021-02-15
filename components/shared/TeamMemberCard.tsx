import Image from 'next/image';
import Link from 'next/link';
import imageUrl from '../../lib/helpers/imageUrl';
import { TeamMember } from './types';
import TwitterIcon from '../svgs/TwitterIcon';
import LinkedInIcon from '../svgs/LinkedInIcon';
import GithubIcon from '../svgs/GithubIcon';

interface ITeamMemberCard {
  teamMember: TeamMember;
  hoverable?: boolean;
  hideName?: boolean;
  showSocialLinks?: boolean;
}

const TeamMemberCard = (props: ITeamMemberCard): JSX.Element => {
  const { teamMember, hoverable, hideName, showSocialLinks } = props;

  const nameSection = hideName ? (
    ''
  ) : (
    <div className="flex flex-col flex-grow md:p-4 md:mb-2">
      <h4 className="md:mb-2 text-sm md:text-lg font-semibold tracking-normal md:leading-6">
        {teamMember.name}
      </h4>
      <p className="mb-2 text-xs md:text-base font-normal tracking-normal leading-0">
        {teamMember.position}
      </p>
    </div>
  );

  const linksSection = showSocialLinks ? (
    <div className="flex flex-col md:flex-row mx-auto justify-center mt-12 font-bold">
      {teamMember.linkedin && (
        <a
          href={teamMember.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-3 w-24 align-middle justify-center m-2 border rounded text-xs text-pickled-bluewood border-pickled-bluewood hover:bg-pickled-bluewood hover:text-white flex flex-row"
        >
          <LinkedInIcon className="fill-current mr-2 w-5 h-5" />
          <span className="mt-0.5">LinkedIn</span>
        </a>
      )}
      {teamMember.twitter && (
        <a
          href={teamMember.twitter}
          target="_blank"
          rel="noreferrer"
          className="p-3 w-24 align-middle justify-center m-2 border rounded text-xs text-twitter-blue border-twitter-blue hover:bg-twitter-blue hover:text-white flex flex-row"
        >
          <TwitterIcon className="fill-current mr-2 w-5 h-5" />{' '}
          <span className="mt-0.5">Twitter</span>
        </a>
      )}
      {teamMember.github && (
        <a
          href={teamMember.github}
          target="_blank"
          rel="noreferrer"
          className="p-3 w-24 align-middle justify-center m-2 border rounded text-xs text-black border-black hover:bg-black hover:text-white flex flex-row"
        >
          <GithubIcon className="fill-current mr-2 w-5 h-5" />{' '}
          <span className="mt-0.5">Github</span>
        </a>
      )}
    </div>
  ) : (
    ''
  );

  const card = (
    <div
      key={teamMember.name}
      className={`flex flex-col mx-3 md:p-4 text-center text-pickled-bluewood ${
        hoverable ? 'transform hover:scale-95 cursor-pointer' : ''
      }`}
    >
      <div>
        <div className="items-center">
          <Image
            src={imageUrl(teamMember.photo.url)}
            layout="responsive"
            width={239}
            height={239}
            className="rounded-full"
          />
        </div>
        {nameSection}
      </div>
      {linksSection}
    </div>
  );

  if (hoverable) {
    return <Link href={`/team/${teamMember.slug}`}>{card}</Link>;
  }

  return card;
};

export default TeamMemberCard;
