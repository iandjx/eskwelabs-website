import { useState } from 'react';
import { Module } from '../shared/types';
import LearningModuleBox from './LearningModuleBox';
import SeeMoreButton from './SeeMoreButton';

interface IModuleProps {
  modules: [Module];
  whatYouWillLearnTitle: string;
}

const LearningModules = (props: IModuleProps): JSX.Element => {
  const { modules, whatYouWillLearnTitle } = props;
  const [showFullList, setShowFullList] = useState(false);

  if (!modules.length) {
    return <div />;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="tracking-wider py-6 text-3xl text-pickled-bluewood font-medium">
        {whatYouWillLearnTitle}
      </h2>
      <div className={modules.length > 1 ? 'md:grid md:grid-cols-2 md:gap-6' : ''}>
        {modules.map((m, idx) => (
          <LearningModuleBox learningModule={m} key={m.id} hidden={idx > 1 && !showFullList} />
        ))}
      </div>
      {modules.length > 2 ? (
        <SeeMoreButton
          toggled={showFullList}
          clickEvent={() => setShowFullList(!showFullList)}
          count={modules.length - 2}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default LearningModules;
