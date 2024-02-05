import React, { useEffect, useRef, useState } from "react";
import Typography from "../../UI/data-display/Typography";
import { formatTimestamp } from "../../../utils";
import { useSelector } from "react-redux";
import Loading from "../../UI/data-display/Loading";

const MessageBox = (props) => {
  const { message } = props;
  const senderId = message?.sender._id;
  const { user } = useSelector((state) => state.auth.user);
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  const rightSideMessageBar = (
    //  /* --rightMessage message-- */
    <div className="select-none pb-3" ref={scrollRef}>
      <div className="xs:mb-6 md:mb-5 flex flex-row flex-row-reverse">
        {/* --avatar-- */}
        <div className="ml-4">
          <div className="outline-none">
            <div
              style={{
                backgroundImage: `url(${user.avatar})`,
              }}
              className="w-[35px] h-[35px] bg-cover bg-center rounded-full"
            ></div>
          </div>
        </div>
        <div className="flex items-end">
          {/* --bubble-- */}
          <div className="group max-w-[500px] p-5 rounded-b transition duration-500 rounded-tl ml-4 order-2 bg-indigo-50 dark:bg-gray-600">
            <Typography
              variant="body-2"
              className="outline-none text-black opacity-60 dark:text-white dark:opacity-70"
            >
              {message?.text}
            </Typography>
          </div>
          {/* --date-- */}
          <div className="ml-4 order-1">
            <Typography variant="body-1" className="whitespace-pre">
              {formatTimestamp(message?.createdAt || "")}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );

  const leftSideMessageBar = (
    <div className="select-none pb-3" ref={scrollRef}>
      <div className="xs:mb-6 md:mb-5 flex">
        {/* --avatar-- */}
        <div className="mr-4">
          <div className="outline-none">
            <div
              style={{ backgroundImage: "url(/avatars/avatar2.png)" }}
              className="w-[36px] h-[36px] bg-cover bg-center rounded-full"
            ></div>
          </div>
        </div>

        <div className="flex items-end">
          {/* --bubble-- */}
          <div className="group max-w-[500px] p-5 rounded-b transition duration-500 rounded-tr mr-4 bg-gray-50 dark:bg-gray-600">
            <Typography
              variant="body-2"
              className="outline-none text-black opacity-60 dark:text-white dark:opacity-70"
            >
              {message?.text}
            </Typography>
          </div>
          {/* --date-- */}
          <div className="mr-4">
            <Typography variant="body-1" className="whitespace-pre">
              {formatTimestamp(message?.createdAt)}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );

  if (!message) {
    return (
      <div className="flex justify-center">
        <Loading />
      </div>
    );
  }
  if (senderId !== user?._id) {
    return message && leftSideMessageBar;
  }
  return message && rightSideMessageBar;
};
export default MessageBox;
