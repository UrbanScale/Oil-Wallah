import React from "react";
import { TiHome } from "react-icons/ti";
import { PiShoppingCartSimple } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar, isLoggedIn, handleLogout }) {
  return (
    <div
      className={`fixed left-0 top-0 bg-[#E8F1FD] w-[70%] md:w-[18%] h-full transition-transform duration-300 ease-in-out z-30 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      {/* Sidebar Content */}
      <div className="text-[#4F4F4F] font-bold m-8 mt-16">MAIN MENU</div>

      {/* Menu Items */}
      <div className="flex items-center m-12 gap-4">
        <TiHome className="text-[#4F4F4F] text-xl" />
        <NavLink to="/" onClick={toggleSidebar}>
          <h1 className="text-[#4F4F4F] font-bold">Home</h1>
        </NavLink>
      </div>

      <div className="flex items-center m-12 gap-4">
        <PiShoppingCartSimple className="text-[#4F4F4F] text-xl" />
        <NavLink to="/" onClick={toggleSidebar}>
          <h1 className="text-[#4F4F4F] font-bold">Products</h1>
        </NavLink>
      </div>

      {/* Logout Button (Visible when logged in) */}
      {isLoggedIn && (
        <div className="flex flex-col gap-4 mt-12 px-4 md:hidden">
          <button
            onClick={() => {
              handleLogout();
              toggleSidebar(); // Close sidebar after logout
            }}
            className="text-white px-4 py-2 rounded-full bg-red-500 hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
