import { Cliente } from "./cliente";
import { Item } from "./item";
import { Vendedor } from "./vendedor";

export class Venda {
  private VALOR_DESCONTO_PREMIUM = 10;
  private _vendedor: Vendedor;
  private _cliente: Cliente;
  private _itemsVenda: Array<Item>;
  private _valorTotalVenda: number;
  private _id: number;

  constructor(
    vendedor: Vendedor,
    cliente: Cliente,
    items: Array<Item>,
    id: number
  ) {
    this._vendedor = vendedor;
    this._cliente = cliente;
    this._itemsVenda = items;
    this._id = id;
    this._valorTotalVenda = this.calcularValorDaVenda();
  }

  public get id(): number {
    return this._id;
  }

  private adicionarDescontNaVendaSeClienteForPremium(
    valorTotal: number
  ): number {
    return valorTotal - this.VALOR_DESCONTO_PREMIUM;
  }

  public calcularValorDaVenda(): number {
    let valorTotalVenda = 0;
    this._itemsVenda.forEach((item) => {
      valorTotalVenda += item.valor;
    });

    if (this._cliente.isPremium) {
      return this.adicionarDescontNaVendaSeClienteForPremium(valorTotalVenda);
    }
    return valorTotalVenda;
  }
}
