import Image from "next/image";

type BrandLogo = {
  name: string;
  src: string;
  href: string;
  desktopSrc?: string;
  itemClass?: string;
  desktopItemClass?: string;
  frameClass?: string;
  desktopFrameClass?: string;
};

const logos: BrandLogo[] = [
  {
    name: "BuzzFeed",
    src: "/client-logos-tight/buzzfeed.png",
    itemClass: "min-w-[10.25rem] sm:min-w-[12rem]",
    desktopItemClass: "min-w-[18rem]",
    frameClass: "w-[7.35rem] sm:w-[8.7rem]",
    desktopFrameClass: "w-[14.35rem]",
    href: "https://www.buzzfeed.com/"
  },
  {
    name: "Marriott",
    src: "/client-logos-tight/marriott.png",
    itemClass: "min-w-[10rem] sm:min-w-[11.5rem]",
    desktopItemClass: "min-w-[17rem]",
    frameClass: "w-[7.1rem] sm:w-[8.45rem]",
    desktopFrameClass: "w-[13.2rem]",
    href: "https://www.marriott.com/"
  },
  {
    name: "IHG",
    src: "/client-logos-tight/ihg.png",
    itemClass: "min-w-[9.4rem] sm:min-w-[10.7rem]",
    desktopItemClass: "min-w-[15.5rem]",
    frameClass: "w-[6.2rem] sm:w-[7.3rem]",
    desktopFrameClass: "w-[11.2rem]",
    href: "https://www.ihg.com/"
  },
  {
    name: "Condé Nast",
    src: "/client-logos-tight/conde-nast.png",
    itemClass: "min-w-[11.25rem] sm:min-w-[13rem]",
    desktopItemClass: "min-w-[20.5rem]",
    frameClass: "w-[8.45rem] sm:w-[9.9rem]",
    desktopFrameClass: "w-[16.6rem]",
    href: "https://www.condenast.com/"
  },
  {
    name: "Lionsgate",
    src: "/client-logos-tight/lionsgate.png",
    itemClass: "min-w-[11.25rem] sm:min-w-[13rem]",
    desktopItemClass: "min-w-[20.5rem]",
    frameClass: "w-[8.6rem] sm:w-[10.1rem]",
    desktopFrameClass: "w-[16.8rem]",
    href: "https://www.lionsgate.com/"
  },
  {
    name: "Mercure Hotels",
    src: "/client-logos-tight/mercure-hotels.png",
    itemClass: "min-w-[10.1rem] sm:min-w-[11.7rem]",
    desktopItemClass: "min-w-[17.5rem]",
    frameClass: "w-[7.25rem] sm:w-[8.65rem]",
    desktopFrameClass: "w-[13.5rem]",
    href: "https://mercure.accor.com/"
  },
  {
    name: "Novotel",
    src: "/client-logos-tight/novotel.png",
    itemClass: "min-w-[10rem] sm:min-w-[11.5rem]",
    desktopItemClass: "min-w-[17.5rem]",
    frameClass: "w-[7.25rem] sm:w-[8.55rem]",
    desktopFrameClass: "w-[14rem]",
    href: "https://novotel.accor.com/"
  },
  {
    name: "W Hotels",
    src: "/client-logos-tight/w-hotels.png",
    itemClass: "min-w-[8.6rem] sm:min-w-[9.8rem]",
    desktopItemClass: "min-w-[13rem]",
    frameClass: "w-[5.3rem] sm:w-[6.2rem]",
    desktopFrameClass: "w-[8.7rem]",
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
              className={`brand-marquee-item flex h-[4.5rem] min-w-[9.25rem] items-center justify-center px-3 sm:h-[5rem] sm:min-w-[10.75rem] sm:px-4 ${logo.itemClass ?? ""}`}
            >
              <div
                className={`relative flex h-8 w-[7rem] items-center justify-center sm:h-9 sm:w-[8.25rem] ${logo.frameClass ?? ""}`}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={320}
                  height={120}
                  className="h-full w-auto max-w-full object-contain opacity-100"
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
              className={`brand-marquee-item flex h-[7.5rem] min-w-[17rem] items-center justify-center px-4 ${logo.desktopItemClass ?? ""}`}
            >
              <div
                className={`relative flex h-[4.6rem] w-[13rem] items-center justify-center ${logo.desktopFrameClass ?? ""}`}
              >
                <Image
                  src={logo.desktopSrc ?? logo.src}
                  alt={logo.name}
                  width={420}
                  height={160}
                  className="h-full w-auto max-w-full object-contain opacity-100"
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
