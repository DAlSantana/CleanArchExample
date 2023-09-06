import { Cliente } from "./cliente";
import { Item } from "./item";
import { Vendedor } from "./vendedor";

export class Venda {
  private _vendedor: Vendedor;
  private _cliente: Cliente;
  private _itemsVenda: Array<Item>;

  constructor(vendedor: Vendedor, cliente: Cliente) {
    this._vendedor = vendedor;
    this._cliente = cliente;
    this._itemsVenda = new Array<Item>();
  }

  public adicionarItemNaVenda(item: Item): void {
    this._itemsVenda.push(item);
  }
}
