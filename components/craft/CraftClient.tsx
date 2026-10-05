"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, MessageCircle } from "lucide-react";
import { getWhatsAppProductUrl } from "@/lib/utils/whatsapp";

export function CraftClient() {
  const [macroZoom, setMacroZoom] = useState<"100x" | "20x" | "reveal">("100x");

  const getZoomStyle = () => {
    switch (macroZoom) {
      case "100x":
        return { transform: "scale(1.8)", transformOrigin: "45% 40%" };
      case "20x":
        return { transform: "scale(1.3)", transformOrigin: "50% 50%" };
      case "reveal":
        return { transform: "scale(1)", transformOrigin: "50% 50%" };
    }
  };

  return (
    <div className="w-full bg-near-black text-warm-ivory selection:bg-deep-burgundy selection:text-soft-gold pt-20">
      {/* ========================================================
          SECTION 01: LOOK CLOSER (HERO / 100X MACRO)
          ======================================================== */}
      <section className="relative min-h-[92vh] w-full bg-gradient-to-b from-[#0c0405] via-near-black to-[#180709] px-6 lg:px-14 py-16 flex flex-col justify-between overflow-hidden">
        {/* Ambient Specular Shimmer */}
        <div className="pointer-events-none absolute -top-40 right-1/4 w-[36rem] h-[36rem] rounded-full bg-deep-burgundy/30 blur-[140px] opacity-60"></div>
        <div className="pointer-events-none absolute bottom-0 left-10 w-96 h-96 rounded-full bg-champagne-gold/10 blur-[110px]"></div>

        {/* Vast Background Architectural Lettering */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden">
          <span className="font-serif text-[18vw] leading-none text-champagne-gold/5 tracking-tighter uppercase select-none">
            DETAIL
          </span>
        </div>

        {/* Top Metadata Header Strip */}
        <div className="relative z-10 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-champagne-gold/15">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-champagne-gold shadow-[0_0_8px_#d8b46a]"></span>
            <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase">
              THE CRAFT · EXPERIENTIAL ARCHIVE
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-sans text-xs text-warm-ivory/60 tracking-widest uppercase">
              01 / 04 — MACRO SURFACES
            </span>
            <span className="font-sans text-[10px] text-warm-ivory/40 tracking-widest hidden md:inline">
              26.8958° N, 74.7679° E
            </span>
          </div>
        </div>

        {/* Center Hero Asymmetric Composition */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto py-8">
          {/* Left Narrative */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[10px] tracking-monumental text-soft-gold uppercase">
                EXAMINATION RETICLE: {macroZoom.toUpperCase()}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-warm-ivory leading-tight font-normal">
                Beauty Lives in the <span className="italic text-soft-gold">Detail.</span>
              </h1>
            </div>
            <p className="font-sans text-warm-ivory/80 text-base font-light leading-relaxed max-w-lg">
              Look closer. The tactile presence of gold and silver surfaces. Molten wire drawn, tempered, and stippled under steady daylight in Parvatsar.
            </p>

            {/* Interactive Lens Ratio Selector */}
            <div className="pt-2 flex flex-col gap-2">
              <span className="font-sans text-[10px] text-warm-ivory/50 tracking-widest uppercase">
                PERSPECTIVE RETICLE
              </span>
              <div className="inline-flex flex-wrap p-1 bg-dark-wine/70 border border-champagne-gold/30 rounded-none gap-1 max-w-max">
                <button
                  type="button"
                  onClick={() => setMacroZoom("100x")}
                  className={`px-4 py-2 font-sans text-xs tracking-wider uppercase transition-all duration-300 ${
                    macroZoom === "100x"
                      ? "bg-champagne-gold text-near-black font-semibold shadow-md"
                      : "text-warm-ivory/70 hover:text-champagne-gold"
                  }`}
                >
                  100× GRANULATION
                </button>
                <button
                  type="button"
                  onClick={() => setMacroZoom("20x")}
                  className={`px-4 py-2 font-sans text-xs tracking-wider uppercase transition-all duration-300 ${
                    macroZoom === "20x"
                      ? "bg-champagne-gold text-near-black font-semibold shadow-md"
                      : "text-warm-ivory/70 hover:text-champagne-gold"
                  }`}
                >
                  20× TEXTURE
                </button>
                <button
                  type="button"
                  onClick={() => setMacroZoom("reveal")}
                  className={`px-4 py-2 font-sans text-xs tracking-wider uppercase transition-all duration-300 ${
                    macroZoom === "reveal"
                      ? "bg-champagne-gold text-near-black font-semibold shadow-md"
                      : "text-warm-ivory/70 hover:text-champagne-gold"
                  }`}
                >
                  FULL ARCHIVE
                </button>
              </div>
            </div>
          </div>

          {/* Right Visual Aperture Frame */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-[4/3] bg-near-black border border-champagne-gold/30 overflow-hidden shadow-[0_24px_64px_-12px_rgba(0,0,0,0.95)]">
              {/* The Macro Gold Texture Image */}
              <div className="w-full h-full relative transition-all duration-700 ease-out" style={getZoomStyle()}>
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XP4V2p_xKvgj72X3tXGOn1pqqIGO4iTuk4XQaXxtI17_3OJ3qAZrJNcLnWmrE1XqFqzEUfbiS-_UpdSSL_H0ocKzRVcoZgA255YDTEwEUCiZmMf5w9pfhZV2AhBogMDMlhkI0PkuPbRiM0AYnyPjWIjQr34WWNGVHPJhVVt8ejlp-4LxFjgNaKj1QdO6BS99L8yzv9LM08bIqjUIMZsfo6SzJzQIApR6-B5jhIdnFLO7Y9HyAo2vVpvWc"
                  alt="Macro Jewellery Surface"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Fine Reticle HUD Overlay */}
              <div className="absolute inset-0 pointer-events-none p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between text-champagne-gold font-sans text-[10px] tracking-[0.2em] uppercase">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-champagne-gold rounded-full animate-ping"></span>
                    OPTICAL STUDY
                  </span>
                  <span>RETICLE {macroZoom.toUpperCase()}</span>
                </div>
                <div className="flex justify-between items-end text-warm-ivory/60 font-sans text-[9px] tracking-[0.2em] uppercase">
                  <span>PARVATSAR ATELIER ARCHIVE</span>
                  <span>INDEX: BJ-SD-MC-01</span>
                </div>
              </div>
            </div>

            {/* Specimen Annotation Floating Card */}
            <div className="absolute -bottom-5 right-6 bg-[#170b0c] border border-champagne-gold/30 p-4 max-w-xs shadow-xl hidden sm:flex flex-col gap-1">
              <span className="font-sans text-[9px] text-champagne-gold tracking-widest uppercase">
                SPECIMEN STUDY
              </span>
              <span className="font-serif text-sm text-warm-ivory">
                Hand-Chiseled Granulation
              </span>
              <p className="font-sans text-[11px] text-warm-ivory/70 leading-relaxed font-light">
                Microscopic gold spheres fused to create textured relief along curved borders.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Cue */}
        <div className="relative z-10 w-full pt-6 flex items-center justify-between border-t border-champagne-gold/15">
          <span className="font-sans text-[10px] text-champagne-gold tracking-widest uppercase">
            STUDY PROTOCOL
          </span>
          <span className="font-sans text-[10px] text-warm-ivory/60 tracking-widest uppercase">
            SCROLL TO EXPLORE ARCHITECTURE ↓
          </span>
        </div>
      </section>

      {/* ========================================================
          SECTION 02: FORM BECOMES CHARACTER (WARM IVORY CONTRAST SHIFT)
          ======================================================== */}
      <section className="relative w-full bg-[#FAF7EF] text-[#260003] px-6 lg:px-14 py-28 overflow-hidden">
        <div className="max-w-[1460px] mx-auto flex flex-col gap-16">
          <div className="flex items-center justify-between pb-4 border-b border-[#260003]/15">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#260003]"></span>
              <span className="font-sans text-xs tracking-monumental text-[#450006] uppercase font-semibold">
                02 / FORM BECOMES CHARACTER
              </span>
            </div>
            <span className="font-sans text-xs text-[#260003]/60 tracking-widest uppercase">
              ARCHITECTURAL STUDY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative aspect-[16/11] bg-[#efe9dc] p-3 shadow-2xl border border-[#260003]/15">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1W2UoV3C9QJ2oLKXYMsENeTBrLv8SzG6wrIbHIzRK9Z8rHz_91FuWYAKiMXJCCpyPSTZV59iuEkfDSEs-Lj2kBDEmSHwc_OJztgb9cJtfrhdLT6rCuxnyO4Yk16IhzMSDmD7slLYyfFp4aTl1gD96DD5k1wna8T_Y3DnFUMVvbbBZyeeKoxAEb6ZGFSBnxFzUIv3gvbzlmJkLYxdU9TljbRQ2mTizILl9WQPdowb-Xy-6dHBZc9YBq-C0s"
                  alt="Kundan Stone Setting Architecture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="font-sans text-xs tracking-monumental text-[#450006] uppercase font-semibold">
                SETTING ANATOMY
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#260003] leading-tight">
                The Architecture of the Mount
              </h2>
              <p className="font-sans text-[#260003]/80 text-base leading-relaxed font-light">
                In traditional stone setting, pure metal foil is burnished incrementally around uncut crystal facets. The metal does not crush the stone; it cradles it, ensuring mechanical permanence while catching directional light.
              </p>
              <div className="pt-2 flex flex-col gap-3 border-t border-[#260003]/15">
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="font-semibold uppercase tracking-wider">Mount Geometry</span>
                  <span>Raised Bezel Wall</span>
                </div>
                <div className="flex items-center justify-between text-xs font-sans">
                  <span className="font-semibold uppercase tracking-wider">Surface Contrast</span>
                  <span>Burnished Mirror vs Matte Chasing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 03: PRECISION METALLURGY (GOLD & SILVER)
          ======================================================== */}
      <section className="w-full py-28 px-6 lg:px-14 bg-near-black border-t border-champagne-gold/15">
        <div className="max-w-[1460px] mx-auto flex flex-col gap-16">
          <div>
            <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase block mb-3">
              03 / METALLURGICAL STUDIES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-warm-ivory">
              Two Metals. Distinct Voices.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Gold Technique */}
            <div className="bg-[#260003] border border-champagne-gold/25 p-8 flex flex-col gap-6">
              <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase font-semibold">
                GOLD DISCIPLINE
              </span>
              <h3 className="font-serif text-3xl text-warm-ivory">Champlevé &amp; Repoussé Relief</h3>
              <p className="font-sans text-warm-ivory/80 text-sm leading-relaxed font-light">
                Gold is drawn, chased from reverse, and burnished along delicate surface planes. The metal yields to the artisan’s chisel to create flowing organic forms that withstand generations.
              </p>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-near-black border border-champagne-gold/20">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XnAQQ8Q35INPjszjNleOC4YPYbMovC1GY8F9F6jJ22c2Q_5YM1AZhgw5zNaysvAQ_xBHjZhsDjLkf4Dbz3ue4mneio7R6jLz0l8ITzgueyXYrQI5i5cAW5tC8HuYsywnQQ3fvI8t7iS_W-bnKa1AqFjkTcV7S8z6vdn6cNBnCzouw7ZfMueub_w5wll_sv0g3bYFNri9pjPcaU5xtBN--PDHclWttBu2PbG1iLFKhLbEmAFVWds2WBNKI"
                  alt="Gold Repoussé Macro"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Silver Technique */}
            <div className="bg-[#180709] border border-slate-400/25 p-8 flex flex-col gap-6">
              <span className="font-sans text-xs tracking-monumental text-slate-300 uppercase font-semibold">
                SILVER DISCIPLINE
              </span>
              <h3 className="font-serif text-3xl text-warm-ivory">Forged Torque &amp; Hand-Hammering</h3>
              <p className="font-sans text-warm-ivory/80 text-sm leading-relaxed font-light">
                Sterling silver is forged with crisp geometric firmness. Hand-hammered planes create subtle facets that catch light unevenly, imparting depth and architectural presence.
              </p>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-near-black border border-slate-400/20">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Vxt6aboQZhCDvL1ubDhyfAdn2KHro_PLLDma-2zdwWQlufi3UW50cyg_sJxvSEcl-7HTg9wCJsJ133C9pJElMSo83NaBOSE49vFHebGvyuoA9h0bRR9VxnY7PtxdHwoQbAqhMZZRy0eiAnD31zh3ZgdPwurpGJEX8KS3Sj_5Qg340hWQhfFsFVDQRyIvfBUdo_MCMGMwRrR4vsNaEcwbjbchsj3Zd8aOkyObW4MBfIAK3RCddFA_kqQtA"
                  alt="Silver Hand Hammered Macro"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 04: ATELIER ACTION CALLOUT
          ======================================================== */}
      <section className="w-full py-20 px-6 lg:px-14 bg-gradient-to-b from-near-black to-[#170b0c] border-t border-champagne-gold/15 text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
          <Eye className="w-6 h-6 text-champagne-gold" />
          <h3 className="font-serif text-3xl text-warm-ivory">
            Experience the Craft Firsthand
          </h3>
          <p className="font-sans text-warm-ivory/70 text-sm font-light leading-relaxed">
            Every piece reveals greater depth when viewed in person. We invite you to examine our works at our Parvatsar salon.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <Link
              href="/collections"
              className="px-6 py-3 bg-champagne-gold text-near-black font-sans text-xs tracking-widest uppercase font-semibold hover:bg-soft-gold transition-colors"
            >
              Explore Collections
            </Link>
            <a
              href={getWhatsAppProductUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-champagne-gold text-champagne-gold font-sans text-xs tracking-widest uppercase font-semibold hover:bg-champagne-gold/10 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
