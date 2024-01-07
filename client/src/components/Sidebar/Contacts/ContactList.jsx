import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import { getContacts } from "../../../services/user.service";
import { useSelector } from "react-redux";

const ContactList = (props) => {
  const  user  = useSelector((state) => state.auth.authData);
  const [contactList, setContactList] = useState([]);
  console.log(contactList);

  useEffect(() => {
  // getContacts(user?._id).then((data) => );
  }, []);
  return (
    <div
      className="w-full h-full scroll-smooth scrollbar-hidden"
      style={{ overflowX: "visible", overflowY: "scroll" }}
    >
      {contactList.map((person) => (
        <Contact key={person._id} />
      ))}
    </div>
  );
};

export default ContactList;
