import Link from "next/link";

const stats = [
  { value: "6+", label: "Years Nomading" },
  { value: "110", label: "Countries Visited" },
  { value: "4", label: "Languages Spoken" },
  { value: "100%", label: "Americas Explored" },
];

const countries = [
  {
    name: "Mexico",
    emoji: "🇲🇽",
    href: "/mexico",
    description: "The ultimate base for North Americans. Great food, low cost, easy visa, thriving expat scene.",
    cities: ["Mexico City", "Guadalajara", "Playa del Carmen", "Oaxaca"],
  },
  {
    name: "Colombia",
    emoji: "🇨🇴",
    href: "/colombia",
    description: "Perfect weather, friendly people, digital nomad visas. The hidden gem of South America.",
    cities: ["Medellín", "Bogotá", "Cartagena", "Cali"],
  },
  {
    name: "Venezuela",
    emoji: "🇻🇪",
    href: "/venezuela",
    description: "The road less traveled. Beautiful beaches, amazing women, incredibly cheap if you know the game.",
    cities: ["Caracas", "Margarita Island", "Mérida"],
  },
  {
    name: "Brazil",
    emoji: "🇧🇷",
    href: "/brazil",
    description: "The giant of South America. Beaches, culture, nightlife — if you can handle the size.",
    cities: ["São Paulo", "Rio de Janeiro", "Florianópolis", "Fortaleza"],
  },
];

const testimonials = [
  {
    quote: "Dan's advice saved me months of trial and error. I was living in CDMX within 3 weeks of our call.",
    author: "Mike R.",
    location: "Former NYC, now CDMX",
  },
  {
    quote: "Finally someone who tells it like it is. No sugar coating, just practical advice that works.",
    author: "Jason T.",
    location: "Austin → Medellín",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Escape the BS.
            <br />
            <span className="text-amber-400">Live in Latin America.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Real talk on moving to Mexico, Colombia, Venezuela & Brazil from someone who&apos;s actually done it. 
            No fluff. No &quot;influencer&quot; nonsense. Just what works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#book"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg transition"
            >
              Book a Strategy Call — $150
            </a>
            <Link
              href="#countries"
              className="border border-slate-500 hover:border-amber-400 text-white px-8 py-4 rounded-lg text-lg transition"
            >
              Explore Countries
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-800/50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-slate-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Listen to Me?
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  I&apos;m not some kid who spent 2 weeks in Cancún and started a YouTube channel. 
                  I&apos;ve been living this life for <strong className="text-white">6 years straight</strong>.
                </p>
                <p>
                  <strong className="text-white">110 countries.</strong> Every single country in the Americas — 
                  from Canada to Argentina, Caribbean islands to the Falklands.
                </p>
                <p>
                  I speak <strong className="text-white">English, Spanish, Portuguese, and French</strong>. 
                  Not tourist phrases — actual conversations with locals, lawyers, landlords.
                </p>
                <p>
                  Currently building my life between <strong className="text-amber-400">Mexico, Venezuela, and Brazil</strong>. 
                  I know these places inside out — the good, the bad, and the stuff nobody talks about.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-500/20 to-slate-800 rounded-2xl p-8 border border-amber-500/30">
              <h3 className="text-xl font-bold mb-4">What You Get on a Call</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <span>Visa strategy for your specific situation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <span>Banking & money transfer setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <span>Where to live (neighborhoods, not tourist zones)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <span>Cost of living reality check</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <span>Dating & social scene breakdown</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl">✓</span>
                  <span>Safety — real talk, not paranoia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Countries */}
      <section id="countries" className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Choose Your Destination
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {countries.map((country) => (
              <Link
                key={country.href}
                href={country.href}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-amber-500/50 transition group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{country.emoji}</span>
                  <h3 className="text-2xl font-bold group-hover:text-amber-400 transition">
                    {country.name}
                  </h3>
                </div>
                <p className="text-slate-400 mb-4">{country.description}</p>
                <div className="flex flex-wrap gap-2">
                  {country.cities.map((city) => (
                    <span
                      key={city}
                      className="bg-slate-700 text-slate-300 text-sm px-3 py-1 rounded-full"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What People Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <p className="text-slate-300 italic mb-4">&quot;{t.quote}&quot;</p>
                <div>
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-slate-500 text-sm">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Book */}
      <section id="book" className="py-20 bg-gradient-to-br from-amber-900/30 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make the Move?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            30 minutes. $150. All your questions answered.<br />
            No upsells. No courses. Just straight talk.
          </p>
          <a
            href="https://calendly.com/dan-thomson/consult"
            target="_blank"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-12 py-4 rounded-lg text-xl transition"
          >
            Book Your Call Now
          </a>
          <p className="text-slate-500 mt-4 text-sm">
            Calendly + Stripe. Instant confirmation.
          </p>
        </div>
      </section>
    </div>
  );
}
