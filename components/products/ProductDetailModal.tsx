"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data/products";
import { getWhatsAppProductUrl } from "@/lib/utils/whatsapp";
import { SITE_CONFIG } from "@/lib/constants/siteConfig";
import { X, MessageCircle, Phone, MapPin, Sparkles } from "lucide-react";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) return null;

  const currentImage = product.images[selectedImageIndex] || product.images[0];
  const whatsAppUrl = getWhatsAppProductUrl(product.name, product.id);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-near-black/90 backdrop-blur-xl animate-in fade-in duration-300"
    >
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[88vh] sm:max-h-[92vh] overflow-y-auto bg-gradient-to-b from-[#260003] via-[#1a0103] to-[#120708] border border-champagne-gold/30 shadow-[0_24px_64px_-12px_rgba(0,0,0,0.95)] z-10 flex flex-col md:flex-row pb-6 md:pb-0">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 flex items-center justify-center bg-near-black/90 border border-champagne-gold/40 text-champagne-gold hover:bg-champagne-gold hover:text-near-black transition-colors shadow-lg"
          aria-label="Close piece details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Imagery Section */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-champagne-gold/20">
          <div className="relative w-full aspect-square bg-near-black overflow-hidden border border-champagne-gold/20">
            {currentImage && (
              <Image
                src={currentImage}
                alt={product.name}
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-all duration-500"
                priority
              />
            )}
          </div>

          {/* Thumbnails if multiple images exist */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-16 h-16 shrink-0 border transition-all ${
                    selectedImageIndex === idx
                      ? "border-champagne-gold scale-105 shadow-md"
                      : "border-champagne-gold/20 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                   quality={90} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Piece Information & Direct Enquiries */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            {/* Taxonomy & Category */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-sans tracking-monumental text-champagne-gold uppercase">
                {product.category.toUpperCase()} JEWELLERY
              </span>
              <span className="text-champagne-gold/30">•</span>
              <span className="text-[10px] font-sans tracking-cinematic text-warm-ivory/60 uppercase">
                {product.type}
              </span>
            </div>

            {/* Product Title */}
            <h2 className="font-serif text-2xl sm:text-3xl text-warm-ivory leading-tight">
              {product.name}
            </h2>

            {/* Description */}
            {product.description && (
              <p className="text-sm font-sans text-warm-ivory/80 leading-relaxed font-light">
                {product.description}
              </p>
            )}

            {/* Optional Stone Detail Badge & Explanation */}
            {product.hasStoneDetail && (
              <div className="p-4 bg-deep-burgundy/40 border border-champagne-gold/25 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-soft-gold text-xs font-sans tracking-wider uppercase font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
                  <span>Stone Embellishment Detail</span>
                </div>
                {product.stoneDetails ? (
                  <p className="text-xs font-sans text-warm-ivory/80 font-light leading-relaxed">
                    {product.stoneDetails}
                  </p>
                ) : (
                  <p className="text-xs font-sans text-warm-ivory/70 font-light">
                    Hand-set stones incorporated as part of this individual piece.
                  </p>
                )}
              </div>
            )}

            {/* Optional Verified Purity Specification (Only shown if provided) */}
            {product.purity && (
              <div className="flex items-center justify-between py-2 border-y border-champagne-gold/15 text-xs font-sans">
                <span className="text-warm-ivory/60 uppercase tracking-widest">Purity Specification</span>
                <span className="text-champagne-gold font-medium">{product.purity}</span>
              </div>
            )}

            {/* Showroom Viewing Note */}
            <div className="text-xs font-sans text-warm-ivory/60 flex items-center gap-2 pt-2">
              <MapPin className="w-3.5 h-3.5 text-champagne-gold shrink-0" />
              <span>Available for private examination at our Parvatsar salon.</span>
            </div>
          </div>

          {/* Conversion Actions: WhatsApp + Call + Visit Showroom */}
          <div className="flex flex-col gap-3 pt-6 border-t border-champagne-gold/20 mt-6">
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 bg-champagne-gold text-near-black font-sans text-xs tracking-monumental uppercase font-semibold hover:bg-soft-gold transition-colors flex items-center justify-center gap-2 shadow-[0_6px_20px_-6px_rgba(216,180,106,0.4)]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={SITE_CONFIG.phoneTel}
                className="py-3 px-4 border border-champagne-gold/60 text-champagne-gold font-sans text-[11px] tracking-widest uppercase font-medium hover:bg-champagne-gold/10 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Salon</span>
              </a>

              <Link
                href="/visit"
                onClick={onClose}
                className="py-3 px-4 border border-champagne-gold/60 text-warm-ivory font-sans text-[11px] tracking-widest uppercase font-medium hover:bg-champagne-gold/10 transition-colors flex items-center justify-center gap-2 text-center"
              >
                <MapPin className="w-3.5 h-3.5 text-champagne-gold" />
                <span>Visit Showroom</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
