import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { MobileConciergeBar } from "@/components/layout/MobileConciergeBar";
import { SITE_CONFIG } from "@/lib/constants/siteConfig";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://balajijewellers.vercel.app"),
  title: {
    default: "Balaji Jewellers & Shyam Diamonds — Fine Gold & Silver Jewellery | Parvatsar",
    template: "%s | Balaji Jewellers & Shyam Diamonds",
  },
  description:
    "Discover Balaji Jewellers & Shyam Diamonds in Parvatsar, Rajasthan. An unhurried digital exhibition of fine Gold and Silver jewellery collections at Bank Wali Gali.",
  keywords: [
    "Balaji Jewellers",
    "Shyam Diamonds",
    "Balaji Jewellers Parvatsar",
    "Jewellers in Parvatsar",
    "Gold Jewellery Parvatsar",
    "Silver Jewellery Rajasthan",
    "Indian Bridal Jewellery Parvatsar",
    "Kundan Polki Jewellery",
    "925 Sterling Silver Jewellery",
    "Jewellery Showroom Bank Wali Gali",
    "Fine Jewellery Rajasthan",
  ],
  authors: [{ name: SITE_CONFIG.name, url: "https://balajijewellers.com" }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  category: "Jewellery & Luxury Goods",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Balaji Jewellers & Shyam Diamonds — Haute Joaillerie Parvatsar",
    description:
      "A curated digital exhibition of fine Gold and Silver jewellery in Parvatsar, Rajasthan. Bank Wali Gali, Parvatsar.",
    url: "https://balajijewellers.com",
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 896,
        alt: "Balaji Jewellers & Shyam Diamonds — Archival Polki & Emerald Bridal Necklace",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balaji Jewellers & Shyam Diamonds — Haute Joaillerie Parvatsar",
    description:
      "A curated digital exhibition of fine Gold and Silver jewellery in Parvatsar, Rajasthan.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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
};

const jewelryStoreSchema = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  "@id": "https://balajijewellers.com/#store",
  name: "Balaji Jewellers & Shyam Diamonds",
  alternateName: "Balaji Jewellers Parvatsar",
  description:
    "Curated digital jewellery experience and fine jewellery showroom in Parvatsar, Rajasthan, specializing in authentic Gold Jewellery and Silver Jewellery.",
  url: "https://balajijewellers.com",
  telephone: "+91 88540 00203",
  priceRange: "$$$$",
  image: "https://balajijewellers.com/og-image.jpg",
  logo: "https://balajijewellers.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bank Wali Gali",
    addressLocality: "Parvatsar",
    addressRegion: "Rajasthan",
    postalCode: "341512",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.8958,
    longitude: 74.7679,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/balajijwellerssshyamdimond",
    "https://share.google/qbMqFhAcO5alP2Fj5",
    "https://wa.me/918854000203",
  ],
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Bank Transfer",
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://balajijewellers.com/#website",
  url: "https://balajijewellers.com",
  name: "Balaji Jewellers & Shyam Diamonds",
  description:
    "Fine Gold and Silver jewellery digital salon in Parvatsar, Rajasthan.",
  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${manrope.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jewelryStoreSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="bg-near-black text-warm-ivory font-sans antialiased min-h-screen flex flex-col selection:bg-deep-burgundy selection:text-soft-gold">
        <Navigation />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <MobileConciergeBar />
      </body>
    </html>
  );
}
