import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery, QueryHookOptions } from '@apollo/client';
import Layout from '../components/Layout';
import { FIND_COURSE } from '../lib/queries/Courses';
import imageUrl from '../lib/helpers/imageUrl';
import { Course } from '../components/shared/types';
import { initializeApollo } from '../lib/apolloClient';
import CoursePageBody from '../components/CoursePage/CoursePageBody';

const AralAralPage: NextPage = () => {
  const router = useRouter();
  const { query } = router;

  const queryOptions: QueryHookOptions = {
    variables: { slug: 'aral-aral-free-data-prep-course' },
  };

  if (query.live) {
    queryOptions.fetchPolicy = 'network-only';
  }

  const { loading, error, data } = useQuery(FIND_COURSE, queryOptions);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const course: Course = data.course[0];

  return (
    <Layout title={`${course.title}`}>
      <main>
        <Head>
          <meta name="title" content={course.title} />
          <meta name="description" content={course.subtitle} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.eskwelabs.com/aral-aral" />
          <meta property="og:title" content={course.title} />
          <meta property="og:description" content={course.subtitle} />
          <meta property="og:image" content={imageUrl(course.image.url)} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.eskwelabs.com/aral-aral" />
          <meta property="twitter:title" content={course.title} />
          <meta property="twitter:description" content={course.subtitle} />
          <meta property="twitter:image" content={imageUrl(course.image.url)} />
        </Head>
        <CoursePageBody course={course} />
      </main>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: FIND_COURSE,
    variables: {
      slug: 'aral-aral-free-data-prep-course',
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export default AralAralPage;
