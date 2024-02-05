import React from "react";
import SidebarTitle from "./SidebarTitle";
import ChatList from "./Chats/ChatList";
import ContactList from "./Contacts/ContactList";
import { useSelector } from "react-redux";

const Sidebar = (props) => {
  const activeSidebar = useSelector((state) => state.active.sidebar);
  return (
    <div
      className={`w-1/3 md:w-[290px] pl-5 h-screen flex flex-col static ${props.className}`}
    >
      <SidebarTitle title={activeSidebar} />
      {activeSidebar === "contacts" && (
        <ContactList setProfileInfo={props.setProfileInfo} />
      )}
      {activeSidebar === "chats" && <ChatList />}
    </div>
  );
};
export default Sidebar;
