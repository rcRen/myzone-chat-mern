import React from "react";
import avatar from "../../../assets/avatars/avatar1.jpg";
import Typography from "../../UI/data-display/Typography";
import IconButton from "../../UI/inputs/IconButton";

const ChatTop = (props) => {
  return (
    <div className="w-full bg-gray-200">
      <div className="w-full min-h-[84px] px-5 py-6">
        <div className="w-full flex justify-center items-center">
          <div className="flex grow">
            {/* --avatar-- */}
            <button className="mr-5 outline-none">
              <div
                style={{ backgroundImage: `url(${avatar})` }}
                className="w-[36px] h-[36px] rounded-full bg-cover bg-center"
              ></div>
            </button>
            {/* --name and last seen-- */}
            <div className="flex flex-col">
              <Typography
                variant="heading-2"
                className="mb-2 default-outline cursor-pointer"
                tabindex="0"
              >
                Get Name
              </Typography>

              <Typography
                variant="body-2"
                className="font-extralight default-outline rounded-[4px]"
                tabindex="0"
                aria-label="Last seen december 16, 2019"
              >
                Last seen /Dec 16, 2019/
              </Typography>
            </div>
          </div>
          {/* --voice call-- */}
          <div className="flex">
            <IconButton className="group w-7 h-7 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 mr-3 text-black opacity-60 dark:text-white dark:opacity-70 group-hover:text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatTop;
