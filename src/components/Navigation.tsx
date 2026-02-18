"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const countries = [
  { name: "Mexico", href: "/mexico", emoji: "🇲🇽" },
  { name: "Colombia", href: "/colombia", emoji: "🇨🇴" },
  { name: "Venezuela", href: "/venezuela", emoji: "🇻🇪" },
  { name: "Brazil", href: "/brazil", emoji: "🇧🇷" },
];

const navLinks = [
  { name: "Guides", href: "/guides" },
  { name: "About", href: "/about" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition">
            <Image
              src="/images/logo-icon.svg"
              alt="Expat Bro"
              width={36}
              height={36}
              className="w-9 h-9"
            />
            <span className="text-xl font-bold">
              <span className="text-amber-400">Expat</span>
              <span className="text-white">Bro</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {countries.map((country) => (
              <Link
                key={country.href}
                href={country.href}
                className="text-slate-300 hover:text-amber-400 transition flex items-center gap-1"
              >
                <span>{country.emoji}</span>
                <span>{country.name}</span>
              </Link>
            ))}
            <Link
              href="/blog"
              className="text-slate-300 hover:text-amber-400 transition"
            >
              Blog
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-amber-400 transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#book"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-4 py-2 rounded-lg transition"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            {countries.map((country) => (
              <Link
                key={country.href}
                href={country.href}
                className="block py-2 text-slate-300 hover:text-amber-400"
                onClick={() => setIsOpen(false)}
              >
                {country.emoji} {country.name}
              </Link>
            ))}
            <Link
              href="/blog"
              className="block py-2 text-slate-300 hover:text-amber-400"
              onClick={() => setIsOpen(false)}
            >
              📝 Blog
            </Link>
            <Link
              href="/#book"
              className="block mt-4 bg-amber-500 text-slate-900 font-semibold px-4 py-2 rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
