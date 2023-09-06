import { Item } from "../../models/item";

interface cadastrarItem {
  cadastrarItem(item: Item): void;
}

export interface ItemInterface extends cadastrarItem {
  cadastrarItem(item: Item): void;
}
