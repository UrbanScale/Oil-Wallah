import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsLoggedIn }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  // Function to handle OTP sending
  const handleSendOtp = () => {
    if (mobileNumber.length === 10) {
      alert("OTP sent successfully!");
      setOtpSent(true);
    } else {
      alert("Enter a valid 10-digit mobile number.");
    }
  };

  // Function to handle OTP verification
  const handleVerifyOtp = () => {
    if (otp === "1234") {
      alert("OTP verified successfully! You are logged in.");
      setIsLoggedIn(true); // Set login state to true
      navigate("/address");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50">
      <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Login or Signup</h2>
        {!otpSent ? (
          <>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-4">
              <span className="px-3 bg-gray-100 text-gray-600 font-medium">
                +91
              </span>
              <input
                type="text"
                className="flex-1 p-3 focus:outline-none"
                placeholder="Enter your mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                maxLength={10}
              />
            </div>
            <button
              onClick={handleSendOtp}
              className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none"
              placeholder="Enter OTP (Default: 1234)"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Verify OTP
            </button>
          </>
        )}
        <p className="text-sm text-gray-600 mt-4">
          By continuing, I agree to the{" "}
          <a href="#" className="text-pink-500 underline">
            Terms of Use
          </a>{" "}
          &{" "}
          <a href="#" className="text-pink-500 underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
