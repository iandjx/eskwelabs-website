import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout';
import { ABOUT_US_QUERIES } from '../lib/queries/About';
import { initializeApollo } from '../lib/apolloClient';
import styles from '../styles/About.module.css';
import Hero from '../components/AboutPage/Hero';
import WhatWeDo from '../components/AboutPage/WhatWeDo';
import Banner from '../components/AboutPage/Banner';
import TeamBox from '../components/AboutPage/TeamBox';
import Values from '../components/AboutPage/Values';

const AboutPage: NextPage = () => {
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
          <meta property="og:url" content="https://www.eskwelabs.com/about" />
          <meta property="og:title" content="Eskwelabs - Data education for the future of work" />
          <meta
            property="og:description"
            content="Eskwelabs is Southeast Asia’s data upskilling school. We bring together the best of online &amp; community-based learning to help teams and individuals access opportunities in the future of work."
          />
          <meta
            property="og:image"
            content="https://assets.eskwelabs.com/talent-is-everywhere.jpg"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.eskwelabs.com/about" />
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
            content="https://assets.eskwelabs.com/talent-is-everywhere.jpg"
          />
        </Head>
        <div>
          <section className={styles.gradientTealBlue}>
            <Hero />
          </section>
          <section className="bg-white">
            <WhatWeDo />
          </section>
          <section>
            <Banner />
          </section>
          <section className="bg-white-lilac">
            <TeamBox />
          </section>
          <section className="bg-white">
            <Values />
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ABOUT_US_QUERIES,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default AboutPage;
