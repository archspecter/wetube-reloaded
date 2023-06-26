import mongoose from "mongoose";
import "./models/video";
import "./models/user";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");

const db = mongoose.connection;
const handleServerOpen = () => console.log("Connected DB Successfully");
const handleServerError = (error) => console.log("DB Error", error);

db.on("error", handleServerError);
db.once("open", handleServerOpen);
