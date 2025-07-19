//[graphql schema Client]
import { gql } from 'fastify-gql';

export const clientSchema = gql`
  type Client {
    id: ID!
    name: String!
    cpf: String!
    phoneNumber: String!
    email: String!
    address: Address!
    status: String!
    createdAt: String!
  }

  type Address {
    street: String!
    number: String!
    complement: String
    city: String!
    state: String!
    zipCode: String!
  }
`;
