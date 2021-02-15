import Image from 'next/image';
import { BlogPostTag, BlogPost } from '../shared/types';
import imageUrl from '../../lib/helpers/imageUrl';

interface IBlogPostHero {
  blogPost: BlogPost;
}

const Hero = (props: IBlogPostHero): JSX.Element => {
  const { blogPost } = props;

  return (
    <section>
      <div className="background-image mt-12 md:mt-0 md:bg-pickled-bluewood">
        <Image
          src={imageUrl(blogPost.image.url)}
          alt={blogPost.image.alternativeText}
          layout="fill"
          objectPosition="top left"
          className="object-contain md:object-scale-down"
        />
      </div>
      <div className="blog-hero-style">
        <div className="container grid gap-4 mx-auto xl:grid-cols-2">
          <aside className="mt-64 md:mb-32 md:mt-64 md:col-start-2 xl:ml-32">
            <h1 className="hero-heading-letter-spacing mb-12 text-2xl leading-none md:text-5xl">
              <span>{blogPost.title}</span>
            </h1>
            <p className="mb-12 text-sm md:text-xl">
              <span dangerouslySetInnerHTML={{ __html: blogPost.subtitle }} />
            </p>
            <div className="flex flex-wrap my-4 justify-end">
              {blogPost.blog_tags.map((d: BlogPostTag) => {
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
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
