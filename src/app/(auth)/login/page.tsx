// pages/LoginPage.tsx

"use client";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/general/formInput";
import Alert from "@/components/general/alert";
import Image from "next/image";
import login from "@/app/api/login";
import { useRouter } from "next/navigation";
import authService from "@/app/api/services/auth.service";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async ({
    email,
    password,
  }) => {
    try {
      setError(null);
      setSuccessMessage(null);
      const data = await authService.login({ email, password });
      if (data) router.push("/profile");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
          width={40} // Set width here
          height={40} // Set height here
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {error && <Alert type="error" message={error} />}
        {successMessage && <Alert type="success" message={successMessage} />}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            rules={{ required: "Password is required" }}
            errors={errors}
          />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="/register"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
