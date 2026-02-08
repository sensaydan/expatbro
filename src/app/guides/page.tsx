import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides | Expat Bro",
  description:
    "Free and premium guides to moving to Latin America. From quick-start checklists to comprehensive relocation bibles.",
};

const freeGuideFeatures = [
  "Pre-departure checklist (30 items)",
  "Country comparison chart",
  "Visa overview for all 4 countries",
  "Packing list for long-term travel",
  "Banking basics for nomads",
  "Safety quick-reference guide",
  "10 mistakes to avoid",
];

const premiumGuideFeatures = [
  "Everything in the free guide, plus:",
  "85-page comprehensive relocation manual",
  "Detailed neighborhood guides with maps",
  "Step-by-step visa application walkthroughs",
  "Apartment hunting scripts (in Spanish/Portuguese)",
  "Bank account opening playbooks by country",
  "Cost of living spreadsheets (editable)",
  "Dating and social scene deep-dives",
  "Safety protocols and emergency contacts",
  "Tax and legal considerations",
  "Month-by-month settling in timeline",
  "Private Telegram group access",
  "Quarterly updates as things change",
];

export default function GuidesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Guides</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything I&apos;ve learned about moving to Latin America, packaged into actionable
            guides. Start free or go deep.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Guide */}
            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex flex-col">
              <div className="mb-6">
                <span className="bg-green-500/20 text-green-400 text-sm font-semibold px-3 py-1 rounded-full">
                  FREE
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2">The Expat Bro Starter Kit</h2>
              <p className="text-slate-400 mb-6">
                The essentials to get you started. A 15-page quick-start guide covering the basics
                of moving to Mexico, Colombia, Venezuela, or Brazil.
              </p>
              <div className="text-4xl font-bold text-white mb-6">
                $0 <span className="text-lg text-slate-500 font-normal">/ free download</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {freeGuideFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-300">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/guides/expat-bro-starter-kit.html"
                download
                className="block w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 px-6 rounded-lg text-center transition"
              >
                Download Free Guide
              </a>
            </div>

            {/* Premium Guide */}
            <div className="bg-gradient-to-br from-amber-900/30 to-slate-800 rounded-2xl p-8 border border-amber-500/30 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-500 text-slate-900 text-sm font-bold px-4 py-1 rounded-bl-lg">
                BEST VALUE
              </div>
              <div className="mb-6">
                <span className="bg-amber-500/20 text-amber-400 text-sm font-semibold px-3 py-1 rounded-full">
                  PREMIUM
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2">The Complete Relocation Bible</h2>
              <p className="text-slate-400 mb-6">
                Everything you need to successfully relocate to Latin America. 85+ pages of
                detailed, actionable guidance plus ongoing updates.
              </p>
              <div className="text-4xl font-bold text-white mb-6">
                $30 <span className="text-lg text-slate-500 font-normal">/ one-time</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {premiumGuideFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-300">
                    <span className="text-amber-400 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://buy.stripe.com/expatbro-relocation-bible"
                target="_blank"
                className="block w-full bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 px-6 rounded-lg text-center transition"
              >
                Buy Now — $30
              </a>
              <p className="text-center text-slate-500 text-sm mt-4">
                Instant PDF download. 30-day money-back guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What&apos;s in the Premium Guide?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-400 mb-3">🏠 Housing</h3>
              <p className="text-slate-400">
                Neighborhood rankings, rental price ranges, red flags to avoid, negotiation scripts,
                and where to find listings that aren&apos;t on Airbnb.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-400 mb-3">📋 Visas</h3>
              <p className="text-slate-400">
                Step-by-step applications for tourist, digital nomad, and residency visas. Which
                documents you actually need vs. what they say you need.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-400 mb-3">💰 Money</h3>
              <p className="text-slate-400">
                Bank account playbooks, which apps work where, how to move money cheaply, and the
                real cost of living with actual budgets.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-400 mb-3">🛡️ Safety</h3>
              <p className="text-slate-400">
                Area-by-area safety ratings, what to do if things go wrong, emergency contacts,
                insurance recommendations, and street smarts.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-400 mb-3">💬 Language</h3>
              <p className="text-slate-400">
                Key phrases for each situation, how much you really need, best apps and classes, and
                regional differences that trip people up.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-400 mb-3">❤️ Social</h3>
              <p className="text-slate-400">
                How to meet people, dating norms by country, expat communities worth joining, and
                building a real social life (not just other nomads).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Questions</h2>
          <div className="space-y-6">
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Why should I pay when there&apos;s free content everywhere?
              </h3>
              <p className="text-slate-400">
                Free content is optimized for clicks, not for helping you. This guide is the
                distillation of 6 years and 110 countries, organized to actually help you make
                decisions. The $30 will save you thousands in avoided mistakes.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">Do I get updates?</h3>
              <p className="text-slate-400">
                Yes. Visa rules change, neighborhoods gentrify, new options appear. You get
                quarterly update emails with changes, plus access to the Telegram group where I
                share real-time updates.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">What if it&apos;s not useful?</h3>
              <p className="text-slate-400">
                30-day money-back guarantee, no questions asked. If you don&apos;t find it valuable,
                email me and I&apos;ll refund you immediately.
              </p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Is this instead of or in addition to a strategy call?
              </h3>
              <p className="text-slate-400">
                They complement each other. The guide gives you the comprehensive knowledge base.
                The call lets you ask specific questions about your situation. Many people read the
                guide first, then book a call to dive deeper on their particular circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-900/20 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start With the Free Guide</h2>
          <p className="text-slate-300 mb-8">
            No email required. Just click and download. See if my style works for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/guides/expat-bro-starter-kit.html"
              download
              className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 px-8 rounded-lg transition"
            >
              Download Free Guide
            </a>
            <a
              href="https://buy.stripe.com/expatbro-relocation-bible"
              target="_blank"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-4 px-8 rounded-lg transition"
            >
              Get Premium — $30
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
