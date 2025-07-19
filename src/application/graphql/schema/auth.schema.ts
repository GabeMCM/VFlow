//[graphql schema Auth]
import { gql } from 'fastify-gql';

export const authSchema = gql`
  type AuthToken {
    token: String!
    expiresIn: Int!
  }
`;
