import { gql } from '@apollo/client';

export const COURSE_SLUGS = gql`
  query {
    courses {
      id
      slug
    }
  }
`;

export const FIND_COURSE = gql`
  query Course($slug: String) {
    course: courses(limit: 1, where: { slug: $slug }) {
      id
      slug
      name

      syllabusDownloadURL

      estimatedTime
      numberOfHours
      schedule
      prereqs
      prereqDetailsModal
      title
      subtitle
      image {
        url
        alternativeText
      }
      videoUrl
      description
      applicationProcessTitle
      applicationProcessImage {
        url
        alternativeText
      }
      applicationProcessURL
      dataClub
      getToKnowUsTitle
      upcomingCohortsTitle

      cohorts(sort: "startDate:asc") {
        id
        startDate
        title
        topicsCovered
        learnMoreModal
      }

      careerPathwayComponent

      course_resources(sort: "order:asc") {
        id
        image {
          url
          alternativeText
        }
        order
        title
        description
        buttonText
        buttonURL
      }

      course_spotlights(sort: "order:asc") {
        id
        buttonText
        title
        subtitle
        description
        image {
          url
          alternativeText
        }
      }

      faqTitle
      faqs(sort: "order:asc") {
        id
        title
        content
        order
      }

      whatYouWillLearnTitle
      modules(sort: "order:asc") {
        id
        title
        description
        order
        module_topics(sort: "order:asc") {
          title
          content
          order
        }
      }

      allowSignups
      signupBlurb
      stepNames
      showProgressBar
      courseCode

      displayFooterCTA
      footerCTATitle
      footerCTASubtitle
      footerCTAButtonText
    }

    footer {
      byline
    }
  }
`;
