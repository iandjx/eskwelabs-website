import { gql } from '@apollo/client';

export const PRVIVACY_QUERY = gql`
  query {
    footer {
      byline
    }
  }
`;
