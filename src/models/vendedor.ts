export class Vendedor {
  private _nome: string;
  private _matricula: string;

  constructor(nome: string, matricula: string) {
    this._nome = this.validarNome(nome);
    this._matricula = this.validarMatricula(matricula);
  }

  public validarMatricula(matricula: string): string {
    if (matricula.length < 3) {
      throw new Error("Matrícula inválida");
    }
    return matricula;
  }

  public validarNome(nome: string): string {
    if (nome.length < 3) {
      throw new Error("Nome inválido");
    }
    return nome;
  }

  public get nome(): string {
    return this._nome;
  }

  public get matricula(): string {
    return this._matricula;
  }
}
