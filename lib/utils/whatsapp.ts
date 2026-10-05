import { SITE_CONFIG } from "../constants/siteConfig";

export function getWhatsAppProductUrl(
  productName?: string,
  imageUrl?: string
): string {
  let message = "Hello, I’m interested in fine jewellery from Balaji Jewellers & Shyam Diamonds.";
  if (productName) {
    message = `Hello, I’m interested in the ${productName} from Balaji Jewellers & Shyam Diamonds.`;
    if (imageUrl) {
      message += `\n\n${imageUrl}`;
    }
    message += `\n\nPlease share availability and showroom details in Parvatsar.`;
  }
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encoded}`;
}

export function getWhatsAppShowroomUrl(): string {
  const message = "Hello, I would like to visit the showroom of Balaji Jewellers & Shyam Diamonds in Parvatsar.";
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encoded}`;
}
