const HeroButtons = () => {
  return (
    <div className="flex gap-4">
      <a
        href="#menu"
        className="border border-[#4e2a1e] text-[#4e2a1e] px-6 py-2 rounded-md hover:bg-[#4e2a1e] hover:text-white transition"
      >
        View Menu
      </a>
      <a
        href="https://wa.me/6281237735005" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#a4551b] text-white px-6 py-2 rounded-md hover:bg-[#873e12] transition"
      >
        Order Now
      </a>
    </div>
  );
};

export default HeroButtons;
