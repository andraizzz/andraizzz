const logos = [
  "BuzzFeed",
  "Marriott",
  "IHG",
  "Accor",
  "Condé Nast",
  "Lionsgate",
  "Chiva-Som",
  "W Hotels"
];

export function BrandStrip() {
  return (
    <section className="border-y border-obsidian/10 py-10 sm:py-12">
      <div className="grid grid-cols-2 gap-x-8 gap-y-8 text-center sm:grid-cols-4 lg:grid-cols-8 lg:gap-x-10">
        {logos.map((logo, index) => (
          <p
            key={logo}
            className="brand-reveal font-serif text-[1.6rem] text-ink/85 opacity-95 sm:text-[1.9rem] lg:text-[2.1rem]"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            {logo}
          </p>
        ))}
      </div>
    </section>
  );
}
