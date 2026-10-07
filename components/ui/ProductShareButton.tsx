"use client";

import React, { useState } from "react";
import { Share2, Check } from "lucide-react";
import { getBaseSiteUrl } from "@/lib/utils/whatsapp";

interface ProductShareButtonProps {
  productId: string;
  productName: string;
  variant?: "icon" | "button" | "pill";
  className?: string;
}

export function ProductShareButton({
  productId,
  productName,
  variant = "button",
  className = "",
}: ProductShareButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    const baseUrl = getBaseSiteUrl();
    const shareUrl = `${baseUrl}/collections?product=${productId}`;
    const shareData = {
      title: `${productName} — Balaji Jewellers & Shyam Diamonds`,
      text: `Discover the ${productName} by Balaji Jewellers & Shyam Diamonds, Parvatsar.`,
      url: shareUrl,
    };

    // Try native Web Share API (mobile phones, tablets, supported desktop browsers)
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // User cancelled share or abort error — don't show error, ignore
        if ((err as Error)?.name === "AbortError") return;
      }
    }

    // Fallback: Copy link to clipboard
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      } catch {
        // Silently fail if clipboard blocked
      }
    }
  };

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={handleShare}
        aria-label={`Share ${productName}`}
        title={copied ? "Link Copied!" : "Share piece"}
        className={`relative inline-flex items-center justify-center w-8 h-8 rounded-full border border-champagne-gold/30 bg-near-black/70 text-champagne-gold hover:bg-champagne-gold hover:text-near-black transition-all ${className}`}
      >
        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
        {copied && (
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-near-black border border-champagne-gold/40 text-[9px] font-sans text-champagne-gold uppercase tracking-wider rounded whitespace-nowrap shadow-xl">
            Copied!
          </span>
        )}
      </button>
    );
  }

  if (variant === "pill") {
    return (
      <button
        type="button"
        onClick={handleShare}
        className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 border border-champagne-gold/30 bg-near-black/60 text-champagne-gold hover:bg-champagne-gold hover:text-near-black text-[10px] font-sans tracking-widest uppercase transition-all shadow-sm ${className}`}
      >
        {copied ? (
          <>
            <Check className="w-3 h-3 text-emerald-400" />
            <span className="text-emerald-300">Link Copied</span>
          </>
        ) : (
          <>
            <Share2 className="w-3 h-3" />
            <span>Share</span>
          </>
        )}
      </button>
    );
  }

  // Default "button"
  return (
    <button
      type="button"
      onClick={handleShare}
      className={`relative inline-flex items-center gap-1.5 text-[10.5px] font-sans tracking-widest text-warm-ivory/80 hover:text-champagne-gold uppercase transition-colors ${className}`}
      title={copied ? "Link Copied!" : "Share piece"}
    >
      {copied ? (
        <>
          <Check className="w-3 h-3 text-emerald-400" />
          <span className="text-emerald-400 font-semibold">Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="w-3 h-3 text-champagne-gold" />
          <span>Share</span>
        </>
      )}
    </button>
  );
}
