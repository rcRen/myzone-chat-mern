import React from "react";
import Typography from "../../UI/data-display/Typography";
import Icon from "../../Navigation/Icon";
const Contact = (props) => {
  return (
    <div className="w-full p-5 flex justify-between items-center rounded">
      <button className="default-outline transition-all duration-200 ease-out">
        <div className="flex-row">
          {/* --contact name-- */}
          <Typography variant="heading-2" className="hover:scale-105">
            {props.firstname} {props.lastname}
          </Typography>
        </div>
      </button>
      <div className="relative">
        <Icon title="ellipsis" />
      </div>
    </div>
  );
};
export default Contact;
