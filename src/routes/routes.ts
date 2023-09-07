import { Router } from "express";
import ClienteController from "../controllers/cliente";
import VendendorController from "../controllers/vendedor";
import ItemController from "../controllers/item";
import VendaController from "../controllers/venda";
import ClienteGateway from "../gateway/clienteGateway";
import VendedorGateway from "../gateway/vendendorGateway";
import ItemGateway from "../gateway/itemGateway";
import VendaGateway from "../gateway/venda";
class Routes {
  static define(router: Router): Router {
    const clienteGateway = new ClienteGateway();
    const vendedorGateway = new VendedorGateway();
    const vendaGateway = new VendaGateway();
    const itemGateway = new ItemGateway();
    router.use(
      "/venda",
      new VendaController(router, vendaGateway, clienteGateway, vendedorGateway)
        .router
    );
    router.use(
      "/vendedor",
      new VendendorController(router, vendedorGateway).router
    );
    router.use(
      "/cliente",
      new ClienteController(router, clienteGateway).router
    );
    router.use("/item", new ItemController(router, itemGateway).router);
    return router;
  }
}

export default Routes.define(Router());
