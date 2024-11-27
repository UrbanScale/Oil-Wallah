import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar({ toggleSidebar, isLoggedIn, setIsLoggedIn, count }) {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.error("Logged Out Successfully");
    navigate("/"); // Navigate to home page after logout
  };

  return (
    <div className="w-full h-16 flex items-center justify-between px-4 shadow-md border-b bg-gray-100 z-40 fixed top-0 left-0">
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
            placeholder="Type here to search..."
            className="outline-none w-full text-black"
          />
          <button>
            <FaSearch className="text-gray-500" />
          </button>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-2">
          {!isLoggedIn ? (
            <>
              {/* Login with Redirect */}

              {/* Cart Button */}
              <NavLink to="/cart">
                <button className="text-white flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-[#1058B7] relative">
                  <CiShoppingCart className="text-2xl" />
                  {count > 0 && (
                    <span
                      className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                      justify-center items-center animate-bounce rounded-full text-white"
                    >
                      {count}
                    </span>
                  )}
                  Cart
                </button>
              </NavLink>
            </>
          ) : (
            <>
              {/* Cart Button */}
              <NavLink to="/cart">
                <button className="text-white flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-[#1058B7] relative">
                  <CiShoppingCart className="text-2xl" />
                  {count > 0 && (
                    <span
                      className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                      justify-center items-center animate-bounce rounded-full text-white"
                    >
                      {count}
                    </span>
                  )}
                  Cart
                </button>
              </NavLink>

              {/* Logout Button */}
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
          className="text-gray-800 text-2xl md:hidden"
          onClick={toggleSidebar}
        >
          <FiMenu />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
