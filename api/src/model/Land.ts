import mongoose, { Schema, Document } from "mongoose";

export interface ILand extends Document {
  name: string;
  location: string;
  town: string;
  coOrdinates: [{ lat: number; lng: number }];
  type: string;
  description: string;
  status: string;
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
  type: { type: String, default: "Other" },
  description: {
    type: String,
    default: "Other"
  },
  status: {
    type: String,
    default: "Not Allocated"
  }
});

export default mongoose.model<ILand>("Land", landSchema);
