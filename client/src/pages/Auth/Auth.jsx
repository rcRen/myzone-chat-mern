import React from "react";
import Cover from "./Cover";

const Auth = (props) => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex dark:bg-gray-800">
        {props.children}
      </div>
      <Cover/>
    </div>
  );
};

export default Auth;
