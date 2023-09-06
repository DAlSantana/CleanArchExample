import { Cliente } from "@src/models/cliente";
import { ClienteInterfaceGateway } from "./interfaces/clienteInterface";

export default class ClienteGateway implements ClienteInterfaceGateway {
  public static _clientes: Array<Cliente>;

  constructor() {
    ClienteGateway._clientes = new Array<Cliente>();
  }

  public validarSeClienteExiste(id: number): Array<Cliente> {
    if (ClienteGateway._clientes.some((cliente) => cliente.id === id)) {
      throw new Error("Cliente já existente");
    }
    return ClienteGateway._clientes;
  }

  public buscarClientes(): Array<Cliente> {
    return ClienteGateway._clientes;
  }

  public adicionarCliente(cliente: Cliente): void {
    this.validarSeClienteExiste(cliente.id).push(cliente);
  }

  public static buscarClienteEspecifico(id: number): Cliente {
    if (this._clientes.some((cliente) => cliente.id == id)) {
      return ClienteGateway._clientes.find((cliente) => cliente.id == id)!;
    } else {
      throw new Error("Cliente não existe");
    }
  }
}
