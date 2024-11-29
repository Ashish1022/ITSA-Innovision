

interface EventProps {
    title: string;
    image: string;
    category: string;
    description: string;
}

export default function EventCard({
    title,
    image,
    category,
    description,
}: EventProps) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out border-primary-500 border-4 transform mx-2">
            {/* Image */}
            <div className="relative">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 hover:text-emerald-500 transition-colors duration-200">
                    {title}
                </h3>
                <p className="text-sm text-primary-500 font-medium mt-1">{category}</p>
                <p className="text-gray-600 mt-3">{description}</p>
            </div>
        </div>
    );
} 