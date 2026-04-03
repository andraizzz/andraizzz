import Image from "next/image";

const logos = [
  {
    name: "BuzzFeed",
    src: "/client-logos/buzzfeed.png",
    href: "https://www.buzzfeed.com/",
    imageClass: "scale-[1.95]"
  },
  {
    name: "Marriott",
    src: "/client-logos/marriott.png",
    href: "https://www.marriott.com/",
    imageClass: "scale-[1.08]"
  },
  {
    name: "IHG",
    src: "/client-logos/ihg.png",
    href: "https://www.ihg.com/",
    imageClass: "scale-[1.3]"
  },
  {
    name: "Condé Nast",
    src: "/client-logos/conde-nast.png",
    href: "https://www.condenast.com/",
    imageClass: "scale-[1.75]"
  },
  {
    name: "Lionsgate",
    src: "/client-logos/lionsgate.png",
    href: "https://www.lionsgate.com/",
    imageClass: "scale-[1.7]"
  },
  {
    name: "Mercure Hotels",
    src: "/client-logos/mercure-hotels.png",
    href: "https://mercure.accor.com/",
    imageClass: "scale-[1.75]"
  },
  {
    name: "Novotel",
    src: "/client-logos/novotel.png",
    href: "https://novotel.accor.com/",
    imageClass: "scale-[1.78]"
  },
  {
    name: "W Hotels",
    src: "/client-logos/w-hotels.png",
    href: "https://w-hotels.marriott.com/",
    imageClass: "scale-[1.34]"
  }
];

export function BrandStrip() {
  return (
    <section className="border-y border-obsidian/10 py-4 sm:py-5">
      <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 lg:grid-cols-8 lg:gap-x-8">
        {logos.map((logo, index) => (
          <a
            key={logo.name}
            href={logo.href}
            target="_blank"
            rel="noreferrer"
            aria-label={logo.name}
            className="brand-reveal flex h-[4.75rem] items-center justify-center rounded-[0.72rem] border border-transparent px-3 opacity-95 transition duration-300 hover:border-obsidian/10 hover:bg-white/30 sm:h-[5rem]"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <div className="relative flex h-10 w-[9.75rem] items-center justify-center overflow-visible sm:h-11 sm:w-[10.5rem]">
              <Image
                src={logo.src}
                alt={logo.name}
                width={260}
                height={104}
                className={`h-auto max-h-10 w-auto max-w-full object-contain opacity-88 transition duration-300 hover:opacity-100 ${logo.imageClass ?? ""}`}
                unoptimized
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
