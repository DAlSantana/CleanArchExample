import { Item } from "../models/item";

export default class ItemGateway {
  public static items: Array<Item>;

  constructor() {
    ItemGateway.items = new Array<Item>();
  }

  private validarSeItemExiste(id: string): Array<Item> {
    if (ItemGateway.items.some((item) => item.id === id)) {
      throw new Error("Item já existe !!!");
    }
    return ItemGateway.items;
  }

  public cadastrarItem(item: Item) {
    this.validarSeItemExiste(item.id).push(item);
  }

  public recuperarItem(): Array<Item> {
    return ItemGateway.items;
  }

  public static recuperarItemEspecifico(id: string): Item {
    return ItemGateway.items.find((item) => item.id === id)!;
  }
}
