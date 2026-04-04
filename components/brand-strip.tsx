import Image from "next/image";

const logos = [
  {
    name: "BuzzFeed",
    src: "/client-logos-tight/buzzfeed.png",
    href: "https://www.buzzfeed.com/"
  },
  {
    name: "Marriott",
    src: "/client-logos-tight/marriott.png",
    href: "https://www.marriott.com/"
  },
  {
    name: "IHG",
    src: "/client-logos-tight/ihg.png",
    href: "https://www.ihg.com/"
  },
  {
    name: "Condé Nast",
    src: "/client-logos-tight/conde-nast.png",
    desktopSrc: "/client-logos/conde-nast.png",
    desktopImageClass: "scale-[2.05]",
    href: "https://www.condenast.com/"
  },
  {
    name: "Lionsgate",
    src: "/client-logos-tight/lionsgate.png",
    href: "https://www.lionsgate.com/"
  },
  {
    name: "Mercure Hotels",
    src: "/client-logos-tight/mercure-hotels.png",
    href: "https://mercure.accor.com/"
  },
  {
    name: "Novotel",
    src: "/client-logos-tight/novotel.png",
    href: "https://novotel.accor.com/"
  },
  {
    name: "W Hotels",
    src: "/client-logos-tight/w-hotels.png",
    href: "https://w-hotels.marriott.com/"
  }
];

const marqueeLogos = [...logos, ...logos];

export function BrandStrip() {
  return (
    <section className="rounded-[1.2rem] border-y border-obsidian/10 bg-white/20 py-6 sm:py-7">
      <div className="grid grid-cols-2 gap-x-5 gap-y-5 lg:hidden sm:grid-cols-4">
        {logos.map((logo, index) => (
          <a
            key={logo.name}
            href={logo.href}
            target="_blank"
            rel="noreferrer"
            aria-label={logo.name}
            className="brand-reveal flex h-[4rem] items-center justify-center overflow-hidden rounded-[0.72rem] border border-transparent px-2 opacity-95 transition duration-300 hover:border-obsidian/10 hover:bg-white/30 sm:h-[4.25rem]"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <div className="relative flex h-8 w-[8.5rem] items-center justify-center overflow-hidden sm:h-9 sm:w-[9.25rem]">
              <Image
                src={logo.src}
                alt={logo.name}
                width={320}
                height={120}
                className="h-full w-auto max-w-full object-contain opacity-100 transition duration-300"
                unoptimized
              />
            </div>
          </a>
        ))}
      </div>

      <div className="brand-marquee hidden lg:block">
        <div className="brand-marquee-track">
          {marqueeLogos.map((logo, index) => (
            <a
              key={`${logo.name}-${index}`}
              href={logo.href}
              target="_blank"
              rel="noreferrer"
              aria-label={logo.name}
              className="brand-marquee-item flex h-[7.5rem] min-w-[15rem] items-center justify-center px-4"
            >
              <div className="relative flex h-[4.6rem] w-[13rem] items-center justify-center overflow-hidden">
                <Image
                  src={logo.desktopSrc ?? logo.src}
                  alt={logo.name}
                  width={420}
                  height={160}
                  className={`h-full w-auto max-w-full object-contain opacity-100 ${logo.desktopImageClass ?? ""}`}
                  unoptimized
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
