import React from "react";

const TextInput = (props) => {
  const baseClasses = `max-w-full w-full h-8 p-4 rounded-sm content-center
    placeholder:text-black placeholder:opacity-40 text-opacity-70`;

  const getVariantClasses = () => {
    if (props.variant === "bordered") {
      return `border border-gray-200 text-black bg-gray-50 dark:bg-gray-700`;
    } else {
      return `text-black bg-gray-50 dark:text-white border-opacity-0  
                focus:ring focus:ring-indigo-100 focus:bg-opacity-0`;
    }
  };

  const variantClasses = getVariantClasses();
  const classes = `${baseClasses} ${props.className} ${variantClasses}`;

  return (
    <div>
      <div className="flex justify-start">
        <span className="mb-3 w-13 text-sm text-black opacity-60 font-semibold leading-4 tracking-[0.16px]">
          {props.label}
        </span>
      </div>
      <div className="relative">
        <input
          value={props.value}
          className={classes}
          name={props.name}
          type={`${props.type}` || "text"}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
        <div className="absolute top-0 right-0">{props.children}</div>
      </div>
    </div>
  );
};
export default TextInput;
