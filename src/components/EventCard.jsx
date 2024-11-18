import React from 'react';

const EventCard = ({ title, date, location, description, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 max-w-xs mx-auto transform transition-transform hover:scale-105 h-96"> {/* Fixed height */}
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-40 object-cover" 
      />
      <div className="p-4 h-56 flex flex-col justify-between"> {/* Adjusted padding and height */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-500 text-sm mb-1">
            <span className="font-medium">Date:</span> {date}
          </p>
          <p className="text-gray-500 text-sm mb-2">
            <span className="font-medium">Location:</span> {location}
          </p>
          <p className="text-gray-700 text-sm mb-4">{description}</p>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 font-medium text-sm shadow-md">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard;
