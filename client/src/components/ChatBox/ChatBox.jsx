import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ChatTop from "./ChatTop/ChatTop";
import ChatMiddle from "./ChatMiddle/ChatMiddle";
import ChatBottom from "./ChatBottom/ChatBottom";
import { sendMessage } from "../../services/message.service";
import { socket } from "../../services/socket";

const ChatBox = (props) => {
  const chat = useSelector((state) => state.active.chat);
  const { user } = useSelector((state) => state.auth.user);

  const [message, setMessage] = useState();
  const [sendText, setSendText] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);

  const sendNewMessage = async () => {
    try {
      const receiver = chat.members.find((member) => member._id !== user._id);
      await sendMessage(chat?._id, user?._id, receiver._id, sendText).then(
        (data) => {
          setMessage(data);
          socket.emit("send-message", data);
        }
      );
    } catch (error) {
      console.info(error);
    }
  };

  //send message
  useEffect(() => {
    if (sendText !== null) {
      sendNewMessage();
    }
  }, [sendText]);

  //receive message from socket
  useEffect(() => {
    socket.on("receive-message", (message) => {
      if (
        message &&
        message.chat._id == chat?._id &&
        message.receiver._id == user._id
      ) {
        setReceivedMessage(message);
      }
    });
  }, [chat]);

  return chat !== null ? (
    <div className="h-full flex flex-col scrollbar-hidden">
      <ChatTop chat={chat} />
      <ChatMiddle
        chat={chat}
        receivedMessage={receivedMessage}
        sendMessage={message}
      />
      <ChatBottom chat={chat} setSendText={setSendText} />
    </div>
  ) : (
    <div className="w-full bg-gray-200">
      <div className="w-full min-h-[84px] px-5 py-6">
        Choose One Chat to Start
      </div>
    </div>
  );
};

export default ChatBox;
