//[dto UpdateSaleDTO] -> dados para atualizar uma venda
class SaleItemUpdateDTO {
  name!: string;
  unitPrice!: number;
  quantity!: number;
}

export class UpdateSaleDTO {
  saleId!: string; // UUID
  items?: SaleItemUpdateDTO[];
  discount?: number;
}
