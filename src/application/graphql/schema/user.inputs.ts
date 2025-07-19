//[graphql input UserInputs]
import { gql } from 'fastify-gql';

export const userInputs = gql`
  input RegisterUserInput {
    name: String!
    email: String!
    password: String!
    role: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }
`;
