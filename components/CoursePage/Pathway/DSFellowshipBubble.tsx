import Link from 'next/link';
import { ICourseBubbleProps } from './types';
import SpeechBubble from './SpeechBubble';
import ActiveDot from './ActiveDot';
import DottedDot from './DottedDot';

const DSFellowshipBubble = (props: ICourseBubbleProps): JSX.Element => {
  const { active } = props;

  return (
    <div className="flex flex-col">
      <Link href="/data-science-fellowship">
        <div>
          <SpeechBubble
            active={active}
            title="Data Science Fellowship"
            description="12-week Bootcamp"
          />
        </div>
      </Link>

      <div className="mx-auto text-center mt-4 text-pickled-bluewood bg-wild-blue-yonder z-10 rounded-full px-2">
        {active ? <ActiveDot /> : <DottedDot />}
      </div>
    </div>
  );
};

export default DSFellowshipBubble;
