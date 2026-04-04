import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "/" },
      { label: "Recommended Tools", href: "/recommended-tools" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" }
    ]
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/andraizgarian/" },
      { label: "YouTube", href: "https://www.youtube.com/@AndraIzzz" },
      { label: "Instagram", href: "https://www.instagram.com/zanobegrowth/" },
      { label: "Contact", href: "mailto:andra@zanobe.com?subject=Strategy%20Inquiry" }
    ]
  },
  {
    title: "Portfolio",
    links: [
      { label: "AndraIzzz.com", href: "/" },
      { label: "Zanobe.com", href: "https://zanobe.com/" }
    ]
  }
] as const;

export function SiteFooter() {
  return (
    <footer className="px-6 pb-10 pt-6 sm:px-8 lg:px-12 lg:pb-14">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-obsidian/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(244,236,231,0.9))] px-6 py-8 shadow-[0_24px_70px_rgba(17,17,17,0.05)] ring-1 ring-white/70 backdrop-blur-sm sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-[0.95rem] border border-obsidian/10 bg-white/75 shadow-[0_10px_24px_rgba(17,17,17,0.06)]">
                <Image src="/icon.svg" alt="ANDRA mark" width={32} height={32} />
              </div>
              <div>
                <p className="font-serif text-[1.6rem] tracking-[0.16em] text-obsidian">
                  ANDRA
                </p>
              </div>
            </div>
            <p className="mt-5 text-base leading-8 text-stone">
              Strategy, growth, and AI visibility for brands that want sharper positioning and stronger discoverability.
            </p>
            <p className="mt-3 text-sm leading-7 text-stone/90">
              Clearer positioning. Stronger visibility. More intentional growth.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="text-xs uppercase tracking-[0.18em] text-obsidian/75">
                  {group.title}
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-stone">
                  {group.links.map((link) =>
                    link.href.startsWith("/") ? (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="transition hover:text-obsidian"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        className="transition hover:text-obsidian"
                      >
                        {link.label}
                      </a>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
