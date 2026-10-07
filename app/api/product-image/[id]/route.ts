import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/data/products";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const cleanId = id.replace(/\.(jpg|jpeg|png|webp)$/i, "").toLowerCase().trim();
  const strippedId = cleanId.replace(/[^a-z0-9]/g, "");

  const product = PRODUCTS.find((p) => {
    const pId = p.id.toLowerCase();
    const pIdStripped = pId.replace(/[^a-z0-9]/g, "");
    return pId === cleanId || pIdStripped === strippedId;
  });

  if (!product || !product.images[0]) {
    // Return 404 or redirect to fallback
    return new NextResponse("Product Image Not Found", { status: 404 });
  }

  try {
    const imageUrl = product.images[0];
    const imageRes = await fetch(imageUrl);

    if (!imageRes.ok) {
      return NextResponse.redirect(imageUrl);
    }

    const contentType = imageRes.headers.get("content-type") || "image/jpeg";
    const imageBuffer = await imageRes.arrayBuffer();

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    // If fetching fails for any reason, redirect directly to CDN image
    return NextResponse.redirect(product.images[0]);
  }
}
