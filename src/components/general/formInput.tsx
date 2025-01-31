import { useState } from "react";
import { Controller, Control } from "react-hook-form";
import { LuEye, LuEyeClosed } from "react-icons/lu";

interface InputProps {
  name: string;
  control: Control<any, any>;
  label: string;
  type?: string;
  rules?: any;
  errors?: any;
}



const Input = ({ name, control, label, type = "text", rules, errors }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const isPasswordField = type === "password";
  return (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-[#9794AA]">
      {label}
    </label>
    <div className="relative mt-2">
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <>
          <input
            {...field}
            id={name}
            type={type}
            className="block w-full outline-none  rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm p-3"
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
          </>
        )}
      />
      {errors && errors[name] && (
        <p className="text-red-500 text-sm">{errors[name]?.message}</p>
      )}
    </div>
  </div>
)};

export default Input;
