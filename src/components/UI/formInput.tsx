import { Controller, Control, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps {
  name: string;
  control: Control<any, any>;
  label: string;
  type?: string;
  rules?: any;
  errors?: any;
}

const Input = ({ name, control, label, type = "text", rules, errors }: InputProps) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-900">
      {label}
    </label>
    <div className="mt-2">
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <input
            {...field}
            id={name}
            type={type}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          />
        )}
      />
      {errors && errors[name] && (
        <p className="text-red-500 text-sm">{errors[name]?.message}</p>
      )}
    </div>
  </div>
);

export default Input;
