import Land from "../../model/Land";

class LandRepository {
  static createLand(data: any) {
    return Land.create(data);
  }
  static getAllLands() {
    return Land.find({}).exec();
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
}

export default LandRepository;
