import { useState } from "react";
import Link from "next/link";
import { menuItems } from "./Helper";
import { BrandLogo, CrossIcon, MenuIcon } from "./Icons";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  // const [isTransitioning, setIsTransitioning] = useState(false);

  // const handleTransitionEnd = () => {
  //   setIsTransitioning(false);
  // };

  // const handleToggle = () => {
  //   setIsTransitioning(true);
  //   toggleSidebar();
  // };
  return (
    <div>
      <div className="xl:hidden absolute top-4 left-0 right-0 z-50 flex justify-between items-center px-4 ">
        {!isOpen && <BrandLogo className="w-20" />}
        <button className="p-4 ml-auto" onClick={toggleSidebar}>
          {isOpen ? <CrossIcon /> : <MenuIcon />}
        </button>
      </div>
      <aside
        className={`fixed inset-0 z-40 bg-coral transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out xl:static xl:translate-x-0 xl:w-[369px] h-full flex flex-col items-center pt-8`}
      >
        <div className="w-full flex justify-center">
          <img src="/images/Arcuslogo.png" alt="Arcus Logo" />
        </div>
        <div className="flex-grow flex flex-col justify-center w-full items-center">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.href} className="w-full">
                <Link href={item.href}>
                  <span
                    className="block text-midnight font-bold font-montserrat text-lg tracking-widest hover:underline capitalize cursor-pointer"
                    onClick={toggleSidebar}
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
