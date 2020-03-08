import "./src/config";
import App from "./src/App";
import AuthController from "./src/controllers/auth/auth.controller";
import database from "./src/db/database";
import Cors from "cors";
import BodyParser from "body-parser";
import Morgan from "morgan";
import { passportService } from "./src/controllers/auth/passport.service";
import LandController from "./src/controllers/land/land.controller";

const app = new App({
  port: process.env.PORT,
  controllers: [new AuthController(), new LandController()],
  middlewares: [
    BodyParser.urlencoded({ extended: false }),
    BodyParser.json(),
    Morgan("dev"),
    Cors({ credentials: true, origin: true })
  ],
  functions: [database(process.env.MONGO_URL), passportService()]
});

app.listen();
