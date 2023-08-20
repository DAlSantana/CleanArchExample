import { Router } from "express";
import ClienteController from "../controllers/cliente";
class Routes {
  static define(router: Router): Router {
    router.use("/cliente", new ClienteController(router).router);
    return router;
  }
}

export default Routes.define(Router());
