import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Dan Thomson | Expat Bro",
  description:
    "6 years nomading, 110 countries, every country in the Americas. Meet the guy behind Expat Bro.",
};

const timeline = [
  { year: "2020", event: "Left London permanently, started full-time nomad life" },
  { year: "2021", event: "First year in Latin America — Mexico, Colombia, Brazil" },
  { year: "2022", event: "Completed every country in Central and South America" },
  { year: "2023", event: "Met my Venezuelan partner, started splitting time between Mexico and Venezuela" },
  { year: "2024", event: "Added Brazil to the rotation, hit 100 countries" },
  { year: "2025", event: "110 countries, building permanent bases in LATAM" },
  { year: "2026", event: "Launched Expat Bro to share what I've learned" },
];

const credentials = [
  {
    icon: "🌎",
    title: "110 Countries",
    description: "Not just visited — actually spent time in. From Antarctica to the Arctic.",
  },
  {
    icon: "🌎",
    title: "Every Country in the Americas",
    description:
      "All 35 countries from Canada to Argentina, plus Caribbean islands and territories.",
  },
  {
    icon: "🗣️",
    title: "4 Languages",
    description:
      "English (native), Spanish (fluent), Portuguese (conversational), French (survival).",
  },
  {
    icon: "📅",
    title: "6+ Years Nomading",
    description: "No permanent home since 2020. This isn't a gap year — it's my life.",
  },
  {
    icon: "💼",
    title: "Tech Entrepreneur",
    description: "Founded multiple companies. I work remotely because I built businesses that allow it.",
  },
  {
    icon: "📚",
    title: "Published Author",
    description: "Two books on technology and philosophy. Writing is how I process the world.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/10">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-slate-300">
            I&apos;m Dan. British by birth, nomad by choice, currently building a life between
            Mexico, Venezuela, and Brazil.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6">The Short Version</h2>

            <p className="text-slate-300">
              I&apos;ve been living this life for over six years. Not &quot;traveling&quot; —
              actually living, working, building relationships, learning languages, making mistakes,
              and figuring things out the hard way.
            </p>

            <p className="text-slate-300">
              Before this, I was in London. Philosophy degree from King&apos;s College, MBA from
              Cambridge, years in tech startups. I had the career trajectory, the flat in a nice
              area, the whole thing. Then I realized I was optimizing for someone else&apos;s
              definition of success.
            </p>

            <p className="text-slate-300">
              So I left. Not dramatically — I just stopped renewing leases and started saying yes to
              opportunities in other places. Six years later, I&apos;ve been to 110 countries and
              every single country in the Americas.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12">Why Latin America?</h2>

            <p className="text-slate-300">
              I&apos;ve been everywhere. Southeast Asia, Europe, Africa, the Middle East. Latin
              America is where I keep coming back. Why?
            </p>

            <ul className="text-slate-300 space-y-3">
              <li>
                <strong className="text-white">The people.</strong> Warmth isn&apos;t performative
                here. When someone invites you to their home for lunch, they mean it.
              </li>
              <li>
                <strong className="text-white">The lifestyle.</strong> Work-life balance actually
                exists. People eat dinner at 9pm and enjoy it.
              </li>
              <li>
                <strong className="text-white">The value.</strong> Your money goes further, but not
                in a &quot;exploit cheap labor&quot; way — in a &quot;the cost of living is
                actually reasonable&quot; way.
              </li>
              <li>
                <strong className="text-white">The challenge.</strong> It&apos;s not always easy.
                The bureaucracy, the language barriers, the cultural differences — they keep you
                sharp.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12">Why I Started Expat Bro</h2>

            <p className="text-slate-300">
              I got tired of the bad advice. YouTube videos from people who spent two weeks in
              Medellín telling you how to &quot;live like a king on $1,000/month.&quot; Reddit
              threads full of speculation from people who&apos;ve never actually done it. Generic
              travel blogs optimized for SEO, not for truth.
            </p>

            <p className="text-slate-300">
              I&apos;ve made every mistake. I&apos;ve been ripped off by landlords, rejected by
              banks, lost in translation, stuck at borders, and gotten sick from street food. I&apos;ve
              also built a life I love, learned three languages, found my partner, and created
              businesses that let me work from anywhere.
            </p>

            <p className="text-slate-300">
              This site is the resource I wish I had when I started. No BS, no affiliate-link
              padding, no &quot;sign up for my course.&quot; Just what actually works.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12">The Consulting</h2>

            <p className="text-slate-300">
              I offer strategy calls because people kept asking. After years of answering the same
              questions for friends-of-friends, I realized I could do this properly.
            </p>

            <p className="text-slate-300">
              $150 for 30 minutes. That sounds expensive until you compare it to the money you&apos;ll
              waste making avoidable mistakes. One bad apartment decision costs more than that. One
              visa screwup costs way more.
            </p>

            <p className="text-slate-300">
              I&apos;m not for everyone. If you want someone to tell you everything is easy and
              you&apos;ll love it, find a different consultant. I&apos;ll tell you the truth,
              including the parts that might make you reconsider.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">The Credentials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {credentials.map((cred) => (
              <div key={cred.title} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                <div className="text-3xl mb-3">{cred.icon}</div>
                <h3 className="text-xl font-bold text-amber-400 mb-2">{cred.title}</h3>
                <p className="text-slate-400">{cred.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">The Journey</h2>
          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-6">
                <div className="text-amber-400 font-bold text-xl w-16 shrink-0">{item.year}</div>
                <div className="text-slate-300 pb-6 border-b border-slate-700 flex-1">
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-900/20 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Talk?</h2>
          <p className="text-slate-300 mb-8">
            30 minutes, $150. Bring your questions — I&apos;ll bring the answers.
          </p>
          <a
            href="https://calendly.com/dan-thomson/consult"
            target="_blank"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-lg text-lg transition"
          >
            Book a Strategy Call
          </a>
        </div>
      </section>
    </div>
  );
}
