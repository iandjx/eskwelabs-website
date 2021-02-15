import { ABOUT_US_WHAT_WE_DO } from '../../lib/queries/About';
import { useQuery } from '@apollo/client';
import SkeletonBox from '../../components/SkeletonBox';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import WhatWeDoCard from './WhatWeDoCard';
import { WhatWeDoBox } from './types';
import ArrowRight from '../svgs/ArrowRight';

const Hero = (): JSX.Element => {
  const { loading, error, data } = useQuery(ABOUT_US_WHAT_WE_DO);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      <div className="container mx-auto p-2 text-center">
        <h2 className="mb-9 pt-16 text-pickled-bluewood text-5xl">
          <SkeletonBox loading={loading} classNames="w-24 h-6">
            <span>{data.aboutUs.whatWeDoTitle}</span>
          </SkeletonBox>
        </h2>
        <div className="mx-auto p-2 text-left md:text-center text-tundora text-base">
          <SkeletonBox loading={loading} classNames="w-24 h-6">
            <ReactMarkdownWithHtml allowDangerousHtml>
              {data.aboutUs.whatWeDoDescription}
            </ReactMarkdownWithHtml>
          </SkeletonBox>
        </div>
      </div>
      <div className="text-silver relative md:hidden">
        <ArrowRight className="fill-current ml-3 w-4 h-4 animate-bounce-left-right absolute top-0 right-0" />
      </div>
      <div className="flex flex-row flex-nowrap md:justify-center p-2 text-left overflow-x-scroll md:overflow-x-auto my-12">
        <SkeletonBox loading={loading} classNames="w-96 h-96">
          {data.whatWeDoBoxes.map((d: WhatWeDoBox) => (
            <WhatWeDoCard key={d.title} box={d} />
          ))}
        </SkeletonBox>
      </div>
    </div>
  );
};

export default Hero;
