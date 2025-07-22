import { GetDashboardMetricsUseCase } from '../../../core/use-cases/get-dashboard-metrics.usecase';
import { DashboardMetrics } from '../types/dashboard-metrics.type';

// Retorna as métricas de vendas e metas para o dashboard.
export class GetDashboardMetricsResolver {
  constructor(private readonly getDashboardMetricsUseCase: GetDashboardMetricsUseCase) {}

  public async getDashboardMetrics({ periodo }: { periodo: string }): Promise<DashboardMetrics> {
    // TODO: implementation
    return null as any;
  }
}
