import IBaseService from "../IBaseService";
import Land from "../../model/Land";

class LandService implements IBaseService {
  constructor() {}
  create(data: any) {
    return Land.create(data);
  }
  get() {
    return Land.find({}).exec();
  }
  getOne(identifier: any) {
    return Land.findOne(identifier).exec();
  }
  edit(identifier: any) {
    throw new Error("Method not implemented.");
  }
  update(identifier: any) {
    throw new Error("Method not implemented.");
  }
  delete(identifier: any) {
    throw new Error("Method not implemented.");
  }
}
const landService = new LandService();
export default landService;
