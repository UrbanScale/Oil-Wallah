import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(120); // 2-minute timer
  const navigate = useNavigate();

  // Function to handle OTP sending
  const handleSendOtp = async () => {
    if (email.includes("@")) {
      try {
        // Send OTP API call
        const response = await fetch("http://localhost:5000/api/otp/send-otp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();
        if (response.ok) {
          alert(data.message || "OTP sent successfully!");
          setOtpSent(true);
          setTimer(120); // Reset timer
        } else {
          alert(data.message || "Failed to send OTP. Please try again.");
        }
      } catch (error) {
        console.error(error);
        alert("Error sending OTP. Please try again.");
      }
    } else {
      alert("Enter a valid email address.");
    }
  };

  // Function to handle OTP verification
  const handleVerifyOtp = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/otp/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message || "OTP verified successfully!");
        setIsLoggedIn(true); // Set login state to true
        navigate("/address");
      } else {
        alert(data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error verifying OTP. Please try again.");
    }
  };

  // Countdown Timer
  useEffect(() => {
    if (otpSent && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [otpSent, timer]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50">
      <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Login or Signup</h2>
        {!otpSent ? (
          <>
            <div className="mb-4">
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <p className="mb-2 text-sm text-gray-600">
              OTP has been sent to your email. Valid for 2 minutes.
            </p>
            <input
              type="text"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Verify OTP
            </button>
            <p className="mt-4 text-sm text-gray-600">
              Time remaining:{" "}
              <span className="font-bold text-red-500">
                {Math.floor(timer / 60)}:{timer % 60 < 10 ? "0" : ""}
                {timer % 60}
              </span>
            </p>
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
