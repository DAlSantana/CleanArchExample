import ClienteGateway from "../gateway/clienteGateway";
import { Cliente } from "../models/cliente";

export default class useCaseCadastrarCliente {
  private _cliente: Cliente;

  constructor(
    nome: string,
    isPremium: boolean,
    id: number,
    clienteGateway: ClienteGateway
  ) {
    this._cliente = new Cliente(nome, isPremium, id);
    clienteGateway.adicionarCliente(this._cliente);
  }

  public get cliente(): Cliente {
    return this._cliente;
  }
}
