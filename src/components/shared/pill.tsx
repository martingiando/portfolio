interface PillProps {
  children: React.ReactNode;
  className?: string;
}

export function Pill({ children, className = "" }: PillProps) {
  return (
    <span
      className={`inline-block rounded-full border border-foreground px-5 py-2 font-mono text-xs uppercase tracking-wider ${className}`}
    >
      {children}
    </span>
  );
}
