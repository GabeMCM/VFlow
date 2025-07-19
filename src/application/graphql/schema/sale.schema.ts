//[graphql schema Sale]
import { gql } from 'fastify-gql';

export const saleSchema = gql`
  type Sale {
    id: ID!
    client: Client!
    seller: User!
    items: [SaleItem!]!
    totalValue: Float!
    createdAt: String!
  }

  type SaleItem {
    name: String!
    unitPrice: Float!
    quantity: Int!
    totalPrice: Float!
  }
`;
