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
      <div className="flex flex-wrap justify-center gap-4 bg-gray-100 sm:flex-row">

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              selectedCategory === category
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-800 border border-gray-300 hover:bg-purple-100"
            } transition-all`}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };
  
  export default FilterBar;
  