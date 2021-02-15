import { ABOUT_US_HERO_SECTION } from '../../lib/queries/About';
import { useQuery } from '@apollo/client';
import SkeletonBox from '../../components/SkeletonBox';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

const Hero = (): JSX.Element => {
  const { loading, error, data } = useQuery(ABOUT_US_HERO_SECTION);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="text-white">
      <div className="container grid gap-4 mx-auto md:grid-cols-2 p-4">
        <h1 className="hero-heading-letter-spacing mb-12 leading-none self-center mt-24">
          <SkeletonBox loading={loading} classNames="w-24 h-6">
            <small className="text-4xl">{data.aboutUs.heroToplineTitle}</small>
          </SkeletonBox>
          <br />
          <SkeletonBox loading={loading} classNames="w-32 h-12">
            <span className="text-7xl md:text-8xl xl:text-9xl">{data.aboutUs.heroTitle}</span>
          </SkeletonBox>
        </h1>
        <aside className="about-hero md:my-32 md:mt-48">
          <div className="mb-12 text-sm">
            <SkeletonBox loading={loading} classNames="w-64 h-12">
              <ReactMarkdownWithHtml allowDangerousHtml>
                {data.aboutUs.heroDescription}
              </ReactMarkdownWithHtml>
            </SkeletonBox>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Hero;
