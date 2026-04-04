import Image from "next/image";
import Link from "next/link";
import { BrandStrip } from "@/components/brand-strip";

const specialties = [
  {
    number: "01",
    title: "AI Visibility Strategy",
    descriptor: "ChatGPT, Gemini, Claude, Perplexity"
  },
  {
    number: "02",
    title: "Brand Positioning & Narrative",
    descriptor: "Messaging, Differentiation, Authority"
  },
  {
    number: "03",
    title: "Performance Growth Strategy",
    descriptor: "Digital Ads, Email Marketing, PR Strategy"
  },
  {
    number: "04",
    title: "Digital Marketing Advisory",
    descriptor: "SEO, Social Media Strategy, Website Creation, AI Discovery"
  }
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/andraizgarian/",
    icon: (
      <path d="M7.75 6.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM4.75 8h2.5v8h-2.5V8Zm4 0h2.4v1.14h.03c.33-.63 1.15-1.29 2.37-1.29 2.53 0 3 1.67 3 3.84V16h-2.5v-3.81c0-.91-.02-2.08-1.27-2.08-1.27 0-1.46.99-1.46 2.01V16h-2.57V8Z" />
    )
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@AndraIzzz",
    icon: (
      <path d="M16.73 6.27c-1.82-.5-9.64-.5-11.46 0A2.1 2.1 0 0 0 3.8 7.74c-.5 1.82-.5 4.7 0 6.52a2.1 2.1 0 0 0 1.47 1.47c1.82.5 9.64.5 11.46 0a2.1 2.1 0 0 0 1.47-1.47c.5-1.82.5-4.7 0-6.52a2.1 2.1 0 0 0-1.47-1.47ZM10.4 13.1V8.9l3.64 2.1-3.64 2.1Z" />
    )
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/zanobegrowth/",
    icon: (
      <>
        <rect x="4.5" y="4.5" width="11" height="11" rx="3.25" ry="3.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="2.6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="13.45" cy="6.55" r="0.9" />
      </>
    )
  }
] as const;

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-porcelain text-obsidian">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[58rem] bg-hero-radial opacity-90" />

      <section className="hero-fade relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-20 sm:px-8 sm:pb-24 sm:pt-24 lg:px-12 lg:pb-28 lg:pt-28">

        <div className="grid gap-10 pt-2 sm:gap-12 sm:pt-4 lg:grid-cols-[0.98fr_1.02fr] lg:gap-20 lg:pt-6">
          <div className="hero-copy-reveal flex flex-col justify-start">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-editorial text-stone sm:text-sm">
                Strategy / AI Visibility / Growth
              </p>
              <h1 className="mt-6 max-w-3xl font-serif text-[3.6rem] leading-[1.04] text-obsidian sm:text-[4.5rem] lg:text-[5.35rem]">
                Strategy for brands that refuse to be invisible.
              </h1>
              <p className="mt-12 max-w-xl text-base leading-8 text-stone sm:text-lg sm:leading-9">
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
                  className="inline-flex min-h-14 items-center justify-center rounded-[0.72rem] bg-ink px-7 py-4 text-sm uppercase tracking-[0.18em] text-porcelain transition duration-300 hover:scale-[1.02] hover:bg-obsidian hover:shadow-[0_18px_40px_rgba(28,34,40,0.16)] active:scale-[0.98]"
                >
                  Work with me →
                </a>
                <a
                  href="#contact"
                  className="inline-flex min-h-14 items-center justify-center rounded-[0.72rem] border border-obsidian/20 bg-white/25 px-7 py-4 text-sm uppercase tracking-[0.18em] text-obsidian backdrop-blur-md transition duration-300 hover:scale-[1.02] hover:border-obsidian/45 hover:bg-white/50 hover:shadow-[0_14px_34px_rgba(17,17,17,0.07)] active:scale-[0.98]"
                >
                  Join the newsletter →
                </a>
              </div>
            </div>
          </div>

          <div className="hero-image-reveal relative flex items-center lg:justify-end">
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.62),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(231,216,207,0.58),transparent_38%),radial-gradient(circle_at_50%_100%,rgba(217,167,154,0.14),transparent_45%)] blur-2xl" />
            <div className="relative w-full max-w-[44rem] rounded-[2.25rem] border border-white/50 bg-white/28 p-4 shadow-[0_30px_90px_rgba(17,17,17,0.08)] backdrop-blur-xl">
              <div className="absolute inset-0 rounded-[2.25rem] border border-white/45 bg-gradient-to-br from-white/42 via-white/8 to-shell/12" />
              <div className="pointer-events-none absolute -bottom-8 left-10 right-10 h-24 rounded-full bg-obsidian/8 blur-3xl" />
              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/60 bg-[#d8c7bc]">
                <Image
                  src="/andra-hero.jpg"
                  alt="Andra hero placeholder"
                  width={1200}
                  height={1500}
                  priority
                  className="h-full min-h-[30rem] w-full scale-[1.04] object-cover saturate-[0.84] brightness-[1.08] contrast-[0.96]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/24 via-[rgba(244,245,244,0.06)] to-[rgba(223,228,228,0.14)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(248,248,247,0.24),transparent_32%),radial-gradient(circle_at_78%_22%,rgba(229,233,233,0.16),transparent_36%)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/10 via-transparent to-white/16" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto max-w-7xl px-6 pb-10 sm:px-8 sm:pb-12 lg:px-12 lg:pb-14">
        <BrandStrip />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_1fr] lg:gap-20">
          <div>
            <h2 className="font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
              Specialties
            </h2>
          </div>

          <div className="border-t border-obsidian/12">
            {specialties.map((item) => (
              <div
                key={item.number}
                className="grid gap-4 border-b border-obsidian/12 py-8 sm:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-baseline lg:gap-8"
              >
                <div className="flex items-baseline gap-4 sm:gap-5">
                  <span className="min-w-12 text-xs uppercase tracking-editorial text-stone sm:text-sm">
                    {item.number}
                  </span>
                  <h3 className="font-serif text-2xl leading-tight text-obsidian sm:text-[2rem]">
                    {item.title}
                  </h3>
                </div>
                <p className="pl-[3.25rem] text-base leading-8 text-stone/90 sm:pl-[3.75rem] sm:text-lg lg:pl-0 lg:text-right">
                  {item.descriptor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="grid gap-14 rounded-[2rem] bg-white/45 px-6 py-8 shadow-[0_20px_60px_rgba(17,17,17,0.05)] ring-1 ring-white/60 backdrop-blur-sm sm:px-8 sm:py-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-12 lg:py-14">
          <div>
            <h2 className="max-w-md font-serif text-4xl leading-tight text-obsidian sm:text-5xl">
              Join the Conversation.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-stone sm:text-lg">
              Stay connected with the tips and tricks I&apos;ve learned along the
              way.
            </p>
          </div>

          <div className="w-full">
            <form className="space-y-6" method="post">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-3 block text-xs uppercase tracking-editorial text-stone sm:text-sm">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    className="w-full rounded-[0.85rem] border border-obsidian/12 bg-porcelain/80 px-5 py-4 text-base text-obsidian outline-none transition duration-300 placeholder:text-stone/70 focus:border-obsidian/35 focus:bg-white"
                    placeholder="Your name"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-xs uppercase tracking-editorial text-stone sm:text-sm">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="w-full rounded-[0.85rem] border border-obsidian/12 bg-porcelain/80 px-5 py-4 text-base text-obsidian outline-none transition duration-300 placeholder:text-stone/70 focus:border-obsidian/35 focus:bg-white"
                    placeholder="Your email"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-3 block text-xs uppercase tracking-editorial text-stone sm:text-sm">
                  Optional Message
                </span>
                <textarea
                  name="message"
                  rows={6}
                  className="w-full resize-none rounded-[0.85rem] border border-obsidian/12 bg-porcelain/80 px-5 py-4 text-base leading-7 text-obsidian outline-none transition duration-300 placeholder:text-stone/70 focus:border-obsidian/35 focus:bg-white"
                  placeholder="Tell me a little about what you're building or exploring."
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-[0.72rem] bg-ink px-7 py-4 text-sm uppercase tracking-[0.18em] text-porcelain transition duration-300 hover:scale-[1.02] hover:bg-obsidian hover:shadow-[0_18px_40px_rgba(28,34,40,0.16)] active:scale-[0.98]"
              >
                Connect
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="px-6 pb-10 pt-6 sm:px-8 lg:px-12 lg:pb-14">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-obsidian/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.52),rgba(246,240,235,0.86))] px-6 py-8 shadow-[0_20px_60px_rgba(17,17,17,0.04)] ring-1 ring-white/60 backdrop-blur-sm sm:px-8 sm:py-10 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="font-serif text-3xl tracking-[0.28em] text-obsidian">
                ANDRA
              </p>
              <p className="mt-4 max-w-md text-sm leading-7 text-stone sm:text-base">
                Strategy, growth, and AI visibility for brands that want sharper positioning and stronger discoverability.
              </p>
            </div>

            <div className="flex flex-col gap-5 lg:items-end">
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-obsidian/12 bg-white/60 text-stone transition duration-300 hover:-translate-y-0.5 hover:border-obsidian/25 hover:bg-white hover:text-obsidian hover:shadow-[0_12px_28px_rgba(17,17,17,0.08)]"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="h-[1.05rem] w-[1.05rem]"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-3 text-sm text-stone sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-5">
                <p className="uppercase tracking-[0.16em]">© 2026 ANDRA</p>
                <Link href="/privacy-policy" className="transition hover:text-obsidian">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="transition hover:text-obsidian">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
