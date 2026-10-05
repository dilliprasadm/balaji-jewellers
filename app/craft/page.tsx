import { notFound } from "next/navigation";

// NOTE: The Craft page is temporarily commented out / disabled per user request.
// To re-enable, uncomment the metadata export and return <CraftClient /> below.

/*
import type { Metadata } from "next";
import { CraftClient } from "@/components/craft/CraftClient";

export const metadata: Metadata = {
  title: "The Craft — 100× Optical Macro Study",
  description:
    "An extreme macro examination of gold and silver jewellery craftsmanship, granulations, and engraved textures at Balaji Jewellers & Shyam Diamonds.",
  alternates: {
    canonical: "/craft",
  },
  openGraph: {
    title: "The Craft — 100× Optical Macro Study | Balaji Jewellers",
    description:
      "Witness jewellery at 100× magnification: metal grain, granulation, and chiseled textures in Parvatsar, Rajasthan.",
    url: "https://balajijewellers.com/craft",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Craft — 100× Optical Macro Study | Balaji Jewellers",
    description:
      "Witness jewellery at 100× magnification: metal grain, granulation, and chiseled textures in Parvatsar, Rajasthan.",
    images: ["/og-image.jpg"],
  },
};
*/

export default function CraftPage() {
  notFound();
}
