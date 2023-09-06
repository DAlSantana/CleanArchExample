import VendendorGateway from "@src/gateway/vendendorGateway";
import { Vendedor } from "../models/vendedor";

export default class useCaseCadastrarVendedor {
  private _vendedor: Vendedor;

  constructor(nome: string, matriucla: string, gateway: VendendorGateway) {
    this._vendedor = new Vendedor(nome, matriucla);
    gateway.cadastrarVendedor(this._vendedor);
  }
}
