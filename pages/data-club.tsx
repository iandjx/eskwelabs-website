import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout';
import Hero from '../components/DataClubPage/Hero';
import Sprints from '../components/DataClubPage/Sprints';
import Perks from '../components/DataClubPage/Perks';
import { DATA_CLUB_SPRINTS, DATA_CLUB_FAQS } from '../lib/queries/DataClub';
import { initializeApollo } from '../lib/apolloClient';
import { useQuery } from '@apollo/client';
import FAQList from '../components/shared/FAQList';
// import styles from '../styles/Home.module.css';

const DataClub: NextPage = (): JSX.Element => {
  const { loading, error, data } = useQuery(DATA_CLUB_FAQS);

  const FAQSection = (): JSX.Element => {
    if (error) {
      return <div className="error">{error}</div>;
    }

    if (loading) {
      return <div className="loading">Loading...</div>;
    }

    return (
      <section className="bg-white">
        <FAQList title="FAQs" faqs={data.faqs} />
      </section>
    );
  };

  return (
    <Layout title="Eskwelabs - Data education for the future of work" transparentNav>
      <main>
        <Head>
          <meta name="title" content="Eskwelabs - Data education for the future of work" />
          <meta
            name="description"
            content="Eskwelabs is Southeast Asia’s data upskilling school. We bring together the best of online &amp; community-based learning to help teams and individuals access opportunities in the future of work."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.eskwelabs.com/data-club" />
          <meta property="og:title" content="Eskwelabs - Data education for the future of work" />
          <meta
            property="og:description"
            content="Eskwelabs is Southeast Asia’s data upskilling school. We bring together the best of online &amp; community-based learning to help teams and individuals access opportunities in the future of work."
          />
          <meta
            property="og:image"
            content="https://assets.eskwelabs.com/data-club-thumbnail.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.eskwelabs.com/data-club" />
          <meta
            property="twitter:title"
            content="Eskwelabs - Data education for the future of work"
          />
          <meta
            property="twitter:description"
            content="Eskwelabs is Southeast Asia’s data upskilling school. We bring together the best of online &amp; community-based learning to help teams and individuals access opportunities in the future of work."
          />
          <meta
            property="twitter:image"
            content="https://assets.eskwelabs.com/data-club-thumbnail.png"
          />
        </Head>
        <div>
          <Hero />
          <section className="bg-white">
            <Perks />
          </section>
          <section className="bg-white">
            <Sprints />
          </section>
          <FAQSection />
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: DATA_CLUB_SPRINTS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default DataClub;
