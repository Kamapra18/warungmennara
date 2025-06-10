'use client';

import FAQItem from './FAQItem';

export type FAQItemType = {
  question: string;
  answer: string;
};

type FAQListProps = {
  items: FAQItemType[];
};

export default function FAQList({ items }: FAQListProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
