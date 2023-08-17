import { Server } from "http";
import express from "express";
import bodyParser from "body-parser";
import router from "./routes/routes";

export default class SetupAplication {
  private server?: Server;
  private _port: number;
  private _app: any;

  constructor() {
    this._port = 3000;
    this._app = express();
  }

  public init(): void {
    this.setupExpress();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this._app.use(router);
  }

  private setupExpress(): void {
    this._app.use(bodyParser.json());
    this._app.use(bodyParser.urlencoded({ extended: true }));
  }

  public start(): void {
    this.server = this._app.listen(this._port, () => {
      console.log(`Server running on port ${this._port} 🚀`);
    });
  }
}
