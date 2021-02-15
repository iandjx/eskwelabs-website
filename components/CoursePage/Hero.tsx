import { useState } from 'react';
import Image from 'next/image';
import imageUrl from '../../lib/helpers/imageUrl';
import PrereqModal from './PreqreqModal';
import SignupModal from './SignupModal';
import { Course, Schedule } from '../shared/types';
import ReactMarkdownWithHtml from 'react-markdown/with-html';
import ReactPlayer from 'react-player/lazy';
import { format } from 'date-fns';

interface ICourseHeroProps {
  course: Course;
}

const ScheduleNameMap: { [key in Schedule]: string } = {
  PART_TIME: 'Part Time',
  FULL_TIME: 'Full Time',
  FLEXI: 'Flexible',
};

const Hero = (props: ICourseHeroProps): JSX.Element => {
  const { course } = props;
  const [prereqsModalOpen, togglePrereqsModal] = useState(false);
  const [signupModalOpen, toggleSignupModal] = useState(false);

  const CourseMedia = (): JSX.Element => {
    if (course.videoUrl) {
      return (
        <div className="relative h-72 xl:h-96 content-center mt-12 lg:mt-24">
          <ReactPlayer
            controls
            light
            config={{ youtube: { embedOptions: { modestbranding: 1 } } }}
            url={course.videoUrl}
            className="react-player"
            width="100%"
            height="100%"
          />
        </div>
      );
    }

    return (
      <aside className="mt-12 lg:mt-24 lg:mx-6 md:border-white lg:border-4 rounded-none lg:rounded-xl lg:h-72 xl:h-96 2xl:h-auto lg:overflow-hidden">
        <Image
          src={imageUrl(course.image.url)}
          layout="responsive"
          width={635}
          height={414}
          className="md:rounded-lg"
        />
      </aside>
    );
  };

  const CohortStartDate = (): JSX.Element =>
    course.cohorts.length > 0 ? (
      <strong className="leading-9">
        {format(new Date(course.cohorts[0].startDate), 'MMM d, yyyy')}
      </strong>
    ) : (
      <strong className="leading-9">-</strong>
    );

  return (
    <section className="bg-tradewind lg:py-24">
      <div>
        <div className="lg:container flex flex-col-reverse lg:flex-none lg:grid lg:gap-4 mx-auto lg:grid-cols-2 pb-16">
          <div className="flex flex-col p-4">
            <h1 className="hero-heading-letter-spacing mb-12 leading-none mt-6 lg:mt-24">
              <span className="text-4xl text-white">{course.title}</span>
            </h1>
            <div className="text-white lg:mb-12 text-sm flex-grow">
              <ReactMarkdownWithHtml allowDangerousHtml>{course.subtitle}</ReactMarkdownWithHtml>
              <div className="py-6 flex flex-col md:flex-row">
                {course.syllabusDownloadURL && (
                  <a
                    href={course.syllabusDownloadURL}
                    target="_blank"
                    rel="noreferrer"
                    className="px-16 py-4 border-bg-gallery-white border text-gallery-white text-xs font-semibold bg-transparent hover:bg-gallery-white hover:text-tradewind hover:border-tradewind rounded-lg uppercase duration-200 ease-in-out w-full lg:w-auto mb-2 text-center mr-2"
                  >
                    Download Syllabus
                  </a>
                )}
                {course.allowSignups && (
                  <div>
                    <button
                      className="px-16 py-4 text-gallery-white text-xs font-semibold bg-terracotta hover:bg-terracotta-darker rounded-lg uppercase duration-200 ease-in-out w-full lg:w-auto mb-2"
                      onClick={() => toggleSignupModal(true)}
                    >
                      Sign up now
                    </button>
                    <SignupModal
                      signupBlurb={course.signupBlurb}
                      progressBar={course.showProgressBar}
                      imageUrl={imageUrl(course.image.url)}
                      title={`Signup for ${course.name}`}
                      visible={signupModalOpen}
                      courseCode={course.courseCode}
                      closeFn={() => toggleSignupModal(false)}
                      stepNames={course.stepNames}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col md:flex-row text-white mt-6">
              <div className="flex flex-col border-pixie-green border-l px-4 py-3 mb-6 lg:mb-0 lg:pr-16">
                <small className="uppercase">Estimated time</small>
                <strong className="uppercase leading-9">{course.estimatedTime}</strong>
                <div className="flex flex-row items-middle">
                  <small>{course.numberOfHours} hrs</small>
                  <svg
                    width="3px"
                    height="3px"
                    viewBox="0 0 3 3"
                    version="1.1"
                    className="place-self-center fill-current mx-1.5"
                  >
                    <circle id="Oval" cx="1.5" cy="1.5" r="1.5"></circle>
                  </svg>
                  <small>{ScheduleNameMap[course.schedule]}</small>
                </div>
              </div>
              {course.cohorts.length > 0 && (
                <div className="flex flex-col border-pixie-green border-l px-4 py-3 mb-6 lg:mb-0 lg:pr-16">
                  <small className="uppercase">Cohort starts on</small>
                  <CohortStartDate />
                </div>
              )}

              <div className="flex flex-col mb-6 lg:mb-0 border-pixie-green border-l px-4 py-3">
                <small className="uppercase">Pre-requisites</small>
                <div className="font-semibold">
                  <ReactMarkdownWithHtml allowDangerousHtml>{course.prereqs}</ReactMarkdownWithHtml>
                </div>

                {course.prereqs && course.prereqs !== 'None' ? (
                  <a href="#" onClick={() => togglePrereqsModal(true)}>
                    <small className="underline">See prerequisites in detail</small>
                    <PrereqModal
                      visible={prereqsModalOpen}
                      closeFn={() => togglePrereqsModal(false)}
                      imageUrl={imageUrl(course.image.url)}
                      prereqDetailsModal={course.prereqDetailsModal}
                    />
                  </a>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
          <CourseMedia />
        </div>
      </div>
    </section>
  );
};

export default Hero;
