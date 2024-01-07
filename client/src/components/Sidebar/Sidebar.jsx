import React from "react";
import SidebarTitle from "./SidebarTitle";
import ConversationList from "./Conversations/ConversationList";
import ContactList from "./Contacts/ContactList";
import { useSelector } from "react-redux";

const Sidebar = (props) => {
  const activeSidebar = useSelector((state) => state.activeSidebar);
  return (
    <div
      className={`xs:w-full md:w-[290px] h-full xs:px-5 md:p-0 flex flex-col overflow-visible transition-all duration-500 ${props.className}`}
    >
      <SidebarTitle title={activeSidebar} />
      {activeSidebar == "messages" && <ConversationList />}
      {activeSidebar == "contacts" && <ContactList />}
    </div>
  );
};
export default Sidebar;
