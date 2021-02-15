import { useRef } from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout';
import Hero from '../components/HomePage/Hero';
import HowWeWork from '../components/HomePage/HowWeWork';
import ChooseYourPath from '../components/HomePage/ChooseYourPath';
import ForCompaniesBox from '../components/HomePage/ForCompaniesBox';
import RecentBlogPosts from '../components/HomePage/RecentBlogPosts';
import JoinTheCommunity from '../components/HomePage/JoinTheCommunity';
import NotSureWhereToStart from '../components/HomePage/NotSureWhereToStart';
import { HOMEPAGE_QUERIES } from '../lib/queries/Home';
import { initializeApollo } from '../lib/apolloClient';
// import styles from '../styles/Home.module.css';

const IndexPage: NextPage = () => {
  const individualsSection = useRef<HTMLElement>(null);
  const companiesSection = useRef<HTMLElement>(null);

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
          <meta property="og:url" content="https://www.eskwelabs.com" />
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
          <meta property="twitter:url" content="https://www.eskwelabs.com" />
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
          <Hero individualsRef={individualsSection} companiesRef={companiesSection} />
          <section className="bg-white">
            <HowWeWork />
          </section>
          <section className="bg-white" ref={individualsSection}>
            <ChooseYourPath />
          </section>
          <section className="bg-tradewind" ref={companiesSection}>
            <ForCompaniesBox />
          </section>
          <section className="bg-white">
            <RecentBlogPosts />
          </section>
          <section className="bg-white-lilac">
            <JoinTheCommunity />
          </section>
          <section className="bg-pixie-green">
            <NotSureWhereToStart individualsRef={individualsSection} />
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: HOMEPAGE_QUERIES,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const response = await fetch('https://api.spacexdata.com/v3/launches/next');
//   const nextLaunch = await response.json();
//   return {
//     props: {
//       launch: {
//         mission: nextLaunch.mission_name,
//         site: nextLaunch.launch_site.site_name_long,
//         timestamp: nextLaunch.launch_date_unix * 1000,
//         rocket: nextLaunch.rocket.rocket_name,
//       },
//     },
//   };
// };

export default IndexPage;
