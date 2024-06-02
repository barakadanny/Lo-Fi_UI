import React from "react";
import { ButtonProps } from "../../../types/types";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  type = "button",
}) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
