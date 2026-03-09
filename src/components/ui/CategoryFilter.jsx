const CategoryFilter = ({ categories, activeCategory, onCategorySelect }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
                <button
                    key={category}
                    onClick={() => onCategorySelect(category)}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                        activeCategory === category
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25"
                            : "bg-white/70 text-slate-700 hover:bg-white/90 border border-slate-200/50 hover:border-blue-400/50 backdrop-blur-sm shadow-sm hover:shadow-md"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
