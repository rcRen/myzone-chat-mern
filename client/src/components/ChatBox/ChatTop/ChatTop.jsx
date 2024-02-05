import React from "react";
import Typography from "../../UI/data-display/Typography";
import IconButton from "../../UI/inputs/IconButton";
import { useSelector } from "react-redux";
import { formatTimestamp } from "../../../utils";

const ChatTop = ({ chat }) => {
  const { user } = useSelector((state) => state.auth.user);
  const member = chat?.members.find((member) => member._id !== user?._id);
  console.info(chat);
  return (
    <div className="w-full bg-gray-200 sticky top-0">
      <div className="w-full min-h-[84px] px-5 py-6">
        <div className="w-full flex justify-center items-center">
          <div className="flex grow">
            {/* --avatar-- */}
            <button className="mr-5 outline-none">
              <div
                style={{ backgroundImage: `url(${member?.avatar})` }}
                className="w-8 h-8 rounded-full bg-cover bg-center border border-amber-500"
              ></div>
            </button>
            {/* --name and last seen-- */}
            <div className="flex flex-col">
              <Typography
                variant="heading-2"
                className="mb-2 default-outline cursor-pointer"
                tabindex="0"
              >
                {member?.firstname} {member?.lastname}
              </Typography>

              <Typography
                variant="body-2"
                className="font-extralight default-outline rounded-[4px]"
                tabindex="0"
                aria-label=""
              >
                Last seen {formatTimestamp(chat.updatedAt)}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatTop;
