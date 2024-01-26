import React, { useEffect, useRef, useState } from "react";
import Textarea from "../../UI/inputs/Textarea";
import IconButton from "../../UI/inputs/IconButton";
import { sendMessage } from "../../../services/message.service";

const ChatBottom = ({ setSendText }) => {
  const [typedMessage, setTypedMessage] = useState("");
  const handleTextChange = (event) => {
    const inputText = event.target.value;
    setTypedMessage(inputText);
  };

  const handleSendMessage = async () => {
    if (typedMessage !== null || typedMessage !== "") {
      setSendText(typedMessage);
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="h-auto min-h-[84px] p-5 flex items-end">
          <div className="min-h-[44px]">
            <button className="group w-7 h-7 md:mr-5 xs:mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[20px] h-[20px] text-gray-400 group-hover:text-indigo-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                />
              </svg>
            </button>
          </div>
          {/* --message textarea-- */}
          <div className="grow md:mr-5 xs:mr-4 self-end">
            <div className="relative">
              <Textarea
                className="max-h-[80px] pr-[50px] resize-none scrollbar-hidden"
                cols="30"
                rows="1"
                placeholder="Write your message here"
                value={typedMessage}
                onChange={handleTextChange}
              />
            </div>
          </div>
          <div className="min-h-[44px] flex">
            <IconButton
              variant="ghost"
              className="group w-7 h-7 bg-indigo-300 hover:bg-indigo-400 focus:bg-indigo-400 dark:focus:bg-indigo-300 dark:bg-indigo-400 dark:hover:bg-indigo-400 active:scale-110"
              onClick={() => {
                setTypedMessage("");
                handleSendMessage(typedMessage);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[17px] h-[17px] text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBottom;
