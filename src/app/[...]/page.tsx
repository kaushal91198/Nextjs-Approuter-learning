import React from "react";

const NotFound = async ({ params }: any) => {
  console.log(await params);
  return <div>Nested catch all route</div>;
};

export default NotFound;
