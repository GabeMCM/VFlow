//[dto SaleDTO] -> dados completos de uma venda
class SaleItemDetailDTO {
  name!: string;
  unitPrice!: number;
  quantity!: number;
  totalPrice!: number;
}

export class SaleDTO {
  id!: string;
  clientId!: string;
  sellerId!: string;
  items!: SaleItemDetailDTO[];
  totalValue!: number;
  createdAt!: string; // ISO 8601
}
