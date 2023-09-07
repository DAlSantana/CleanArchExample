import { Request, Response, Router } from "express";
import ItemGateway from "../gateway/itemGateway";
import useCaseItem from "../useCase/useCaseItem";

export default class ItemController {
  private _router: Router;
  private _gateway: ItemGateway;

  constructor(router: Router, itemGateway: ItemGateway) {
    this._router = router;
    this._gateway = itemGateway;
    this.inicializarRotas();
  }

  public get router(): Router {
    return this._router;
  }

  private handleError(response: Response, error: Error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }

  private inicializarRotas() {
    this._router.post("/cadastrarItem", this.cadastrarItem.bind(this));
  }

  private async cadastrarItem(request: Request, response: Response) {
    const { nome, valor, id } = request.body;

    try {
      await new useCaseItem(nome, Number(valor), id, this._gateway);
      response.status(201).send();
    } catch (error: any) {
      this.handleError(response, error);
    }
  }
}
