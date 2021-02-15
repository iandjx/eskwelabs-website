import { gql } from '@apollo/client';

export const APPLY_TO_COURSE = gql`
  mutation UpdateApplication($application: ApplicationInput!) {
    updateApplication(application: $application) {
      applicationId
    }
  }
`;
