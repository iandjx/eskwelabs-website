import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout';
import { CAREERS_QUERIES } from '../lib/queries/Careers';
import { initializeApollo } from '../lib/apolloClient';
import Hero from '../components/CareersPage/Hero';
import MentorshipProgram from '../components/CareersPage/MentorshipProgram';
import JoinTheNetwork from '../components/CareersPage/JoinTheNetwork';
import WhyBecomeAMentor from '../components/CareersPage/WhyBecomeAMentor';
import HiringProcess from '../components/CareersPage/HiringProcess';
import SignupForm from '../components/CareersPage/SignupForm';
import styles from '../styles/About.module.css';
import { useRef } from 'react';

const AboutPage: NextPage = () => {
  const signupSection = useRef<HTMLElement>(null);

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
          <meta property="og:url" content="https://www.eskwelabs.com/careers" />
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
          <meta property="twitter:url" content="https://www.eskwelabs.com/careers" />
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
          <Hero signupRef={signupSection} />
          <section className="bg-white-lilac">
            <MentorshipProgram />
          </section>
          <section className="bg-white">
            <JoinTheNetwork />
          </section>
          <section className="bg-white">
            <WhyBecomeAMentor />
          </section>
          <section className="bg-white-lilac">
            <HiringProcess />
          </section>
          <section className={styles.gradientTealBlue} ref={signupSection}>
            <SignupForm />
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: CAREERS_QUERIES,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default AboutPage;
