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
  edit(identifier: any) {
  }
  update(identifier: any) {
    return LandRepository.updateLand(identifier);
  }
  delete(identifier: any) {
    throw new Error("Method not implemented.");
  }
}
export default new LandService();
