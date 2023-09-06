import ItemGateway from "../gateway/itemGateway";
import useCaseItem from "../useCase/useCaseItem";
import { Request, Response, Router } from "express";

export default class ItemController {
  private _router: Router;
  private _gateway: ItemGateway;

  constructor(router: Router) {
    this._router = router;
    this._gateway = new ItemGateway();
    this.cadastrarItem();
  }

  public get router(): Router {
    return this._router;
  }

  public cadastrarItem() {
    this.router.post(
      "/cadastrarItem",
      (request: Request, response: Response) => {
        const { nome, valor, id } = request.body;
        try {
          new useCaseItem(nome, Number(valor), id, this._gateway);
          response.status(201).send("Works !!!");
        } catch (error: any) {
          response.status(500).json({ error: error.message });
        }
      }
    );
  }
}
