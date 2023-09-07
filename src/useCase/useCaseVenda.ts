import { Cliente } from "../models/cliente";
import { Item } from "../models/item";
import { Vendedor } from "../models/vendedor";
import ItemGateway from "../gateway/itemGateway";
import VendaGateway from "../gateway/vendaGateway";
import { Venda } from "../models/venda";

export class useCaseVenda {
  private VALOR_DESCONTO_PREMIUM = 10;
  private _vendaGateway: VendaGateway;
  private _cliente: Cliente;
  private _itens: Array<Item>;
  private _vendedor: Vendedor;
  private _dataDaVenda: Date;

  constructor(
    cliente: Cliente,
    vendendor: Vendedor,
    itens: Array<Item>,
    vendaGateway: VendaGateway,
    idVenda: number
  ) {
    this._cliente = cliente;
    this._itens = itens;
    this._dataDaVenda = new Date();
    this._vendaGateway = vendaGateway;
    this._vendedor = vendendor;
    vendaGateway.adicionarVenda(
      new Venda(this._vendedor, this._cliente, this._itens, idVenda)
    );
  }
}
