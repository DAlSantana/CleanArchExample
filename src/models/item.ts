export class Item {
  private _nome: string;
  private _valor: number;

  constructor(nome: string, valor: number) {
    this._nome = this.validarNome(nome);
    this._valor = this.validarValor(valor);
  }

  public get valor(): number {
    return this._valor;
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
