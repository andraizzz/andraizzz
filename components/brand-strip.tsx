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

export function BrandStrip() {
  return (
    <section className="rounded-[1.2rem] border-y border-obsidian/10 bg-white/20 py-6 sm:py-7">
      <div className="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4 lg:grid-cols-8 lg:gap-x-6">
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
                className="h-full w-auto max-w-full object-contain opacity-88 transition duration-300 hover:opacity-100"
                unoptimized
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
