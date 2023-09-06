import { Cliente } from "@src/models/cliente";
import { ClienteInterfaceGateway } from "./interfaces/clienteInterface";

export default class ClienteGateway implements ClienteInterfaceGateway {
  public static _clientes: Array<Cliente>;

  constructor() {
    ClienteGateway._clientes = new Array<Cliente>();
  }

  public validarSeClienteExiste(nome: string): Array<Cliente> {
    if (ClienteGateway._clientes.some((cliente) => cliente.nome === nome)) {
      throw new Error("Cliente já existente");
    }
    return ClienteGateway._clientes;
  }

  public buscarClientes(): Array<Cliente> {
    return ClienteGateway._clientes;
  }

  public adicionarCliente(cliente: Cliente): void {
    this.validarSeClienteExiste(cliente.nome).push(cliente);
  }

  public static buscarClienteEspecifico(nome: string): Cliente {
    if (ClienteGateway._clientes.find((cliente) => cliente.nome == nome)) {
      return ClienteGateway._clientes.find((cliente) => cliente.nome == nome)!;
    } else {
      throw new Error("Cliente não existe");
    }
  }
}
