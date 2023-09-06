import { Router } from "express";
import ClienteController from "../controllers/cliente";
import VendendorController from "../controllers/vendedor";
import ItemController from "../controllers/item";
import VendaController from "../controllers/venda";
class Routes {
  static define(router: Router): Router {
    router.use("/cliente", new ClienteController(router).router);
    router.use("/vendedor", new VendendorController(router).router);
    router.use("/item", new ItemController(router).router);
    router.use("/venda", new VendaController(router).router);
    return router;
  }
}

export default Routes.define(Router());
