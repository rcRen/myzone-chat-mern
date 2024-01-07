import React from "react";
import MessageBox from "./MessageBox";
const ChatMiddle = (props) => {
  return (
    <div className="grow px-5 py-5 flex flex-col overflow-y-scroll scrollbar-hidden">
      <div>
        <MessageBox />
      </div>
    </div>
  );
};

export default ChatMiddle;
