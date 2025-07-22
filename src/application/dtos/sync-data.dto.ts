// Representa os dados necessários para iniciar o processo de sincronização.
export class SyncDataDTO {
  userId: string; // UUID
  lastSyncAt: string; // ISO 8601
}
