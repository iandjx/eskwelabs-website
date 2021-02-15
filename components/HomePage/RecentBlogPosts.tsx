import { useQuery } from '@apollo/client';
import { RECENT_BLOG_POSTS } from '../../lib/queries/Home';
import BlogPostCard from '../shared/BlogPostCard';
import { BlogPost } from '../shared/types';
import ArrowRight from '../svgs/ArrowRight';
import Link from 'next/link';

const RecentBlogPosts = (): JSX.Element => {
  const { loading, error, data } = useQuery(RECENT_BLOG_POSTS);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="flex flex-col py-9 w-full md:flex-row">
      <div className="self-center align-middle p-4 pt-12 w-full text-left md:w-1/3">
        <div className="md:mx-auto md:w-72">
          <h2 className="mb-6 text-pickled-bluewood text-3xl tracking-wider leading-10">
            {data.home.recentBlogPostTitle}
          </h2>
          <p className="text-tundora text-sm tracking-wide leading-6">
            <span dangerouslySetInnerHTML={{ __html: data.home.recentBlogPostDescription }} />
          </p>
          <Link href="/blog">
            <a
              href="/blog"
              className="hover:bg-tradewind-darker mb-12 mt-6 px-8 py-3 inline-block text-white text-xs tracking-wider bg-tradewind rounded-lg uppercase"
            >
              See more
            </a>
          </Link>
        </div>
      </div>
      <div className="text-silver relative md:hidden">
        <ArrowRight className="fill-current ml-3 w-4 h-4 animate-bounce-left-right absolute top-0 right-0" />
      </div>
      <div className="flex-column flex py-4 w-full overflow-x-auto md:w-2/3">
        {data.blogPosts &&
          data.blogPosts.map((b: BlogPost) => <BlogPostCard post={b} key={b.title} />)}
      </div>
    </div>
  );
};

export default RecentBlogPosts;
