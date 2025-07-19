//[dto GoalProgressDTO] -> progresso de uma meta de vendas
export class GoalProgressDTO {
  targetValue!: number;
  achievedValue!: number;
  progress!: number; // percentual (0–100)
}
