import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countries, getCountry } from "@/lib/countries";

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return countries.map((country) => ({
    country: country.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: countrySlug } = await params;
  const country = getCountry(countrySlug);
  if (!country) return {};

  return {
    title: `Living in ${country.name} | Expat Bro`,
    description: `Complete guide to moving to ${country.name}. Visa info, cost of living, best cities, and real talk from someone who's actually lived there.`,
    openGraph: {
      title: `Move to ${country.name} | Expat Bro`,
      description: country.tagline,
    },
  };
}

export default async function CountryPage({ params }: Props) {
  const { country: countrySlug } = await params;
  const country = getCountry(countrySlug);

  if (!country) {
    notFound();
  }

  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{country.emoji}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">{country.name}</h1>
              <p className="text-xl text-amber-400">{country.tagline}</p>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">{country.description}</p>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-amber-400 font-semibold mb-2">Languages</h3>
            <p className="text-slate-300">{country.languages.join(", ")}</p>
          </div>
          <div>
            <h3 className="text-amber-400 font-semibold mb-2">Currency</h3>
            <p className="text-slate-300">{country.currency}</p>
          </div>
          <div>
            <h3 className="text-amber-400 font-semibold mb-2">Visa</h3>
            <p className="text-slate-300 text-sm">{country.visaInfo}</p>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Cities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {country.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${country.slug}/${city.slug}`}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-amber-500/50 transition group"
              >
                <h3 className="text-2xl font-bold group-hover:text-amber-400 transition mb-2">
                  {city.name}
                </h3>
                <p className="text-amber-400 text-sm mb-3">{city.tagline}</p>
                <p className="text-slate-400 text-sm mb-4">{city.description.slice(0, 150)}...</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-slate-500">💰 {city.costOfLiving}</span>
                  <span className="text-slate-500">🌡️ {city.climate}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-900/20 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Move to {country.name}?</h2>
          <p className="text-slate-300 mb-8">
            Get personalized advice on visas, neighborhoods, banking, and everything else.
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
