"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface BrandLogoProps {
  className?: string;
  variant?: "full" | "emblem" | "stacked";
  href?: string;
}

export function BrandLogo({
  className,
  variant = "full",
  href = "/",
}: BrandLogoProps) {
  const Emblem = (
    <div className="relative w-10 h-10 shrink-0 rounded-full overflow-hidden border border-champagne-gold/40 shadow-[0_0_15px_-3px_rgba(216,180,106,0.25)] group-hover:scale-105 transition-transform duration-500 bg-near-black">
      <Image
        src="/logo.png"
        alt="Balaji Jewellers Official Emblem"
        fill
        sizes="40px"
        className="object-contain"
        priority
       quality={90} />
    </div>
  );

  const content = (
    <div className={cn("flex items-center gap-3.5 group select-none", className)}>
      {Emblem}

      {variant !== "emblem" && (
        <div className="flex flex-col">
          <span className="font-serif text-base sm:text-lg tracking-[0.14em] text-warm-ivory uppercase font-medium leading-tight group-hover:text-soft-gold transition-colors">
            Balaji Jewellers
          </span>
          <span className="font-sans text-[9px] tracking-[0.25em] text-champagne-gold uppercase font-normal mt-0.5">
            &amp; Shyam Diamonds
          </span>
          <span className="font-sans text-[7.5px] tracking-[0.3em] text-warm-ivory/50 uppercase mt-0.5">
            Parvatsar · Rajasthan
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block outline-none focus-visible:ring-1 focus-visible:ring-champagne-gold">
        {content}
      </Link>
    );
  }

  return content;
}
