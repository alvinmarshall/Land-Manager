import mongoose, { Document, Schema } from "mongoose";

export interface ILandUse extends Document {
  land_use: string;
}

const landUseSchema = new Schema({
  land_use: {
    type: String,
    required: true
  }
});

export default mongoose.model<ILandUse>("LandUse", landUseSchema);
