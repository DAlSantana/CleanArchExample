import { Cliente } from "@src/models/cliente";

interface validarClienteExiste {
  validarSeClienteExiste(nome: string): Array<Cliente>;
}

interface adicionarCliente {
  adicionarCliente(cliente: Cliente): void;
}
export interface ClienteInterfaceGateway
  extends validarClienteExiste,
    adicionarCliente {
  validarSeClienteExiste(nome: string): Array<Cliente>;
  adicionarCliente(cliente: Cliente): void;
}
