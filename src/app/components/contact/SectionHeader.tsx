interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div>
      <h2 className="text-3xl font-bold font-bebas uppercase">{title}</h2>
      {subtitle && (
        <p className="mt-2 font-lora text-sm max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};
