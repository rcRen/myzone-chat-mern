import express from "express";
import path from 'path'
import config, { __dirname } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import { Server } from "socket.io";

//routes
import ChatRoute from "./routes/ChatRoute.js";
import MessageRoute from "./routes/MessageRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import UserRoute from "./routes/UserRoute.js";


const app = express();

//production
if (config.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });
}

//middleware
app.use(express.json()); // Allows express to read a req body
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
mongoose
  .connect(config.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("App connected to database.");
  })
  .catch((error) => console.log(`connection error: ${error}`));

const server = app.listen(config.PORT, config.HOST,
  () => console.log(`App is listening on  http://${config.HOST}:${config.PORT}`));

app.use("/api/chat", ChatRoute);
app.use("/api/message", MessageRoute);
app.use("/api/auth", AuthRoute);
app.use("/api/user", UserRoute);

// -------socket.io-------
const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: `http://${config.HOST}:${config.APP_FONTEND_PORT}`
  },
  path: "/socket/chat"
});

io.on('connection', (socket) => {
  console.info('socket is connected:', socket.id)

  socket.on("send-message", (receivedMessage) => {
    io.emit('receive-message', receivedMessage)
  });

  socket.on('disconnect', () => {
    console.log(`${socket.id} is disconnected`)
  })
})

