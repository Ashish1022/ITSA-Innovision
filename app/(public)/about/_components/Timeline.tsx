import { motion } from 'framer-motion';
import { FaStar, FaHeart, FaFire } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
const events = [
  {
    date: "2023-01-01",
    title: "New Year Celebration",
    description: "Celebrated the new year.",
    icon: <FaStar />,
    image: "/assets/images/human_ludo.webp",
    color: "bg-red-300"
  },
  {
    date: "2023-01-01",
    title: "New Year Celebration",
    description: "Celebrated the new year.",
    icon: <FaStar />,
    image: "/assets/images/human_ludo.webp",
    color: "bg-red-300"
  },
  {
    date: "2023-01-01",
    title: "New Year Celebration",
    description: "Celebrated the new year.",
    icon: <FaStar />,
    image: "/assets/images/human_ludo.webp",
    color: "bg-red-300"
  },
  {
    date: "2023-02-14",
    title: "Valentine's Day",
    description: "Spent time with loved ones.",
    icon: <FaHeart />,
    image: "/assets/images/human_ludo.webp",
    color: "bg-pink-300"
  },
  {
    date: "2023-07-04",
    title: "Independence Day",
    description: "Fireworks and barbecues.",
    icon: <FaFire />,
    image: "/assets/images/human_ludo.webp",
    color: "bg-blue-300"
  },
  // Add more events with different colors as needed
];





const Timeline = () => {
  return (
    <div className="relative max-w-5xl mx-auto py-10 px-4 sm:px-0">
      <div className="absolute h-full border-l-2 border-gray-300 md:left-1/2" />
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }} // Start below and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible
          transition={{ duration: 0.6, type: 'spring', stiffness: 300, damping: 20, delay: index * 0.1 }}
          className={`flex items-start justify-between mb-8 transition-transform transform hover:scale-105 ${event.color} p-6 rounded-xl shadow-xl hover:text-white ${index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'} max-md:ml-0`}
          style={{ width: 'calc(50% - 1rem)' }} // Half width with some margin
        >
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border-4 border-white-1 shadow-md">
            {event.icon}
          </div>
          <div className="ml-4 flex-grow flex items-center">
            <img 
              src={event.image} 
              alt={event.title} 
              className="w-40 h-40 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
            />
            <div className="ml-4">
              <div className="text-sm font-bold text-gray-800">{event.date}</div>
              <div className="text-lg font-semibold text-gray-900">{event.title}</div>
              <p className="mt-1 text-gray-600">{event.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};



export default Timeline;
