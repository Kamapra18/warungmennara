"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-[#A65F28] py-4">
      <button
        className="w-full flex justify-between items-center text-left hover:bg-[#F5E1C8] px-2 py-2 rounded-md transition-colors duration-150"
        onClick={toggleOpen}>
        <span className="text-base font-semibold text-[#4A2B0B]">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#C15D22]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#C15D22]" />
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden mt-2 px-2">
            <p className="text-sm text-[#A65F28] leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
