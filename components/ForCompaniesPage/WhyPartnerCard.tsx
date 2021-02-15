import Image from 'next/image';
import imageUrl from '../../lib/helpers/imageUrl';
import { WhyPartnerSection } from './types';

interface IWhyPartner {
  partnerReason: WhyPartnerSection;
}

const WhyMentorCard = ({ partnerReason }: IWhyPartner): JSX.Element => {
  return (
    <div key={partnerReason.title} className="flex flex-col mx-8">
      <div className="mx-auto md:mx-0 mb-6">
        <div className="px-8 bg-polar rounded-full w-32 h-32 relative pt-7">
          <Image
            layout="responsive"
            src={imageUrl(partnerReason.image.url)}
            width={281}
            height={281}
            className="justify-self-center"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-xl mb-6 font-semibold uppercase text-pickled-bluewood">
          {partnerReason.title}
        </h3>
        <p className="mb-2 text-tundora text-base font-normal tracking-wider leading-8">
          {partnerReason.description}
        </p>
      </div>
    </div>
  );
};

export default WhyMentorCard;
