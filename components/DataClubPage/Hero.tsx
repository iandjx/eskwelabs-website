import Image from 'next/image';
import { useState } from 'react';
import SignupModal from './SignupModal';
const Hero = (): JSX.Element => {
  const [signupModalOpen, toggleSignupModal] = useState(false);

  return (
    <section>
      <div className="background-image mt-12 md:mt-0 bg-pickled-bluewood">
        <div className="md:hidden absolute z-10 h-96 w-full bg-gradient-to-b from-transparent to-pickled-bluewood "></div>
        <Image
          src="https://assets.eskwelabs.com/data-club.jpg"
          alt="Eskwelabs Data Club"
          layout="fill"
          objectPosition="top left"
          className="object-scale-down md:object-cover"
        />
      </div>
      <div className="mx-auto container p-4">
        <div className="container grid mx-auto">
          <aside className="mt-48 md:my-48 z-20">
            <h1 className="hero-heading-letter-spacing mb-12 text-2xl leading-none text-white md:text-5xl">
              Data Club
            </h1>
            <p className="mb-12 text-white text-sm md:text-xl">
              Learn by doing industry-designed projects with peers
            </p>
            <button
              onClick={() => toggleSignupModal(true)}
              className="bg-terracotta hover:bg-terracotta-darker z-20 mb-4 mr-4 px-8 py-4 text-gallery-white text-xs font-semibold rounded-lg uppercase duration-200 ease-in-out"
            >
              Join the waitlist
            </button>
            <SignupModal
              title="Join the Data Club Waitlist"
              visible={signupModalOpen}
              closeFn={() => toggleSignupModal(false)}
              imageUrl="https://assets.eskwelabs.com/data-club.jpg"
            />
            <div className="flex flex-col md:flex-row text-white mt-6">
              <div className="flex flex-col border-wild-blue-yonder border-l px-4 py-3 mb-6 lg:mb-0 lg:pr-16">
                <small className="uppercase">Estimated time</small>
                <strong className="uppercase leading-9">Recurring</strong>
                <div className="flex flex-row items-middle">
                  <small>5-10 hrs / sprint</small>
                </div>
              </div>
              <div className="flex flex-col border-wild-blue-yonder border-l px-4 py-3 mb-6 lg:mb-0 lg:pr-16">
                <small className="uppercase">Sprint start</small>
                <strong className="leading-9">Weekly</strong>
              </div>

              <div className="flex flex-col mb-6 lg:mb-0 border-wild-blue-yonder border-l px-4 py-3">
                <small className="uppercase">Pre-requisities</small>
                <div className="font-semibold">Varies per sprint</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;
