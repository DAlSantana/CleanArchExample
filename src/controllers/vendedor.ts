import { Request, Response, Router } from "express";
import VendendorGateway from "../gateway/vendendorGateway";
import useCaseCadastrarVendedor from "../useCase/useCaseCadastrarVendedor";

export default class VendendorController {
  private _router: Router;
  private _vendedorGateway: VendendorGateway;

  constructor(router: Router) {
    this._router = router;
    this._vendedorGateway = new VendendorGateway();
    this.criarVendedor();
    this.buscarVendedores();
  }

  private criarVendedor(): void {
    this._router.post("/criar", (request, response) => {
      const { nome, matricula } = request.body;
      try {
        new useCaseCadastrarVendedor(nome, matricula, this._vendedorGateway);
        response.status(201).send();
      } catch (error: any) {
        response.status(500).json({ error: error.message });
      }
    });
  }

  private buscarVendedores(): void {
    this.router.get("/buscar", (request: Request, response: Response) => {
      response
        .status(200)
        .json(this._vendedorGateway.buscarTodosOsVendedores());
    });
  }

  public get router(): Router {
    return this._router;
  }
}
