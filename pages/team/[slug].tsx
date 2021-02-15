import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Layout from '../../components/Layout';
import TeamMemberList from '../../components/shared/TeamMemberList';
import TeamMemberBio from '../../components/TeamMemberPage/TeamMemberBio';
import { TEAM_MEMBER_SLUGS, FIND_TEAM_MEMBER } from '../../lib/queries/TeamMembers';
import imageUrl from '../../lib/helpers/imageUrl';
import { TeamMember } from '../../components/shared/types';
import { initializeApollo } from '../../lib/apolloClient';

const TeamMemberPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { loading, error, data } = useQuery(FIND_TEAM_MEMBER, {
    variables: { slug },
  });

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const teamMember: TeamMember = data.teamMember[0];

  return (
    <Layout title={`Eskwelabs - ${teamMember.name}`}>
      <main>
        <Head>
          <meta name="title" content="Eskwelabs - Data education for the future of work" />
          <meta name="description" content={teamMember.bio} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://www.eskwelabs.com/team/${slug}`} />
          <meta property="og:title" content={`Eskwelabs - ${teamMember.name}`} />
          <meta property="og:description" content={teamMember.bio} />
          <meta property="og:image" content={imageUrl(teamMember.photo.url)} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={`https://www.eskwelabs.com/team/${slug}`} />
          <meta property="twitter:title" content={`Eskwelabs - ${teamMember.name}`} />
          <meta property="twitter:description" content={teamMember.bio} />
          <meta property="twitter:image" content={imageUrl(teamMember.photo.url)} />
        </Head>
        <div>
          <section>
            <TeamMemberBio teamMember={teamMember} />
          </section>
          <section className="bg-white-lilac">
            <TeamMemberList />
          </section>
        </div>
      </main>
    </Layout>
  );
};

interface ITeamMemberSlug {
  id: string;
  slug: string;
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async function () {
  const apolloClient = initializeApollo();

  const res = await apolloClient.query({
    query: TEAM_MEMBER_SLUGS,
  });

  const paths = res.data.teamMembers.map((d: ITeamMemberSlug) => `/team/${d.slug}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: FIND_TEAM_MEMBER,
    variables: {
      slug: context.params?.slug,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default TeamMemberPage;
