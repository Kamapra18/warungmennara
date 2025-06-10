"use client";

import { useState } from "react";
import { faqData } from "./data";
import FAQTabs from "./FAQTabs";
import FAQList from "./FAQList";

export default function FAQSection() {
  const categories = Object.keys(faqData);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  return (
    <section id="faq" className=" mx-auto px-4 sm:px-6 lg:px-10 py-20 bg-[#E8C8A1] rounded-lg shadow-md">
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#4A2B0B]">FAQ</h1>
      </header>

      <FAQTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div className="mt-6">
        <FAQList items={faqData[activeCategory]} />
      </div>
    </section>
  );
}
