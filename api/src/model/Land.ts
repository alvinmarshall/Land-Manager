import mongoose, { Schema, Document } from "mongoose";

export interface ILand extends Document {
  name: string;
  location: string;
  town: string;
  coOrdinates: [{ lat: number; lng: number }];
  type: string;
  description: string;
  status: number;
}

const landSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  town: {
    type: String,
    required: true
  },
  coOrdinates: [{ lat: { type: Number }, lng: { type: Number } }],
  type: { type: Schema.Types.ObjectId, ref: "LandType" },
  description: {
    type: Schema.Types.ObjectId,
    ref: "LandDescription"
  },
  status: {
    type: Number,
    default: 0
  }
});

export default mongoose.model<ILand>("Land", landSchema);
