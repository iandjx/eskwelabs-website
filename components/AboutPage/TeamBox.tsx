import { ABOUT_US_TEAM } from '../../lib/queries/About';
import { useQuery } from '@apollo/client';
import SkeletonBox from '../../components/SkeletonBox';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import TeamMemberList from '../shared/TeamMemberList';
import Link from 'next/link';

const TeamBox = (): JSX.Element => {
  const { loading, error, data } = useQuery(ABOUT_US_TEAM);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="text-pickled-bluewood">
      <div className="container grid gap-4 mx-auto md:grid-cols-2 p-4">
        <div className="self-center">
          <h3 className="hero-heading-letter-spacing mb-4 font-medium leading-none">
            <SkeletonBox loading={loading} classNames="w-24 h-6">
              <small className="text-2xl">{data.aboutUs.aboutTheTeamTitle}</small>
            </SkeletonBox>
          </h3>
          <SkeletonBox loading={loading} classNames="w-32 h-12">
            <div className="about-the-team-quote">
              <ReactMarkdownWithHtml>{data.aboutUs.aboutTheTeamQuote}</ReactMarkdownWithHtml>
            </div>
          </SkeletonBox>
        </div>
        <aside className="about-hero md:my-32 md:mt-48">
          <div className="mb-12 text-sm">
            <SkeletonBox loading={loading} classNames="w-64 h-12">
              <ReactMarkdownWithHtml allowDangerousHtml>
                {data.aboutUs.aboutTheTeamDescription}
              </ReactMarkdownWithHtml>
            </SkeletonBox>
          </div>
          <SkeletonBox loading={loading} classNames="w-64 h-12">
            <div className="max-w-max mx-auto">
              <Link href="/careers">
                <button className="bg-deluge hover:bg-deluge-darker text-white rounded-lg py-2 px-24 xl:px-48 text-xs">
                  {data.aboutUs.aboutTheTeamButtonText}
                </button>
              </Link>
            </div>
          </SkeletonBox>
        </aside>
      </div>
      <TeamMemberList />
    </div>
  );
};

export default TeamBox;
