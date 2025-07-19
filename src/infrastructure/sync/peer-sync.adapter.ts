//[interface IPeerSyncAdapter] -> contrato para sincronização P2P
import { SyncDataDTO } from '../../application/dtos/sync-data.dto';

export interface IPeerSyncAdapter {
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  sendData(data: any): Promise<void>;
  receiveData(): Promise<any>;
  onDataReceived(callback: (data: any) => void): void;
}
