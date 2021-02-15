import { RefObject } from 'react';
import Image from 'next/image';
import { HOMEPAGE_HERO_SECTION } from '../../lib/queries/Home';
import { useQuery } from '@apollo/client';
import SkeletonBox from '../../components/SkeletonBox';

interface IHeroProps {
  individualsRef: RefObject<HTMLElement>;
  companiesRef: RefObject<HTMLElement>;
}

const Hero = (props: IHeroProps): JSX.Element => {
  const { loading, error, data } = useQuery(HOMEPAGE_HERO_SECTION);

  const { individualsRef, companiesRef } = props;

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <section>
      <div className="background-image mt-7 md:mt-0">
        <Image
          src="/images/talent-is-everywhere.jpg"
          alt="Talent is everywhere"
          layout="fill"
          objectPosition="top"
          className="object-scale-down md:object-cover"
        />
      </div>
      <div className="home-hero-style">
        <div className="container grid gap-4 mx-auto xl:grid-cols-3">
          <aside className="mt-64 md:mb-32 md:mt-64 xl:col-start-3">
            <h1 className="hero-heading-letter-spacing mb-12 text-2xl leading-none md:text-5xl">
              <SkeletonBox loading={loading} classNames="w-64 h-12">
                <span>{data.home.heroTitle}</span>
              </SkeletonBox>
            </h1>
            <p className="mb-12 text-sm md:text-xl">
              <SkeletonBox loading={loading} classNames="w-64 h-12">
                <span dangerouslySetInnerHTML={{ __html: data.home.heroSubtitle }} />
              </SkeletonBox>
            </p>
            <SkeletonBox loading={loading} classNames="w-12 h-12">
              <button
                className="button mb-4 mr-4"
                onClick={() =>
                  individualsRef.current &&
                  individualsRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {data.home.heroButtonIndividualsText}
              </button>
            </SkeletonBox>
            <SkeletonBox loading={loading} classNames="w-12 h-12">
              <button
                className="button"
                onClick={() =>
                  companiesRef.current &&
                  companiesRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {data.home.heroButtonCompaniesText}
              </button>
            </SkeletonBox>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
