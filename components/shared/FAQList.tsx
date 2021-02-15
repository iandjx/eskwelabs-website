import { useState } from 'react';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import { FAQ } from './types';
import SeeMoreButton from '../CoursePage/SeeMoreButton';

interface IFAQsList {
  faqs: [FAQ];
  title: string;
}

const FAQList = (props: IFAQsList): JSX.Element => {
  const { faqs, title } = props;
  const [showFullList, setShowFullList] = useState(false);

  if (!faqs.length) {
    return <div />;
  }

  return (
    <div className="p-6">
      <h2 className="container mx-auto tracking-wider py-6 text-3xl text-pickled-bluewood font-medium">
        {title}
      </h2>
      <div
        className={showFullList ? '' : 'bg-gradient-to-t from-white absolute h-48 w-full left-0'}
      ></div>
      <div
        className={`container mx-auto ${showFullList ? '' : 'max-h-48 min-h-32 overflow-hidden'}`}
      >
        {faqs.map((faq: FAQ, idx: number) => (
          <div
            key={faq.id}
            className={`py-6 border-b border-athens-gray ${
              showFullList || idx < 1 ? 'mb-4' : 'hidden'
            }`}
          >
            <h3 className="text-xl text-wild-blue-yonder font-medium">{faq.title}</h3>
            <div className="text-tundora text-xs tracking-wide leading-7-p my-6 flex-grow">
              <ReactMarkdownWithHtml allowDangerousHtml>{faq.content}</ReactMarkdownWithHtml>
            </div>
          </div>
        ))}
      </div>
      {faqs.length > 1 ? (
        <SeeMoreButton
          toggled={showFullList}
          clickEvent={() => setShowFullList(!showFullList)}
          count={faqs.length - 1}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default FAQList;
