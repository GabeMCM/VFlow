//[graphql input RegisterSaleInput]
import { gql } from 'fastify-gql';

export const registerSaleInput = gql`
  input RegisterSaleInput {
    clienteId: ID!
    produtos: [String]!
    valorTotal: Float!
  }
`;
