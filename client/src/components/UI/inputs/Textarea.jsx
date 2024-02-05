import React from "react";

const Textarea = ({ className, variant, ...rest }) => {
  const baseClasses = `max-w-full w-full px-5 py-4 rounded-sm content-center outline-none text-sm
        placeholder:text-black placeholder:opacity-40 text-opacity-70 dark:placeholder:text-white 
        dark:placeholder:opacity-70 focus:outline-none transition duration-200 
        ease-out`;

  const getVariantClasses = () => {
    if (variant === "bordered") {
      return `border border-gray-200 text-black bg-gray-50 dark:bg-gray-700
                        dark:text-white dark:bg-opacity-70 dark:focus:bg-opacity-0 focus:bg-opacity-0
                        focus:border-indigo-300 dark:border-gray-600`;
    } else {
      return `text-black bg-gray-50 dark:text-white border-opacity-0 
                        dark:bg-gray-700 dark:bg-opacity-70 dark:border-opacity-70 dark:border-gray-700`;
    }
  };

  const variantClasses = getVariantClasses();
  const classes = `${baseClasses} ${className} ${variantClasses}`;

  return <textarea className={classes} {...rest} />;
};

export default Textarea;
