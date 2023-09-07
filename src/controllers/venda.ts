import { Request, Response, Router } from "express";
import { useCaseVenda } from "../useCase/useCaseVenda";
import VendedorGateway from "../gateway/vendendorGateway";
import ClienteGateway from "../gateway/clienteGateway";
import VendaGateway from "../gateway/vendaGateway";

export default class VendaController {
  private _router: Router;
  private _vendaGateway: VendaGateway;
  private _clienteGateway: ClienteGateway;
  private _vendedorGateway: VendedorGateway;

  constructor(
    router: Router,
    vendaGateway: VendaGateway,
    clienteGateway: ClienteGateway,
    vendedorGateway: VendedorGateway
  ) {
    this._router = router;
    this._vendaGateway = vendaGateway;
    this._clienteGateway = clienteGateway;
    this._vendedorGateway = vendedorGateway;
    this.inicializarRotas();
  }

  public get router(): Router {
    return this._router;
  }

  private inicializarRotas() {
    this._router.get("/valortotalVenda", this.buscarVenda.bind(this));
    this._router.post("/criarVenda", this.criarVenda.bind(this));
  }

  private async criarVenda(
    request: Request,
    response: Response
  ): Promise<void> {
    const { matricula, items, idCliente, idVenda } = request.body;

    try {
      const cliente = await this._clienteGateway.buscarClienteEspecifico(
        idCliente
      );
      const vendedor = await this._vendedorGateway.buscarVendedorEspecifico(
        matricula
      );
      new useCaseVenda(cliente, vendedor, items, this._vendaGateway, idVenda);

      response.status(201).send();
    } catch (error: any) {
      response
        .status(500)
        .send(error instanceof Error ? error.message : "Erro desconhecido.");
    }
  }

  private buscarVenda(request: Request, response: Response): void {
    const { id } = request.query;
    try {
      const venda = this._vendaGateway.buscarVenda(Number(id));
      response.status(200).json({ venda: venda });
    } catch (error: any) {
      response
        .status(500)
        .json({
          error: error instanceof Error ? error.message : "Erro desconhecido.",
        });
    }
  }
}
