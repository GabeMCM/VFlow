//[dto SyncResultDTO] -> resultado do processo de sincronização
export class SyncResultDTO {
  success!: boolean;
  conflictsResolved!: number;
  syncedAt!: string; // ISO 8601
}
