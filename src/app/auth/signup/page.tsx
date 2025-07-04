import { SignupForm } from "@/app/_components/SignupForm";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main
      className="w-full h-screen flex 
            flex-col justify-center items-center gap-7"
    >
      <h1 className="text-4xl font-semibold ">Signup page</h1>
      <SignupForm />
    </main>
  );
};

export default page;
