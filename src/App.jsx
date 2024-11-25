import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const Raw = [
    {
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/hair-oil/n/o/4/250-neelgiri-herbal-hair-oil-hair-growth-hair-oil-adivasi-original-imah3mwjgbqm4kvq.jpeg?q=70",
      name: "Adivasi Hair Oil",
      price: 1000,
      added: false,
    },
    // Add more items as needed
  ];

  // States
  const [data, setData] = useState(Raw); // Product data
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // User login status
  const [cartItems, setCartItems] = useState([]); // Cart items state

  // Sidebar toggle function
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCartItems([]); // Clear cart on logout
  };

  // Function to add item to the cart
  const addToCart = (item) => {
    setCartItems((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Navbar */}
        <Navbar
          toggleSidebar={toggleSidebar}
          isLoggedIn={isLoggedIn}
          cartItems={cartItems}
          handleLogout={handleLogout}
        />

        {/* Content Area */}
        <div className="flex-1 bg-gray-100">
          <Routes>
            <Route
              path="/"
              element={<Home data={data} addToCart={addToCart} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contect />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route
              path="/login"
              element={<Login  setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
