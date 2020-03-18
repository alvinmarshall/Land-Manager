import mongoose, { Document, Schema } from "mongoose";

export interface ILandDescription extends Document {
  description: string;
}

const landDescriptionSchema = new Schema({
  description: {
    type: String,
    required: true
  }
});

export default mongoose.model<ILandDescription>(
  "LandDescription",
  landDescriptionSchema
);
