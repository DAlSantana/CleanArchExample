"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(nome, valor) {
        this._nome = this.validarNome(nome);
        this._valor = this.validarValor(valor);
    }
    get valor() {
        return this._valor;
    }
    validarNome(nome) {
        if (nome.length < 3) {
            throw new Error("Nome inválido");
        }
        return nome;
    }
    validarValor(valor) {
        if (valor < 0) {
            throw new Error("Valor inválido");
        }
        return valor;
    }
}
exports.Item = Item;
//# sourceMappingURL=item.js.map