import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

//routes
import ChatRoute from "./routes/ChatRoute.js";
import MessageRoute from "./routes/MessageRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";

const app = express();
dotenv.config();
dotenv.config({ path: `.env.local`, override: true });

//middleware
app.use(express.json()); // Allows express to read a req body
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT;
const CONNECTION = process.env.MONGODB_CONNECTION_STRING;

mongoose
  .connect(CONNECTION)
  .then(() => {
    console.log("App connected to database.");
    app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
  })
  .catch((error) => console.log(`connection error: ${error}`));

app.use("/api/chat", ChatRoute);
app.use("/api/message", MessageRoute);
app.use("/api/auth", AuthRoute);
app.use("/api/user", UserRoute);
