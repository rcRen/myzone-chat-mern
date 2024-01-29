import React from "react";
import SidebarTitle from "./SidebarTitle";
import ChatList from "./Chats/ChatList";
import ContactList from "./Contacts/ContactList";
import { useSelector } from "react-redux";

const Sidebar = (props) => {
  const activeSidebar = useSelector((state) => state.active.sidebar);
  return (
    <div
      className={`xs:w-full md:w-[290px] h-full xs:px-5 md:p-0 flex flex-col overflow-visible transition-all duration-500 ${props.className}`}
    >
      <SidebarTitle title={activeSidebar} />
      {activeSidebar === "chats" && <ChatList />}
      {activeSidebar === "contacts" && <ContactList />}
    </div>
  );
};
export default Sidebar;
