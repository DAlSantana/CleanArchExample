export class Cliente {
  private _nome: string;
  private _isPremium: boolean;

  constructor(nome: string, isPremium: boolean) {
    this._nome = this.validarNome(nome);
    this._isPremium = isPremium;
  }

  public get nome(): string {
    return this._nome;
  }

  public get isPremium(): boolean {
    return this._isPremium;
  }

  private validarNome(nome: string): string {
    if (nome.length < 3) {
      throw new Error("Nome inválido");
    }
    return nome;
  }
}
