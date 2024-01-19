import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    chat: {
      type: mongoose.Types.ObjectId,
      ref: "Chat",
    },
    sender: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    text: {
      type: String,
      trim: true
    },
  },
  { timestamps: true }
);

const MessageModel = mongoose.model("Message", MessageSchema);
export default MessageModel;
