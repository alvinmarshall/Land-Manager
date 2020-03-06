import IBaseController from "../IBaseController";
import express, { Request, Response } from "express";
import { IUser } from "../../model/Users";
import authService from "./auth.service";
import passport from "passport";
import Bcrypt from "bcryptjs";

class AuthController implements IBaseController {
  path = "/users";
  router: express.Router = express.Router();

  constructor() {
    this.initRoutes();
  }

  initRoutes() {
    this.router.get(
      `${this.path}`,
      passport.authenticate("jwt", { session: false }),
      this.index
    );
    this.router.post(`${this.path}`, this.createUser);
    this.router.post(`${this.path}/login`, this.authenticate);
    this.router.put(`${this.path}/:identifier`, this.editUser);
    this.router.delete(`${this.path}/:identifier`, this.deleteUser);
    this.router.get(`${this.path}`, this.getById);
  }

  //#region  GET USER WITH IDENTIFIER
  private async getById(req: Request, res: Response) {
    try {
      const { identifier } = req.query;
      const data = await authService.getOne({ id: identifier });
      return res.send({ status: 200, data });
    } catch (error) {
      return console.error(error);
    }
  }
  //#endregion

  //#region  GET ALL USERS
  private async index(req: Request, res: Response) {
    try {
      const data = await authService.get();
      return res.send({ status: 200, data, error: [] });
    } catch (error) {
      return console.error(error);
    }
  }
  //#endregion

  //#region CREATE NEW USER
  private async createUser(req: Request, res: Response) {
    try {
      // Get request body data
      let user: IUser = req.body;

      // check taken username
      const username = await authService.getOne({ username: user.username });
      if (username)
        return res.status(400).send({
          status: 400,
          message: "Username already exist...",
          error: ["username already in use"]
        });

      // hash user password
      const salt = await Bcrypt.genSalt(10);
      const hashPass = await Bcrypt.hash(user.password, salt);
      user.password = hashPass;

      // save new user
      const newUser = await authService.create(user);
      if (newUser)
        return res.send({ status: 201, message: "user created", error: [] });
    } catch (err) {
      if (err && err.name === "ValidationError") {
        const message = err
          .toString()
          .replace("ValidationError: ", "")
          .split(",");
        return res.status(400).send({ status: 400, message });
      }
      return res.status(500).send({
        status: 500,
        message: "Something went wrong, try again",
        error: ["Internal error"]
      });
    }
  }
  //#endregion
  private deleteUser(req: Request, res: Response) {}
  private editUser(req: Request, res: Response) {}

  private async authenticate(req: Request, res: Response) {
    try {
      console.log("body", req.body);
      const { username, password } = req.body;
      let data = await authService.authenticate({ username, password });
      if (!data)
        return res.status(401).send({
          message: "Authentication failed",
          error: ["username or password incorrect"]
        });
      return res.send({
        message: "Authentication successful",
        status: 200,
        data,
        error: []
      });
    } catch (error) {
      return res.status(500).send({
        status: 500,
        message: "Something went wrong, try again",
        error: ["Internal error"]
      });
    }
  }
}

export default AuthController;
