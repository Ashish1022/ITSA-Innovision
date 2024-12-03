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
  const borderColors = ["border-yellow-500", "border-pink-500", "border-orange-1"];
  return (
    <div className={`relative overflow-hidden rounded-lg group shadow-md border-4 ${
        borderColors[index % borderColors.length]
      }`}>
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-0 right-[50%] opacity-0 translate-x-[50%] group-hover:opacity-100">
        <h3 className="text-primary-500 font-bold">{image.title}</h3>
      </div>
    </div>
  );
};

export default GalleryItem;
