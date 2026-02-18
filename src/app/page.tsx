import Link from "next/link";
import Image from "next/image";

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
    image: "/images/mexico-cdmx.jpg",
    description: "The ultimate base for North Americans. Great food, low cost, easy visa, thriving expat scene.",
    cities: ["Mexico City", "Guadalajara", "Playa del Carmen", "Oaxaca"],
  },
  {
    name: "Colombia",
    emoji: "🇨🇴",
    href: "/colombia",
    image: "/images/colombia-medellin.jpg",
    description: "Perfect weather, friendly people, digital nomad visas. The hidden gem of South America.",
    cities: ["Medellín", "Bogotá", "Cartagena", "Cali"],
  },
  {
    name: "Venezuela",
    emoji: "🇻🇪",
    href: "/venezuela",
    image: "/images/venezuela-beach.jpg",
    description: "The road less traveled. Beautiful beaches, amazing women, incredibly cheap if you know the game.",
    cities: ["Caracas", "Margarita Island", "Mérida"],
  },
  {
    name: "Brazil",
    emoji: "🇧🇷",
    href: "/brazil",
    image: "/images/brazil-rio.jpg",
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
      {/* Hero with Background Image */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-beach.jpg"
            alt="Latin American beach at sunset"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Escape the BS.
            <br />
            <span className="text-amber-400">Live in Latin America.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto drop-shadow">
            Real talk on moving to Mexico, Colombia, Venezuela & Brazil from someone who&apos;s actually done it. 
            No fluff. No &quot;influencer&quot; nonsense. Just what works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#book"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg transition shadow-lg"
            >
              Book a Strategy Call — $150
            </a>
            <Link
              href="#countries"
              className="border-2 border-white/50 hover:border-amber-400 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg transition backdrop-blur-sm"
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

      {/* About with Image */}
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
            <div className="relative">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/lifestyle-nomad.jpg"
                  alt="Digital nomad lifestyle"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-slate-900 font-bold px-6 py-3 rounded-xl shadow-lg">
                110+ Countries ✓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-500/20 to-slate-800 rounded-2xl p-8 md:p-12 border border-amber-500/30">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">What You Get on a Call</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Visa strategy for your specific situation",
                "Banking & money transfer setup",
                "Where to live (neighborhoods, not tourist zones)",
                "Cost of living reality check",
                "Dating & social scene breakdown",
                "Safety — real talk, not paranoia",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-amber-400 text-xl flex-shrink-0">✓</span>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Countries with Images */}
      <section id="countries" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Choose Your Destination
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {countries.map((country) => (
              <Link
                key={country.href}
                href={country.href}
                className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-amber-500/50 transition group"
              >
                {/* Country Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={country.image}
                    alt={`${country.name} landscape`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <span className="text-4xl">{country.emoji}</span>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg group-hover:text-amber-400 transition">
                      {country.name}
                    </h3>
                  </div>
                </div>
                {/* Country Info */}
                <div className="p-6">
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What People Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-amber-400 text-4xl mb-4">&ldquo;</div>
                <p className="text-slate-300 text-lg mb-4">{t.quote}</p>
                <div>
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-slate-500 text-sm">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Book with Background */}
      <section id="book" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-travel.jpg"
            alt="Travel lifestyle"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-amber-900/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make the Move?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            30 minutes. $150. All your questions answered.<br />
            No upsells. No courses. Just straight talk.
          </p>
          <a
            href="https://calendly.com/dan-thomson/consult"
            target="_blank"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-12 py-4 rounded-lg text-xl transition shadow-lg"
          >
            Book Your Call Now
          </a>
          <p className="text-slate-400 mt-4 text-sm">
            Calendly + Stripe. Instant confirmation.
          </p>
        </div>
      </section>
    </div>
  );
}
