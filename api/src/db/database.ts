import mongoose from "mongoose";

const database = (url: string) => {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection.on("error", err => {
    console.log("Database connection error:", err);
  });
  mongoose.connection.once("open", () => {
    console.log("Connected to database");
  });
};

export default database;
