import { gql } from '@apollo/client';

export const CAREERS_QUERIES = gql`
  query {
    career {
      id
      heroTitle
      heroSubTitle
      heroButtonText
      leaderTitle
      leaderImage {
        url
      }
      leaderDescription
      joinNetworkTitle
      networkLogos {
        url
      }
      whyMentorTitle

      testimonialsTitle

      ourHiringProcess
      contactUsTitle
      contactUsDescription
    }

    whyMentorResources(sort: "order:asc") {
      id
      image {
        url
      }
      title
      description
    }

    mentorTestimonials(sort: "order:asc") {
      id
      title
      subtitle
      description
      image {
        url
      }
    }

    hiringProcessSteps(sort: "step:asc") {
      id
      step
      title
      description
    }

    footer {
      byline
    }
  }
`;

export const CAREERS_HERO = gql`
  query {
    career {
      id
      heroTitle
      heroSubTitle
      heroButtonText
    }
  }
`;

export const CAREERS_ABOUT_MENTORSHIP = gql`
  query {
    career {
      leaderTitle
      leaderImage {
        url
      }
      leaderDescription
    }
  }
`;

export const CAREERS_JOIN_THE_NETWORK = gql`
  query {
    career {
      joinNetworkTitle
      networkLogos {
        url
      }
    }
  }
`;

export const CAREERS_WHY_MENTOR = gql`
  query {
    career {
      whyMentorTitle
    }
    whyMentorResources(sort: "order:asc") {
      id
      image {
        url
      }
      title
      description
    }
  }
`;

export const CAREERS_HIRING_PROCESS = gql`
  query {
    career {
      ourHiringProcess
    }

    hiringProcessSteps(sort: "step:asc") {
      id
      step
      title
      description
    }
  }
`;

export const CAREERS_CONTACT_US = gql`
  query {
    career {
      contactUsTitle
      contactUsDescription
    }
  }
`;

export const CREATE_APPLICANT = gql`
  mutation CreateCareerApplicant($applicant: CareerApplicantInput!) {
    createCareerApplicant(applicant: $applicant) {
      success
    }
  }
`;
