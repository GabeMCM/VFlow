//[graphql schema User]
import { gql } from 'fastify-gql';

export const userSchema = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    role: String!
    createdAt: String!
  }
`;
