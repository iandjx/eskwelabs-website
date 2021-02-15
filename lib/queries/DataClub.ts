import { gql } from '@apollo/client';

export const DATA_CLUB_SPRINT_SLUGS = gql`
  query {
    dataClubSprints(sort: "order:desc") {
      id
      slug
    }
  }
`;

export const DATA_CLUB_SPRINTS = gql`
  query {
    dataClubSprints(sort: "order:desc") {
      id
      image {
        url
        alternativeText
      }
      slug
      name
      title
      blurb
      fullDescription
      data_club_tags {
        name
      }
    }

    faqs: dataClubFaqs(sort: "order:asc") {
      id
      title
      content
      order
    }

    footer {
      byline
    }
  }
`;

export const DATA_CLUB_FAQS = gql`
  query {
    faqs: dataClubFaqs(sort: "order:asc") {
      id
      title
      content
      order
    }
  }
`;

export const FIND_DATA_CLUB_SPRINT = gql`
  query DataClubSprint($slug: String) {
    sprint: dataClubSprints(limit: 1, where: { slug: $slug }) {
      id
      image {
        url
        alternativeText
      }
      slug
      name
      title
      blurb
      fullDescription
      data_club_tags {
        name
      }
    }

    footer {
      byline
    }
  }
`;

export const CREATE_DATACLUB_APPLICANT = gql`
  mutation createDataClubApplicant($applicant: DataClubApplicantInput!) {
    createDataClubApplicant(applicant: $applicant) {
      success
    }
  }
`;
