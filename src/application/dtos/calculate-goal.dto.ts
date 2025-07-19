//[dto CalculateGoalDTO] -> dados para calcular progresso de meta
export class CalculateGoalDTO {
  userId!: string; // UUID
  startDate!: string; // ISO 8601
  endDate!: string; // ISO 8601
}
