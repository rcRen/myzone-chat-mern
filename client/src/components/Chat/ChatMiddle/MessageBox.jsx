import React from "react";
import avatar1 from "../../../assets/avatars/avatar1.jpg";
import avatar2 from "../../../assets/avatars/avatar2.png";
import Typography from "../../UI/data-display/Typography";

const MessageBox = (props) => {
  return (
    <>
      <div className="select-none">
        <div className="xs:mb-6 md:mb-5 flex">
          {/* --avatar-- */}
          <div className="mr-4">
            <div className="outline-none">
              <div
                style={{ backgroundImage: `url(${avatar1})` }}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </div>
            {/* --date-- */}
            <div className="mr-4">
              <Typography variant="body-1" className="whitespace-pre">
                1:05 pm
              </Typography>
            </div>
          </div>
        </div>

        {/* --reply-- */}
        <div className="xs:mb-6 md:mb-5 flex flex-row flex-row-reverse">
          {/* --avatar-- */}
          <div className="ml-4">
            <div className="outline-none">
              <div
                style={{ backgroundImage: `url(${avatar2})` }}
                className="w-[36px] h-[36px] bg-cover bg-center rounded-full"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </div>
            {/* --date-- */}
            <div className="ml-4 order-1">
              <Typography variant="body-1" className="whitespace-pre">
                1:07 pm
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MessageBox;
