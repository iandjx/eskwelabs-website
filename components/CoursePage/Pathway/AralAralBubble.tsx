import Link from 'next/link';
import { ICourseBubbleProps } from './types';
import SpeechBubble from './SpeechBubble';
import Check from '../../svgs/Check';
import ActiveDot from './ActiveDot';

const AralAralBubble = (props: ICourseBubbleProps): JSX.Element => {
  const { active } = props;

  return (
    <div className="flex flex-col">
      <Link href="/aral-aral">
        <div>
          <SpeechBubble
            active={active}
            title="Aral Aral"
            description="Free Self-paced Prep Course"
          />
        </div>
      </Link>

      <div className="mx-auto text-center mt-4 text-pickled-bluewood bg-wild-blue-yonder z-10 rounded-full px-2">
        {active ? (
          <ActiveDot />
        ) : (
          <Check className="fill-current w-6 p-1 border-2 border-pickled-bluewood rounded-full" />
        )}
      </div>
    </div>
  );
};

export default AralAralBubble;
