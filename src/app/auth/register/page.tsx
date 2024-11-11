"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/UI/formInput";
import Alert from "@/components/UI/alert";
import { register } from "@/api/auth";
import Image from "next/image";

export interface RegisterFormInputs {
  name: string;
  email: string;
  password: string;
}



const RegisterPage = () => {
  const [registeredUser, setRegisteredUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>();

  const onSubmit: SubmitHandler<RegisterFormInputs> = async ({ name, email, password }) => {
    setError(null);
    setSuccessMessage(null);
    try {
      const user = await register({name, email, password});
      setRegisteredUser(user);
      setSuccessMessage("Registration successful! Please log in.");
    } catch (err: any) {
      setError(err.message);
    }
  };
console.log(registeredUser)
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {error && <Alert type="error" message={error} />}
        {successMessage && <Alert type="success" message={successMessage} />}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            name="name"
            control={control}
            label="Full Name"
            type="text"
            rules={{ required: "Name is required" }}
            errors={errors}
          />

          <Input
            name="email"
            control={control}
            label="Email address"
            type="email"
            rules={{ required: "Email is required" }}
            errors={errors}
          />

          <Input
            name="password"
            control={control}
            label="Password"
            type="password"
            rules={{
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
            }}
            errors={errors}
          />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/auth/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
