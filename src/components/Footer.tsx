import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-amber-400 font-bold mb-4">🌎 Expat Bro</h3>
            <p className="text-slate-400 text-sm">
              Real advice on living abroad from someone who&apos;s actually doing it.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Countries</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/mexico" className="hover:text-amber-400">🇲🇽 Mexico</Link></li>
              <li><Link href="/colombia" className="hover:text-amber-400">🇨🇴 Colombia</Link></li>
              <li><Link href="/venezuela" className="hover:text-amber-400">🇻🇪 Venezuela</Link></li>
              <li><Link href="/brazil" className="hover:text-amber-400">🇧🇷 Brazil</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Top Cities</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/mexico/cdmx" className="hover:text-amber-400">Mexico City</Link></li>
              <li><Link href="/colombia/medellin" className="hover:text-amber-400">Medellín</Link></li>
              <li><Link href="/brazil/rio" className="hover:text-amber-400">Rio de Janeiro</Link></li>
              <li><Link href="/brazil/sao-paulo" className="hover:text-amber-400">São Paulo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="https://twitter.com/sensaydan" target="_blank" className="hover:text-amber-400">Twitter/X</a></li>
              <li><a href="https://linkedin.com/in/danthomson" target="_blank" className="hover:text-amber-400">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Expat Bro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
