//[graphql schema Sync]
import { gql } from 'fastify-gql';

export const syncSchema = gql`
  type SyncResult {
    success: Boolean!
    conflictsResolved: Int!
    syncedAt: String!
  }
`;
