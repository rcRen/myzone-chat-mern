import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import avatar1 from "../../../assets/avatars/avatar1.jpg";
import avatar2 from "../../../assets/avatars/avatar2.png";
import Typography from "../../UI/data-display/Typography";
import { formatTimestamp } from "../../../utils";
const Chat = ({ chat, currentUser }) => {
  const member = chat?.members.find((member) => member._id !== currentUser);
  const notification = useSelector((state) => state.notification);
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.info('00', notification.messages)
    if (notification.messages.length > 0) {
      notification.messages.forEach((message) => {
        message.chat._id === chat._id && setCount(count + 1);
      });
    }
  }, [notification]);

  return (
    chat && (
      <div className="select-none">
        <button className="w-full h-[92px] px-5 py-6 mb-3 flex rounded focus:bg-indigo-50 dark:active:bg-gray-600 dark:focus:bg-gray-600 dark:hover:bg-gray-600 hover:bg-indigo-50 active:bg-indigo-100 focus:outline-none transition duration-500 ease-out ">
          {/* --profile image-- */}
          <div className="mr-4">
            <div
              style={{ backgroundImage: `url(${avatar1})` }}
              className="w-7 h-7 rounded-full bg-cover bg-center"
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
                <Typography variant="body-1">
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
                    {chat.lastMessage.text}
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
