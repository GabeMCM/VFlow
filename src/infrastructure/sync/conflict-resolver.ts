import { SyncData } from '../../core/types/sync-data.type';
import { Conflict, ResolutionStrategy } from '../../core/types/conflict.type';

// Componente dedicado a detectar e resolver conflitos de dados durante a sincronização,
// aplicando regras de negócio para mesclar ou escolher a versão correta.
export interface ConflictResolver {
  detectConflicts(localData: SyncData, remoteData: SyncData): Conflict[];
  resolve(conflicts: Conflict[]): SyncData;
  applyResolutionStrategy(strategy: ResolutionStrategy): void;
}
