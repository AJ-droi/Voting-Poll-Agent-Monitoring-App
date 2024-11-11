// pages/LoginPage.tsx

"use client";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { account } from "@/api/config/appwrite";
import { getUsers, login, logout } from "@/api/auth";
import Input from "@/components/UI/formInput";
import Alert from "@/components/UI/alert";

interface LoginFormInputs {
  email: string;
  password: string;
}



const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = async ({ email, password }) => {
    setError(null);
    setSuccessMessage(null);
    try {
      const session = await login(email, password);
      console.log(session)
    //   setLoggedInUser(user);
      setSuccessMessage("Login successful!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const LogOut = async() => {
    await logout()
    setLoggedInUser(null)
  }

  useEffect(() => {
   const  fetchSession = async() =>{
    const user = await getUsers()
    setLoggedInUser(user);
   } 
   
   fetchSession()
  },[])

  if (loggedInUser) {
    return (
      <div>
        {successMessage && <Alert type="success" message={successMessage} />}
        <p>Logged in as {loggedInUser.name}</p>
        <button type="button" onClick={LogOut}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
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
          <a href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
