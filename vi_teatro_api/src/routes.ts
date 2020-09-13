import * as userController from "./controller/user.controller";

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
export const AppRoutes = [...userRoutes];
