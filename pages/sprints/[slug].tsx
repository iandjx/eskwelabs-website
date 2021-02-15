import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Layout from '../../components/Layout';
import Sprints from '../../components/DataClubPage/Sprints';
import SprintComponent from '../../components/SprintPage/Sprint';
import { DATA_CLUB_SPRINT_SLUGS, FIND_DATA_CLUB_SPRINT } from '../../lib/queries/DataClub';
import imageUrl from '../../lib/helpers/imageUrl';
import { Sprint } from '../../components/shared/types';
import { initializeApollo } from '../../lib/apolloClient';

const TeamMemberPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { loading, error, data } = useQuery(FIND_DATA_CLUB_SPRINT, {
    variables: { slug },
  });

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const sprint: Sprint = data.sprint[0];

  return (
    <Layout title={`${sprint.name} - Eskwelabs`}>
      <main>
        <Head>
          <meta name="title" content={`${sprint.name} - Eskwelabs`} />
          <meta name="description" content={sprint.blurb} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://www.eskwelabs.com/sprints/${slug}`} />
          <meta property="og:title" content={`${sprint.name} - Eskwelabs`} />
          <meta property="og:description" content={sprint.blurb} />
          <meta property="og:image" content={imageUrl(sprint.image.url)} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={`https://www.eskwelabs.com/sprints/${slug}`} />
          <meta property="twitter:title" content={`${sprint.name} - Eskwelabs`} />
          <meta property="twitter:description" content={sprint.blurb} />
          <meta property="twitter:image" content={imageUrl(sprint.image.url)} />
        </Head>
        <div>
          <section>
            <SprintComponent sprint={sprint} />
          </section>
          <section className="bg-white-lilac">
            <Sprints />
          </section>
        </div>
      </main>
    </Layout>
  );
};

interface ISprintSlug {
  id: string;
  slug: string;
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async function () {
  const apolloClient = initializeApollo();

  const res = await apolloClient.query({
    query: DATA_CLUB_SPRINT_SLUGS,
  });

  const paths = res.data.dataClubSprints.map((d: ISprintSlug) => `/sprints/${d.slug}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: FIND_DATA_CLUB_SPRINT,
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
