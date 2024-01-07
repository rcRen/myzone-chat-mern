import React from "react";
import NavLink from "./NavLink";
import Logo from "./Logo";

const Navigation = (props) => {
  return (
    <div
      className={`xs:w-full md:w-11 md:h-full md:py-5 xs:py-5 px-5 flex xs:flex-row md:flex-col items-center transition-all duration-500 ${props.className}`}
    >
      {/* --logo-- */}
      <Logo />
      {/* --main navigation-- */}
      <div className="grow">
        <NavLink />
      </div>
    </div>
  );
};

export default Navigation;
