//[graphql schema Goal]
import { gql } from 'fastify-gql';

export const goalSchema = gql`
  type GoalProgress {
    targetValue: Float!
    achievedValue: Float!
    progress: Float!
  }
`;
