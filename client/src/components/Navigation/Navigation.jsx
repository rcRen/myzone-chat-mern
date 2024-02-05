import React from "react";
import NavLink from "./NavLink";
import Logo from "./Logo";

const Navigation = (props) => {
  return (
    <div
      className={`w-11 h-screen p-5 flex flex-col  items-center ${props.className}`}
    >
      {/* --logo-- */}
      <Logo />
      {/* --main navigation-- */}
      <div className="grow">
        <NavLink setProfileInfo={props.setProfileInfo} />
      </div>
    </div>
  );
};

export default Navigation;
