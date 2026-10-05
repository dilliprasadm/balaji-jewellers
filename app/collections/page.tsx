import type { Metadata } from "next";
import { CollectionsClient } from "@/components/collections/CollectionsClient";

export const metadata: Metadata = {
  title: "Exhibition Catalogue — Gold & Silver Jewellery",
  description:
    "Explore the curated digital exhibition catalogue of handcrafted Gold and Silver jewellery by Balaji Jewellers & Shyam Diamonds in Parvatsar, Rajasthan.",
  alternates: {
    canonical: "/collections",
  },
  openGraph: {
    title: "Exhibition Catalogue — Gold & Silver Jewellery | Balaji Jewellers",
    description:
      "A curated digital exhibition of fine Gold and Silver jewellery in Parvatsar, Rajasthan. Bank Wali Gali, Parvatsar.",
    url: "https://balajijewellers.com/collections",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exhibition Catalogue — Gold & Silver Jewellery | Balaji Jewellers",
    description:
      "A curated digital exhibition of fine Gold and Silver jewellery in Parvatsar, Rajasthan.",
    images: ["/og-image.jpg"],
  },
};

export default function CollectionsPage() {
  return <CollectionsClient />;
}
