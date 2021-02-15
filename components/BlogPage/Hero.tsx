import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '../../lib/queries/Blog';
import { useQuery } from '@apollo/client';
import { BlogPostTag } from '../shared/types';
import SkeletonBox from '../../components/SkeletonBox';
import imageUrl from '../../lib/helpers/imageUrl';

const Hero = (): JSX.Element => {
  const { loading, error, data } = useQuery(BLOG_POSTS);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data.latestBlogPost.length) {
    return <div className="error">{error}</div>;
  }

  const latestBlogPost = data.latestBlogPost[0];

  return (
    <section>
      <div className="background-image mt-12 md:mt-0 md:bg-pickled-bluewood">
        <Image
          src={imageUrl(latestBlogPost.image.url)}
          alt={latestBlogPost.image.alternativeText}
          layout="fill"
          objectPosition="top left"
          className="object-contain md:object-scale-down"
        />
      </div>
      <div className="blog-hero-style">
        <div className="container grid gap-4 mx-auto xl:grid-cols-2">
          <aside className="mt-64 md:mb-32 md:mt-64 md:col-start-2 xl:ml-32">
            <h1 className="hero-heading-letter-spacing mb-12 text-2xl leading-none md:text-5xl">
              <SkeletonBox loading={loading} classNames="w-64 h-12">
                <span>{latestBlogPost.title}</span>
              </SkeletonBox>
            </h1>
            <p className="mb-12 text-sm md:text-xl">
              <SkeletonBox loading={loading} classNames="w-64 h-12">
                <span dangerouslySetInnerHTML={{ __html: latestBlogPost.subtitle }} />
              </SkeletonBox>
            </p>
            <div className="flex flex-wrap my-4 justify-end">
              {latestBlogPost.blog_tags.map((d: BlogPostTag) => {
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
            <div className="flex flex-wrap my-4 justify-end">
              <SkeletonBox loading={loading} classNames="w-12 h-12 justify-end">
                <Link href={`/blog/${latestBlogPost.slug}`}>
                  <button className="button mb-4 mr-4">Read more</button>
                </Link>
              </SkeletonBox>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
