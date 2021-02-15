import Image from 'next/image';
import Link from 'next/link';
import ArrowRight from '../svgs/ArrowRight';
import imageUrl from '../../lib/helpers/imageUrl';
import { BlogPost, BlogPostTag } from './types';

interface IBlogPostCard {
  post: BlogPost;
}

const BlogPostCard = (props: IBlogPostCard): JSX.Element => {
  const { post } = props;

  return (
    <article
      key={post.slug}
      className="blog-post-card flex flex-col m-3 text-left border border-mischka hover:border-pickled-bluewood rounded-lg"
      style={{ width: '292px' }}
    >
      {post.image && (
        <Image
          src={imageUrl(post.image.url)}
          layout="fixed"
          width={290}
          height={182}
          className="rounded-t-lg"
        />
      )}
      <div className="flex flex-col flex-grow p-4">
        <h4 className="mb-2 text-pickled-bluewood text-lg font-semibold tracking-normal leading-6">
          {post.title}
        </h4>
        <p className="flex-grow text-tundora text-xs tracking-wide leading-6">{post.subtitle}</p>
        <div className="flex flex-wrap my-4">
          {post.blog_tags.map((d: BlogPostTag) => {
            return (
              <div
                className="text-terracotta-darker bg-terracotta-200 border-terracotta-darker flex items-center justify-center m-1 px-2 py-1 font-medium border rounded-full"
                key={d.slug}
              >
                <span className="flex-initial max-w-full text-xs font-normal leading-none">
                  {d.name}
                </span>
              </div>
            );
          })}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <a
            href={`/blog/${post.slug}`}
            className="learn-more-button flex-column hover:text-tradewind-darker flex p-0 text-tradewind text-xs tracking-wider focus:outline-none uppercase"
          >
            Read more <ArrowRight className="ml-3 w-4 h-4 fill-current" />
          </a>
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;
