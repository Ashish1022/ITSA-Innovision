import Image from "next/image";

interface GalleryItemProps {
  image: {
    id: number;
    src: string;
    alt: string;
    title: string;
  };
  index: number;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, index }) => {


  const borderColors = ["border-yellow-500", "border-pink-500", "border-orange-1", "border-red-500", "border-primary-500"];
  return (
     <div
      className={`relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 border-4 ${
        borderColors[index % borderColors.length]
      }`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        width={300}
        height={300}
      />
     <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-lg font-semibold tracking-wide bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-2 rounded-lg shadow-md">
          {image.title}
        </h3>
      </div>
    </div>
  );
};

export default GalleryItem;
