// Representa os dados necessários para registrar uma nova venda.
export class CreateSaleDTO {
  clientId: string; // UUID
  sellerId: string; // UUID
  items: {
    name: string;
    unitPrice: number;
    quantity: number;
  }[];
  discount: number; // percentual ou valor fixo (opcional)
}
