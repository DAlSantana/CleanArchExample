import { Vendedor } from "../models/vendedor";
import { VendendorInterfaceGateway } from "./interfaces/vendendorInterface";

export default class VendendorGateway implements VendendorInterfaceGateway {
  private static _vendedores: Array<Vendedor>;

  constructor() {
    VendendorGateway._vendedores = new Array<Vendedor>();
  }

  public static buscarVendedorEspecifico(matricula: string): Vendedor {
    if (this._vendedores.find((vendedor) => vendedor.matricula === matricula)) {
      return this._vendedores.find(
        (vendedor) => vendedor.matricula === matricula
      )!;
    } else {
      throw new Error("Vendendor não existe");
    }
  }

  public validarSeExisteVendedor(matricula: string): Array<Vendedor> {
    if (
      VendendorGateway._vendedores.some(
        (vendedor) => vendedor.matricula === matricula
      )
    ) {
      throw new Error("Vendedor já existe !");
    }
    return VendendorGateway._vendedores;
  }

  public cadastrarVendedor(vendedor: Vendedor): void {
    this.validarSeExisteVendedor(vendedor.matricula).push(vendedor);
  }

  public buscarTodosOsVendedores(): Array<Vendedor> {
    return VendendorGateway._vendedores;
  }
}
