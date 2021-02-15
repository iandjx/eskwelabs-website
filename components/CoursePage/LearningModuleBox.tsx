import { useState } from 'react';
import { Module } from '../shared/types';
import ModuleTopicItem from './ModuleTopicItem';
import Plus from '../svgs/Plus';
import Minus from '../svgs/Minus';

interface ILearningModuleProps {
  learningModule: Module;
  hidden: boolean;
}

const LearningModuleBox = (props: ILearningModuleProps): JSX.Element => {
  const { learningModule, hidden } = props;
  const [showFullDetails, setShowFullDetails] = useState(false);

  return (
    <div
      className={`container my-12 bg-white shadow flex flex-col p-9 pb-6 rounded-md ${
        hidden ? 'hidden' : ''
      }`}
    >
      <h4 className="text-2xl text-pickled-bluewood font-medium">{learningModule.title}</h4>

      <div className="flex flex-grow flex-col">
        <div className="my-5 text-tundora text-sm tracking-wide">{learningModule.description}</div>
        <div className={showFullDetails ? '' : 'hidden'}>
          {learningModule.module_topics.map((m) => (
            <ModuleTopicItem key={m.order} topic={m} />
          ))}
        </div>
      </div>
      <div className="border-silver border-t mt-6 pt-6">
        <button
          className="text-cerulean hover:text-pickled-bluewood-lighter text-2xs font-normal uppercase flex flex-row"
          onClick={() => setShowFullDetails(!showFullDetails)}
        >
          {showFullDetails ? (
            <Minus className="fill-current w-2 mr-2" />
          ) : (
            <Plus className="fill-current w-2 mr-2" />
          )}
          See Details
        </button>
      </div>
    </div>
  );
};

export default LearningModuleBox;
