import classnames from "classnames";
import React from "react";

interface ButtonProps {
  className?: string;
  form?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children?: React.ReactNode;
}

function Button(props: ButtonProps) {
  const { className, form, type, onClick, children } = props;
  return (
    <button
      form={form}
      type={type}
      className={classnames(
        "text-white px-3 py-1 rounded text-sm bg-green-500 hover:bg-green-700 leading-none transition duration-500",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;
