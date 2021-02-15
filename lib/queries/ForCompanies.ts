import { gql } from '@apollo/client';

export const FOR_COMPANIES_QUERIES = gql`
  query {
    forCompany {
      id
      heroTitle
      heroSubTitle
      heroButtonText
      leaderTitle
      leaderImage {
        url
      }
      leaderDescription
      partnerLogosTitle
      partnerLogos {
        url
        width
        height
      }
      whyPartnerTitle

      testimonialsTitle

      ourApproachTitle
      contactUsTitle
      contactUsDescription
    }

    partnerResources(sort: "order:asc") {
      id
      image {
        url
      }
      title
      description
    }

    partnerCaseStudies(sort: "order:asc") {
      id
      title
      subtitle
      description
      companyImage {
        url
      }
    }

    companiesOurApproachSteps(sort: "step:asc") {
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

export const FOR_COMPANIES_HERO = gql`
  query {
    forCompany {
      id
      heroTitle
      heroSubTitle
      heroButtonText
    }
  }
`;

export const FOR_COMPANIES_LEADER = gql`
  query {
    forCompany {
      id
      leaderTitle
      leaderImage {
        url
      }
      leaderDescription
    }
  }
`;

export const FOR_COMPANIES_PARTNERS = gql`
  query {
    forCompany {
      id
      partnerLogosTitle
      partnerLogos {
        url
        width
        height
      }
    }
  }
`;

export const FOR_COMPANIES_WHY_PARTNER = gql`
  query {
    forCompany {
      id
      whyPartnerTitle
    }
    partnerResources(sort: "order:asc") {
      id
      image {
        url
      }
      title
      description
    }
  }
`;

export const FOR_COMPANIES_OUR_APPROACH = gql`
  query {
    forCompany {
      id
      ourApproachTitle
    }

    companiesOurApproachSteps(sort: "step:asc") {
      id
      step
      title
      description
    }
  }
`;

export const FOR_COMPANIES_CONTACT_US = gql`
  query {
    forCompany {
      id
      contactUsTitle
      contactUsDescription
    }
  }
`;

export const CREATE_BUSINESS_CONTACT = gql`
  mutation CreateBusinessContact($contact: BusinessContactInput!) {
    createBusinessContact(contact: $contact) {
      success
    }
  }
`;
