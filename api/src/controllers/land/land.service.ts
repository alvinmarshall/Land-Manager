import IBaseService from "../IBaseService";
import LandRepository from "./land.repository";

class LandService implements IBaseService {
  constructor() {}
  create(data: any) {
    return LandRepository.createLand(data);
  }
  get() {
    return LandRepository.getAllLands();
  }
  getOne(identifier: any) {
    return LandRepository.getLand(identifier);
  }
  edit(identifier: any) {}
  update(identifier: any) {
    return LandRepository.updateLand(identifier);
  }
  delete(identifier: any) {
    throw new Error("Method not implemented.");
  }

  //#region land type
  createType(data: any) {
    return LandRepository.createType(data);
  }
  getTypes() {
    return LandRepository.getTypes();
  }
  getType(identifier: any) {
    return LandRepository.getType(identifier);
  }
  //#endregion

  //#region land description
  createDescription(data: any) {
    return LandRepository.createDescription(data);
  }
  getDescriptions() {
    return LandRepository.getDescriptions();
  }
  getDescription(identifier: any) {
    return LandRepository.getDescription(identifier);
  }
  //#endregion

  //#region land use
  createUse(data: any) {
    return LandRepository.createUse(data);
  }
  getUses() {
    return LandRepository.getUses();
  }
  getUse(identifier: any) {
    return LandRepository.getUse(identifier);
  }
  //#endregion
}
export default new LandService();
