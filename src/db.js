import mongoose from "mongoose";
import "./models/Video";
import "./models/User";

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
const handleServerOpen = () => console.log("Connected DB Successfully");
const handleServerError = (error) => console.log("DB Error", error);

db.on("error", handleServerError);
db.once("open", handleServerOpen);
