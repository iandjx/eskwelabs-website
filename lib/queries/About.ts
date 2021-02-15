import { gql } from '@apollo/client';

export const ABOUT_US_QUERIES = gql`
  query {
    aboutUs {
      id
      heroToplineTitle
      heroTitle
      heroDescription
      whatWeDoTitle
      whatWeDoDescription
      aboutTheTeamTitle
      aboutTheTeamQuote
      aboutTheTeamDescription
      aboutTheTeamButtonText
      coreTeamTitle
      valuesTitle
    }

    whatWeDoBoxes(sort: "order:asc") {
      id
      title
      picture {
        url
      }
    }

    teamMembers(sort: "order:asc") {
      id
      name
      position
      slug
      photo {
        url
      }
    }

    values(sort: "order:asc") {
      title
      description
      order
      picture {
        url
      }
    }

    footer {
      byline
    }
  }
`;

export const ABOUT_US_HERO_SECTION = gql`
  query {
    aboutUs {
      id
      heroToplineTitle
      heroTitle
      heroDescription
    }
  }
`;

export const ABOUT_US_WHAT_WE_DO = gql`
  query {
    aboutUs {
      whatWeDoTitle
      whatWeDoDescription
    }

    whatWeDoBoxes(sort: "order:asc") {
      id
      title
      picture {
        url
      }
    }
  }
`;

export const ABOUT_US_TEAM = gql`
  # Write your query or mutation here
  query {
    aboutUs {
      aboutTheTeamTitle
      aboutTheTeamQuote
      aboutTheTeamDescription
      aboutTheTeamButtonText
    }
  }
`;

export const ABOUT_US_TEAM_MEMBERS = gql`
  query {
    aboutUs {
      coreTeamTitle
    }
    teamMembers(sort: "order:asc") {
      id
      name
      position
      slug
      photo {
        url
      }
    }
  }
`;

export const ABOUT_US_VALUES = gql`
  query {
    aboutUs {
      id
      valuesTitle
    }

    values(sort: "order:asc") {
      title
      description
      order
      picture {
        url
      }
    }
  }
`;
