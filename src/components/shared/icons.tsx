export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="0.95em"
      height="0.95em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path d="M4 12 12 4M5.5 4H12v6.5" />
    </svg>
  );
}

