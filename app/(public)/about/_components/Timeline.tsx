import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaHeart, FaFire } from 'react-icons/fa';

interface Event {
  date: string;
  title: string;
  description: string;
  icon: JSX.Element;
  image: string;
  color: string;
}

const events: Event[] = [
  {
    date: "2023-03-19",
    title: "INNOVISION 2023",
    description: "Celebrated the new year.",
    icon: <FaStar />,
    image: "/assets/images/human_ludo.webp",
    color: "bg-red-300",
  },
  {
    date: "2023-03-20",
    title: "STUDENT FESTIVAL",
    description: "An unforgettable cultural experience.",
    icon: <FaHeart />,
    image: "/assets/images/festival.webp",
    color: "bg-blue-300",
  },
  {
    date: "2023-04-15",
    title: "SPORTS DAY",
    description: "Bringing out the competitive spirit.",
    icon: <FaFire />,
    image: "/assets/images/sports_day.webp",
    color: "bg-green-300",
  },
  {
    date: "2023-05-10",
    title: "ECO CAMPAIGN",
    description: "Promoting sustainability in our college.",
    icon: <FaHeart />,
    image: "/assets/images/eco_campaign.webp",
    color: "bg-yellow-300",
  },
  // Add more events as needed
];

const Timeline = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Track selected image

  const handleImageClick = (image: string) => {
    setSelectedImage(image); // Set selected image
  };

  const handleClose = () => {
    setSelectedImage(null); // Close enlarged image
  };

  // Close modal if clicked outside the image content
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto py-10 px-4 sm:px-0">
      <div className="absolute h-full border-l-4 border-[#624CF5] md:left-1/2" />
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" }
          }}
          transition={{
            delay: index * 0.2, // Stagger animations for better effect
          }}
          className={`flex items-start justify-between mb-12 sm:mb-8 transition-all transform hover:scale-105 ease-in-out ${event.color} p-6 rounded-3xl shadow-xl hover:bg-[#624CF5] hover:text-white ${index % 2 === 0 ? 'sm:mr-auto' : 'sm:ml-auto'} max-md:ml-0 max-md:mr-0`}
          style={{ width: 'calc(50% - 1rem)', transition: 'background-color 0.3s ease-in-out' }}
        >
          {/* Event Icon */}
          <motion.div
            className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full border-4 border-white shadow-lg bg-white"
            whileHover={{ scale: 1.3, rotate: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {event.icon}
          </motion.div>

          {/* Event Content */}
          <div className="ml-6 flex-grow flex items-center">
            {/* Event Image */}
            <motion.img
              src={event.image}
              alt={event.title}
              className="w-48 h-48 object-cover rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-110 hover:rotate-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={() => handleImageClick(event.image)} // Handle image click
            />

            {/* Event Text Content */}
            <div className="ml-6">
              <div className="text-sm font-bold text-gray-800">{event.date}</div>
              <div className="text-2xl font-semibold text-gray-900">{event.title}</div>
              <p className="mt-2 text-gray-700">{event.description}</p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Conditionally render the full-screen image when one is selected */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50" 
          onClick={handleOutsideClick} // Close modal when clicking outside the image
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged"
              className="min-w-[50vw] max-w-[70vw] max-h-[70vh] object-contain rounded-lg shadow-lg border-4 border-[#624CF5] bg-[#ffecd2]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
