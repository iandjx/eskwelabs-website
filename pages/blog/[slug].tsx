import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import Layout from '../../components/Layout';
import Hero from '../../components/BlogPostPage/Hero';
import BlogContent from '../../components/BlogPostPage/BlogContent';
import { BLOG_POST_SLUGS, FIND_BLOG_POST } from '../../lib/queries/Blog';
import imageUrl from '../../lib/helpers/imageUrl';
import { BlogPost } from '../../components/shared/types';
import { initializeApollo } from '../../lib/apolloClient';

const BlogPostPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { loading, error, data } = useQuery(FIND_BLOG_POST, {
    variables: { slug },
  });

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const blogPost: BlogPost = data.blogPost[0];

  return (
    <Layout title={`${blogPost.title}`}>
      <main>
        <Head>
          <meta name="title" content={blogPost.title} />
          <meta name="description" content={blogPost.subtitle} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://www.eskwelabs.com/blog/${slug}`} />
          <meta property="og:title" content={blogPost.title} />
          <meta property="og:description" content={blogPost.subtitle} />
          <meta property="og:image" content={imageUrl(blogPost.image.url)} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={`https://www.eskwelabs.com/blog/${slug}`} />
          <meta property="twitter:title" content={blogPost.title} />
          <meta property="twitter:description" content={blogPost.subtitle} />
          <meta property="twitter:image" content={imageUrl(blogPost.image.url)} />
        </Head>
        <div>
          <Hero blogPost={blogPost} />
          <section className="bg-white">
            <BlogContent blogPost={blogPost} />
          </section>
        </div>
      </main>
    </Layout>
  );
};

interface IBlogPostSlug {
  id: string;
  slug: string;
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async function () {
  const apolloClient = initializeApollo();

  const res = await apolloClient.query({
    query: BLOG_POST_SLUGS,
  });

  const paths = res.data.blogPosts.map((d: IBlogPostSlug) => `/blog/${d.slug}`);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: FIND_BLOG_POST,
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

export default BlogPostPage;
