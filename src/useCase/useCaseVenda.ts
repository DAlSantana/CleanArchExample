import { Cliente } from "../models/cliente";
import { Item } from "../models/item";
import { Vendedor } from "../models/vendedor";
import ItemGateway from "../gateway/itemGateway";

export class useCaseVenda {
  private VALOR_DESCONTO_PREMIUM = 10;
  private _cliente: Cliente;
  private _itens: Array<Item>;
  private _vendedor: Vendedor;
  private _dataDaVenda: Date;

  constructor(cliente: Cliente, vendendor: Vendedor, items: Array<Item>) {
    this._cliente = cliente;
    this._itens = items;
    this._dataDaVenda = new Date();
    this._vendedor = vendendor;
  }

  private adicionarDescontNaVendaSeClienteForPremium(
    valorTotal: number
  ): number {
    return valorTotal - this.VALOR_DESCONTO_PREMIUM;
  }

  //Depreceated
  // public adicionarItemNaVenda(items: Array<string>): void {
  //   const itemsDaVenda = items.map((item) => {
  //     return ItemGateway.recuperarItemEspecifico(item);
  //   });

  //   this._itens = itemsDaVenda;
  // }

  //TODO: Refazer esse método
  public calcularValorDaVenda(): number {
    let valorTotalVenda = 0;
    this._itens.forEach((item) => {
      valorTotalVenda += item.valor;
    });

    if (this._cliente.isPremium) {
      return this.adicionarDescontNaVendaSeClienteForPremium(valorTotalVenda);
    }
    return valorTotalVenda;
  }
}
