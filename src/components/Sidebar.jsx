import React from "react";
import { TiHome } from "react-icons/ti";
import { PiShoppingCartSimple } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed left-0 bg-[#E8F1FD] w-[70%] md:w-[18%] h-full top-0 transition-transform duration-300 ease-in-out z-10 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Sidebar Content */}
        <div className="text-[#4F4F4F] font-bold m-8 mt-16">MAIN MENU</div>

        {/* Menu Items */}
        <div className="flex items-center m-12 gap-4">
          <button className="text-[#4F4F4F] text-xl font-bold">
            <TiHome />
          </button>
          <button className="text-[#4F4F4F] font-bold">
            <h1>Home</h1>
          </button>
        </div>

        <div className="flex items-center m-12 gap-4">
          <button className="text-[#4F4F4F] text-xl font-bold">
            <PiShoppingCartSimple />
          </button>
          <NavLink to = "/">
          <button className="text-[#4F4F4F] font-bold">
            
            <h1>Products</h1>
          </button>
          </NavLink>
        </div>

        {/* Signup & Login Buttons (Only for Mobile) */}
        <div className="flex flex-col gap-4 mt-12 px-4 md:hidden">
          <button className="text-white px-4 py-2 rounded-full bg-blue-600 hover:bg-[#1058B7]">
            Signup
          </button>
          <button className="text-white px-4 py-2 rounded-full bg-blue-600 hover:bg-[#1058B7]">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
