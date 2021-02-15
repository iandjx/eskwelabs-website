import { ModuleTopic } from '../shared/types';
import ReactMarkdownWithHtml from 'react-markdown/with-html';

interface IModuleTopicProps {
  topic: ModuleTopic;
}

const ModuleTopicItem = (props: IModuleTopicProps): JSX.Element => {
  const { topic } = props;

  return (
    <div>
      <div className="ml-6 pl-6 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="fill-current w-6 text-pickled-bluewood absolute -left-3 z-10"
        >
          <circle cx="10" cy="10" r="5" />
        </svg>
        <span className="text-lg font-medium text-pickled-bluewood">{topic.title}</span>
      </div>
      <div className="ml-6 pl-6 pt-6 pb-3 border-l border-silver relative -top-3">
        <div className="module-topic-content text-tundora text-sm">
          <ReactMarkdownWithHtml allowDangerousHtml>{topic.content}</ReactMarkdownWithHtml>
        </div>
      </div>
    </div>
  );
};

export default ModuleTopicItem;
