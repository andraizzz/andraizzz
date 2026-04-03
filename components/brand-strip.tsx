import Image from "next/image";

const logos = [
  {
    name: "BuzzFeed",
    src: "/client-logos/buzzfeed.png",
    href: "https://www.buzzfeed.com/"
  },
  {
    name: "Marriott",
    src: "/client-logos/marriott.png",
    href: "https://www.marriott.com/"
  },
  {
    name: "IHG",
    src: "/client-logos/ihg.png",
    href: "https://www.ihg.com/"
  },
  {
    name: "Condé Nast",
    src: "/client-logos/conde-nast.png",
    href: "https://www.condenast.com/"
  },
  {
    name: "Lionsgate",
    src: "/client-logos/lionsgate.png",
    href: "https://www.lionsgate.com/"
  },
  {
    name: "Mercure Hotels",
    src: "/client-logos/mercure-hotels.png",
    href: "https://mercure.accor.com/"
  },
  {
    name: "Novotel",
    src: "/client-logos/novotel.png",
    href: "https://novotel.accor.com/"
  },
  {
    name: "W Hotels",
    src: "/client-logos/w-hotels.png",
    href: "https://w-hotels.marriott.com/"
  }
];

export function BrandStrip() {
  return (
    <section className="border-y border-obsidian/10 py-6 sm:py-7">
      <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-8 lg:gap-x-10">
        {logos.map((logo, index) => (
          <a
            key={logo.name}
            href={logo.href}
            target="_blank"
            rel="noreferrer"
            aria-label={logo.name}
            className="brand-reveal flex h-20 items-center justify-center rounded-[0.72rem] border border-transparent px-4 opacity-95 transition duration-300 hover:border-obsidian/10 hover:bg-white/30"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={240}
              height={96}
              className="h-auto max-h-16 w-auto max-w-full object-contain opacity-85 transition duration-300 hover:opacity-100"
              unoptimized
            />
          </a>
        ))}
      </div>
    </section>
  );
}
