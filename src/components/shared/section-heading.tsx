interface SectionHeadingProps {
  title: string;
  id?: string;
  count?: string;
  className?: string;
}

export function SectionHeading({
  title,
  id,
  count,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex items-end justify-between mb-12 ${className}`}>
      <h2
        id={id}
        className="font-display text-[clamp(2rem,5vw,4rem)] font-bold uppercase tracking-tight leading-none"
      >
        {title}
      </h2>
      {count && (
        <span className="font-mono text-sm text-muted-foreground">
          ({count})
        </span>
      )}
    </div>
  );
}
