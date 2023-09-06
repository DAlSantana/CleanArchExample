import ItemGateway from "../gateway/itemGateway";
import { Item } from "../models/item";
export default class useCaseItem {
  private _gateway: ItemGateway;

  constructor(nome: string, valor: number, id: string, gateway: ItemGateway) {
    this._gateway = gateway;
    this.cadastrarItem(new Item(nome, valor, id));
  }

  private cadastrarItem(item: Item) {
    this._gateway.cadastrarItem(item);
  }
}
