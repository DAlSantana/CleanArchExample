import { Cliente } from "@src/models/cliente";
import { ClienteInterfaceGateway } from "./interfaces/clienteInterface";

export default class ClienteGateway implements ClienteInterfaceGateway {
  public _clientes: Array<Cliente>;

  constructor() {
    this._clientes = new Array<Cliente>();
  }

  public validarSeClienteExiste(id: number): Array<Cliente> {
    if (this._clientes.some((cliente) => cliente.id === id)) {
      throw new Error("Cliente já existente");
    }
    return this._clientes;
  }

  public buscarClientes(): Array<Cliente> {
    return this._clientes;
  }

  public adicionarCliente(cliente: Cliente): void {
    this.validarSeClienteExiste(cliente.id).push(cliente);
  }

  public buscarClienteEspecifico(id: number): Cliente {
    if (this._clientes.some((cliente) => cliente.id === id)) {
      return this._clientes.find((cliente) => cliente.id === id)!;
    } else {
      throw new Error("Cliente não existe");
    }
  }
}
