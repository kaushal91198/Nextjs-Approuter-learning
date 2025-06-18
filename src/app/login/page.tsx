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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">Sign in</h1>
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
      </div>
    </div>
  );
};

export default Login;
