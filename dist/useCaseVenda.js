"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseCaseVenda = void 0;
class UseCaseVenda {
    constructor(cliente, vendendor) {
        this._cliente = cliente;
        this._itens = new Array();
        this._dataDaVenda = new Date();
        this._vendedor = vendendor;
    }
    adicionarDescontNaVendaSeClienteForPremium(valorTotal) {
        const VALOR_DESCONTO_PREMIUM = 10;
        return valorTotal - VALOR_DESCONTO_PREMIUM;
    }
    adicionarItemNaVenda(item) {
        this._itens.push(item);
    }
    calcularValorDaVenda() {
        let valorTotalVenda = 0;
        this._itens.forEach((item) => {
            valorTotalVenda += item.valor;
        });
        if (this._cliente.isPremium) {
            return this.adicionarDescontNaVendaSeClienteForPremium(valorTotalVenda);
        }
        return valorTotalVenda;
    }
}
exports.UseCaseVenda = UseCaseVenda;
//# sourceMappingURL=useCaseVenda.js.map