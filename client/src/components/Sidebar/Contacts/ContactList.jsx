import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import { getContacts } from "../../../services/user.service";
import { useSelector } from "react-redux";

const ContactList = (props) => {
  const [contactList, setContactList] = useState([]);
  const { user } = useSelector((state) => state.auth.user);
  const fetchContacts = async () => {
    try {
      const { contacts } = await getContacts(user?._id);
      setContactList(contacts);
    } catch (error) {
      console.info("error:", error);
    }
  };
  useEffect(() => {
    fetchContacts();
  }, []);
  return (
    <div
      className="w-full h-full scroll-smooth scrollbar-hidden"
      style={{ overflowX: "visible", overflowY: "scroll" }}
    >
      {contactList.map((person) => (
        <Contact
          key={person._id}
          firstname={person.firstname}
          lastname={person.lastname}
        />
      ))}
    </div>
  );
};

export default ContactList;
