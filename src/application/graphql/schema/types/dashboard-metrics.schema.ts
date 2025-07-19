//[graphql type DashboardMetrics]
import { gql } from 'fastify-gql';

export const dashboardMetricsType = gql`
  type DashboardMetrics {
    totalVendas: Float!
    metaLoja: Float!
    percentualAlcanceLoja: Float!
    consultores: [ConsultorMetric]!
    ranking: [RankingEntry]!
  }

  type ConsultorMetric {
    nome: String!
    totalVendas: Float!
    metaPessoal: Float!
    percentualAlcance: Float!
  }

  type RankingEntry {
    nome: String!
    percentualAlcance: Float!
  }
`;
