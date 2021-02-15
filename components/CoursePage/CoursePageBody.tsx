import Hero from './Hero';
import CohortsList from './CohortsList';
import LearningModules from './LearningModules';
import { Course, CareerPathwayComponent } from '../shared/types';
import DSPathway from './DSPathway';
import ApplicationProcess from './ApplicationProcess';
import Spotlights from './Spotlights';
import Resources from './Resources';
import FAQList from '../shared/FAQList';

const CoursePage = function ({ course }: { course: Course }): JSX.Element {
  return (
    <div>
      <Hero course={course} />
      <section className="bg-white">
        <CohortsList cohorts={course.cohorts} upcomingCohortsTitle={course.upcomingCohortsTitle} />
      </section>
      <section className="bg-white-lilac">
        <LearningModules
          modules={course.modules}
          whatYouWillLearnTitle={course.whatYouWillLearnTitle}
        />
      </section>
      {course.careerPathwayComponent == CareerPathwayComponent.PATHWAY_TO_DATA_SCIENCE && (
        <section className="bg-wild-blue-yonder">
          <DSPathway courseSlug={course.slug} />
        </section>
      )}
      <section className="bg-white">
        <ApplicationProcess
          title={course.applicationProcessTitle}
          videoURL={course.applicationProcessURL}
          image={course.applicationProcessImage}
        />
      </section>
      <section className="bg-pickled-bluewood">
        <Spotlights spotlights={course.course_spotlights} />
      </section>
      <section className="bg-white-lilac">
        <Resources title={course.getToKnowUsTitle} resources={course.course_resources} />
      </section>
      <section className="bg-white">
        <FAQList title={course.faqTitle} faqs={course.faqs} />
      </section>
    </div>
  );
};

export default CoursePage;
