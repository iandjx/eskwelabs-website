import { ISVGClassName } from './ISVGClassName';

const QuoteClosed = (props: ISVGClassName): JSX.Element => {
  return (
    <svg {...props} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.784 32H5c2.591-4.338 4.385-8.474 5.282-12.307H5.498L7.093 9h10.365l-.697 4.842C15.565 21.711 12.774 27.763 9.784 32zm17.542 0h-4.884c2.69-4.338 4.485-8.474 5.382-12.307H23.04L24.635 9H35l-.698 4.842C33.106 21.711 30.316 27.763 27.326 32z"></path>
    </svg>
  );
};

export default QuoteClosed;
