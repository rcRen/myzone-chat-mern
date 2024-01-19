import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MessageBox from "./MessageBox";
import { getMessages } from "../../../services/message.service";

const ChatMiddle = ({ chat, receivedMessage, sendMessage }) => {
  const { user } = useSelector((state) => state.auth.user);
  const [messages, setMessages] = useState([]);
  const fetchMessages = async () => {
    try {
      await getMessages(chat?._id).then((data) => setMessages(data));
    } catch (error) {
      console.info(error);
    }
  };
  useEffect(() => {
    fetchMessages();
  }, [chat]);

  useEffect(() => {
    if (receivedMessage !== null && receivedMessage.sender._id !== user._id) {
      setMessages([...messages, receivedMessage]);
    }
  }, [receivedMessage]);

  useEffect(() => {
    if (sendMessage !== null) {
      setMessages([...messages, sendMessage]);
    }
  }, [sendMessage]);
  return (
    <div className="grow px-5 py-5 flex flex-col overflow-y-scroll scrollbar-hidden">
      <div>
        {messages?.map((message) => (
          <MessageBox key={message?._id} message={message} />
        ))}
      </div>
    </div>
  );
};

export default ChatMiddle;
