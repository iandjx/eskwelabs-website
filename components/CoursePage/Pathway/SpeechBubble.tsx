import { ISpeechBubbleProps } from './types';
import SpeechBubbleOutline from '../../svgs/SpeechBubble';

const SpeechBubble = (props: ISpeechBubbleProps): JSX.Element => {
  const { active, title, description } = props;

  return (
    <div
      className={`speech-bubble ${
        active ? 'active text-white' : 'text-wild-blue-yonder hover:text-white'
      } text-xs w-52 relative cursor-pointer`}
    >
      <div className="flex flex-row justify-center">
        <SpeechBubbleOutline className="fill-current stroke-pickled-bluewood w-36" />
        <div className="speech-bubble-inner absolute top-0 w-36 pt-4 px-1">
          <h4
            className={`${
              active ? 'text-hit-pink text-sm' : 'text-pickled-bluewood'
            } uppercase mb-2`}
          >
            {active ? 'You are here' : title}
          </h4>
          <p className={`${active ? 'font-semibold' : ''} text-pickled-bluewood px-2`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpeechBubble;
