import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import { getAllUsers } from "../../../services/user.service";
import { findChat } from "../../../services/chat.service";
import { useSelector } from "react-redux";

const ContactList = ({ setProfileInfo }) => {
  const [contactList, setContactList] = useState([]);
  const { user } = useSelector((state) => state.auth.user);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        let users = await getAllUsers(user?._id);
        users = users.filter((item) => item._id !== user._id);
        setContactList(users);
      } catch (error) {
        console.info("error:", error);
      }
    };
    fetchContacts();
  }, []);
  return (
    <div className="w-full h-full divide divide-y divide-indigo-100">
      {contactList.map((person) => (
        <Contact
          key={person._id}
          person={person}
          handleClick={() => setProfileInfo(person)}
        />
      ))}
    </div>
  );
};

export default ContactList;
