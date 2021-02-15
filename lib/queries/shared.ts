import { gql } from '@apollo/client';

export const FOOTER = gql`
  query {
    footer {
      byline
    }
  }
`;
