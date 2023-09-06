export class Item {
  private _nome: string;
  private _valor: number;
  private _id: string;

  constructor(nome: string, valor: number, id: string) {
    this._nome = this.validarNome(nome);
    this._valor = this.validarValor(valor);
    this._id = id;
  }

  public get valor(): number {
    return this._valor;
  }

  public get id(): string {
    return this._id;
  }

  private validarNome(nome: string): string {
    if (nome.length < 3) {
      throw new Error("Nome inválido");
    }
    return nome;
  }

  private validarValor(valor: number): number {
    if (valor < 0) {
      throw new Error("Valor inválido");
    }

    return valor;
  }
}
