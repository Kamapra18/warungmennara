"use client";

type FAQTabsProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function FAQTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: FAQTabsProps) {
  return (
    <div className="overflow-x-auto scrollbar-none">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 border-b-0 sm:border-b-2 border-[#A65F28] w-full justify-center px-2 pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 text-sm sm:text-base font-semibold transition-all duration-200 whitespace-nowrap
              ${
                activeCategory === category
                  ? "text-[#C15D22] border-b-2 border-[#C15D22] shadow-none bg-transparent"
                  : "text-[#4A2B0B] hover:text-white hover:bg-[#A65F28] bg-[#E8C8A1]"
              }
            `}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
