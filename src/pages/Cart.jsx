import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import { RiDeleteBin7Fill } from "react-icons/ri";
import toast from "react-hot-toast";

function Cart({ cartItems, setCartItems, setCount, address, addressSaved,isLoggedIn }) {
   // Replace with actual login state from context or props
  const navigate = useNavigate();

  // Remove item from cart
  const handleRemoveFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
    setCount((prev) => prev - 1);
  };
  const { name, mobileNumber, pinCode, houseAddress, locality, city, state } =
    address;

  // Handle Checkout Navigation
  const handleCheckout = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else if (isLoggedIn && !addressSaved) {
      navigate("/address");
    } else if (isLoggedIn && addressSaved) {
      handlePayment();
    }
  };

  // Calculate total amount
  const amount = cartItems.reduce((total, item) => total + item.price, 0);
  const handlePayment = async () => {
    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/order`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                amount
            })
        });

        const data = await res.json();
        console.log(data);
        handlePaymentVerify(data.data)
    } catch (error) {
        console.log(error);
    }
}

// handlePaymentVerify Function
const handlePaymentVerify = async (data) => {
    const options = {
        key: import.meta.env.RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: address.name,
        description: "Test Mode",
        order_id: data.id,
        handler: async (response) => {
            console.log("response", response)
            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/verify`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    })
                })

                const verifyData = await res.json();

                if (verifyData.message) {
                    toast.success(verifyData.message)
                }
            } catch (error) {
                console.log(error);
            }
        },
        theme: {
            color: "#5f63b8"
        }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
}



  return (
    <div className="flex flex-col lg:flex-row mt-8 w-full p-6 lg:p-14 gap-8 lg:ml-[18%]">
      {/* Cart Items Container */}
      <div className="flex-[0.7]">
        {cartItems.length === 0 ? (
          <div className="flex flex-col ml-10 items-center justify-center bg-blue-400 gap-6">
            <h2 className="text-3xl lg:text-5xl text-center font-semibold text-gray-800">
              Your Cart is Empty
            </h2>
            <Link to="/">
              <button className="bg-green-600 border mb-10 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-white hover:text-green-600 hover:border-green-600">
                Shop Now
              </button>
            </Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-10 mb-6 gap-6"
            >
              <div className="md:w-1/3 flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-lg w-full object-cover md:w-[80%] lg:w-[70%] shadow-sm"
                />
              </div>
              <div className="flex flex-col justify-between md:w-2/3">
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {item.name}
                  </h1>
                  <p className="text-gray-600 mb-4">Price: ₹{item.price}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg md:text-xl font-semibold text-green-600">
                    ₹{item.price}
                  </span>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="flex items-center text-red-500 hover:text-red-600 transition duration-200"
                  >
                    <RiDeleteBin7Fill size={24} />
                    <span className="ml-2">Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Summary Section */}
      <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-md p-4">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Summary</h1>
        <div className="flex flex-col">
          <h2 className="font-semibold text-gray-600 mb-2">
            Items in Cart: {cartItems.length}
          </h2>

          {addressSaved && address && (
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
              <h3 className="font-bold text-gray-800 mb-2">
                Delivery Address:
              </h3>
              <p className="text-gray-600">Name: {name}</p>
              <p className="text-gray-600">Mobile Number: {mobileNumber}</p>
              <p className="text-gray-600">House: {houseAddress}</p>
              <p className="text-gray-600">Locality: {locality}</p>
              <p className="text-gray-600">City: {city}</p>
              <p className="text-gray-600">State: {state}</p>
              <p className="text-gray-600">Pincode: {pinCode}</p>
            </div>
          )}

          <hr className="my-4" />
          <div className="flex justify-between font-bold text-gray-800">
            <span>Total:</span>
            <span>₹{amount.toFixed(2)}</span>
          </div>
          <button
            className="
              px-4 py-2
              sm:px-5 sm:py-3
              lg:px-6 lg:py-3
              mt-5 sm:mt-7
              bg-green-500
              border text-white
              font-bold rounded-full
              hover:bg-white hover:text-green-500 hover:border-green-500
              transition duration-300 ease-in-out
            "
            onClick={handleCheckout}
          >
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
}

// PropTypes for validation
Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  setCartItems: PropTypes.func.isRequired,
  setCount: PropTypes.func.isRequired,
  address: PropTypes.shape({
    name: PropTypes.string,
    mobileNumber: PropTypes.string,
    pinCode: PropTypes.string,
    houseAddress: PropTypes.string,
    locality: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
  }),
  addressSaved: PropTypes.bool.isRequired,
};

// Default Props
Cart.defaultProps = {
  address: {
    name: "",
    mobileNumber: "",
    pinCode: "",
    houseAddress: "",
    locality: "",
    city: "",
    state: "",
  },
};

export default Cart;
