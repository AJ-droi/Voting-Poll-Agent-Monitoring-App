import React, { useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
  required?: boolean;
  error?: string; // Optional error message
  className?: string; // Optional custom class name for additional styling
  disabled?: boolean;
  icon: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  name,
  required = false,
  error,
  className = "",
  disabled = false,
  icon
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const isPasswordField = type === "password";

  return (
    <div className={`relative w-full ${className}`}>
      <label
        htmlFor={name}
        className="mb-1 mt-2 block text-sm font-medium text-gray-700"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {icon}
        <input
          type={isPasswordField && showPassword ? "text" : type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full rounded-md border px-4 py-2 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
          } transition-all`}
          disabled={disabled}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-600 focus:outline-none"
          >
            {showPassword ? <LuEyeClosed /> : <LuEye />}{" "}
            {/* Replace with icons or use libraries */}
          </button>
        )}
      </div>
      {error && <div className="mt-1 text-xs text-red-500">{error}</div>}
    </div>
  );
};

export default InputField;
