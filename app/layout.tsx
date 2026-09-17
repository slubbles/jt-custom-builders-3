import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const instrumentSans = Instrument_Sans({ variable: "--font-instrument-sans", subsets: ["latin"], display: "swap" });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], display: "swap", weight: ["300","400","500","600"], style: ["normal","italic"] });

export const metadata: Metadata = {
  title: "JT Custom Builders | Relationship-focused home builder serving central Maryland",
  description: "Build your dream home with JT Custom Builders, Central Maryland's premier relationship-focused builder. Custom Homes, Additions, Garages & Remodeling.",
  openGraph: {
    title: "JT Custom Builders — Central Maryland",
    description: "Relationship-focused home builder. Custom homes, additions, garages & remodeling in Mount Airy, MD.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${instrumentSans.variable} ${newsreader.variable} min-h-full flex flex-col antialiased bg-paper text-ink`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
