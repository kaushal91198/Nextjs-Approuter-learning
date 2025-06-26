"use client";


import Button from "@/components/button";
import React from "react";

const ClientComp = ({ serverComp }: any) => {
  return (
    <div>
      <div>Client Comp</div>
      <div>
        <span>Server Comp</span>
        <div>{serverComp}</div>
      </div>
    </div>
  );
};

export default ClientComp;
