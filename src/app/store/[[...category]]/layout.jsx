import React from "react";

import SideBar from "@/components/SideBar/SideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      {children}
    </div>
  );
};

export default Layout;
