import useCaseCadastrarCliente from "../useCase/useCaseCedastrarCliente";
import { Router, Request, Response } from "express";
import { Cliente } from "@src/models/cliente";

const clientes: Array<Cliente> = [];

export default class ClienteController {
  private _router = Router();

  constructor() {
    this.criarCliente();
    this.consultarClientesCadastrados();
  }

  public get router() {
    return this._router;
  }

  private criarCliente(): void {
    this._router.post("", (request: Request, response: Response) => {
      const { nome, isPremium } = request.body;
      const useCase = new useCaseCadastrarCliente(nome, isPremium);
      clientes.push(useCase.cliente);
      response.status(201).json({ nome: nome, isPremium: isPremium });
    });
  }

  private consultarClientesCadastrados(): void {
    this._router.get("", (request: Request, response: Response) => {
      response.status(200).json(clientes);
    });
  }
}
