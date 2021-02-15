import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import Layout from '../components/Layout';
import Hero from '../components/BlogPage/Hero';
import BlogPosts from '../components/BlogPage/BlogPosts';
import { BLOG_POSTS } from '../lib/queries/Blog';
import { initializeApollo } from '../lib/apolloClient';
// import styles from '../styles/Home.module.css';

const BlogPage: NextPage = () => {
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
          <meta property="og:url" content="https://www.eskwelabs.com/blog" />
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
          <meta property="twitter:url" content="https://www.eskwelabs.com/blog" />
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
          <Hero />
          <section className="bg-white">
            <BlogPosts />
          </section>
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: BLOG_POSTS,
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

export default BlogPage;
