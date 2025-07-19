//[graphql type Sale]
import { gql } from 'fastify-gql';

export const saleType = gql`
  type Sale {
    id: ID!
    clienteId: ID!
    produtos: [String]!
    valorTotal: Float!
    dataVenda: String!
  }
`;
