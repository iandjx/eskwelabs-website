import { useState } from 'react';
import { Cohort } from '../shared/types';
import CohortModal from './CohortModal';
import { format } from 'date-fns';

interface ICohortProps {
  cohort: Cohort;
  hidden: boolean;
}

const CohortBox = (props: ICohortProps): JSX.Element => {
  const { cohort, hidden } = props;
  const [modalOpen, toggleModal] = useState(false);

  return (
    <div
      className={`container my-6 bg-zircon shadow flex flex-col md:flex-row p-9 rounded-md ${
        hidden ? 'hidden' : ''
      }`}
    >
      <span className="tracking-wide mr-6 md:mr-0 md:mb-0 mb-3 flex-nowrap text-tundora text-xs md:text-lg font-medium">
        {format(new Date(cohort.startDate), 'MMM d, yyyy')}
      </span>
      <div className="flex-grow md:mx-12">
        <span className="text-pickled-bluewood font-medium block mb-4">{cohort.title}</span>
        <div className="flex flex-row">
          <small className="uppercase text-2xs text-wild-blue-yonder">Topics covered:</small>
          <div className="flex-grow text-2xs text-pickled-bluewood ml-2">
            {cohort.topicsCovered}
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-0">
        {cohort.learnMoreModal && (
          <div>
            <button className="bg-wild-blue-yonder hover:bg-wild-blue-yonder-darker w-full md:w-auto my-4 mr-4 px-12 py-4 text-gallery-white text-xs font-semibold rounded-lg uppercase">
              Learn more
            </button>
            <CohortModal
              visible={modalOpen}
              closeFn={() => toggleModal(false)}
              imageUrl="https://assets.eskwelabs.com/data-club.jpg"
              cohortDetailsModal={cohort.learnMoreModal}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CohortBox;
