import { Item } from "../models/item";

export default class ItemGateway {
  public items: Array<Item>;

  constructor() {
    this.items = new Array<Item>();
  }

  private validarSeItemExiste(id: string): Array<Item> {
    if (this.items.some((item) => item.id === id)) {
      throw new Error("Item já existe !!!");
    }
    return this.items;
  }

  public cadastrarItem(item: Item) {
    this.validarSeItemExiste(item.id).push(item);
  }

  public recuperarItem(): Array<Item> {
    return this.items;
  }

  public recuperarItemEspecifico(id: string): Item {
    return this.items.find((item) => item.id === id)!;
  }
}
