export class Cliente {
  private _nome: string;
  private _id: number;
  private _isPremium: boolean;

  constructor(nome: string, isPremium: boolean, id: number) {
    this._nome = this.validarNome(nome);
    this._isPremium = isPremium;
    this._id = id;
  }

  public get nome(): string {
    return this._nome;
  }

  public get isPremium(): boolean {
    return this._isPremium;
  }

  public get id(): number {
    return this._id;
  }

  private validarNome(nome: string): string {
    if (nome.length < 3) {
      throw new Error("Nome inválido");
    }
    return nome;
  }
}
