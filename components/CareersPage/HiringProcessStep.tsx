import { HiringProcessStepSection } from './types';

interface IHiringProcessStepSection {
  step: HiringProcessStepSection;
}

const HiringProcessStep = ({ step }: IHiringProcessStepSection): JSX.Element => {
  return (
    <div key={step.title} className="flex flex-row pb-6">
      <div>
        <div className="bg-winter-hazel hover:bg-winter-hazel-lighter rounded-full w-24 h-24 relative pt-8 mr-4">
          <h4 className="text-tradewind text-2xl text-center">{step.step}</h4>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-medium uppercase text-tradewind">{step.title}</h3>
        <p className="mb-2 text-tundora text-base font-normal tracking-wider leading-8">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default HiringProcessStep;
