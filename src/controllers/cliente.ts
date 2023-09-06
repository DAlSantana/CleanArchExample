import { Router, Request, Response } from "express";
import ClienteGateway from "../gateway/clienteGateway";
import useCaseCadastrarCliente from "../useCase/useCaseCedastrarCliente";
export default class ClienteController {
  private _router: Router;
  private _clienteGateway: ClienteGateway;

  constructor(router: Router) {
    this._router = router;
    this._clienteGateway = new ClienteGateway();
    this.criarCliente();
    this.consultarClientesCadastrados();
    this.buscarClienteEspecifico();
  }

  public get router() {
    return this._router;
  }

  private criarCliente(): void {
    this._router.post("/criar", (request: Request, response: Response) => {
      const { nome, isPremium, id } = request.body;
      try {
        new useCaseCadastrarCliente(nome, isPremium, id, this._clienteGateway);
      } catch (error: any) {
        response.status(500).json({ error: error.message });
      }
      response.status(201).json({ nome: nome, isPremium: isPremium });
    });
  }

  private buscarClienteEspecifico(): void {
    this._router.get("/:id", (request: Request, response: Response) => {
      const id = request.query.id;

      try {
        response
          .status(200)
          .json(ClienteGateway.buscarClienteEspecifico(Number(id)));
      } catch (error: any) {
        response.status(500).json({ error: error.message });
      }
    });
  }

  private consultarClientesCadastrados(): void {
    this._router.get("/buscar", (request: Request, response: Response) => {
      response.status(200).json(this._clienteGateway.buscarClientes());
    });
  }
}
