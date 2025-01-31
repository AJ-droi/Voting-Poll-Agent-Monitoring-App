"use client";
import Link from "next/link";
import { useState } from "react";
import { FiUser, FiMenu } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { IoNotificationsSharp } from "react-icons/io5";
import { TiDocumentText } from "react-icons/ti";

const sidebarData = [
  {
    name: "Dashboard",
    icon: AiFillHome,
    pathname: "/dashboard",
  },
  {
    name: "Result",
    icon: TiDocumentText,
    pathname: "/results",
  },
  {
    name: "Notifications",
    icon: IoNotificationsSharp,
    pathname: "/notifications",
  },
  {
    name: "Profile",
    icon: FiUser,
    pathname: "/profile",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Access the current route's pathname

  return (
    <div
      className={`${
        isOpen ? "w-[15%]" : "w-16"
      } bg-[#ffffff] h-full text-white flex flex-col`}
    >
     
      {isOpen && <h3 className="text-[#3CB371] text-center p-8">PollApp</h3>}
      {!isOpen &&<button
        className="p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiMenu size={24} className="text-[#3CB371]" />
      
      </button>}
      <div className="flex-grow">
        <ul className="space-y-4 mt-4">
          {sidebarData.map((data, index) => (<li className="flex items-center h-[7vh]" key={index}>
            <div className={`${
                  pathname === data.pathname
                    ? "bg-[#FF6600]" // Active color
                    : "bg-[#B1B1B1]" // Inactive color
                } w-[2%] h-[50%] rounded-ee-3xl rounded-se-3xl`}></div>
            <button
              className="p-4 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <data.icon
                size={24}
                className={`mr-2 ${
                  pathname === data.pathname
                    ? "text-[#FF6600]" // Active color
                    : "text-[#B1B1B1]" // Inactive color
                }`}
              />
            </button>
            {isOpen && (
              <Link
                href={data.pathname}
                className={`mr-2 ${
                  pathname === data.pathname
                    ? "text-[#FF6600]" // Active color
                    : "text-[#B1B1B1]" // Inactive color
                }`}
              >
               {data.name}
              </Link>
            )}
          </li>))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
