// Representa os dados para atualizar uma venda existente.
export class UpdateSaleDTO {
  saleId: string; // UUID
  items: {
    name: string;
    unitPrice: number;
    quantity: number;
  }[];
  discount: number;
}
