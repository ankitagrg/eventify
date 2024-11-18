import React from 'react';
import { FaHome, FaCalendarAlt, FaUserCircle } from 'react-icons/fa';

const Navbar = () => (
  <nav className="bg-white shadow-md py-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
  
      <div className="flex items-center space-x-3">
        <FaCalendarAlt className="text-blue-500 text-3xl" /> {/* Matches hero section color */}
        <span className="text-2xl font-bold text-gray-800">Eventify</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-lg font-medium text-gray-700">
        <a href="/" className="px-3 py-2 text-gray-700 hover:text-indigo-600 transition duration-200 text-lg">
          Home
        </a>
        <a href="/events" className="px-3 py-2 text-gray-700 hover:text-indigo-600 transition duration-200 text-lg">
          Events
        </a>
        
        <button 
          className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-indigo-600 transition duration-200"
          onClick={() => window.location.href = '/book-event'}
        >
          Book Event
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <FaUserCircle className="text-gray-700 text-3xl" />
      </div>
    </div>
  </nav>
);

export default Navbar;
