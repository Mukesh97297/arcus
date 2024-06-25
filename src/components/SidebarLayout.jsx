"use client";
import React, { useState } from "react";
import Sidebar from "./common/Header";
import Hero from "./home/Hero";

const SidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  );
};

export default SidebarLayout;
