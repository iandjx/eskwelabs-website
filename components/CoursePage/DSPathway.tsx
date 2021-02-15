import AralAralBubble from './Pathway/AralAralBubble';
import AralAralPlusBubble from './Pathway/AralAralPlusBubble';
import DSFellowshipBubble from './Pathway/DSFellowshipBubble';

interface IDSPathwayProps {
  courseSlug: string;
}

enum CourseSlugs {
  ARAL_ARAL = 'aral-aral-free-data-prep-course',
  ARAL_ARAL_PLUS = 'aral-aral-plus',
  DATA_SCIENCE = 'data-science-fellowship',
}

const DSPathway = (props: IDSPathwayProps): JSX.Element => {
  const { courseSlug } = props;

  return (
    <div className="container-2xl bg-logo bg-no-repeat bg-top-off">
      <div className="bg-logo bg-no-repeat bg-bottom-off">
        <div className="container mx-auto py-16 text-center">
          <h3 className="text-3xl py-6 text-white tracking-wide font-medium mb-12">
            Your Path to a Data Science Career
          </h3>
          <div className="flex flex-row justify-around pt-12 max-w-full overflow-x-scroll no-scrollbar pl-72 md:pl-0">
            <AralAralBubble active={courseSlug == CourseSlugs.ARAL_ARAL} />
            <AralAralPlusBubble active={courseSlug == CourseSlugs.ARAL_ARAL_PLUS} />
            <DSFellowshipBubble active={courseSlug == CourseSlugs.DATA_SCIENCE} />
          </div>
          <div className="mx-auto w-full md:w-2/3">
            <hr className="relative -top-3 block border-pickled-bluewood" />
          </div>
        </div>
        <div className="container mx-auto pt-6 pb-12 text-white text-sm text-center">
          {courseSlug == CourseSlugs.ARAL_ARAL ? (
            <div className="flex flex-col md:flex-row items-center md:w-max mx-auto tracking-wide">
              <p>
                Not sure if this is right for you? <br />
                Read about the pre-requisities for the Data Science Fellowship
              </p>
              <button className="bg-pixie-green hover:bg-pixie-green-darker px-16 py-4 text-gallery-white text-xs font-semibold rounded-lg uppercase duration-200 ease-in-out mt-6 md:mt-0 md:ml-12">
                Learn more
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center md:w-max mx-auto tracking-wide">
              <p>
                Not sure if this is right for you? Start with our free <strong>Aral-Aral</strong>{' '}
                prep course.
              </p>
              <button className="bg-pixie-green hover:bg-pixie-green-darker px-16 py-4 text-gallery-white text-xs font-semibold rounded-lg uppercase duration-200 ease-in-out ml-12">
                Learn more
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DSPathway;
