import { useRef } from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout';
import { FOR_COMPANIES_QUERIES } from '../lib/queries/ForCompanies';
import { initializeApollo } from '../lib/apolloClient';
import Hero from '../components/ForCompaniesPage/Hero';
import Leader from '../components/ForCompaniesPage/Leader';
import PartnersList from '../components/ForCompaniesPage/PartnersList';
import WhyPartner from '../components/ForCompaniesPage/WhyPartner';
import HiringProcess from '../components/ForCompaniesPage/HiringProcess';
import SignupForm from '../components/ForCompaniesPage/SignupForm';
import styles from '../styles/About.module.css';

const ForCompaniesPage: NextPage = () => {
  const contactUsSection = useRef<HTMLElement>(null);

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
          <meta property="og:url" content="https://www.eskwelabs.com/for-companies" />
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
          <meta property="twitter:url" content="https://www.eskwelabs.com/for-companies" />
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
          <Hero contactUsSectionRef={contactUsSection} />
          <section className="bg-white-lilac">
            <Leader />
          </section>
          <section className="bg-white">
            <PartnersList />
          </section>
          <section className="bg-white">
            <WhyPartner />
          </section>
          <section className="bg-white-lilac">
            <HiringProcess />
          </section>
          <section className={styles.gradientTealBlue} ref={contactUsSection}>
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
    query: FOR_COMPANIES_QUERIES,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default ForCompaniesPage;
