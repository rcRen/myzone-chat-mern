import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "../../UI/data-display/Typography";
import { formatTimestamp } from "../../../utils";
import { socket } from "../../../services/socket";
import { setNotifications } from "../../../slices/notificationSlice";
const Chat = ({ chat }) => {
  const { user } = useSelector((state) => state.auth.user);
  const _chat = useSelector((state) => state.active.chat);
  const chatRef = useRef();
  const member = chat?.members.find((member) => member._id !== user._id);
  const notification = useSelector((state) => state.notification);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (notification.messages.length > 0) {
      notification.messages.forEach((message) => {
        message.sender._id === member._id && setCount(count + 1);
      });
    }
    return () => setCount(0);
  }, [notification]);

  useEffect(() => {
    chatRef.current = _chat;
    socket.on("receive-message", (message) => {
      let currentChat = chatRef.current;
      if (currentChat == null) {
        dispatch(setNotifications(message));
        return;
      }
      if (currentChat._id !== message.chat._id) {
        dispatch(setNotifications(message));
      }
    });
  }, [_chat]);

  return (
    chat && (
      <div className="select-none">
        <button
          className={`w-full h-[92px] mb-3 p-5 flex items-center rounded border-b border-b-indigo-50 focus:bg-indigo-50 hover:bg-indigo-50 ${
            _chat?._id === chat?._id && "bg-indigo-100"
          }`}
        >
          {/* --profile image-- */}
          <div className="mr-4">
            <div
              style={{ backgroundImage: `url(${member.avatar})` }}
              className="w-9 h-9 rounded-full bg-cover bg-center"
            ></div>
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full">
              {/* --conversation name-- */}
              <div className="flex items-start">
                <div className="grow mb-4 text-start">
                  <Typography variant="heading-2">
                    {member?.firstname} {member?.lastname}
                  </Typography>
                </div>
                <Typography
                  variant="body-1"
                  className="invisible w-0 md:visible md:w-fit"
                >
                  {formatTimestamp(chat.updatedAt)}
                </Typography>
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                {/* --draft Message */}
                <Typography
                  variant="body-2"
                  className="flex justify-start items-center text-red-400"
                  no-color
                >
                  {" "}
                  <span className="text-indigo-400">
                    {chat.lastMessage?.text}
                  </span>
                </Typography>
              </div>
              {/* --notification(if unread)-- */}
              {count > 0 && (
                <div>
                  <div className="w-[18px] h-[18px] flex justify-center items-center rounded-[50%] bg-indigo-300">
                    <Typography
                      variant="body-1"
                      no-color
                      className="text-white"
                    >
                      {count}
                      {/* unread message count */}
                    </Typography>
                  </div>
                </div>
              )}
            </div>
          </div>
        </button>
      </div>
    )
  );
};
export default Chat;
