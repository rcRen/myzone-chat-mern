import ChatModel from "../models/ChatModel.js";

export const accessChat = async (req, res) => {
  const { senderId, receiverId } = req.body;
  if (!senderId || !receiverId) {
    console.log("UserId param not sent with request");
    return res.sendStatus(400);
  }

  let isChat = await ChatModel.findOne({
    members: {
      $all: [senderId, receiverId]
    }
  })
    .populate("members", "-password")
    .populate("lastMessage")

  if (isChat) {
    res.status(200).json(isChat)
  } else {
    let newChat = {
      chatName: "sender",
      members: [senderId, receiverId]
    }
    try {
      const createdChat = await ChatModel.create(newChat)
      let chat = await ChatModel.findOne({ _id: createdChat._id }).populate("members", "-password")
      res.status(200).json(chat);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export const findChat = async (req, res) => {
  const { firstId, secondId } = req.body;
  try {
    const chat = await ChatModel.findOne({
      members: { $all: [firstId, secondId] },
    }).populate("members", "-password")
      .populate("lastMessage");
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const userChats = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      members: { $in: [req.params.userId] },
    }).populate("members", "-password")
      .populate("lastMessage");
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};
