import { Goal } from '../entities/goal.entity';
import { UUID } from '../value-objects/uuid.vo';

// Interface para persistência e consulta de metas de vendas.
export interface GoalRepository {
  save(goal: Goal): Promise<void>;
  findById(id: UUID): Promise<Goal | null>;
  findByUserId(userId: UUID): Promise<Goal[]>;
  update(goal: Goal): Promise<void>;
  delete(id: UUID): Promise<void>;
}
