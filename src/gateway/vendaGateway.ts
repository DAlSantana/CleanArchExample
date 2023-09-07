import { Venda } from "../models/venda";
import { VendaInterfaceGateway } from "./interfaces/vendaInterface";

export default class VendaGateway implements VendaInterfaceGateway {
  private _vendas: Array<Venda>;

  constructor() {
    this._vendas = new Array<Venda>();
  }

  public adicionarVenda(venda: Venda) {
    this._vendas.push(venda);
  }

  public buscarVenda(id: number): Venda {
    if (this._vendas.some((venda) => venda.id === id)) {
      return this._vendas.find((venda) => venda.id === id)!;
    } else {
      throw new Error("Venda não existente!");
    }
  }
}
