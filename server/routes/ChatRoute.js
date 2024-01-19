import express from "express";
import {
  userChats,
  findChat,
  accessChat,
} from "../controllers/ChatController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", accessChat);
router.post("/find", findChat);
router.post("/:userId", userChats);

export default router;
