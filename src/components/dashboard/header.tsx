"use client";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="p-4 bg-white shadow flex justify-between items-center">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full max-w-md bg-white shadow-sm">
        <FiSearch className="text-gray-400 mr-2" size={20} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none text-gray-700"
        />
      </div>
      {/* <button className="px-4 py-2 bg-blue-600 text-white rounded">Logout</button> */}
    </header>
  );
};

export default Header;
