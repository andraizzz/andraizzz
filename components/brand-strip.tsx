import Image from "next/image";

type BrandLogo = {
  name: string;
  src: string;
  href: string;
  desktopSrc?: string;
  imageClass?: string;
  desktopImageClass?: string;
};

const logos: BrandLogo[] = [
  {
    name: "BuzzFeed",
    src: "/client-logos-tight/buzzfeed.png",
    imageClass: "scale-[1.16]",
    desktopImageClass: "scale-[1.3]",
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
    imageClass: "scale-[1.36]",
    desktopImageClass: "scale-[1.58]",
    href: "https://www.condenast.com/"
  },
  {
    name: "Lionsgate",
    src: "/client-logos-tight/lionsgate.png",
    imageClass: "scale-[1.44]",
    desktopImageClass: "scale-[1.62]",
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
    imageClass: "scale-[1.04]",
    desktopImageClass: "scale-[1.08]",
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
      <div className="brand-marquee lg:hidden">
        <div className="brand-marquee-track brand-marquee-track-mobile">
          {marqueeLogos.map((logo, index) => (
            <a
              key={`mobile-${logo.name}-${index}`}
              href={logo.href}
              target="_blank"
              rel="noreferrer"
              aria-label={logo.name}
              className="brand-marquee-item flex h-[4.5rem] min-w-[8.75rem] items-center justify-center px-3 sm:h-[5rem] sm:min-w-[10rem] sm:px-4"
            >
              <div className="relative flex h-8 w-[7rem] items-center justify-center overflow-hidden sm:h-9 sm:w-[8.25rem]">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={320}
                  height={120}
                  className={`h-full w-auto max-w-full object-contain opacity-100 ${logo.imageClass ?? ""}`}
                  unoptimized
                />
              </div>
            </a>
          ))}
        </div>
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
