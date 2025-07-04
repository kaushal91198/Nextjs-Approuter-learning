import React from "react";

const layout = ({ children, modal }: { children: any; modal: any }) => {
  console.log("sd nfj");
  return (
    <div>
      <section>{children}</section>
      <div>{modal}</div>
    </div>
  );
};

export default layout;
