"use client";
import Link from "next/link";
import { useState } from "react";
import { FiHome, FiUser, FiSettings, FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-16"
      } bg-gray-800 h-full text-white flex flex-col`}
    >
      <button
        className="p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiMenu size={24} />
      </button>
      <div className="flex-grow">
        <ul className="space-y-4 mt-4">
          <li className="flex items-center">
            r

            {isOpen && <Link href="/">Home</Link>}
          </li>
          <li className="flex items-center">
            <button
              className="p-4 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FiUser size={24} className="mr-2" />
            </button>
            {isOpen && <Link href="/profile">Profile</Link>}
          </li>
          <li className="flex items-center">
          <button
              className="p-4 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
               <FiSettings size={24} className="mr-2" />
            </button>
            {isOpen && <Link href="/settings">Settings</Link>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
