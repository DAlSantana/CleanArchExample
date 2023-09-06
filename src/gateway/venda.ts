import { Venda } from "../models/venda";

export default class VendaGateway {
  private _vendas: Array<Venda>;

  constructor() {
    this._vendas = new Array<Venda>();
  }
}
