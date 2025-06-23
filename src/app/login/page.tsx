"use client";

import Input from "@/components/input";
import React from "react";
import { LoginFormFields } from "./login.types";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/validationSchema/login.schema";
import Button from "@/components/button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "../../hooks/auth/useLogin";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Login = () => {
  const router = useRouter();
  const { postLogin, loading: postLoader } = useLogin();
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
      if (userDetail.roles.includes("admin")) {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch (error) {
    }
  });
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="max-w-3xl w-full mx-auto bg-white p-6 rounded-xl shadow-2xl">
        <div className="flex justify-start gap-1 items-center">
          <h2 className="text-xl font-bold text-gray-900">Sign in to</h2>
          <Image
            className="cursor-pointer w-28 md:w-32"
            src={assets.logo}
            alt="logo"
          />
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Welcome back! Please sign in to continue
        </p>
        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email address
            </label>
            <Input<LoginFormFields>
              name="email"
              register={register}
              error={errors.email}
              placeholder="Email Address"
              type="email"
              parentClass="mb-4"
              inputClass="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out w-full"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <Input<LoginFormFields>
              name="password"
              register={register}
              error={errors.password}
              placeholder="Enter your password"
              type="password"
              parentClass="mb-4"
              inputClass="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out w-full"
            />
          </div>

          <Button
            type="submit"
            classname="w-full py-2 px-4 rounded-md bg-gradient-to-b from-gray-800 to-gray-700 text-white text-sm font-semibold shadow-md hover:from-gray-700 hover:to-gray-600 flex items-center justify-center gap-1"
            onlyDisable={postLoader}
            loader={true}
          >
            Log in
          </Button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Don’t have an account?{" "}
          <a href="#" className="text-purple-600 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
