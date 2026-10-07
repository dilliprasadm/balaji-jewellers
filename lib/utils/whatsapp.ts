import { SITE_CONFIG } from "../constants/siteConfig";
import { PRODUCTS } from "../data/products";

/**
 * Returns the active base URL of the site:
 * - Uses window.location.origin when running in browser (e.g. http://localhost:3000 or production domain)
 * - Falls back to production domain (https://balajijewellers.vercel.app)
 */
export function getBaseSiteUrl(): string {
  if (typeof window !== "undefined" && window.location && window.location.origin) {
    const origin = window.location.origin;
    // Don't send localhost links in WhatsApp messages — always share public URL
    if (!origin.includes("localhost") && !origin.includes("127.0.0.1")) {
      return origin;
    }
  }
  return SITE_CONFIG.siteUrl || "https://balajijewellers.vercel.app";
}

/**
 * Generates a clean WhatsApp inquiry link with the direct website product page link.
 * Instead of exposing raw Google/CDN image URLs, it links directly to that piece on our website:
 * e.g., https://balaji-jewellers.vercel.app/collections?product=raw-moonstone-silver-ring
 */
export function getWhatsAppProductUrl(
  productName?: string,
  productIdOrUrl?: string
): string {
  let message = "Hello, I’m interested in fine jewellery from Balaji Jewellers & Shyam Diamonds.";
  if (productName) {
    message = `Hello, I’m interested in the ${productName} from Balaji Jewellers & Shyam Diamonds.`;

    let productUrl = "";
    const baseUrl = getBaseSiteUrl();

    // 1. If an explicit product ID (or slug) is provided
    if (productIdOrUrl && !productIdOrUrl.startsWith("http")) {
      productUrl = `${baseUrl}/collections?product=${productIdOrUrl}`;
    } else {
      // 2. Try to find the product in our catalog by matching name or image
      const product = PRODUCTS.find((p) => {
        if (p.name.toLowerCase() === productName.toLowerCase()) return true;
        if (
          productIdOrUrl &&
          p.images.some((img) => img.includes(productIdOrUrl) || productIdOrUrl.includes(img))
        )
          return true;
        return false;
      });

      if (product) {
        productUrl = `${baseUrl}/collections?product=${product.id}`;
      } else if (
        productIdOrUrl &&
        productIdOrUrl.startsWith("http") &&
        !productIdOrUrl.includes("googleusercontent.com") &&
        !productIdOrUrl.includes(".jpg") &&
        !productIdOrUrl.includes(".png")
      ) {
        productUrl = productIdOrUrl;
      } else if (productName) {
        const slug = productName
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/[\s_-]+/g, "-");
        productUrl = `${baseUrl}/collections?product=${slug}`;
      }
    }

    if (productUrl) {
      message += `\n\n${productUrl}`;
    }
  }

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encoded}`;
}

export function getWhatsAppShowroomUrl(): string {
  const message = "Hello, I would like to visit the showroom of Balaji Jewellers & Shyam Diamonds in Parvatsar.";
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encoded}`;
}
