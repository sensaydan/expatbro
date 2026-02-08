import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expat Bro | Your Guide to Living in Latin America",
  description: "Skip the BS. Get real advice on moving to Mexico, Colombia, Venezuela & Brazil from someone who's actually done it. 6 years nomading, 110 countries, fluent in 4 languages.",
  keywords: "expat, digital nomad, move to Mexico, move to Colombia, move to Brazil, passport bro, CDMX, Medellin, Rio de Janeiro",
  openGraph: {
    title: "Expat Bro | Your Guide to Living in Latin America",
    description: "Real talk on relocating to Latin America. No fluff, just what works.",
    type: "website",
    url: "https://expatbro.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-white`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
