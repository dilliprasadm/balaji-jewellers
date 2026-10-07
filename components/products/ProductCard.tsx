"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/lib/data/products";
import { getWhatsAppProductUrl } from "@/lib/utils/whatsapp";
import { MessageCircle, Eye } from "lucide-react";
import { ProductShareButton } from "@/components/ui/ProductShareButton";

interface ProductCardProps {
  product: Product;
  onSelectProduct?: (product: Product) => void;
}

export function ProductCard({ product, onSelectProduct }: ProductCardProps) {
  const primaryImage = product.images[0];
  const whatsAppUrl = getWhatsAppProductUrl(product.name, product.id);

  return (
    <div
      id={product.id}
      className="group relative bg-[#260003] border border-champagne-gold/25 hover:border-champagne-gold/60 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_16px_40px_-10px_rgba(0,0,0,0.8)] scroll-mt-28"
    >
      {/* Subtle Ambient Glow on Hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-champagne-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Image Container with 4:3 / 1:1 Aspect Ratio */}
      <div
        className="relative w-full aspect-[4/3] bg-near-black overflow-hidden cursor-pointer"
        onClick={() => onSelectProduct?.(product)}
      >
        {primaryImage && (
          <Image
            src={primaryImage}
            alt={product.name}
            fill
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center filter brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
          />
        )}

        {/* Top Tag Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="bg-near-black/85 backdrop-blur-md px-2.5 py-1 text-[9px] font-sans tracking-monumental text-champagne-gold uppercase border border-champagne-gold/20">
            {product.category.toUpperCase()}
          </span>

          {product.hasStoneDetail && (
            <span className="bg-deep-burgundy/90 backdrop-blur-md px-2 py-0.5 text-[8.5px] font-sans tracking-widest text-soft-gold uppercase border border-soft-gold/30">
              ◇ Stone Detail
            </span>
          )}
        </div>

        {/* Quick View Overlay Button */}
        <div className="absolute inset-0 bg-near-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4">
          {onSelectProduct && (
            <button
              type="button"
              onClick={() => onSelectProduct(product)}
              className="px-3.5 py-2 bg-champagne-gold text-near-black font-sans text-xs tracking-widest uppercase font-semibold hover:bg-soft-gold transition-colors flex items-center gap-1.5 shadow-lg"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>View Piece</span>
            </button>
          )}
          <ProductShareButton productId={product.id} productName={product.name} variant="icon" />
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex flex-col justify-between flex-1 relative z-10 bg-gradient-to-b from-[#260003] to-[#1a0103]">
        <div className="flex flex-col gap-1.5 mb-4">
          <span className="text-[10px] font-sans tracking-cinematic text-warm-ivory/60 uppercase">
            {product.type}
          </span>
          <h3 className="font-serif text-lg text-warm-ivory tracking-wide leading-snug group-hover:text-soft-gold transition-colors">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-xs font-sans text-warm-ivory/70 line-clamp-2 mt-1 leading-relaxed font-light">
              {product.description}
            </p>
          )}
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-champagne-gold/15 flex items-center justify-between gap-2 flex-wrap">
          {onSelectProduct ? (
            <button
              type="button"
              onClick={() => onSelectProduct(product)}
              className="text-[10.5px] font-sans tracking-widest text-champagne-gold hover:text-soft-gold uppercase transition-colors"
            >
              View Details →
            </button>
          ) : (
            <span className="text-[10px] font-sans tracking-widest text-warm-ivory/40 uppercase">
              Parvatsar Atelier
            </span>
          )}

          <div className="flex items-center gap-3">
            <ProductShareButton productId={product.id} productName={product.name} />

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10.5px] font-sans tracking-widest text-warm-ivory/80 hover:text-champagne-gold uppercase transition-colors"
              title="Enquire on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-champagne-gold" />
              <span>Enquire</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
