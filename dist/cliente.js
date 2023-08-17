"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor(nome, isPremium) {
        this._nome = this.validarNome(nome);
        this._isPremium = isPremium;
    }
    get nome() {
        return this._nome;
    }
    get isPremium() {
        return this._isPremium;
    }
    validarNome(nome) {
        if (nome.length < 3) {
            throw new Error("Nome inválido");
        }
        return nome;
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.js.map