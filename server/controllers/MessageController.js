import ChatModel from "../models/ChatModel.js";
import MessageModel from "../models/MessageModel.js";

export const getMessages = async (req, res) => {
  const { chatId } = req.params;
  try {
    const result = await MessageModel.find({ chat:chatId })
      .populate('sender')
      .populate("chat");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};


export const addMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  if (!chatId || !senderId || !text) {
    console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }
  let newMessage = {
    chat: chatId,
    sender: senderId,
    text: text,
  };

  try {
    let message = await MessageModel.create(newMessage);
    message = await message.populate('sender')
    message = await message.populate({
      path: "chat",
      model: "Chat",
      populate: { path: "members", model: "User" }
    })

    await ChatModel.findByIdAndUpdate(chatId, { lastMessage: message })

    res.status(200).json(message);
  } catch (error) {
    res.status(500).json(error);
  }
};

