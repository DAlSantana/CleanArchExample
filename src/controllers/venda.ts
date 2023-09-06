import { Request, Response, Router } from "express";
import { useCaseVenda } from "../useCase/useCaseVenda";

import VendedorGateway from "../gateway/vendendorGateway";
import ClienteGateway from "../gateway/clienteGateway";

export default class VendaController {
  private _router: Router;
  public static _useCaseVenda: useCaseVenda;
  constructor(router: Router) {
    this._router = router;
    this.criarVenda();
    this.calcularValorVenda();
  }

  public get router(): Router {
    return this._router;
  }

  //TODO: Try Catch, items obj
  private criarVenda(): void {
    this._router.post("/criarVenda", (request: Request, response: Response) => {
      const { idVendedor, nomeCliente, items } = request.body;
      try {
        VendaController._useCaseVenda = new useCaseVenda(
          ClienteGateway.buscarClienteEspecifico(nomeCliente),
          VendedorGateway.buscarVendedorEspecifico(idVendedor),
          items
        );
        response.status(201).send();
      } catch (error: any) {
        response.status(500).send(error);
      }
    });
  }

  private calcularValorVenda(): void {
    this._router.get("/total", (request: Request, response: Response) => {
      response
        .status(200)
        .json({ valor: VendaController._useCaseVenda.calcularValorDaVenda() });
    });
  }
}
