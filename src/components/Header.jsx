import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="flex justify-between items-center px-12 py-5 border-b relative">
      <div className="flex items-center text-2xl font-bold">
        <img src={logo} alt="Bluestock Logo" className="w-10 mr-4" />
        BLUESTOCK
      </div>

      <nav className={`hidden md:flex space-x-6 ${menuOpen ? "flex-col" : ""}`}>
        <a href="#" className="text-gray-600 hover:text-gray-800">IPO</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Community</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Products</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Brokers</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Live News</a>
      </nav>

      <div className="hidden md:flex space-x-4">
        <button className="font-semibold">Sign In</button>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:scale-105 transition-transform">Sign Up Now</button>
      </div>

      <button className="md:hidden absolute top-6 right-6 z-50" onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white px-6 py-4 shadow-md z-40 flex flex-col gap-4">
          <a href="#" className="text-gray-700">IPO</a>
          <a href="#" className="text-gray-700">Community</a>
          <a href="#" className="text-gray-700">Products</a>
          <a href="#" className="text-gray-700">Brokers</a>
          <a href="#" className="text-gray-700">Live News</a>
          <button className="mt-2 text-left font-semibold">Sign In</button>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold text-left">Sign Up Now</button>
        </div>
      )}
    </header>
  );
};

export default Header;
