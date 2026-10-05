import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { Sparkles } from "lucide-react";
import StoryClient from "./StoryClient";

export const metadata: Metadata = {
  title: "Our Story & Philosophy",
  description:
    "Discover the brand philosophy, artistic devotion, and Parvatsar salon presence of Balaji Jewellers & Shyam Diamonds in Rajasthan.",
  alternates: {
    canonical: "/story",
  },
  openGraph: {
    title: "Our Story & Philosophy — Balaji Jewellers & Shyam Diamonds",
    description:
      "A philosophy of pause, fine material integrity, and Rajasthan craftsmanship in Parvatsar.",
    url: "https://balajijewellers.com/story",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story & Philosophy — Balaji Jewellers & Shyam Diamonds",
    description:
      "A philosophy of pause, fine material integrity, and Rajasthan craftsmanship in Parvatsar.",
    images: ["/og-image.jpg"],
  },
};

export default function StoryPage() {
  return (
    <div className="w-full bg-near-black text-warm-ivory selection:bg-deep-burgundy selection:text-soft-gold pt-20">
      {/* ========================================================
          SECTION 01: CINEMATIC PROVENANCE HERO (~100vh)
          ======================================================== */}
      <section className="relative w-full min-h-[92vh] flex flex-col justify-between overflow-hidden px-6 lg:px-14 py-16 bg-[#170b0c]">
        {/* Immersive Background Layer with Vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzNib3O3O3kmiS5Y7XjvDJEPW1q1t_1Yt1eCNZ3bDqYl-fwDaOMIxcGS0iAM98OoGNEffe4gN3iP-qLblQazUJS55vNMPkblOYTKwnQeXjn1T0NNXMIpuvzUVVF4e3Kd6l2d7fVlA4OskiUUQMilQ_vzBpRlT2hzCZ9wt01trRvHFyTnB4m_O5TtU5nWCRLIW5rnYWUg-zPdycKFJGiLacIL601wi2qEloSI7jc03pZnvK6-9eM8jY"
            alt="Artisan Goldsmith Hands at the Workbench"
            fill
            priority
            className="object-cover object-center filter brightness-[0.4] contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#170b0c] via-[#170b0c]/60 to-[#170b0c]/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(23,11,12,0.85)_100%)]"></div>
        </div>

        {/* Bleeding Background Architectural Typography */}
        <div className="absolute inset-x-0 top-1/3 -translate-y-1/2 pointer-events-none select-none z-10 flex justify-center overflow-hidden">
          <span className="font-serif text-[18vw] leading-none tracking-tighter text-champagne-gold/5 uppercase whitespace-nowrap blur-[1px]">
            ARTISTRY
          </span>
        </div>

        {/* Top Eyebrow */}
        <div className="relative z-20 w-full flex justify-between items-start">
          <div className="inline-flex items-center gap-3 py-1.5 px-3 bg-dark-wine/70 border border-champagne-gold/25 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
            <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase">
              BALAJI JEWELLERS &amp; SHYAM DIAMONDS
            </span>
          </div>
          <div className="hidden md:flex flex-col items-end text-right">
            <span className="font-sans text-[10px] tracking-widest text-champagne-gold/60 uppercase">
              PARVATSAR, RAJASTHAN
            </span>
            <span className="font-sans text-xs text-warm-ivory/60 font-light">
              Brand Philosophy &amp; Devotion
            </span>
          </div>
        </div>

        {/* Centerpiece Asymmetric Narrative */}
        <div className="relative z-20 w-full max-w-4xl py-12">
          <p className="font-sans text-xs text-champagne-gold uppercase tracking-[0.28em] mb-4">
            The Philosophy of Living Adornment
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-warm-ivory uppercase tracking-tight leading-[1.05] mb-6">
            BEYOND THE <span className="italic font-normal text-soft-gold">ORDINARY.</span>
          </h1>
          <p className="font-sans text-warm-ivory/80 text-base md:text-lg max-w-2xl font-light leading-relaxed">
            Discover the beauty of fine jewellery, where enduring artistic sensibilities meet intimate personal expression. Presented in the heart of Parvatsar, Rajasthan.
          </p>
        </div>

        {/* Bottom Coordinates & Hallmark Details */}
        <div className="relative z-20 w-full flex items-center justify-between border-t border-champagne-gold/15 pt-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-champagne-gold animate-ping"></div>
            <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase">
              PARVATSAR ATELIER ARCHIVE
            </span>
          </div>
          <a
            href="#atelier-scrutiny"
            className="flex items-center gap-2 text-xs font-sans tracking-widest text-warm-ivory/70 hover:text-champagne-gold uppercase transition-colors"
          >
            <span>SCROLL TO EXPLORE ↓</span>
          </a>
        </div>
      </section>

      {/* ========================================================
          SECTION 02: ATELIER SCRUTINY (3 DEPTH LAYERS)
          ======================================================== */}
      <section id="atelier-scrutiny" className="w-full py-28 px-6 lg:px-14 bg-[#1e080a] border-t border-champagne-gold/15">
        <div className="max-w-[1460px] mx-auto">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-3 text-champagne-gold">
                <span className="font-sans text-xs tracking-[0.25em] uppercase">02 / ATELIER SCRUTINY</span>
                <span className="w-12 h-px bg-champagne-gold/40"></span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-warm-ivory uppercase tracking-tight">
                Beauty Lives in the <span className="italic font-light text-soft-gold">Details.</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 font-light leading-relaxed">
                Every contour is shaped with deliberation. A tactile focus on surface repoussé, stone alignment, and hand-chiseled gold filigree.
              </p>
            </div>
          </div>

          {/* 3 Photographic Depth Layers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Layer 01: Enamel & Surface Macro */}
            <div className="group relative flex flex-col">
              <div className="relative overflow-hidden bg-near-black aspect-square mb-4 border border-champagne-gold/25 shadow-xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8-yYzljPch7VtjhyAEItmpJV5uCsz2XTxuFt0AmjMQOWu8saiJrjpT_VucQ2zXX5HaSTrIhhyZT4UsgJ2i_sfzN8dO_RDI2EvtGOF1vyfR5mmGyyfyBp4lgP1yLraFTxXNyd8vsVpoQqXCv8RAoS9XuTIdE4k932W3rrXhCaeUZ6lEnc2QW5XI9kJNJtbc5-PC75a6tPcpFYgWO7m4FJSUzkrLRzr8u675arzPGiwDTDNWU5ns_GU"
                  alt="Enamel and Repoussé Surface Detail"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-near-black/85 backdrop-blur-md px-2.5 py-1 border border-champagne-gold/20">
                  <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase">01 / DETAIL</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-sans text-xs tracking-wider text-warm-ivory block mb-1 uppercase font-medium">
                    CHAMPLEVÉ SURFACE RELIEF
                  </span>
                  <p className="font-sans text-[11px] text-warm-ivory/70 line-clamp-2 font-light">
                    Vitreous jewel-tone minerals fused inside intricately chased precious gold walls.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-warm-ivory/50 text-[10px] font-sans tracking-widest px-1">
                <span>STUDY: MICRON REPOUSSÉ</span>
                <span>RAJASTHAN ARCHIVE</span>
              </div>
            </div>

            {/* Layer 02: Artisan Instruments Flatlay */}
            <div className="group relative flex flex-col md:mt-12">
              <div className="relative overflow-hidden bg-near-black aspect-square mb-4 border border-champagne-gold/25 shadow-xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZGSBkLb8Gej_cPRqipPPBGk2aLDZq2MzRytEKANkCiPA5hePVyrn0ciBGH63Xnh2Dz7n22qDLJKV4E_FXQDw3dGDrw8IuTL0kXyfzNERc54xCbKrj4-wFDmrOf1FtL-FeGFt5F7mZACkTvXtzoJIIbXt9CTZQE624TKT_MWny-q6DxPbUyAtbgXsmWkGcATyMUGMn3PFUh6Phc11dB9bafXwu9JjjCeuMxFhKkJNDMMfLlX63937_"
                  alt="Atelier Instruments on Ebony Workbench"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-near-black/85 backdrop-blur-md px-2.5 py-1 border border-champagne-gold/20">
                  <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase">02 / FORM</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-sans text-xs tracking-wider text-warm-ivory block mb-1 uppercase font-medium">
                    ATELIER INSTRUMENTS
                  </span>
                  <p className="font-sans text-[11px] text-warm-ivory/70 line-clamp-2 font-light">
                    Calipers, steel burnishers, and jewelers loupes preserving timeless mechanical precision.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-warm-ivory/50 text-[10px] font-sans tracking-widest px-1">
                <span>MANUAL TACTILITY</span>
                <span>BANK WALI GALI</span>
              </div>
            </div>

            {/* Layer 03: Sculptural Choker on Slate */}
            <div className="group relative flex flex-col md:-mt-6">
              <div className="relative overflow-hidden bg-near-black aspect-square mb-4 border border-champagne-gold/25 shadow-xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyItnmhCyybpxtTr-UQEGnFUxygGjMCGcjWz8JmXO19sJN9VIiL6u11LDCT4g7l8eAQ-YA57ic6RBQNkDj26rA3B-cbdZ7PUBh8DQS5SGWhkSKXC9HWjLYG7PESqJ2XkIELSHgA9CP4XS3DUg0QNuHJFI461uDEP20PSkJCgs2tk17WUFiIGmB5eIXU_0tO8eSwQoKdUwZrsj2rk4HjUhDGCAbpPXRjrLaHpLJSvboYIlplVqk4TUw"
                  alt="Sculptural Torque Choker on Slate"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-near-black/85 backdrop-blur-md px-2.5 py-1 border border-champagne-gold/20">
                  <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase">03 / EXPRESSION</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-sans text-xs tracking-wider text-warm-ivory block mb-1 uppercase font-medium">
                    SCULPTURAL TORQUE
                  </span>
                  <p className="font-sans text-[11px] text-warm-ivory/70 line-clamp-2 font-light">
                    Fluid metallic weight formed to rest harmoniously along the contours of the collarbone.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-warm-ivory/50 text-[10px] font-sans tracking-widest px-1">
                <span>FINE SILHOUETTE</span>
                <span>GOLD ATELIER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTIONS 03 - 06: SPATIAL ARCHITECTURE, THREE REALMS,
          PHILOSOPHICAL ANCHOR, AND FLAGSHIP SALON
          ======================================================== */}
      <StoryClient />
    </div>
  );
}
