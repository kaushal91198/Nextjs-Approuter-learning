import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

interface LayoutType {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutType) => {
  return (
    <div>
      <Navbar isAdmin={true}/>
      <div className="flex w-full">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
