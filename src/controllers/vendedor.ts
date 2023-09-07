import { Request, Response, Router } from "express";
import VendendorGateway from "../gateway/vendendorGateway";
import useCaseCadastrarVendedor from "../useCase/useCaseCadastrarVendedor";

export default class VendedorController {
  private _router: Router;
  private _vendedorGateway: VendendorGateway;

  constructor(router: Router, vendedorGateway: VendendorGateway) {
    this._router = router;
    this._vendedorGateway = vendedorGateway;
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
    this._router.post("/criar", this.criarVendedor.bind(this));
    this._router.get(
      "/totalVendedores",
      this.buscarTodosOsVendedores.bind(this)
    );
  }

  private async criarVendedor(request: Request, response: Response) {
    const { nome, matricula } = request.body;

    try {
      await new useCaseCadastrarVendedor(
        nome,
        matricula,
        this._vendedorGateway
      );
      response.status(201).send();
    } catch (error: any) {
      this.handleError(response, error);
    }
  }

  private async buscarTodosOsVendedores(request: Request, response: Response) {
    try {
      const vendedores = await this._vendedorGateway.buscarTodosOsVendedores();
      response.status(200).json(vendedores);
    } catch (error: any) {
      this.handleError(response, error);
    }
  }
}
