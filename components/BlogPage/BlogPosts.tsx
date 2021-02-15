import { useQuery } from '@apollo/client';
import { BLOG_POSTS } from '../../lib/queries/Blog';
import BlogPostCard from '../shared/BlogPostCard';
import { BlogPost } from '../shared/types';

const RecentBlogPosts = (): JSX.Element => {
  const { loading, error, data } = useQuery(BLOG_POSTS);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="flex-column flex w-full py-9 container mx-auto flex-wrap justify-center">
      {data.blogPosts &&
        data.blogPosts.map((b: BlogPost) => <BlogPostCard post={b} key={b.title} />)}
    </div>
  );
};

export default RecentBlogPosts;
