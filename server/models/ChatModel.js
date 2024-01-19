import mongoose from "mongoose";
const ChatSchema = new mongoose.Schema(
  {
    chatName: { type: String },
    isGroupChat: { type: Boolean, default: false },
    members: {
      type: [mongoose.Types.ObjectId],
      ref: "User",
    },
    groupAdmin: {
      type: [mongoose.Types.ObjectId],
      ref: "User",
    },
    lastMessage: {
      type: mongoose.Types.ObjectId,
      ref: "Message",
    },
  },
  { timestamps: true }
);

const ChatModel = mongoose.model("Chat", ChatSchema);
export default ChatModel;
