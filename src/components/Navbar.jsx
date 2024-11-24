import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
function Navbar() {
  return (
    <div className="w-full h-16 flex items-center justify-between px-4 shadow border-b">
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full bg-yellow-200"
          src="https://via.placeholder.com/150"
          alt="Logo"
        />
      </div>


      <div className="flex items-center gap-3">
      <div className="flex items-center bg-white border border-blue-600 rounded-full px-12 py-2">
        <input
          type="text"
          placeholder="Type here to search.."
          className="outline-none w-full text-black"
        />
        <button>
          <FaSearch className="text-gray-500" />
        </button>
      </div>
        <button className="text-white px-4 py-2 rounded-full bg-blue-600 hover:bg-[#1058B7]">
          Signup
        </button>
        <button className="text-white px-4 py-2 rounded-full bg-blue-600 hover:bg-[#1058B7]">
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
