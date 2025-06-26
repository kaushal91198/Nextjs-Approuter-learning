import React from "react";

const NotFound = async ({ params }: any) => {
  console.log(await params);
  return <div> Catch all route</div>;
};

export default NotFound;
