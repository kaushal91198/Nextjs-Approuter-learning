
import Navbar from "@/components/Navbar";
import SideBar from "@/components/Sidebar";
import React from "react";

interface LayoutType {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutType) => {
  return (
    <div>
      <Navbar isAdmin={true}/>
      <div className="flex w-full">
        <SideBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
