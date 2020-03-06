import express, { Application } from "express";
class App {
  port: number;
  app: Application;

  constructor(appInt: {
    port: number;
    middlewares: any;
    controllers: any;
    functions: any;
  }) {
    this.app = express();
    this.port = appInt.port;
    this.middlewares(appInt.middlewares);

    this.routes(appInt.controllers);
    this.functions(appInt.functions);
    this.assets();
  }

  private middlewares(middlewares: {
    forEach: (args0: (middleware: any) => void) => void;
  }) {
    middlewares.forEach(middleware => {
      this.app.use(middleware);
    });
  }

  private routes(controllers: {
    forEach: (args0: (controller: any) => void) => void;
  }) {
    controllers.forEach(controller => {
      this.app.use("/", controller.router);
    });
  }

  private functions(functions: {
    forEach: (args0: (func: any) => void) => void;
  }) {
    functions.forEach(func => {
      func;
    });
  }

  private assets(args: string = "public") {
    this.app.use(express.static(args));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`server running on port ${this.port}`);
    });
  }
}

export default App;
