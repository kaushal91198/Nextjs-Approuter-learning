"use client";

import Input from "@/components/input";
import React from "react";
import { LoginFormFields } from "./login.types";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/validationSchema/login.schema";
import Button from "@/components/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePostLogin } from "./hooks/useLogin";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const { postLogin, loading: postLoader } = usePostLogin();
  const dispatch: AppDispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = handleSubmit(async (value: LoginFormFields) => {
    try {
      const userDetail = await postLogin(value);
      dispatch(setUser(userDetail));
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-gray-50 p-8 rounded-lg shadow-2xl w-full max-w-md transform hover:scale-105 transition transform duration-500 ease-in-out">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">
          Welcome Back
        </h1>

        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          <Input<LoginFormFields>
            name="email"
            register={register}
            error={errors.email}
            placeholder="Email Address"
            type="email"
            parentClass="mb-30px last:mb-0"
            inputClass="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out w-[100%]"
          />
          <Input<LoginFormFields>
            name="password"
            register={register}
            error={errors.password}
            placeholder="Enter your password"
            type="password"
            parentClass="mb-30px last:mb-0"
            inputClass="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out w-[100%]"
          />
          <Button
            type="submit"
            classname="bg-blue-500 text-gray-50 font-semibold py-2 rounded-md shadow-md hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-0.5 transition duration-300 ease-in-out p-5"
            onlyDisable={postLoader}
          >
            Log in
          </Button>
        </form>

        {/* <p className="text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 font-semibold">
            Signup here
          </a>
          .
        </p> */}
      </div>
    </main>
  );
};

export default Login;
