import { notFound } from "next/navigation";
import React from "react";


//dynamically genrated static page

export const dynamicParams = false;
export const reValidate = 5; //in seconds

export function generateStaticParams() {
  return [
    { blogid: "1" },
    { blogid: "2" },
    { blogid: "3" },
    { blogid: "4" },
    { blogid: "5" },
  ];
}

export async function generateMetadata() {
  return {
    title: "...",
  };
}
const Blogs = async ({ params }: any) => {
  const { blogid } = await params;
  if (blogid === "test") {
    notFound();
  }
  return <div>Blogs page one {blogid}</div>;
};

export default Blogs;
