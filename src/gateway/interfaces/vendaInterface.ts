import { Venda } from "../../models/venda";

interface adicionarVenda {
  adicionarVenda(venda: Venda): void;
}

interface buscarVenda {
  buscarVenda(id: number): Venda;
}

export interface VendaInterfaceGateway extends adicionarVenda, buscarVenda {
  adicionarVenda(venda: Venda): void;
  buscarVenda(id: number): Venda;
}
