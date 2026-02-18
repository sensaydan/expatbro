import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://expatbro.co'),
  title: {
    default: "Expat Bro | Your Guide to Living in Latin America",
    template: "%s | Expat Bro",
  },
  description: "Skip the BS. Get real advice on moving to Mexico, Colombia, Venezuela & Brazil from someone who's actually done it. 6 years nomading, 110 countries, fluent in 4 languages.",
  keywords: [
    "expat",
    "digital nomad",
    "move to Mexico",
    "move to Colombia", 
    "move to Brazil",
    "move to Venezuela",
    "passport bro",
    "CDMX",
    "Mexico City",
    "Medellin",
    "Rio de Janeiro",
    "Latin America",
    "expat guide",
    "digital nomad visa",
    "cost of living",
    "relocate abroad",
  ],
  authors: [{ name: "Dan Thomson", url: "https://twitter.com/sensaydan" }],
  creator: "Dan Thomson",
  publisher: "Expat Bro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Expat Bro | Your Guide to Living in Latin America",
    description: "Real talk on relocating to Latin America. No fluff, just what works. 6 years nomading, 110 countries.",
    url: "https://expatbro.co",
    siteName: "Expat Bro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expat Bro | Your Guide to Living in Latin America",
    description: "Real talk on relocating to Latin America. No fluff, just what works.",
    creator: "@sensaydan",
    site: "@sensaydan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://expatbro.co",
  },
  verification: {
    google: "XNiF3iEdwkK3QiraIul6FaapPWDm-96mHAA9vrR4gpc",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Expat Bro",
  description: "Your guide to living in Latin America. Real advice on moving to Mexico, Colombia, Venezuela & Brazil.",
  url: "https://expatbro.co",
  author: {
    "@type": "Person",
    name: "Dan Thomson",
    url: "https://twitter.com/sensaydan",
    sameAs: [
      "https://twitter.com/sensaydan",
      "https://linkedin.com/in/danthomson",
    ],
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://expatbro.co/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dan Thomson",
  jobTitle: "Digital Nomad & Expat Consultant",
  description: "6+ years living in Latin America. 110 countries visited. Fluent in English, Spanish, Portuguese, and French.",
  url: "https://expatbro.co/about",
  sameAs: [
    "https://twitter.com/sensaydan",
    "https://linkedin.com/in/danthomson",
  ],
  knowsAbout: [
    "Digital Nomad Lifestyle",
    "Latin America",
    "Expat Life",
    "Mexico",
    "Colombia",
    "Brazil",
    "Venezuela",
    "Immigration",
    "Cost of Living",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="XNiF3iEdwkK3QiraIul6FaapPWDm-96mHAA9vrR4gpc" />
        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-slate-900 text-white`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
