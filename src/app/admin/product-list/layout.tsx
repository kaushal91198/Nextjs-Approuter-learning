import React from "react";

interface LayoutType {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutType) => {
  return children;
};

export default Layout;
