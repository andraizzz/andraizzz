"use client";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-porcelain text-obsidian">
        <main className="flex min-h-screen items-center justify-center px-6 py-10">
          <div className="max-w-xl text-center">
            <p className="text-xs uppercase tracking-editorial text-stone">
              ANDRA
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Something unexpected happened.
            </h1>
            <p className="mt-6 text-base leading-8 text-stone sm:text-lg">
              {error.message || "Please try again in a moment."}
            </p>
            <button
              type="button"
              onClick={() => reset()}
              className="mt-8 inline-flex min-h-14 items-center justify-center rounded-[0.72rem] bg-ink px-7 py-4 text-sm uppercase tracking-[0.18em] text-porcelain transition duration-300 hover:scale-[1.02] hover:bg-obsidian active:scale-[0.98]"
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
