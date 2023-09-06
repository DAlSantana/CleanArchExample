import ClienteGateway from "../gateway/clienteGateway";
import { Cliente } from "../models/cliente";

export default class useCaseCadastrarCliente {
  private _cliente: Cliente;

  constructor(
    nome: string,
    isPremium: boolean,
    clienteGateway: ClienteGateway
  ) {
    this._cliente = new Cliente(nome, isPremium);
    clienteGateway.adicionarCliente(this._cliente);
  }

  public get cliente(): Cliente {
    return this._cliente;
  }
}
