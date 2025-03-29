import React from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-900 text-white p-2 rounded-md hover:bg-blue-800"
    >
      {text}
    </button>
  );
};

export default Button;
