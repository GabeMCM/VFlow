//[dto SyncDataDTO] -> dados para iniciar sincronização
export class SyncDataDTO {
  userId!: string; // UUID
  lastSyncAt!: string; // ISO 8601
}
