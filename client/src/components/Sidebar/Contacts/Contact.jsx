import React from "react";
import Typography from "../../UI/data-display/Typography";
import Icon from "../../Navigation/Icon";
const Contact = ({ person,handleClick }) => {
  
  return (
    <div
      className="w-full p-5 flex justify-between items-center hover:bg-indigo-100 hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex-row">
        {/* --contact name-- */}
        <Typography variant="heading-2" className="hover:scale-105">
          {person.firstname} {person.lastname}
        </Typography>
      </div>
      <div className="relative">
        <Icon title="ellipsis" />
      </div>
    </div>
  );
};
export default Contact;
