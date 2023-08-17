import { Cliente } from "../models/cliente";
import { Item } from "../models/item";
import { Vendedor } from "../models/vendedor";

export class UseCaseVenda {
  private VALOR_DESCONTO_PREMIUM = 10;
  private _cliente: Cliente;
  private _itens: Array<Item>;
  private _vendedor: Vendedor;
  private _dataDaVenda: Date;

  constructor(cliente: Cliente, vendendor: Vendedor) {
    this._cliente = cliente;
    this._itens = new Array<Item>();
    this._dataDaVenda = new Date();
    this._vendedor = vendendor;
  }

  private adicionarDescontNaVendaSeClienteForPremium(
    valorTotal: number
  ): number {
    return valorTotal - this.VALOR_DESCONTO_PREMIUM;
  }

  public adicionarItemNaVenda(item: Item): void {
    this._itens.push(item);
  }

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
