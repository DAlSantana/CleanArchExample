import { Cliente } from "@src/models/cliente";
import { ClienteInterfaceGateway } from "./interfaces/clienteInterface";

export class ClienteGateway implements ClienteInterfaceGateway {
  private _clientes: Array<Cliente>;

  constructor() {
    this._clientes = new Array<Cliente>();
  }

  public validarSeClienteExiste(nome: string): Array<Cliente> {
    if (this._clientes.some((cliente) => cliente.nome === nome)) {
      throw new Error("Cliente já existente");
    }
    return this._clientes;
  }

  public get clientes(): Array<Cliente> {
    return this._clientes;
  }

  public adicionarCliente(cliente: Cliente): void {
    this.validarSeClienteExiste(cliente.nome).push(cliente);
  }
}
