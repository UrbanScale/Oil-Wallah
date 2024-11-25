import React from "react";
import {
  FaGooglePlay,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="py-6 px-5  max-w-7xl  rounded-2xl bg-[#E8F1FD]  flex justify-between items-center">
      {/* Profile Section */}
      <div className="flex items-center gap-4">
        <img
          className="w-16 h-16 rounded-full"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
      </div>

      {/* Quick Links Section */}
      <div className="text-center">
        <h4 className="font-bold text-gray-800 mb-2">Quick Links</h4>
        <ul className="space-y-1">
          <li>
            <a href="#terms" className="text-blue-600 hover:underline">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#refunds" className="text-blue-600 hover:underline">
              Refunds & Cancellation Policy
            </a>
          </li>
        </ul>
      </div>

      {/* Download App & Social Media */}
      <div className="text-right">
        <h4 className="font-bold text-gray-800 mb-2">Download App</h4>
        <div className="mb-4">
          <button className="border rounded-lg bg-black text-white px-4 py-2 flex items-center">
            <FaGooglePlay className="mr-2" /> Get it on Google Play
          </button>
        </div>
        <h4 className="font-bold text-gray-800 mb-2">Follow us</h4>
        <div className="flex items-center gap-3 text-xl">
          <FaTwitter className="text-gray-500 hover:text-gray-800 cursor-pointer" />
          <FaMapMarkerAlt className="text-gray-500 hover:text-gray-800 cursor-pointer" />
          <FaYoutube className="text-gray-500 hover:text-gray-800 cursor-pointer" />
          <FaInstagram className="text-gray-500 hover:text-gray-800 cursor-pointer" />
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Powered by{" "}
          <span className="font-bold text-blue-600">{"PANDEYCODE"}</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
