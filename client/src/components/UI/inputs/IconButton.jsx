import React from "react";

const IconButton = ({ variant, className, children, ...rest }) => {
  const baseClasses = `group flex justify-center items-center
    outline-none rounded-full focus:outline-none transition-all
    duration-200`;

  const getVariantClasses = () => {
    if (variant === "ghost") {
      return "";
    } else {
      return "focus:bg-gray-50 hover:bg-gray-50 dark:hover:bg-gray-700 dark:focus:bg-gray-600";
    }
  };

  const variantClassess = getVariantClasses();
  const classes = `${baseClasses} ${className} ${variantClassess}`;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default IconButton;
