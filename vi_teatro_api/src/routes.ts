import * as userController from "./controller/user.controller";
import * as clientController from "./controller/client.controller";
import * as addressController from "./controller/address.controller";
import * as armchairController from "./controller/armchair.controller";
import * as localiteController from "./controller/localite.controller";
import * as purchaseController from "./controller/purchase.controller";
import * as showController from "./controller/show.controller";
import * as showArmchairController from "./controller/show_armchair.controller";
import * as ticketController from "./controller/ticket.controller";

const userRoutes = [
  {
    path: "/user",
    method: "get",
    action: userController.getAll,
  },
  {
    path: "/user/:id",
    method: "get",
    action: userController.getById,
  },
  {
    path: "/user",
    method: "post",
    action: userController.save,
  },
  {
    path: "/user/:id",
    method: "delete",
    action: userController.remove,
  },
  {
    path: "/user/:id",
    method: "patch",
    action: userController.update,
  },
];

const clientRoutes = [
  {
    path: "/client",
    method: "get",
    action: clientController.getAll,
  },
  {
    path: "/client/:id",
    method: "get",
    action: clientController.getById,
  },
  {
    path: "/client",
    method: "post",
    action: clientController.save,
  },
  {
    path: "/client/:id",
    method: "delete",
    action: clientController.remove,
  },
  {
    path: "/client/:id",
    method: "patch",
    action: clientController.update,
  },
];

const armchairRoutes = [
  {
    path: "/armchair",
    method: "get",
    action: armchairController.getAll,
  },
  {
    path: "/armchair/:id",
    method: "get",
    action: armchairController.getById,
  },
  {
    path: "/armchair",
    method: "post",
    action: armchairController.save,
  },
  {
    path: "/armchair/:id",
    method: "delete",
    action: armchairController.remove,
  },
  {
    path: "/armchair/:id",
    method: "patch",
    action: armchairController.update,
  },
];

const localiteRoutes = [
  {
    path: "/localite",
    method: "get",
    action: localiteController.getAll,
  },
  {
    path: "/localite/:id",
    method: "get",
    action: localiteController.getById,
  },
  {
    path: "/localite",
    method: "post",
    action: localiteController.save,
  },
  {
    path: "/localite/:id",
    method: "delete",
    action: localiteController.remove,
  },
  {
    path: "/localite/:id",
    method: "patch",
    action: localiteController.update,
  },
];

const addressRoutes = [
  {
    path: "/address",
    method: "get",
    action: addressController.getAll,
  },
  {
    path: "/address/:id",
    method: "get",
    action: addressController.getById,
  },
  {
    path: "/address",
    method: "post",
    action: addressController.save,
  },
  {
    path: "/address/:id",
    method: "delete",
    action: addressController.remove,
  },
  {
    path: "/address/:id",
    method: "patch",
    action: addressController.update,
  },
];

const purchaseRoutes = [
  {
    path: "/purchase",
    method: "get",
    action: purchaseController.getAll,
  },
  {
    path: "/purchase/:id",
    method: "get",
    action: purchaseController.getById,
  },
  {
    path: "/purchase",
    method: "post",
    action: purchaseController.save,
  },
  {
    path: "/purchase/:id",
    method: "delete",
    action: purchaseController.remove,
  },
  {
    path: "/purchase/:id",
    method: "patch",
    action: purchaseController.update,
  },
];

const showRoutes = [
  {
    path: "/show",
    method: "get",
    action: showController.getAll,
  },
  {
    path: "/show/:id",
    method: "get",
    action: showController.getById,
  },
  {
    path: "/show",
    method: "post",
    action: showController.save,
  },
  {
    path: "/show/:id",
    method: "delete",
    action: showController.remove,
  },
  {
    path: "/show/:id",
    method: "patch",
    action: showController.update,
  },
];

const showArmchairRoutes = [
  {
    path: "/show_armchair",
    method: "get",
    action: showArmchairController.getAll,
  },
  {
    path: "/show_armchair/:id",
    method: "get",
    action: showArmchairController.getById,
  },
  {
    path: "/show_armchair",
    method: "post",
    action: showArmchairController.save,
  },
  {
    path: "/show_armchair/:id",
    method: "delete",
    action: showArmchairController.remove,
  },
  {
    path: "/show_armchair/:id",
    method: "patch",
    action: showArmchairController.update,
  },
];

const ticketRoutes = [
  {
    path: "/ticket",
    method: "get",
    action: ticketController.getAll,
  },
  {
    path: "/ticket/:id",
    method: "get",
    action: ticketController.getById,
  },
  {
    path: "/ticket",
    method: "post",
    action: ticketController.save,
  },
  {
    path: "/ticket/:id",
    method: "delete",
    action: ticketController.remove,
  },
  {
    path: "/ticket/:id",
    method: "patch",
    action: ticketController.update,
  },
];

export const AppRoutes = [...userRoutes, ...clientRoutes, ...armchairRoutes, ...addressRoutes, ...localiteRoutes, ...purchaseRoutes, ...showRoutes, ...showArmchairRoutes, ...ticketRoutes];
