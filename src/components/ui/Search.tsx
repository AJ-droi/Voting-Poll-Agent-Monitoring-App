import React from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="px-[5%]">
      <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full max-w-full bg-white shadow-sm">
        <input
          type="text"
          placeholder="Search..."
          className="w-full outline-none text-gray-700"
        />
        <FiSearch className="text-gray-400 mr-2" size={20} />
      </div>
    </div>
  );
};

export default Search;
