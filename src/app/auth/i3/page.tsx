import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h2>
        GO to  <Link href={"/i1/i4"}>i4</Link>
      </h2>
    </div>
  );
};

export default page;
