import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Home({ data, setCount, isLoggedIn , setCartItems }) {
  const navigate = useNavigate();
  const handleCart = (item) => {
    if (isLoggedIn) {
      setCount((prev) => prev + 1);
      setCartItems((prev) => [...prev, item])
      
      toast.success("Added to Cart!");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="p-4 md:ml-[18%] mt-20 ">
      {" "}
      {/* Added margin for desktop */}
      {/* Grid Container for Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {" "}
        {/* Adjusted grid classes */}
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[350px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Image Section */}
            <img
              className="w-full h-56 object-cover"
              src={item.image}
              alt={item.name}
            />

            {/* Content Section */}
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-600 mt-2">Price: ₹{item.price}</p>

              {/* Button Section */}
              <button
                className={`mt-4 w-full ${
                  item.added ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
                } text-white py-2 rounded-full`}
                onClick={()=>handleCart(item)}
                disabled={item.added}
              >
                {item.added ? "Added to Cart" : "Add to Cart"}
              </button>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;