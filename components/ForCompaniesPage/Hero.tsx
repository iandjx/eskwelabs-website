import { RefObject } from 'react';
import Image from 'next/image';
import { FOR_COMPANIES_HERO } from '../../lib/queries/ForCompanies';
import { useQuery } from '@apollo/client';
import SkeletonBox from '../SkeletonBox';

interface IHeroProps {
  contactUsSectionRef: RefObject<HTMLElement>;
}

const Hero = ({ contactUsSectionRef }: IHeroProps): JSX.Element => {
  const { loading, error, data } = useQuery(FOR_COMPANIES_HERO);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <section>
      <div className="background-image mt-7 md:mt-0 md:bg-pickled-bluewood">
        <Image
          src="https://assets.eskwelabs.com/NW-Careers-1.jpg"
          alt="Talent is everywhere"
          layout="fill"
          objectPosition="top left"
          className="object-contain md:object-scale-down"
        />
      </div>
      <div className="careers-hero-style">
        <div className="container grid gap-4 mx-auto xl:grid-cols-2">
          <aside className="mt-64 md:mb-32 md:mt-64 xl:col-start-2">
            <h1 className="hero-heading-letter-spacing mb-12 text-2xl leading-none md:text-5xl">
              <SkeletonBox loading={loading} classNames="w-64 h-12">
                <span>{data && data.forCompany.heroTitle}</span>
              </SkeletonBox>
            </h1>
            <p className="mb-12 text-sm md:text-xl">
              <SkeletonBox loading={loading} classNames="w-64 h-12">
                {data && (
                  <span dangerouslySetInnerHTML={{ __html: data.forCompany.heroSubTitle }} />
                )}
              </SkeletonBox>
            </p>
            <SkeletonBox loading={loading} classNames="w-12 h-12">
              <button
                className="bg-tradewind hover:bg-tradewind-darker mb-4 mr-4 px-8 py-4 text-gallery-white text-xs font-semibold rounded-lg uppercase duration-200 ease-in-out"
                onClick={() =>
                  contactUsSectionRef.current &&
                  contactUsSectionRef.current.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {data && data.forCompany.heroButtonText}
              </button>
            </SkeletonBox>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
