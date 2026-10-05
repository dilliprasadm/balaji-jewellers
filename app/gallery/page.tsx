import type { Metadata } from "next";
import { GalleryClient } from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Visual Gallery — Curated Monograph",
  description:
    "An editorial horizontal visual monograph documenting the timeless Gold and Silver jewellery collections of Balaji Jewellers & Shyam Diamonds.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Visual Gallery — Curated Monograph | Balaji Jewellers",
    description:
      "An unhurried visual monograph capturing fine Gold and Silver craftsmanship across three curated chapters.",
    url: "https://balajijewellers.com/gallery",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visual Gallery — Curated Monograph | Balaji Jewellers",
    description:
      "An unhurried visual monograph capturing fine Gold and Silver craftsmanship across three curated chapters.",
    images: ["/og-image.jpg"],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
