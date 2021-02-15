import Image from 'next/image';
import imageUrl from '../../lib/helpers/imageUrl';
import { Testimonial } from './types';
import QuoteOpen from '../svgs/QuoteOpen';
import QuoteClosed from '../svgs/QuoteClosed';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

interface ITestimonialCard {
  testimonial: Testimonial;
}

const TestimonialCard = (props: ITestimonialCard): JSX.Element => {
  const { testimonial } = props;

  return (
    <article
      key={testimonial.name}
      className={`community-testimonial flex flex-col text-left min-w-full md:min-w-0 mx-2 md:mx-6 text-pickled-bluewood hover:text-white hover:bg-wild-blue-yonder border border-wild-blue-yonder rounded-lg ${
        testimonial.order % 2 == 0 ? 'px-4 py-8' : 'p-4'
      }`}
    >
      <blockquote className="relative flex-grow p-8 w-full text-base tracking-wide leading-6">
        <div className="absolute left-0 top-0 mt-5">
          <QuoteOpen className="w-4 h-4 fill-current" />
        </div>

        <ReactMarkdownWithHtml allowDangerousHtml>{testimonial.quote}</ReactMarkdownWithHtml>

        <div className="absolute bottom-0 right-0 mr-5 pr-2">
          <QuoteClosed className="w-4 h-4 fill-current" />
        </div>
      </blockquote>

      <div className="flex items-center">
        <div className="border border-mischka rounded-full" style={{ width: 72, height: 72 }}>
          <Image
            src={imageUrl(testimonial.picture.url)}
            layout="fixed"
            width={72}
            height={72}
            className="rounded-full"
          />
        </div>
        <h4 className="mb-2 ml-4 text-lg font-semibold tracking-normal leading-6">
          {testimonial.name}
        </h4>
      </div>
    </article>
  );
};

export default TestimonialCard;
