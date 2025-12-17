import React from "react";
import nav from '../assets/nav.png'

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white border-b border-gray-200">
      
      {/* Logo */}
      <div className="flex items-center gap-2 text-xl font-semibold">
        <img src={nav} alt="" />
        <span>Positivus</span>
      </div>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">
        <li className="cursor-pointer hover:underline">About us</li>
        <li className="cursor-pointer hover:underline">Services</li>
        <li className="cursor-pointer hover:underline">Use Cases</li>
        <li className="cursor-pointer hover:underline">Pricing</li>
        <li className="cursor-pointer hover:underline">Blog</li>
      </ul>

      {/* Button */}
      <button className="px-5 py-2 text-sm font-medium border-2 border-black rounded-xl hover:bg-black hover:text-white transition">
        Request a quote
      </button>
    </nav>
  );
}

export default Navbar;
