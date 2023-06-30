import "dotenv/config";
import "./db.js";
import "./models/video";
import "./models/user";
import app from "./server.js";

const PORT = 4000;

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
