//[dto CreateSaleDTO] -> dados para criar uma nova venda
class SaleItemDTO {
  name!: string;
  unitPrice!: number;
  quantity!: number;
}

export class CreateSaleDTO {
  clientId!: string; // UUID
  sellerId!: string; // UUID
  items!: SaleItemDTO[];
  discount?: number; // percentual ou valor fixo
}
