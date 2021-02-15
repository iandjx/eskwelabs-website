import { gql } from '@apollo/client';

export const HOMEPAGE_QUERIES = gql`
  query {
    home {
      id
      heroTitle
      heroSubtitle
      heroButtonIndividualsText
      heroButtonCompaniesText
      howWeWorkTitle
      howWeWorkDescription
      chooseYourPathTitle
      chooseYourPathSubtitle
      futureProofYourTeamTitle
      futureProofYourTeamSubtitle
      recentBlogPostTitle
      recentBlogPostDescription
      joinTheCommunityTitle
      notSureWhereToStartTitle
      notSureWhereToStartButtonText
    }

    howWeWorkBoxes(sort: "order:asc") {
      icon
      title
      description
      order
    }

    chooseYourPaths(sort: "order:asc") {
      id
      image {
        url
        alternativeText
      }
      title
      description
      order
      path_course_items(sort: "order:asc") {
        image {
          url
          alternativeText
        }
        title
        description
        order
        buttonText
        buttonURL
      }
    }

    joinTheCommunityTestimonials(sort: "order:asc") {
      picture {
        url
        alternativeText
      }
      name
      quote
      order
    }

    blogPosts(sort: "publishedAt:desc", limit: 5, publicationState: LIVE) {
      image {
        url
        alternativeText
      }
      title
      subtitle
      slug
      blog_tags {
        name
        slug
      }
    }

    footer {
      byline
    }
  }
`;

export const HOMEPAGE_HERO_SECTION = gql`
  query {
    home {
      id
      heroTitle
      heroSubtitle
      heroButtonIndividualsText
      heroButtonCompaniesText
    }
  }
`;

export const HOW_WE_WORK = gql`
  query {
    home {
      id
      howWeWorkTitle
      howWeWorkDescription
    }
    howWeWorkBoxes(sort: "order:desc") {
      icon
      title
      description
      order
    }
  }
`;

export const CHOOSE_YOUR_PATH = gql`
  query {
    home {
      id
      chooseYourPathTitle
      chooseYourPathSubtitle
    }
    chooseYourPaths(sort: "order:asc") {
      id
      image {
        previewUrl
        url
        alternativeText
      }
      title
      description
      order
      path_course_items(sort: "order:asc") {
        image {
          previewUrl
          url
          alternativeText
        }
        title
        description
        order
        buttonText
        buttonURL
      }
    }
  }
`;

export const FUTURE_PROOF_YOUR_TEAM = gql`
  query {
    home {
      id
      futureProofYourTeamTitle
      futureProofYourTeamSubtitle
    }
  }
`;

export const RECENT_BLOG_POSTS = gql`
  query {
    home {
      id
      recentBlogPostTitle
      recentBlogPostDescription
    }
    blogPosts(sort: "publishedAt:desc", limit: 5, publicationState: LIVE) {
      image {
        url
        alternativeText
      }
      title
      subtitle
      slug
      blog_tags {
        name
        slug
      }
    }
  }
`;

export const JOIN_THE_COMMUNITY = gql`
  query {
    home {
      id
      joinTheCommunityTitle
    }
    joinTheCommunityTestimonials(sort: "order:asc") {
      picture {
        url
        alternativeText
      }
      name
      quote
      order
    }
  }
`;

export const NOT_SURE_WHERE_TO_START = gql`
  query {
    home {
      id
      notSureWhereToStartTitle
      notSureWhereToStartButtonText
    }
  }
`;
