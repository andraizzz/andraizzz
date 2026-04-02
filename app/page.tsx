import Image from "next/image";

const logos = [
  "BuzzFeed",
  "Marriott",
  "IHG",
  "Accor",
  "Condé Nast",
  "Lionsgate",
  "Chiva-Som",
  "W Hotels"
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-porcelain text-obsidian">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-hero-radial" />
      <div className="pointer-events-none absolute left-[-10rem] top-24 h-80 w-80 rounded-full bg-shell/80 blur-3xl" />
      <div className="pointer-events-none absolute right-[-8rem] top-40 h-96 w-96 rounded-full bg-blush/20 blur-3xl" />

      <section className="mx-auto grid min-h-screen max-w-7xl gap-16 px-6 pb-20 pt-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-24 lg:pt-10">
        <div className="flex flex-col justify-between">
          <header className="flex items-center justify-between border-b border-obsidian/10 pb-6">
            <span className="font-serif text-2xl tracking-[0.35em] text-obsidian">
              ANDRA
            </span>
            <a
              href="mailto:andra@zanobe.com?subject=Strategy%20Inquiry"
              className="text-sm tracking-[0.18em] text-stone transition hover:text-obsidian"
            >
              CONTACT
            </a>
          </header>

          <div className="max-w-2xl pt-14 lg:pt-20">
            <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
              Strategy / AI Visibility / Growth
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[0.95] text-obsidian sm:text-6xl lg:text-7xl">
              Strategy for brands that refuse to be invisible.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-stone sm:text-lg">
              ANDRA advises ambitious brands at the intersection of media,
              hospitality, and AI visibility. Drawing from hands-on experience
              shaping narratives, partnerships, and growth across editorial and
              luxury spaces, she helps businesses clarify their position, expand
              their reach, and become unmistakably discoverable in the age of
              AI.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:andra@zanobe.com?subject=Strategy%20Inquiry"
                className="inline-flex items-center justify-center rounded-full bg-obsidian px-7 py-4 text-sm uppercase tracking-[0.18em] text-porcelain transition hover:bg-ink"
              >
                Work with me →
              </a>
              <a
                href="#newsletter"
                className="inline-flex items-center justify-center rounded-full border border-obsidian/15 bg-white/50 px-7 py-4 text-sm uppercase tracking-[0.18em] text-obsidian backdrop-blur transition hover:border-obsidian/40 hover:bg-white/70"
              >
                Join the newsletter →
              </a>
            </div>
          </div>

          <div className="mt-16 hidden border-t border-obsidian/10 pt-8 lg:block">
            <p className="max-w-md text-sm leading-7 text-stone">
              Precision strategy for founders and legacy brands who want their
              next chapter to feel inevitable, elevated, and visible.
            </p>
          </div>
        </div>

        <div className="relative flex items-center lg:justify-end">
          <div className="relative w-full max-w-[42rem] overflow-hidden rounded-[2rem] border border-white/60 bg-white/50 p-4 shadow-halo backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-shell/30" />
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#d8c7bc]">
              <Image
                src="/andra-hero.jpg"
                alt="Andra hero placeholder"
                width={1200}
                height={1500}
                priority
                className="h-full min-h-[28rem] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 via-transparent to-white/20" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-porcelain">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-editorial text-porcelain/80">
                    Personal Strategy Consulting
                  </p>
                  <p className="mt-2 font-serif text-2xl">ANDRA</p>
                </div>
                <p className="max-w-[12rem] text-right text-xs uppercase tracking-[0.16em] text-porcelain/75">
                  Visibility with elegance and intent
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-obsidian/10 bg-white/35">
        <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-center sm:grid-cols-4 lg:grid-cols-8">
            {logos.map((logo) => (
              <p
                key={logo}
                className="font-serif text-xl text-ink/80 opacity-90 sm:text-2xl"
              >
                {logo}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section
        id="newsletter"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12 lg:py-28"
      >
        <div>
          <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
            Newsletter
          </p>
          <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
            Notes on growth, perception, and staying visible.
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-stone sm:text-lg">
            Join for sharp thinking on strategy, positioning, hospitality,
            media, and how brands can earn relevance in an AI-shaped world.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-obsidian/10 bg-white/70 p-3 shadow-halo backdrop-blur">
          <iframe
            src="https://forms.monday.com/forms/9e3c378090f8d1eaad00f31f0b3184e0?r=use1"
            title="ANDRA newsletter signup"
            className="h-[680px] w-full rounded-[1.5rem] bg-porcelain"
          />
        </div>
      </section>

      <footer className="border-t border-obsidian/10 px-6 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-serif text-3xl tracking-[0.28em] text-obsidian">
              ANDRA
            </p>
          </div>
          <div className="space-y-1 text-sm uppercase tracking-[0.16em] text-stone">
            <p>andra@zanobe.com</p>
            <p>andraizzz.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
