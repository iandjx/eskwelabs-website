import { ABOUT_US_TEAM_MEMBERS } from '../../lib/queries/About';
import { useQuery } from '@apollo/client';
import SkeletonBox from '../../components/SkeletonBox';
import { TeamMember } from '../shared/types';
import TeamMemberCard from '../shared/TeamMemberCard';

const TeamMemberList = function (): JSX.Element {
  const { loading, error, data } = useQuery(ABOUT_US_TEAM_MEMBERS);

  if (error) {
    return <div className="error">{error}</div>;
  }
  return (
    <div className="container p-4 mx-auto">
      <h4 className="my-8 text-center">
        <SkeletonBox loading={loading} classNames="w-32 h-12">
          <span className="text-2xl xl:text-xl">{data.aboutUs.coreTeamTitle}</span>
        </SkeletonBox>
      </h4>
      <SkeletonBox loading={loading} classNames="w-32 h-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {data.teamMembers.map((d: TeamMember) => (
            <TeamMemberCard teamMember={d} key={d.name} hoverable />
          ))}
        </div>
      </SkeletonBox>
    </div>
  );
};

export default TeamMemberList;
