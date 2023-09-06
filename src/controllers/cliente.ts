import useCaseCadastrarCliente from "../useCase/useCaseCedastrarCliente";
import { Router, Request, Response } from "express";
import ClienteGateway from "../gateway/clienteGateway";
export default class ClienteController {
  private _router: Router;
  private _clienteGateway: ClienteGateway;

  constructor(router: Router) {
    this._router = router;
    this._clienteGateway = new ClienteGateway();
    this.criarCliente();
    this.consultarClientesCadastrados();
  }

  public get router() {
    return this._router;
  }

  private criarCliente(): void {
    this._router.post("", (request: Request, response: Response) => {
      const { nome, isPremium } = request.body;
      try {
        new useCaseCadastrarCliente(nome, isPremium, this._clienteGateway);
      } catch (error: any) {
        response.status(500).json({ error: error.message });
      }
      response.status(201).json({ nome: nome, isPremium: isPremium });
    });
  }

  private consultarClientesCadastrados(): void {
    this._router.get("", (request: Request, response: Response) => {
      response.status(200).json(this._clienteGateway.buscarClientes());
    });
  }
}
