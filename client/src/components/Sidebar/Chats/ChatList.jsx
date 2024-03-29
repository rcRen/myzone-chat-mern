import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import { userChats } from "../../../services/chat.service";
import { useDispatch, useSelector } from "react-redux";
import { activeChat } from "../../../slices/chatSlice";
import { removeNotification } from "../../../slices/notificationSlice";

const ChatList = (props) => {
  const [chats, setChats] = useState([]);
  const { user } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const fetchChats = async () => {
    try {
      const data = await userChats(user?._id);
      setChats(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (currentChat) => {
    dispatch(activeChat(currentChat));
    dispatch(removeNotification(currentChat));
  };

  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <>
      {chats?.map((chat, index) => (
        <div key={index} onClick={() => handleClick(chat)}>
          <Chat key={chat._id} chat={chat} />
        </div>
      ))}
    </>
  );
};
export default ChatList;
