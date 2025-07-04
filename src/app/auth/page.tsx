import Link from "next/link";
import React from "react";

const page = () => {
  console.log("SDfnjkn");
  return (
    <div className="flex justify-center items-center h-36">
      <Link
        href="/auth/signup"
        className="bg-black text-white px-4 py-2 font-semibold rounded-sm"
      >
        Signup
      </Link>
    </div>
  );
};

export default page;
