//[graphql input LoginInput]
import { gql } from 'fastify-gql';

export const loginInput = gql`
  input LoginInput {
    email: String!
    senha: String!
  }
`;
