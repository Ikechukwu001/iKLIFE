import { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="relative z-10 font-verdena w-full bg-white text-gray-800 border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* Left Section */}
        <div className="flex items-center gap-8">
          <Link to="/" className="text-lg font-bold text-green-700">iKLIFE Pharmacy</Link>
          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-6 text-sm text-gray-700">
            <li><Link to="/" className="hover:text-green-600">Essential Drugs</Link></li>
            <li><Link to="/" className="hover:text-green-600">Team</Link></li> 
            <li><Link to="/" className="hover:text-green-600">About</Link></li>
          </ul>
        </div>

        {/* Center - Search */}
        <div className="flex-1 mx-6 hidden lg:block">
          <input
            type="text"
            placeholder="Search for medications, health products, and more"
            className="w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Right - Buttons */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-1.5 bg-green-100 text-green-800 rounded-full hover:bg-green-200 text-sm">
            <FaShoppingCart size={16} />
            <span>Cart</span>
          </button>

          {/* Hamburger Icon */}
          <button onClick={toggleMenu} className="md:hidden text-green-700 ml-2">
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-10">
            <ul className="flex flex-col p-4 gap-3 text-gray-700 text-sm">
              <li><Link to="/" className="hover:text-green-600">Services</Link></li>
              <li><Link to="/" className="hover:text-green-600">Team</Link></li>
              <li><Link to="/" className="hover:text-green-600">About</Link></li>
              <li className="flex items-center gap-2 cursor-pointer">
                <FaShoppingCart size={16} />
                <span>Cart</span>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
