import { Vendedor } from "@src/models/vendedor";

interface cadastrarVendendor {
  cadastrarVendedor(vendedor: Vendedor): void;
}

interface buscarTodosOsVendedores {
  buscarTodosOsVendedores(): Array<Vendedor>;
}

interface validarSeExisteVendedor {
  validarSeExisteVendedor(matricula: string): Array<Vendedor>;
}

export interface VendendorInterfaceGateway
  extends cadastrarVendendor,
    buscarTodosOsVendedores,
    validarSeExisteVendedor {
  cadastrarVendedor(vendedor: Vendedor): void;
  buscarTodosOsVendedores(): Array<Vendedor>;
  validarSeExisteVendedor(matricula: string): Array<Vendedor>;
  //buscarVendedorEspecifico(matricula: string): Vendedor | void;
}
