import Image from 'next/image';
import imageUrl from '../../lib/helpers/imageUrl';
import { WhyMentorSection } from './types';

interface IWhyMentor {
  mentorReason: WhyMentorSection;
}

const WhyMentorCard = ({ mentorReason }: IWhyMentor): JSX.Element => {
  return (
    <div key={mentorReason.title} className="flex flex-col mx-8">
      <div className="mx-auto md:mx-0 mb-6">
        <div className="px-6 bg-polar rounded-full w-24 h-24 relative pt-6">
          <Image
            layout="responsive"
            src={imageUrl(mentorReason.image.url)}
            width={281}
            height={281}
            className="justify-self-center"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-xl mb-6 font-semibold uppercase text-pickled-bluewood">
          {mentorReason.title}
        </h3>
        <p className="mb-2 text-tundora text-base font-normal tracking-wider leading-8">
          {mentorReason.description}
        </p>
      </div>
    </div>
  );
};

export default WhyMentorCard;
