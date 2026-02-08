import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countries, getCountry, getCity } from "@/lib/countries";

interface Props {
  params: Promise<{ country: string; city: string }>;
}

export async function generateStaticParams() {
  const paths: { country: string; city: string }[] = [];
  for (const country of countries) {
    for (const city of country.cities) {
      paths.push({ country: country.slug, city: city.slug });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: countrySlug, city: citySlug } = await params;
  const country = getCountry(countrySlug);
  const city = getCity(countrySlug, citySlug);
  if (!country || !city) return {};

  return {
    title: `Living in ${city.name}, ${country.name} | Expat Bro`,
    description: `Complete guide to ${city.name}: cost of living, best neighborhoods, safety, and real advice. ${city.tagline}`,
    openGraph: {
      title: `Move to ${city.name} | Expat Bro`,
      description: city.description.slice(0, 160),
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { country: countrySlug, city: citySlug } = await params;
  const country = getCountry(countrySlug);
  const city = getCity(countrySlug, citySlug);

  if (!country || !city) {
    notFound();
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-slate-800/50 py-3">
        <div className="max-w-6xl mx-auto px-4 text-sm">
          <Link href="/" className="text-slate-400 hover:text-amber-400">Home</Link>
          <span className="text-slate-600 mx-2">/</span>
          <Link href={`/${country.slug}`} className="text-slate-400 hover:text-amber-400">
            {country.emoji} {country.name}
          </Link>
          <span className="text-slate-600 mx-2">/</span>
          <span className="text-white">{city.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{city.name}</h1>
          <p className="text-xl text-amber-400 mb-6">{city.tagline}</p>
          <p className="text-xl text-slate-300 max-w-3xl">{city.description}</p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-amber-400 font-semibold mb-2">💰 Cost of Living</h3>
            <p className="text-white font-bold">{city.costOfLiving}</p>
          </div>
          <div>
            <h3 className="text-amber-400 font-semibold mb-2">📶 Internet</h3>
            <p className="text-white font-bold">{city.internetSpeed}</p>
          </div>
          <div>
            <h3 className="text-amber-400 font-semibold mb-2">🌡️ Climate</h3>
            <p className="text-white font-bold">{city.climate}</p>
          </div>
          <div>
            <h3 className="text-amber-400 font-semibold mb-2">🛡️ Safety</h3>
            <p className="text-slate-300 text-sm">{city.safety}</p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Why {city.name}?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {city.highlights.map((highlight, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-4">
                <span className="text-amber-400 text-xl">✓</span>
                <span className="text-slate-300">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Neighborhoods</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {city.neighborhoods.map((n) => (
              <div key={n.name} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-amber-400 mb-2">{n.name}</h3>
                <p className="text-slate-400">{n.vibe}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Other Cities in {country.name}</h2>
          <div className="flex flex-wrap gap-4">
            {country.cities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/${country.slug}/${c.slug}`}
                  className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg border border-slate-700 hover:border-amber-500/50 transition"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-900/20 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Thinking About {city.name}?</h2>
          <p className="text-slate-300 mb-8">
            Get the real talk — neighborhoods to avoid, visa tricks, where to find an apartment, and more.
          </p>
          <a
            href="https://calendly.com/dan-thomson/consult"
            target="_blank"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg transition"
          >
            Book a Strategy Call — $150
          </a>
        </div>
      </section>
    </div>
  );
}
