"use client";
import { useState } from "react";
import Link from "next/link";
import { menuItems } from "./Helper";
import { CrossIcon, MenuIcon } from "./Icons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="xl:hidden p-4 fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        <MenuIcon />
      </button>
      {isOpen && (
        <button
          className="xl:hidden fixed top-4 right-4 z-50"
          onClick={toggleSidebar}
        >
          <CrossIcon />
        </button>
      )}
      <aside
        className={`inset-0 bg-coral z-20 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full xl:translate-x-0"
        } transition-transform duration-300 ease-in-out sm:w-[369px] h-full flex flex-col items-center pt-8`}
      >
        <div className="w-full flex justify-center mb-16">
          <img src="/images/Arcuslogo.png" alt="Arcus Logo" className="w-28" />
        </div>
        <div className="flex flex-col w-full items-center mt-36">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.href} className="w-full">
                <Link href={item.href}>
                  <span
                    className="block text-black text-lg tracking-widest hover:underline capitalize"
                    onClick={handleLinkClick}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
