import { Router, Request, Response } from "express";
import ClienteGateway from "../gateway/clienteGateway";
import useCaseCadastrarCliente from "../useCase/useCaseCedastrarCliente";

export default class ClienteController {
  private _router: Router;
  private _clienteGateway: ClienteGateway;

  constructor(router: Router, clienteGateway: ClienteGateway) {
    this._router = router;
    this._clienteGateway = clienteGateway;
    this.inicializarRotas();
  }

  public get router() {
    return this._router;
  }

  private async handleErrors(callback: () => Promise<any>) {
    try {
      return await callback();
    } catch (error) {
      throw new Error(String(error));
    }
  }

  private handleError(response: Response, error: Error) {
    console.error(error);
    response.status(500).json({ error: error.message });
  }

  private inicializarRotas(): void {
    this._router.post("/cadastrar", this.criarCliente.bind(this));
    this._router.get(
      "/buscarClientes",
      this.consultarClientesCadastrados.bind(this)
    );
    this._router.get("/:id", this.buscarClienteEspecifico.bind(this));
  }

  private async criarCliente(request: Request, response: Response) {
    const { nome, isPremium, id } = request.body;

    try {
      await this.handleErrors(async () => {
        await new useCaseCadastrarCliente(
          nome,
          isPremium,
          id,
          this._clienteGateway
        );
      });
      response.status(201).json({ nome, isPremium });
    } catch (error: any) {
      this.handleError(response, error);
    }
  }

  private async buscarClienteEspecifico(request: Request, response: Response) {
    const id = request.query.id;

    try {
      const cliente = await this.handleErrors(async () => {
        return this._clienteGateway.buscarClienteEspecifico(Number(id));
      });
      response.status(200).json(cliente);
    } catch (error: any) {
      this.handleError(response, error);
    }
  }

  private async consultarClientesCadastrados(
    request: Request,
    response: Response
  ) {
    try {
      const clientes = await this.handleErrors(async () => {
        return this._clienteGateway.buscarClientes();
      });
      response.status(200).json(clientes);
    } catch (error: any) {
      this.handleError(response, error);
    }
  }
}
