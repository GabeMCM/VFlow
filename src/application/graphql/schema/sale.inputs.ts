//[graphql input SaleInputs]
import { gql } from 'fastify-gql';

export const saleInputs = gql`
  input SaleItemInput {
    name: String!
    unitPrice: Float!
    quantity: Int!
  }

  input CreateSaleInput {
    clientId: ID!
    sellerId: ID!
    items: [SaleItemInput!]!
    discount: Float
  }

  input UpdateSaleInput {
    saleId: ID!
    items: [SaleItemInput!]
    discount: Float
  }
`;
