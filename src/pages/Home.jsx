import React from 'react';
import Navbar from '../components/Navbar';
import { FaUserFriends, FaCogs, FaBell } from 'react-icons/fa';

const Home = () => (
  <div className="bg-blue-50 min-h-screen flex flex-col">
    <Navbar />
    
    {/* Hero Section */}
    <header className="text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-4xl font-extrabold">Where Every Event Becomes an Experience</h1>
      <p className="text-lg mt-3">Make your events unforgettable with Eventify!</p>
      <div className="mt-8 flex justify-center space-x-4">
        <button className="bg-white text-blue-500 px-6 py-2 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
          Book Your Event
        </button>
        <button className="bg-blue-100 text-blue-500 px-6 py-2 rounded-full shadow-lg hover:bg-blue-200 transition duration-300">
          How It Works
        </button>
      </div>
    </header>
    
    {/* Introduction Section */}
    <section className="max-w-5xl mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Welcome to Eventify</h2>
      <p className="text-md mt-5 text-gray-700 leading-relaxed">
        Eventify is an intuitive event management platform designed to streamline the process of creating, managing, and participating in events. Organizers can effortlessly set up events with essential details like date, time, location, and description. Plus, with options for recurring events, planning becomes a breeze.
      </p>
    </section>

    {/* Features Section */}
    <section className="max-w-5xl mx-auto py-14 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800">Why Choose Eventify?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        
        {/* Feature Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center transition transform hover:scale-105 hover:shadow-lg">
          <FaUserFriends className="text-blue-500 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">User-Friendly Interface</h3>
          <p className="text-gray-600 mt-2 text-sm">Easily navigate and manage your events with our intuitive platform, designed for ease of use.</p>
        </div>
        
        {/* Feature Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center transition transform hover:scale-105 hover:shadow-lg">
          <FaCogs className="text-blue-500 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Customizable Options</h3>
          <p className="text-gray-600 mt-2 text-sm">Tailor your events with themes, layouts, and personalized features to suit any occasion.</p>
        </div>
        
        {/* Feature Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center transition transform hover:scale-105 hover:shadow-lg">
          <FaBell className="text-blue-500 text-4xl mx-auto" />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Real-Time Updates</h3>
          <p className="text-gray-600 mt-2 text-sm">Stay informed with instant notifications and updates, ensuring you’re always in the loop.</p>
        </div>
        
      </div>
    </section>

    {/* Previous Events Section */}
    <section className="max-w-5xl mx-auto py-14 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800">Previous Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        
        {/* Event Card 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300">
          <img src="https://via.placeholder.com/400x300" alt="Event 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">Charity Marathon</h3>
            <p className="text-gray-600 mt-1 text-sm">Join us for a community charity marathon to raise funds for a great cause!</p>
          </div>
        </div>

        {/* Event Card 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300">
          <img src="https://via.placeholder.com/400x300" alt="Event 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">Tech Meetup</h3>
            <p className="text-gray-600 mt-1 text-sm">Connect with tech enthusiasts and industry leaders at our annual tech meetup.</p>
          </div>
        </div>

        {/* Event Card 3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300">
          <img src="https://via.placeholder.com/400x300" alt="Event 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">Food Festival</h3>
            <p className="text-gray-600 mt-1 text-sm">Taste delicious food from around the world at our annual food festival.</p>
          </div>
        </div>

      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-5xl mx-auto text-center">
        <p>&copy; 2024 Eventify. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default Home;
