import type { Metadata } from "next";
import { CollectionsClient } from "@/components/collections/CollectionsClient";
import { PRODUCTS } from "@/lib/data/products";
import { SITE_CONFIG } from "@/lib/constants/siteConfig";

type Props = {
  searchParams: Promise<{ product?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const productId = resolvedParams?.product;

  if (productId) {
    const cleanQuery = productId.toLowerCase().trim();
    const strippedQuery = cleanQuery.replace(/[^a-z0-9]/g, "");

    const product = PRODUCTS.find((p) => {
      const pId = p.id.toLowerCase();
      const pIdStripped = pId.replace(/[^a-z0-9]/g, "");
      const pNameLower = p.name.toLowerCase();
      const pNameSlug = pNameLower.replace(/[^a-z0-9]+/g, "-");
      const pNameStripped = pNameLower.replace(/[^a-z0-9]/g, "");

      return (
        pId === cleanQuery ||
        pIdStripped === strippedQuery ||
        pNameSlug === cleanQuery ||
        pNameStripped === strippedQuery ||
        pNameLower.includes(cleanQuery.replace(/-/g, " ")) ||
        cleanQuery.includes(pId)
      );
    });

    if (product) {
      const siteUrl = SITE_CONFIG.siteUrl || "https://balajijewellers.vercel.app";
      const productUrl = `${siteUrl}/collections?product=${product.id}`;
      const ogImageUrl = `${siteUrl}/api/product-image/${product.id}.jpg`;
      const title = `${product.name} — Balaji Jewellers & Shyam Diamonds`;
      const description =
        product.description ||
        `Discover the ${product.name}. Handcrafted fine jewellery in Parvatsar, Rajasthan by Balaji Jewellers & Shyam Diamonds.`;

      return {
        title,
        description,
        alternates: {
          canonical: productUrl,
        },
        openGraph: {
          title,
          description,
          url: productUrl,
          siteName: "Balaji Jewellers & Shyam Diamonds",
          locale: "en_IN",
          type: "website",
          images: [
            {
              url: ogImageUrl,
              width: 1200,
              height: 1200,
              alt: product.name,
              type: "image/jpeg",
            },
            {
              url: product.images[0],
              alt: product.name,
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title,
          description,
          images: [ogImageUrl],
        },
      };
    }
  }

  // Default collections catalogue metadata
  return {
    title: "Exhibition Catalogue — Gold & Silver Jewellery | Balaji Jewellers",
    description:
      "Explore the curated digital exhibition catalogue of handcrafted Gold and Silver jewellery by Balaji Jewellers & Shyam Diamonds in Parvatsar, Rajasthan.",
    alternates: {
      canonical: "/collections",
    },
    openGraph: {
      title: "Exhibition Catalogue — Gold & Silver Jewellery | Balaji Jewellers",
      description:
        "A curated digital exhibition of fine Gold and Silver jewellery in Parvatsar, Rajasthan. Bank Wali Gali, Parvatsar.",
      url: "https://balajijewellers.vercel.app/collections",
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
}

export default async function CollectionsPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  return <CollectionsClient initialProductId={resolvedParams?.product} />;
}
