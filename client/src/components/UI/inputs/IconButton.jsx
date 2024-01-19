import React from "react";

const IconButton = (props) => {
  const baseClasses = `group flex justify-center items-center
    outline-none rounded-full focus:outline-none transition-all
    duration-200`;

  const getVariantClasses = () => {
    if (props.variant === "ghost") {
      return "";
    } else {
      return "focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-600";
    }
  };

  const variantClassess = getVariantClasses();
  const classes = `${baseClasses} ${props.className} ${variantClassess}`;

  return (
    <button className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default IconButton;
