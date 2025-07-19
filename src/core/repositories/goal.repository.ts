//[interface GoalRepository] -> contrato para persistência de metas
import { Goal } from '../entities/goal.entity';
import { UUID } from '../value-objects/uuid.vo';

export interface IGoalRepository {
  save(goal: Goal): Promise<void>;
  findById(id: UUID): Promise<Goal | null>;
  findByUserId(userId: UUID): Promise<Goal[]>;
  update(goal: Goal): Promise<void>;
  delete(id: UUID): Promise<void>;
}
