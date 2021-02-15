import { useState } from 'react';
import { Cohort } from '../shared/types';
import CohortBox from './CohortBox';
import SeeMoreButton from './SeeMoreButton';

interface ICohortsListProps {
  cohorts: [Cohort];
  upcomingCohortsTitle: string;
}

const CohortList = (props: ICohortsListProps): JSX.Element => {
  const { cohorts, upcomingCohortsTitle } = props;
  const [showFullList, setShowFullList] = useState(false);

  if (!cohorts.length) {
    return <div />;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="tracking-wider py-6 text-3xl text-pickled-bluewood font-medium">
        {upcomingCohortsTitle}
      </h2>
      {cohorts.map((c, idx) => (
        <CohortBox key={c.id} cohort={c} hidden={idx > 1 && !showFullList} />
      ))}
      {cohorts.length > 2 ? (
        <SeeMoreButton
          toggled={showFullList}
          clickEvent={() => setShowFullList(!showFullList)}
          count={cohorts.length - 2}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default CohortList;
