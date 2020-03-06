import { Router } from "express";
export default interface IBaseController {
  path: string;
  router: Router;
  initRoutes(): any;
}
