import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import ChatTop from "./ChatTop/ChatTop";
import ChatMiddle from "./ChatMiddle/ChatMiddle";
import ChatBottom from "./ChatBottom/ChatBottom";
import { sendMessage } from "../../services/message.service";
import { setNotifications } from "../../slices/notificationSlice";

const ChatBox = (props) => {
  const dispatch = useDispatch();
  const chat = useSelector((state) => state.active.chat);
  const { user } = useSelector((state) => state.auth.user);
  const socket = useRef();

  const [message, setMessage] = useState();
  const [sendText, setSendText] = useState(null);
  const [receivedmessage, setReceivedMessage] = useState(null);

  const sendNewMessage = async () => {
    try {
      await sendMessage(chat?._id, user?._id, sendText).then((data) => {
        setMessage(data);
        socket.current.emit("send-message", data);
      });
    } catch (error) {
      console.info(error);
    }
  };

  //connect to socket.io
  useEffect(() => {
    socket.current = io("http://localhost:8080");
    socket.current.emit("join-chat", user._id);
  }, [user]);

  //send message
  useEffect(() => {
    if (sendText !== null) {
      sendNewMessage();
    }
  }, [sendText]);

  //receive message from socket
  useEffect(() => {
    socket.current.on("receive-message", (message) => {
      if (chat !== null && message.chat._id === chat._id) {
        setReceivedMessage(message);
      } else {
        dispatch(setNotifications(message));
      }
    });
  }, []);

  return chat !== null ? (
    <div className="h-full flex flex-col scrollbar-hidden">
      <ChatTop chat={chat} />
      <ChatMiddle
        chat={chat}
        receivedMessage={receivedmessage}
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
