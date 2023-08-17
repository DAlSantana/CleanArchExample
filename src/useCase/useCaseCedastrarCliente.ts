import { Cliente } from "../models/cliente";

export default class useCaseCadastrarCliente {
  private _cliente: Cliente;

  constructor(nome: string, isPremium: boolean) {
    this._cliente = new Cliente(nome, isPremium);
  }

  public get cliente(): Cliente {
    return this._cliente;
  }
}
