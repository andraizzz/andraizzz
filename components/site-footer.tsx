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
    <footer className="mt-4 border-t border-obsidian/10 px-6 pb-10 pt-8 sm:px-8 lg:px-12 lg:pb-14 lg:pt-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-[1.6rem] tracking-[0.16em] text-obsidian">
              ANDRA
            </p>
            <p className="mt-5 text-base leading-8 text-stone">
              Strategic growth consulting for brands that want sharper positioning and stronger discoverability.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-obsidian">
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

        <div className="mt-10 text-sm text-stone/90">
          <p>© 2026 ANDRA</p>
        </div>
      </div>
    </footer>
  );
}
