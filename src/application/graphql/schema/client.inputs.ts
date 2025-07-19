//[graphql input ClientInputs]
import { gql } from 'fastify-gql';

export const clientInputs = gql`
  input AddressInput {
    street: String!
    number: String!
    complement: String
    city: String!
    state: String!
    zipCode: String!
  }

  input RegisterClientInput {
    name: String!
    cpf: String!
    phoneNumber: String!
    email: String!
    address: AddressInput!
    status: String!
  }
`;
