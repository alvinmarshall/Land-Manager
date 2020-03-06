import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  role: string;
  permission: [];
}
const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  role: {
    type: String,
    default: "normal"
  },
  permission: {
    type: Array,
    default: ["read"]
  }
});

export default mongoose.model<IUser>("User", userSchema);
