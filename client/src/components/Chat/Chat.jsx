import React from "react";
import ChatTop from "./ChatTop/ChatTop";
import ChatMiddle from "./ChatMiddle/ChatMiddle";
import ChatBottom from "./ChatBottom/ChatBottom";

const Chat = (props) => {
  return (
    <div className="h-full flex flex-col scrollbar-hidden">
      <ChatTop />
      <ChatMiddle />
      <ChatBottom />
    </div>
  );
};

export default Chat;
