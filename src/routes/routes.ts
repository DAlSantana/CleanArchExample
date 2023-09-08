import { Router } from "express";
import ClienteController from "../controllers/cliente";
import VendendorController from "../controllers/vendedor";
import ItemController from "../controllers/item";
import VendaController from "../controllers/venda";
import ClienteGateway from "../gateway/clienteGateway";
import VendedorGateway from "../gateway/vendendorGateway";
import ItemGateway from "../gateway/itemGateway";
import VendaGateway from "../gateway/vendaGateway";
class Routes {
  private static clienteGateway = new ClienteGateway();
  private static vendedorGateway = new VendedorGateway();
  private static vendaGateway = new VendaGateway();
  private static itemGateway = new ItemGateway();
  static define(router: Router): Router {
    router.use(
      "/venda",
      new VendaController(
        router,
        Routes.vendaGateway,
        Routes.clienteGateway,
        Routes.vendedorGateway
      ).router
    );
    router.use(
      "/vendedor",
      new VendendorController(router, Routes.vendedorGateway).router
    );
    router.use(
      "/cliente",
      new ClienteController(router, Routes.clienteGateway).router
    );
    router.use("/item", new ItemController(router, Routes.itemGateway).router);
    return router;
  }
}

export default Routes.define(Router());
