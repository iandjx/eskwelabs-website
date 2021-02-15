import { ISVGClassName } from './ISVGClassName';

const QuoteOpen = (props: ISVGClassName): JSX.Element => {
  return (
    <svg {...props} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.216 9H35c-2.591 4.338-4.385 8.474-5.282 12.307h4.784L32.907 32H22.542l.697-4.842C24.435 19.289 27.226 13.237 30.216 9zM12.674 9h4.884c-2.69 4.338-4.485 8.474-5.382 12.307h4.784L15.365 32H5l.698-4.842C6.894 19.289 9.684 13.237 12.674 9z"></path>
    </svg>
  );
};

export default QuoteOpen;
