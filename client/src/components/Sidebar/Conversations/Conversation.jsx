import React from "react";
import avatar1 from "../../../assets/avatars/avatar1.jpg";
import avatar2 from "../../../assets/avatars/avatar2.png";
import Typography from "../../UI/data-display/Typography";
const Conversation = (props) => {
  return (
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
                <Typography variant="heading-2">Contact Name</Typography>
              </div>
              <Typography variant="body-1">6:30 pm</Typography>
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
                <span className="text-indigo-400">last message content</span>
              </Typography>
            </div>
            {/* --notification(if unread)-- */}
            <div>
            <div
              className="w-[18px] h-[18px] flex justify-center items-center rounded-[50%] bg-indigo-300"
            >
              <Typography variant="body-1" no-color className="text-white">
                2
                {/* unread message count */}
              </Typography>
            </div>
          </div>
          </div>
        </div>
      </button>
    </div>
  );
};
export default Conversation;
