import ReactMarkdownWithHtml from 'react-markdown/with-html';
import { TeamMember } from '../shared/types';
import TeamMemberCard from '../shared/TeamMemberCard';
import ArrowLeft from '../svgs/ArrowLeft';
import Link from 'next/link';

interface ITeamMemberBio {
  teamMember: TeamMember;
}

const TeamMemberBio = (props: ITeamMemberBio): JSX.Element => {
  const { teamMember } = props;

  return (
    <div key={teamMember.name} className="pt-24">
      <Link href="/about">
        <p className="container mx-auto flex flex-row mb-4 hover:text-tundora cursor-pointer">
          <ArrowLeft className="ml-3 w-4 h-4 fill-current mt-1" />{' '}
          <span className="font-semibold ml-3">Back</span>
        </p>
      </Link>
      <div className="grid md:grid-cols-4 container mx-auto mb-32">
        <div className="flex flex-col flex-grow p-4 md:col-span-3">
          <h1 className="text-5xl mb-6 font-medium leading-12 tracking-wide text-pickled-bluewood">
            {teamMember.name}
          </h1>
          <h3 className="text-xl mb-8 font-medium leading-12 tracking-wide text-pickled-bluewood">
            {teamMember.position}
          </h3>
          <div className="team-member-bio mb-2 text-tundora text-base font-normal tracking-wider leading-8">
            <ReactMarkdownWithHtml allowDangerousHtml>{teamMember.bio}</ReactMarkdownWithHtml>
          </div>
        </div>
        <div className="md:col-span-1" style={{ maxWidth: '100%' }}>
          <TeamMemberCard teamMember={teamMember} hideName showSocialLinks />
        </div>
      </div>
    </div>
  );
};

export default TeamMemberBio;
