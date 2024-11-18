import React from 'react';
import Navbar from '../components/Navbar';
import EventCard from '../components/EventCard';

const Events = () => {
  const events = [
    {
      title: "Music Festival",
      date: "2024-11-12",
      location: "Central Park",
      description: "A vibrant music festival featuring live bands, food, and fun activities.",
      imageUrl: "path-to-your-image/music-festival.jpg",
    },
    {
      title: "Tech Conference 2024",
      date: "2024-12-05",
      location: "Tech Hub, Silicon Valley",
      description: "Join industry leaders and innovators for discussions on the latest in technology and trends.",
      imageUrl: "path-to-your-image/tech-conference.jpg",
    },
    {
      title: "Art Expo",
      date: "2024-11-20",
      location: "City Art Gallery",
      description: "Explore contemporary art from local and international artists at the annual Art Expo.",
      imageUrl: "path-to-your-image/art-expo.jpg",
    },
    {
      title: "Food Truck Rally",
      date: "2024-11-15",
      location: "Downtown Square",
      description: "Taste delicious offerings from the best food trucks in the city while enjoying live music.",
      imageUrl: "path-to-your-image/food-truck-rally.jpg",
    },
    {
      title: "Yoga Retreat",
      date: "2024-11-25",
      location: "Serenity Spa Resort",
      description: "Relax and rejuvenate at our weekend yoga retreat surrounded by nature.",
      imageUrl: "path-to-your-image/yoga-retreat.jpg",
    },
    {
      title: "Charity Run",
      date: "2024-12-10",
      location: "City Stadium",
      description: "Participate in a charity run to support local children's education. All ages welcome!",
      imageUrl: "path-to-your-image/charity-run.jpg",
    },
    {
      title: "Photography Workshop",
      date: "2024-11-30",
      location: "Downtown Studio",
      description: "Join us for a hands-on photography workshop with professional photographers.",
      imageUrl: "path-to-your-image/photography-workshop.jpg",
    },
    {
      title: "Holiday Market",
      date: "2024-12-01",
      location: "Community Center",
      description: "Shop for unique gifts and enjoy festive activities at our annual holiday market.",
      imageUrl: "path-to-your-image/holiday-market.jpg",
    },
    {
      title: "Literary Symposium",
      date: "2024-12-15",
      location: "Grand Library Hall",
      description: "Engage with authors, scholars, and book lovers at this year's Literary Symposium.",
      imageUrl: "path-to-your-image/literary-symposium.jpg",
    },
    {
      title: "Culinary Workshop",
      date: "2024-12-18",
      location: "Culinary Arts Center",
      description: "A fun, hands-on workshop to learn gourmet cooking techniques with professional chefs.",
      imageUrl: "path-to-your-image/culinary-workshop.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
