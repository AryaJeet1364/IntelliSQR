import React from "react";

interface InputProps {
  label: string;
  type: string;
  name: string;
  register: any;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  register,
  error,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
