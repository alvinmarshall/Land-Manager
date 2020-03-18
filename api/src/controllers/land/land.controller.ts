import IBaseController from "../IBaseController";
import express, { Request, Response } from "express";
import landService from "./land.service";
import { ILand } from "../../model/Land";
import errorService from "../errors/errors.service";
import passport from "passport";
import { ILandType } from "../../model/LandType";
import { ILandDescription } from "../../model/LandDescription";
import { ILandUse } from "../../model/Landuse";

class LandController implements IBaseController {
  path: string = "/land";
  router: express.Router = express.Router();

  constructor() {
    this.initRoutes();
  }

  initRoutes() {
    this.router.post(
      `${this.path}`,
      passport.authenticate("jwt", { session: false }),
      this.createLand
    );
    this.router.get(
      `${this.path}`,
      passport.authenticate("jwt", { session: false }),
      this.index
    );
    this.router.get(
      `${this.path}`,
      passport.authenticate("jwt", { session: false }),
      this.getById
    );
    this.router.put(
      `${this.path}`,
      passport.authenticate("jwt", { session: false }),
      this.updateLand
    );

    this.router.post(`${this.path}/create/type`, this.createLandType);

    this.router.post(
      `${this.path}/create/description`,
      this.createLandDescription
    );

    this.router.post(`${this.path}/create/use`, this.createLandUse);
    this.router.get(`${this.path}/types`, this.getTypes);
    this.router.get(`${this.path}/descriptions`, this.getDescriptions);
  }

  private async createLand(req: Request, res: Response) {
    try {
      const land: ILand = req.body;
      const landName = await landService.getOne({ name: land.name });
      if (landName)
        return res.status(400).send(errorService.dataExistError("land"));

      const data = await landService.create(land);
      return res.status(201).send({ status: 201, data });
    } catch (error) {
      console.error(error);
      return res.status(500).send(errorService.internalError());
    }
  }

  private async index(req: Request, res: Response) {
    try {
      const { count } = req.query;
      const data = await landService.get();
      const total = data.length;
      if (count) {
        return res.send({ status: 200, data: total });
      }
      return res.send({ status: 200, data });
    } catch (error) {
      console.error(error);
      return res.status(500).send(errorService.internalError());
    }
  }

  private async getById(req: Request, res: Response) {
    try {
      const { identifier } = req.query;
      const data = await landService.getOne({ id: identifier });
      return res.send({ status: 200, data });
    } catch (error) {
      console.error(error);
      return res.status(500).send(errorService.internalError());
    }
  }

  private async updateLand(req: Request, res: Response) {
    try {
      const land: ILand = req.body;
      const data = await landService.update(land);
      return res.send({ status: 200, data, message: "land updated" });
    } catch (error) {
      console.error(error);
      return res.status(500).send(errorService.internalError());
    }
  }

  //#region land type
  private async getTypes(req: Request, res: Response) {
    try {
      const data = await landService.getTypes();
      return res.send({ status: 200, data });
    } catch (error) {
      console.error(error);
      return res.status(500).send(errorService.internalError());
    }
  }
  private async createLandType(req: Request, res: Response) {
    try {
      const body: ILandType = req.body;
      const typeExist = await landService.getType({ type: body.type });
      if (typeExist)
        return res.status(400).send(errorService.dataExistError("land type"));
      const data = await landService.createType(body);
      return res.status(201).send({ status: 201, data });
    } catch (error) {
      console.log(error);
      return res.status(500).send(errorService.internalError());
    }
  }
  //#endregion

  //#region land description
  private async getDescriptions(req: Request, res: Response) {
    try {
      const data = await landService.getDescriptions();
      return res.send({ status: 200, data });
    } catch (error) {
      console.error(error);
      return res.status(500).send(errorService.internalError());
    }
  }

  private async createLandDescription(req: Request, res: Response) {
    try {
      const body: ILandDescription = req.body;
      const descriptionExist = await landService.getDescription({
        description: body.description
      });

      if (descriptionExist)
        return res
          .status(400)
          .send(errorService.dataExistError("land description"));
      const data = await landService.createDescription(body);
      return res.status(201).send({ status: 201, data });
    } catch (error) {
      console.log(error);
      return res.status(500).send(errorService.internalError());
    }
  }
  //#endregion

  //#region land use
  private async createLandUse(req: Request, res: Response) {
    try {
      const body: ILandUse = req.body;
      const landUseExist = await landService.getUse({
        land_use: body.land_use
      });

      if (landUseExist)
        return res.status(400).send(errorService.dataExistError("land use"));
      const data = await landService.createUse(body);
      return res.status(201).send({ status: 201, data });
    } catch (error) {
      console.log(error);
      return res.status(500).send(errorService.internalError());
    }
  }
  //#endregion
}

export default LandController;
