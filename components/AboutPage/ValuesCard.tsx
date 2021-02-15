import Image from 'next/image';
import imageUrl from '../../lib/helpers/imageUrl';
import { ValuesSection } from './types';

interface IValuesCard {
  valuesSection: ValuesSection;
}

const Values = ({ valuesSection }: IValuesCard): JSX.Element => {
  return (
    <div
      key={valuesSection.title}
      className={`flex flex-col ${
        valuesSection.order % 2 ? 'md:flex-row' : 'md:flex-row-reverse'
      } mb-8`}
    >
      <div className="mx-auto mb-6 md:mb-0">
        <div className="px-16 bg-polar rounded-full w-64 h-64 relative pt-16 mx-auto">
          <Image
            layout="responsive"
            src={imageUrl(valuesSection.picture.url)}
            width={281}
            height={281}
            className="justify-self-center"
          />
        </div>
      </div>
      <div
        className={`flex flex-col justify-center ${
          valuesSection.order % 2 ? 'md:ml-16' : 'md:mr-16'
        }`}
      >
        <h3 className="text-xl mb-6 font-medium uppercase text-tradewind">{valuesSection.title}</h3>
        <p className="mb-2 text-tundora text-base font-normal tracking-wider leading-8">
          {valuesSection.description}
        </p>
      </div>
    </div>
  );
};

export default Values;
