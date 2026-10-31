import { SITE } from "@/lib/site";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#book", label: "Book" },
];

export default function Home() {
  return (
    <div className="star-bg min-h-screen">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-navy-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="font-display text-lg text-gold-400 sm:text-xl">
            ✦ {SITE.name}
          </a>
          <ul className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-gold-400">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#book"
            className="rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-navy-950 hover:bg-gold-400"
          >
            Book now
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-300">
            Vedic &amp; Western Astrology
          </p>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            {SITE.tagline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/75 sm:text-lg">
            Personal consultations by appointment. Choose a service, pick a
            date and time, and confirm your slot online.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#book"
              className="w-full rounded-full bg-gold-500 px-8 py-3 font-semibold text-navy-950 hover:bg-gold-400 sm:w-auto"
            >
              Book an appointment
            </a>
            <a
              href="#services"
              className="w-full rounded-full border border-purple-500 px-8 py-3 font-semibold text-white hover:bg-purple-700/40 sm:w-auto"
            >
              View services
            </a>
          </div>
        </section>

        {(
          [
            ["about", "About the astrologer"],
            ["services", "Services and prices"],
            ["reviews", "Client reviews"],
            ["book", "Book an appointment"],
          ] as const
        ).map(([id, title]) => (
          <section
            key={id}
            id={id}
            className="mx-auto max-w-6xl px-4 py-12 sm:px-6"
          >
            <div className="rounded-2xl border border-white/10 bg-navy-800/60 p-6 sm:p-10">
              <h2 className="font-display text-2xl text-gold-400 sm:text-3xl">
                {title}
              </h2>
              <p className="mt-3 text-white/60">
                This section is filled with real content from the database in a
                later stage.
              </p>
            </div>
          </section>
        ))}
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} {SITE.name}
      </footer>
    </div>
  );
}
