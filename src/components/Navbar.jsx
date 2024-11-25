import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { NavLink } from "react-router-dom"; // Ensure you are using react-router
import { CiShoppingCart } from "react-icons/ci"; // Assuming you want this for cart

function Navbar({ toggleSidebar, isLoggedIn, handleLogout, cartItems }) {
  return (
    <div className="w-full h-16 flex items-center justify-between px-4 shadow border-b bg-gray-100">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full bg-yellow-200"
          src="https://via.placeholder.com/150"
          alt="Logo"
        />
      </div>

      {/* Search Box and Buttons */}
      <div className="flex items-center gap-3">
        {/* Search Box */}
        <div className="hidden md:flex items-center bg-white border border-blue-600 rounded-full px-12 py-2">
          <input
            type="text"
            placeholder="Type here to search.."
            className="outline-none w-full text-black"
          />
          <button>
            <FaSearch className="text-gray-500" />
          </button>
        </div>

        {/* Conditional Rendering for Buttons */}
        <div className="hidden md:flex gap-2">
          {!isLoggedIn ? (
            <>
              <NavLink to="/login">
                <button className="text-white px-4 py-2 rounded-full bg-blue-600 hover:bg-[#1058B7]">
                  Login
                </button>
              </NavLink>
              <NavLink to="/signup">
                <button className="text-white px-4 py-2 rounded-full bg-blue-600 hover:bg-[#1058B7]">
                  Signup
                </button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/cart">
                <button className="text-white flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-[#1058B7]">
                  <CiShoppingCart className="mt-1" /> Cart {cartItems.length}
                </button>
              </NavLink>

              <button
                className="text-white px-4 py-2 rounded-full bg-red-500 hover:bg-red-600"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Menu Icon (Mobile) */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={toggleSidebar}
        >
          <FiMenu />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
