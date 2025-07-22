type Query {
  # Retorna as métricas de vendas e metas para o dashboard.
  getDashboardMetrics(periodo: String!): DashboardMetrics
}
