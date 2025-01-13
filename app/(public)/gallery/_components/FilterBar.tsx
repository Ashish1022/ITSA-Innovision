interface FilterBarProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
  }
  
  const FilterBar: React.FC<FilterBarProps> = ({
    categories,
    selectedCategory,
    onSelectCategory,
  }) => {
    return (
      <div className="flex flex-wrap justify-center gap-4 bg-[#282b30] sm:flex-row">

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              selectedCategory === category
                ? "bg-primary-500 text-white"
                : "bg-white text-white-1 border border-gray-300 hover:bg-gray-1"
            } transition-all`}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };
  
  export default FilterBar;
  