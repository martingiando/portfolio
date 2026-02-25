"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-accent mb-4">
        Error
      </p>
      <h1 className="font-display text-[clamp(2rem,6vw,4rem)] font-bold uppercase tracking-tight leading-[1.1] mb-6">
        Something Went Wrong
      </h1>
      <p className="text-muted-foreground text-lg mb-10 max-w-md">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="inline-block bg-accent text-white px-8 py-3 font-mono text-sm uppercase tracking-wider font-medium shadow-brutalist-sm transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none cursor-pointer"
      >
        Try Again
      </button>
    </section>
  );
}
