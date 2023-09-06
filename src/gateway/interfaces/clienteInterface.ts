import { Cliente } from "@src/models/cliente";

// interface buscarClienteEspecifico {
//   buscarClienteEspecifico(nome: string): Cliente | void;
// }
interface buscarClientes {
  buscarClientes(): Array<Cliente>;
}
interface validarClienteExiste {
  validarSeClienteExiste(id: number): Array<Cliente>;
}

interface adicionarCliente {
  adicionarCliente(cliente: Cliente): void;
}
export interface ClienteInterfaceGateway
  extends validarClienteExiste,
    adicionarCliente,
    buscarClientes {
  validarSeClienteExiste(id: number): Array<Cliente>;
  adicionarCliente(cliente: Cliente): void;
  buscarClientes(): Array<Cliente>;
}
