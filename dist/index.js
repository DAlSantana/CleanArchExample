"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("./cliente");
const item_1 = require("./item");
const useCaseVenda_1 = require("./useCaseVenda");
const vendedor_1 = require("./vendedor");
const clienteDiego = new cliente_1.Cliente("Diego", true);
const clienteBruna = new cliente_1.Cliente("Bruna", false);
const vendendor = new vendedor_1.Vendedor("Edson", "V001");
const itemCalca = new item_1.Item("Calça Shopping", 100);
const itemBlusa = new item_1.Item("Blusa branca", 50);
const venda = new useCaseVenda_1.UseCaseVenda(clienteDiego, vendendor);
venda.adicionarItemNaVenda(itemCalca);
venda.adicionarItemNaVenda(itemBlusa);
//# sourceMappingURL=index.js.map