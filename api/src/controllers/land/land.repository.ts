import Land from "../../model/Land";
import LandType from "../../model/LandType";
import LandDescription from "../../model/LandDescription";
import Landuse from "../../model/Landuse";

class LandRepository {
  static createLand(data: any) {
    return Land.create(data);
  }
  static getAllLands() {
    return Land.find({})
      .populate("type")
      .populate("description")
      .exec();
  }
  static getLand(identifier: any) {
    return Land.findOne(identifier).exec();
  }

  static updateLand(identifier: any) {
    return Land.findByIdAndUpdate(
      identifier._id,
      { $set: identifier },
      { upsert: true, new: true }
    ).exec();
  }
  static deleteLand(identifier: any) {
    throw new Error("Method not implemented.");
  }

  //#region land type
  static createType(data: any) {
    return LandType.create(data);
  }

  static getTypes() {
    return LandType.find({}).exec();
  }

  static getType(identifier: any) {
    return LandType.findOne(identifier).exec();
  }
  //#endregion

  //#region land description
  static createDescription(data: any) {
    return LandDescription.create(data);
  }

  static getDescriptions() {
    return LandDescription.find({}).exec();
  }

  static getDescription(identifier: any) {
    return LandDescription.findOne(identifier).exec();
  }
  //#endregion

  //#region land use
  static createUse(data: any) {
    return Landuse.create(data);
  }

  static getUses() {
    return Landuse.find({}).exec();
  }

  static getUse(identifier: any) {
    return Landuse.findOne(identifier).exec();
  }
  //#endregion
}

export default LandRepository;
