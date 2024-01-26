import React from "react";
import {
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  EllipsisVerticalIcon,
  ArrowLeftStartOnRectangleIcon
} from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

const Icon = (props) => {
  const activeSidebar = useSelector((state) => state.activeSidebar);

  switch (props.title) {
    case "chats":
      return (
        <ChatBubbleOvalLeftIcon
          className={`w-7 h-7 group-focus:text-indigo-400 hover:text-indigo-400 active:text-indigo-400 active:scale-110 dark:text-gray-500 transition ease-out duration-200 ${
            activeSidebar == "chats" ? "text-indigo-400" : "text-gray-300"
          } `}
        />
      );
    case "contacts":
      return (
        <UsersIcon
          className={`w-7 h-7 group-focus:text-indigo-400 hover:text-indigo-400 active:text-indigo-400 active:scale-110 dark:text-gray-500 transition ease-out duration-200 ${
            activeSidebar == "contacts" ? "text-indigo-400" : "text-gray-300"
          }`}
        />
      );
    case "ellipsis":
      return (
        <EllipsisVerticalIcon className="h-6 w-6 text-black opacity-60 dark:text-white dark:opacity-70 hover:scale-105 cursor-pointer" />
      );
    case "logout":
      return (
        <ArrowLeftStartOnRectangleIcon className="w-7 h-7 text-gray-300 group-focus:text-indigo-400 hover:text-indigo-400 active:text-indigo-400 active:scale-110 dark:text-gray-500 transition ease-out duration-200" />
      );
  }
};

export default Icon;
