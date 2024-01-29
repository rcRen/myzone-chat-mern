import React, { useEffect, useState } from "react";
import MessageBox from "./MessageBox";
import { getMessages } from "../../../services/message.service";

const ChatMiddle = ({ chat, receivedMessage, sendMessage }) => {
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
    setMessages([...messages, receivedMessage]);
  }, [receivedMessage]);

  useEffect(() => {
    if (sendMessage !== null) {
      setMessages([...messages, sendMessage]);
    }
  }, [sendMessage]);

  return (
    <div className="grow px-5 py-5 flex flex-col overflow-y-scroll scrollbar-hidden">
      <div>
        {messages?.map((message, index) => (
          <MessageBox key={index} message={message} />
        ))}  
      </div>
    </div>
  );
};

export default ChatMiddle;
