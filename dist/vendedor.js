"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendedor = void 0;
class Vendedor {
    constructor(nome, matricula) {
        this._nome = this.validarNome(nome);
        this._matricula = this.validarMatricula(matricula);
    }
    validarMatricula(matricula) {
        if (matricula.length < 3) {
            throw new Error("Matrícula inválida");
        }
        return matricula;
    }
    validarNome(nome) {
        if (nome.length < 3) {
            throw new Error("Nome inválido");
        }
        return nome;
    }
    get nome() {
        return this._nome;
    }
    get matricula() {
        return this._matricula;
    }
}
exports.Vendedor = Vendedor;
//# sourceMappingURL=vendedor.js.map