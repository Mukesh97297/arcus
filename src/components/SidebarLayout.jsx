import React from "react";
import Sidebar from "./common/Header";

const SidebarLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default SidebarLayout;
