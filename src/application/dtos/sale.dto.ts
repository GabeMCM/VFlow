// Representa os dados completos de uma venda retornados pela API.
export class SaleDTO {
  id: string;
  clientId: string;
  sellerId: string;
  items: {
    name: string;
    unitPrice: number;
    quantity: number;
    totalPrice: number;
  }[];
  totalValue: number;
  createdAt: string; // ISO 8601
}
