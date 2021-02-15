import { gql } from '@apollo/client';

export const TEAM_MEMBER_SLUGS = gql`
  query {
    teamMembers(sort: "order:asc") {
      id
      slug
    }
  }
`;

export const FIND_TEAM_MEMBER = gql`
  query TeamMember($slug: String) {
    teamMember: teamMembers(limit: 1, where: { slug: $slug }) {
      id
      name
      position
      bio
      github
      twitter
      linkedin
      photo {
        url
      }
    }

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

    footer {
      byline
    }
  }
`;
