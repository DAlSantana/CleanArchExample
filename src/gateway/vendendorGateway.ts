import { Vendedor } from "../models/vendedor";
import { VendendorInterfaceGateway } from "./interfaces/vendendorInterface";

export default class VendendorGateway implements VendendorInterfaceGateway {
  private _vendedores: Array<Vendedor>;

  constructor() {
    this._vendedores = new Array<Vendedor>();
  }

  public buscarVendedorEspecifico(matricula: string): Vendedor {
    if (this._vendedores.find((vendedor) => vendedor.matricula === matricula)) {
      return this._vendedores.find(
        (vendedor) => vendedor.matricula === matricula
      )!;
    } else {
      throw new Error("Vendendor não existe");
    }
  }

  public validarSeExisteVendedor(matricula: string): Array<Vendedor> {
    if (this._vendedores.some((vendedor) => vendedor.matricula === matricula)) {
      throw new Error("Vendedor já existe !");
    }
    return this._vendedores;
  }

  public cadastrarVendedor(vendedor: Vendedor): void {
    this.validarSeExisteVendedor(vendedor.matricula).push(vendedor);
  }

  public buscarTodosOsVendedores(): Array<Vendedor> {
    return this._vendedores;
  }
}
