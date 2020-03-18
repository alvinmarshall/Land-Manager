import mongoose, { Document, Schema } from "mongoose";
export interface ILandType extends Document {
  type: string;
}

const landTypeSchema = new Schema({
  type: {
    type: String,
    required: true
  }
});

export default mongoose.model<ILandType>("LandType", landTypeSchema);
