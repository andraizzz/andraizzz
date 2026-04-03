import Image from "next/image";

const logos = [
  {
    name: "BuzzFeed",
    src: "/client-logos/buzzfeed.png",
    href: "https://www.buzzfeed.com/",
    imageClass: "scale-[1.32]"
  },
  {
    name: "Marriott",
    src: "/client-logos/marriott.png",
    href: "https://www.marriott.com/",
    imageClass: "scale-[0.98]"
  },
  {
    name: "IHG",
    src: "/client-logos/ihg.png",
    href: "https://www.ihg.com/",
    imageClass: "scale-[1.08]"
  },
  {
    name: "Condé Nast",
    src: "/client-logos/conde-nast.png",
    href: "https://www.condenast.com/",
    imageClass: "scale-[1.28]"
  },
  {
    name: "Lionsgate",
    src: "/client-logos/lionsgate.png",
    href: "https://www.lionsgate.com/",
    imageClass: "scale-[1.22]"
  },
  {
    name: "Mercure Hotels",
    src: "/client-logos/mercure-hotels.png",
    href: "https://mercure.accor.com/",
    imageClass: "scale-[1.26]"
  },
  {
    name: "Novotel",
    src: "/client-logos/novotel.png",
    href: "https://novotel.accor.com/",
    imageClass: "scale-[1.26]"
  },
  {
    name: "W Hotels",
    src: "/client-logos/w-hotels.png",
    href: "https://w-hotels.marriott.com/",
    imageClass: "scale-[1.14]"
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
                width={260}
                height={104}
                className={`h-auto max-h-8 w-auto max-w-full object-contain opacity-88 transition duration-300 hover:opacity-100 sm:max-h-9 ${logo.imageClass ?? ""}`}
                unoptimized
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
