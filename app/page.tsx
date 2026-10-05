"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FloatingJewelleryScene } from "@/components/3d/FloatingJewelleryScene";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PRODUCTS, Product } from "@/lib/data/products";
import { SITE_CONFIG } from "@/lib/constants/siteConfig";
import { getWhatsAppProductUrl } from "@/lib/utils/whatsapp";
import {
  MessageCircle,
  Phone,
  Sparkles,
  ArrowRight,
  MapPin,
  Clock,
} from "lucide-react";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [materialDiscipline, setMaterialDiscipline] = useState<"gold" | "silver">("gold");

  // Curated 4 teaser products for homepage
  const teaserProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="w-full bg-near-black text-warm-ivory selection:bg-deep-burgundy selection:text-soft-gold">
      {/* ========================================================
          SECTION 01: CINEMATIC ENTRY (HERO)
          ======================================================== */}
      <section
        className="relative min-h-[96vh] w-full flex items-center justify-center pt-24 pb-16 px-6 lg:px-14 overflow-hidden bg-gradient-to-b from-near-black via-dark-wine/90 to-[#170b0c]"
        id="hero"
      >
        {/* Ambient Radial Lights */}
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[550px] bg-champagne-gold/10 blur-[170px] rounded-full"></div>
        <div className="pointer-events-none absolute -bottom-24 right-10 w-[500px] h-[500px] bg-deep-burgundy/40 blur-[180px] rounded-full"></div>
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(#D8B46A_1px,transparent_1px)] [background-size:28px_28px]"></div>

        <div className="max-w-[1460px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1 pt-6 lg:pt-0">
            <ScrollReveal direction="down" delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-champagne-gold animate-pulse"></span>
                <span className="font-sans text-[10px] sm:text-xs tracking-monumental text-champagne-gold uppercase">
                  BALAJI JEWELLERS &amp; SHYAM DIAMONDS · PARVATSAR
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-warm-ivory leading-[0.98] font-normal tracking-tight mb-8">
                JEWELLERY
                <br />
                THAT HOLDS
                <br />
                <span className="italic font-normal text-soft-gold">A MOMENT.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="font-sans text-warm-ivory/80 text-base md:text-lg max-w-xl font-light mb-10 tracking-wide leading-relaxed">
                Gold Jewellery &amp; Silver Jewellery. An unhurried digital flagship experience in Parvatsar, Rajasthan.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                <Link
                  href="/collections"
                  className="px-8 py-4 bg-champagne-gold text-near-black font-sans text-xs tracking-monumental font-semibold uppercase hover:bg-soft-gold transition-all duration-300 text-center shadow-[0_6px_28px_-6px_rgba(216,180,106,0.4)]"
                >
                  EXPLORE THE COLLECTION
                </Link>

                <Link
                  href="/visit"
                  className="px-8 py-4 border border-champagne-gold/60 text-soft-gold font-sans text-xs tracking-monumental uppercase hover:bg-champagne-gold/10 hover:border-champagne-gold transition-all duration-300 text-center"
                >
                  VISIT OUR SHOWROOM
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <div className="pt-6 border-t border-champagne-gold/15 flex flex-wrap items-center gap-6 text-xs text-warm-ivory/70 tracking-wider font-sans">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
                  Gold &amp; Silver Disciplines
                </span>
                <span className="h-3 w-[1px] bg-champagne-gold/30"></span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-champagne-gold" />
                  Bank Wali Gali, Parvatsar
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Hero Image Column — Stitch Exhibition Vitrine */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2">
            <ScrollReveal direction="none" delay={0.3} className="w-full max-w-[640px]">
              <div className="relative group">
                {/* Ambient Glow */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-champagne-gold/30 via-deep-burgundy/50 to-soft-gold/20 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-1000"></div>

                <div className="relative bg-gradient-to-b from-[#2b080d] to-[#120708] border border-champagne-gold/30 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.95)]">
                  {/* Vitrine Top Metadata Header */}
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-champagne-gold/20 bg-dark-wine/80 backdrop-blur-md text-[10px] tracking-monumental uppercase">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-pulse"></span>
                      <span className="text-soft-gold font-medium">SALON ARCHIVE № 001</span>
                      <span className="text-champagne-gold/40">·</span>
                      <span className="text-warm-ivory/70 hidden sm:inline">ROYAL POLKI &amp; EMERALD COLLAR</span>
                    </div>
                    <span className="text-champagne-gold/80 font-sans text-[9px] tracking-widest">
                      26.8833° N, 74.7667° E
                    </span>
                  </div>

                  {/* Main Visual Stage */}
                  <div className="overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-black relative">
                    <Image
                      src="/images/hero/hero-necklace-burgundy.jpg"
                      alt="Handcrafted Indian royal gold polki and emerald drops necklace on deep burgundy velvet"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                      className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
                    />

                    {/* Specular & Vignette Gradients */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#120708]/80 via-transparent to-transparent"></div>
                    <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40"></div>

                    {/* Interactive Hotspot 1: Uncut Polki */}
                    <div className="absolute top-[48%] left-[36%] z-20 group/spot">
                      <div className="relative flex items-center justify-center cursor-pointer">
                        <span className="absolute w-6 h-6 rounded-full bg-champagne-gold/40 animate-ping"></span>
                        <span className="relative w-3.5 h-3.5 rounded-full bg-champagne-gold text-near-black text-[8px] font-bold flex items-center justify-center shadow-lg border border-soft-gold">
                          +
                        </span>
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/spot:flex flex-col bg-dark-wine/95 backdrop-blur-md border border-champagne-gold/40 px-3 py-1.5 shadow-2xl pointer-events-none min-w-[170px] z-30">
                        <span className="font-sans text-[8px] tracking-monumental text-champagne-gold uppercase">
                          UNCUT POLKI BRILLIANCE
                        </span>
                        <span className="font-sans text-[10px] text-warm-ivory/80 leading-tight">
                          Intricate gold bezel setting
                        </span>
                      </div>
                    </div>

                    {/* Interactive Hotspot 2: Emerald Drops */}
                    <div className="absolute bottom-[22%] right-[32%] z-20 group/spot">
                      <div className="relative flex items-center justify-center cursor-pointer">
                        <span className="absolute w-6 h-6 rounded-full bg-champagne-gold/40 animate-ping" style={{ animationDelay: "0.8s" }}></span>
                        <span className="relative w-3.5 h-3.5 rounded-full bg-champagne-gold text-near-black text-[8px] font-bold flex items-center justify-center shadow-lg border border-soft-gold">
                          +
                        </span>
                      </div>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/spot:flex flex-col bg-dark-wine/95 backdrop-blur-md border border-champagne-gold/40 px-3 py-1.5 shadow-2xl pointer-events-none min-w-[170px] z-30">
                        <span className="font-sans text-[8px] tracking-monumental text-champagne-gold uppercase">
                          FACETED EMERALD DROPS
                        </span>
                        <span className="font-sans text-[10px] text-warm-ivory/80 leading-tight">
                          Deep emerald drops suspended in gold
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Caption Bar */}
                  <div className="p-4 flex items-center justify-between border-t border-champagne-gold/20 bg-dark-wine/90 backdrop-blur-md">
                    <div>
                      <p className="font-serif text-base text-soft-gold tracking-wide">
                        Royal Polki &amp; Emerald Collar Suite
                      </p>
                      <p className="font-sans text-[9px] tracking-cinematic text-warm-ivory/60 uppercase">
                        Gold Craftsmanship · Hand-Set Gemstone Drops · Parvatsar
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 border border-champagne-gold/30 text-champagne-gold text-[9px] font-sans tracking-widest uppercase">
                      <Sparkles className="w-3 h-3 text-champagne-gold" />
                      <span>ARCHIVAL</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#reveal"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-champagne-gold/70 hover:text-champagne-gold transition-colors z-20"
        >
          <span className="font-sans text-[9px] tracking-monumental uppercase">SCROLL TO DISCOVER ↓</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-champagne-gold to-transparent animate-pulse"></div>
        </a>
      </section>

      {/* ========================================================
          SECTION 02: THE REVEAL
          ======================================================== */}
      <section id="reveal" className="w-full py-28 px-6 lg:px-14 bg-[#170b0c] border-t border-champagne-gold/15 relative overflow-hidden">
        <div className="max-w-[1460px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 relative select-none">
            <span className="font-serif text-[120px] md:text-[160px] leading-none text-champagne-gold/10 font-bold block">
              01
            </span>
            <div className="absolute top-10 left-4">
              <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase block mb-2">
                A STUDY IN LIGHT AND FORM
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-warm-ivory leading-tight">
                Not Just Ornaments.
                <br />
                <span className="italic text-soft-gold">Heirlooms of Pause.</span>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8 lg:pl-12 border-l border-champagne-gold/15">
            <ScrollReveal direction="up">
              <p className="font-sans text-warm-ivory/80 text-base md:text-xl font-light leading-relaxed max-w-3xl mb-8">
                Every piece is conceived as a sculpture to be worn. Where gold warms against the skin and silver reflects architectural coolness, jewellery becomes an intimate signature of the individual.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-champagne-gold/10">
                <div className="flex flex-col gap-1">
                  <span className="font-serif text-lg text-champagne-gold">Pure Materiality</span>
                  <span className="text-xs font-sans text-warm-ivory/60 leading-relaxed font-light">
                    Focused exclusively on fine Gold and Silver craftsmanship without compromise.
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-serif text-lg text-champagne-gold">Parvatsar Atelier</span>
                  <span className="text-xs font-sans text-warm-ivory/60 leading-relaxed font-light">
                    Rooted in Bank Wali Gali, welcoming connoisseurs for private examinations.
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 03: GOLD / SILVER MATERIAL EXPERIENCE
          ======================================================== */}
      <section className="w-full py-28 px-6 lg:px-14 bg-gradient-to-b from-[#170b0c] via-dark-wine/70 to-near-black border-t border-champagne-gold/15">
        <div className="max-w-[1460px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-champagne-gold/15">
            <div>
              <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase block mb-3">
                DUAL METALLIC DISCIPLINES
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-warm-ivory">
                The Material <span className="italic text-soft-gold">Experience</span>
              </h2>
            </div>

            {/* Toggle Switch */}
            <div className="inline-flex p-1 bg-near-black border border-champagne-gold/30">
              <button
                type="button"
                onClick={() => setMaterialDiscipline("gold")}
                className={`px-6 py-2.5 font-sans text-xs tracking-widest uppercase transition-all duration-300 ${
                  materialDiscipline === "gold"
                    ? "bg-champagne-gold text-near-black font-semibold shadow-md"
                    : "text-warm-ivory/70 hover:text-champagne-gold"
                }`}
              >
                01 Gold Discipline
              </button>
              <button
                type="button"
                onClick={() => setMaterialDiscipline("silver")}
                className={`px-6 py-2.5 font-sans text-xs tracking-widest uppercase transition-all duration-300 ${
                  materialDiscipline === "silver"
                    ? "bg-slate-300 text-near-black font-semibold shadow-md"
                    : "text-warm-ivory/70 hover:text-slate-300"
                }`}
              >
                02 Silver Discipline
              </button>
            </div>
          </div>

          {/* Interactive Material Showcase Display */}
          {materialDiscipline === "gold" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-500">
              <div className="lg:col-span-7 relative aspect-[16/10] bg-near-black border border-champagne-gold/30 overflow-hidden shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XP4V2p_xKvgj72X3tXGOn1pqqIGO4iTuk4XQaXxtI17_3OJ3qAZrJNcLnWmrE1XqFqzEUfbiS-_UpdSSL_H0ocKzRVcoZgA255YDTEwEUCiZmMf5w9pfhZV2AhBogMDMlhkI0PkuPbRiM0AYnyPjWIjQr34WWNGVHPJhVVt8ejlp-4LxFjgNaKj1QdO6BS99L8yzv9LM08bIqjUIMZsfo6SzJzQIApR6-B5jhIdnFLO7Y9HyAo2vVpvWc"
                  alt="Gold Metallic Granulation Macro"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase bg-near-black/80 px-3 py-1 border border-champagne-gold/30">
                    22K GOLD REPOUSSÉ STUDY
                  </span>
                  <span className="font-sans text-xs text-warm-ivory/60">Warm Champagne Specular Luster</span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase">
                  CHARACTERISTICS · GOLD
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-warm-ivory leading-tight">
                  Generous Warmth &amp; Hand-Chiseled Stippling
                </h3>
                <p className="font-sans text-warm-ivory/80 text-sm sm:text-base leading-relaxed font-light">
                  Gold captures ambient salon light with warm metallic depth. Shaped through repoussé chasing and delicate bead granulation, each gold piece radiates timeless regal gravity.
                </p>
                <div className="pt-4 flex items-center gap-4">
                  <Link
                    href="/collections#gold"
                    className="inline-flex items-center gap-2 text-xs font-sans tracking-widest text-champagne-gold hover:text-soft-gold uppercase font-medium"
                  >
                    <span>View All Gold Works</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-in fade-in duration-500">
              <div className="lg:col-span-7 relative aspect-[16/10] bg-near-black border border-slate-400/30 overflow-hidden shadow-2xl">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Vxt6aboQZhCDvL1ubDhyfAdn2KHro_PLLDma-2zdwWQlufi3UW50cyg_sJxvSEcl-7HTg9wCJsJ133C9pJElMSo83NaBOSE49vFHebGvyuoA9h0bRR9VxnY7PtxdHwoQbAqhMZZRy0eiAnD31zh3ZgdPwurpGJEX8KS3Sj_5Qg340hWQhfFsFVDQRyIvfBUdo_MCMGMwRrR4vsNaEcwbjbchsj3Zd8aOkyObW4MBfIAK3RCddFA_kqQtA"
                  alt="Silver Hand-Hammered Surface Macro"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <span className="font-sans text-[10px] tracking-monumental text-slate-300 uppercase bg-near-black/80 px-3 py-1 border border-slate-400/30">
                    925 STERLING SILVER STUDY
                  </span>
                  <span className="font-sans text-xs text-warm-ivory/60">Tactile Satin Burnish</span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-6">
                <span className="font-sans text-xs tracking-monumental text-slate-300 uppercase">
                  CHARACTERISTICS · SILVER
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-warm-ivory leading-tight">
                  Architectural Coolness &amp; Sculptural Purity
                </h3>
                <p className="font-sans text-warm-ivory/80 text-sm sm:text-base leading-relaxed font-light">
                  Sterling silver possesses a crisp, architectural presence. From solid hasli collars to hand-hammered chevron cuffs, silver commands attention through clean silhouette and tactile texture.
                </p>
                <div className="pt-4 flex items-center gap-4">
                  <Link
                    href="/collections#silver"
                    className="inline-flex items-center gap-2 text-xs font-sans tracking-widest text-slate-300 hover:text-warm-ivory uppercase font-medium"
                  >
                    <span>View All Silver Works</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          SECTION 04: FLOATING JEWELLERY OBJECT (3D CANVAS)
          ======================================================== */}
      <section className="w-full py-28 px-6 lg:px-14 bg-[#120708] border-t border-champagne-gold/15 relative overflow-hidden">
        <div className="max-w-[1460px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase">
              INTERACTIVE 3D PERSPECTIVE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-warm-ivory leading-tight">
              Form Suspended <br />
              <span className="italic text-soft-gold">In Light.</span>
            </h2>
            <p className="font-sans text-warm-ivory/80 text-base leading-relaxed font-light">
              Explore the geometric facets and metallic specular reflections of our jewellery architecture. Move your cursor to rotate and study how light dances across gold surfaces.
            </p>
            <div className="flex items-center gap-3 text-xs font-sans text-champagne-gold/80 pt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-ping"></span>
              <span>Interactive Viewport · Click &amp; Move to Rotate</span>
            </div>
          </div>

          <div className="lg:col-span-7 relative h-[480px] sm:h-[540px] bg-gradient-to-b from-[#260003]/80 via-[#180709] to-[#120708] border border-champagne-gold/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden">
            <FloatingJewelleryScene className="w-full h-full" />
            <div className="absolute top-4 right-4 pointer-events-none text-right">
              <span className="font-sans text-[9px] tracking-widest text-champagne-gold/60 uppercase block">
                ATELIER STUDY · 3D
              </span>
              <span className="font-serif text-xs text-warm-ivory/50">Metallic Shader 91.6% Au</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 05: MACRO WORLD
          ======================================================== */}
      <section className="w-full py-28 px-6 lg:px-14 bg-gradient-to-b from-[#120708] via-dark-wine/60 to-[#170b0c] border-t border-champagne-gold/15">
        <div className="max-w-[1460px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-champagne-gold/15">
            <div>
              <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase block mb-3">
                100× OPTICAL INSPECTION
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-warm-ivory">
                Beauty Lives in the <span className="italic text-soft-gold">Detail</span>
              </h2>
            </div>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-xs font-sans tracking-widest text-champagne-gold hover:text-soft-gold uppercase font-medium"
            >
              <span>Explore The Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Macro Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#260003] border border-champagne-gold/25 p-6 flex flex-col gap-4">
              <div className="relative aspect-square w-full overflow-hidden bg-near-black">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XP4V2p_xKvgj72X3tXGOn1pqqIGO4iTuk4XQaXxtI17_3OJ3qAZrJNcLnWmrE1XqFqzEUfbiS-_UpdSSL_H0ocKzRVcoZgA255YDTEwEUCiZmMf5w9pfhZV2AhBogMDMlhkI0PkuPbRiM0AYnyPjWIjQr34WWNGVHPJhVVt8ejlp-4LxFjgNaKj1QdO6BS99L8yzv9LM08bIqjUIMZsfo6SzJzQIApR6-B5jhIdnFLO7Y9HyAo2vVpvWc"
                  alt="Micro Granulation"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase">01 / SURFACE</span>
              <h3 className="font-serif text-xl text-warm-ivory">Micro Granulation Spheres</h3>
              <p className="text-xs font-sans text-warm-ivory/70 font-light leading-relaxed">
                Hand-fused gold beads calibrated down to sub-millimeter scales, reflecting pinpricks of warm salon light.
              </p>
            </div>

            <div className="bg-[#260003] border border-champagne-gold/25 p-6 flex flex-col gap-4">
              <div className="relative aspect-square w-full overflow-hidden bg-near-black">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1W2UoV3C9QJ2oLKXYMsENeTBrLv8SzG6wrIbHIzRK9Z8rHz_91FuWYAKiMXJCCpyPSTZV59iuEkfDSEs-Lj2kBDEmSHwc_OJztgb9cJtfrhdLT6rCuxnyO4Yk16IhzMSDmD7slLYyfFp4aTl1gD96DD5k1wna8T_Y3DnFUMVvbbBZyeeKoxAEb6ZGFSBnxFzUIv3gvbzlmJkLYxdU9TljbRQ2mTizILl9WQPdowb-Xy-6dHBZc9YBq-C0s"
                  alt="Kundan Bezel Setting"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase">02 / EMBELLISHMENT</span>
              <h3 className="font-serif text-xl text-warm-ivory">Burnished Bezel Mounts</h3>
              <p className="text-xs font-sans text-warm-ivory/70 font-light leading-relaxed">
                Hand-burnished pure gold foil bezels holding natural uncut stone crystal facets securely in traditional collars.
              </p>
            </div>

            <div className="bg-[#260003] border border-champagne-gold/25 p-6 flex flex-col gap-4">
              <div className="relative aspect-square w-full overflow-hidden bg-near-black">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Wk04KjoU3QEkTkjuqhrvnxPv5PzLttgJjlGOKhGUq4GhDGOnjBh2KdnnxewizCaQBn-Eh_pbI36VFBZN1c5ToDOo6-zdSVqaUaS0eopc5QnGJQw0ctbANICRIru9wchs5Vba7uJfXUDit2zgu1LQ4a4zxSqqKCbBqeI1cSdqruuo9gTaNgsrwqZNGXmSVD3uj_ZDt9VwLV_ie5sL4nWMKB5P70baPy4B_3dpSsJ1YYdUstAxKyCPun9Z0"
                  alt="Filigree Lattice"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase">03 / ARCHITECTURE</span>
              <h3 className="font-serif text-xl text-warm-ivory">Symmetrical Openwork Wire</h3>
              <p className="text-xs font-sans text-warm-ivory/70 font-light leading-relaxed">
                Intricate pierced lattices drawn from precious wirework, balancing structural strength with featherlight drape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 06: EDITORIAL JEWELLERY MOMENT
          ======================================================== */}
      <section className="w-full py-28 px-6 lg:px-14 bg-[#170b0c] border-t border-champagne-gold/15">
        <div className="max-w-[1460px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[3/4] bg-near-black border border-champagne-gold/30 overflow-hidden shadow-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida/AEtjO1Vn4rhAyeJgWPEcBCAkDo6-z8skDqo70UTilcfBHw0MnfTEFWIOfnBUtPFHLBDWFrlvpOA11zkg8ZjZHP2uSnsp95l0t8_f1YF9JqZxm4H7g9mQRCQ7TVWCwa4L0CH9zu90byLwp8AcHXzG_X1Du2xLYMW6BnerTxeQBB8z56e7xoMr1un5iEyl4wpetVjULU55U5Yx6LX5uj-5NwKsFgZenS34c20bZ47yj02a_PmYsW0_6eYGm6LjuQ"
              alt="Editorial Portrait Layered Gold"
              fill
              className="object-cover filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-transparent"></div>
          </div>

          <div className="lg:col-span-6 lg:pl-10 flex flex-col gap-8">
            <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase">
              EDITORIAL PORTFOLIO
            </span>
            <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl text-warm-ivory leading-tight font-normal">
              &ldquo;Jewellery is not mere ornament; it is an intimate expression of grace, pause, and personal poise.&rdquo;
            </blockquote>
            <p className="font-sans text-warm-ivory/80 text-base font-light leading-relaxed max-w-lg">
              Designed to move with the cadence of human emotion. Layered chokers, articulating drops, and sculpted cuffs become part of living moments.
            </p>
            <div className="pt-2">
              <Link
                href="/moments"
                className="inline-flex items-center gap-2 text-xs font-sans tracking-widest text-champagne-gold hover:text-soft-gold uppercase font-medium"
              >
                <span>Discover Moments Editorial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 07: COLLECTION PREVIEW
          ======================================================== */}
      <section className="w-full py-28 px-6 lg:px-14 bg-near-black border-t border-champagne-gold/15">
        <div className="max-w-[1460px] mx-auto flex flex-col gap-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-champagne-gold/15">
            <div>
              <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase block mb-3">
                CURATED EXHIBITION TEASER
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl text-warm-ivory">
                The Curated <span className="italic text-soft-gold">Pieces</span>
              </h2>
            </div>
            <Link
              href="/collections"
              className="px-6 py-3 border border-champagne-gold text-champagne-gold font-sans text-xs tracking-widest uppercase font-semibold hover:bg-champagne-gold hover:text-near-black transition-all"
            >
              Enter Full Exhibition (Gold &amp; Silver) →
            </Link>
          </div>

          {/* Teaser Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teaserProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 08: HUMAN MOMENT
          ======================================================== */}
      <section className="w-full py-28 px-6 lg:px-14 bg-[#170b0c] border-t border-champagne-gold/15">
        <div className="max-w-[1460px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
            <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase">
              MOMENTS THAT ENDURE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-warm-ivory leading-tight">
              Jewellery Becomes <br />
              <span className="italic text-soft-gold">Part of the Moment.</span>
            </h2>
            <p className="font-sans text-warm-ivory/80 text-base leading-relaxed font-light">
              From celebratory courtyard gatherings under evening lanterns to intimate quiet celebrations, our pieces are crafted to accompany significant milestones with quiet elegance.
            </p>
            <div className="pt-2">
              <Link
                href="/moments"
                className="inline-flex items-center gap-2 text-xs font-sans tracking-widest text-champagne-gold hover:text-soft-gold uppercase font-medium"
              >
                <span>View Lifestyle Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 relative aspect-[16/10] bg-near-black border border-champagne-gold/30 overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image
              src="https://lh3.googleusercontent.com/aida/AEtjO1WheJkVyuZZIGkxhZ4LmEgraNW4KKSVueXZn_rlpqRqVoNJbQmRJrLTLtDkpETVI7f9VQY5xwHK6cr3jSV7Tg6w5i5jacNk4-rQWhtwE8YerYbPVtTrLEUUi1wWLtYr0YSyB2dNuatdN_5a9Dyh0k0adU9AUjZJzlYKf6xXRAZxRClQTN-5RMUGUPbGH_1XYuSs5CmJRxQAXe8nGRCZ_51YHVGCf42TXQHrmyLNgx9I7uDzlU1_oG6zpMs"
              alt="Celebratory Moment Lifestyle"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 09: BRAND STORY TEASER
          ======================================================== */}
      <section className="w-full py-28 px-6 lg:px-14 bg-gradient-to-b from-[#170b0c] via-dark-wine/70 to-near-black border-t border-champagne-gold/15">
        <div className="max-w-[1460px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-square bg-near-black border border-champagne-gold/30 overflow-hidden shadow-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida/AEtjO1WYFIx-MRIhEnBhWT3oh2hg4VxYTPS_m8g-1XaeUJbfx_vYcBEPrTI6bJvCpv5xeZqYusPalI-PA0z_x-ffV-4H7o9YuRBOoTr8ETTzwjySGcBUIK32WeAnv3FqgCWih12SE6KEIjCUd_jhzwfz86lRaV1_CDD_yI6XkSmQyRsi_p2TTBVBhyUM61SDQwrP2jYmRaYmKDVXT17S6xZVe-phLnHFsNQc7Ow5JmByanlNvFqMXjGXHzA-TRo"
              alt="Artisan Workbench Instruments"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase bg-near-black/85 px-3 py-1 border border-champagne-gold/20">
                BENCH STUDY · PARVATSAR
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-10 flex flex-col gap-6">
            <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase">
              THE STORY BEHIND THE PIECES
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-warm-ivory leading-tight">
              Devotion to <br />
              <span className="italic text-soft-gold">Form &amp; Material.</span>
            </h2>
            <p className="font-sans text-warm-ivory/80 text-base leading-relaxed font-light">
              In a world hurried by convenience, we honour the unhurried craft of fine jewellery. Calipers, fine burnishers, and careful setting create pieces of character.
            </p>
            <div className="pt-2">
              <Link
                href="/story"
                className="inline-flex items-center gap-2 text-xs font-sans tracking-widest text-champagne-gold hover:text-soft-gold uppercase font-medium"
              >
                <span>Read The Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 10: SHOWROOM INVITATION
          ======================================================== */}
      <section className="w-full py-28 px-6 lg:px-14 bg-near-black border-t border-champagne-gold/15">
        <div className="max-w-[1460px] mx-auto bg-gradient-to-r from-deep-burgundy/40 via-dark-wine/60 to-near-black border border-champagne-gold/30 p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-champagne-gold"></span>
                <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase">
                  PHYSICAL FLAGSHIP SHOWROOM
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-warm-ivory leading-tight">
                Visit Us in Parvatsar, Rajasthan
              </h2>
              <div className="flex flex-col gap-2 text-sm font-sans text-warm-ivory/80 font-light">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-champagne-gold shrink-0" />
                  <span>{SITE_CONFIG.address.formatted}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-champagne-gold shrink-0" />
                  <span>Open Daily: {SITE_CONFIG.hours}</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/visit"
                  className="px-8 py-3.5 bg-champagne-gold text-near-black font-sans text-xs tracking-monumental uppercase font-semibold hover:bg-soft-gold transition-colors"
                >
                  GET DIRECTIONS &amp; GUIDE
                </Link>
                <a
                  href={getWhatsAppProductUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 border border-champagne-gold text-champagne-gold font-sans text-xs tracking-monumental uppercase font-semibold hover:bg-champagne-gold/10 transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiries</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] bg-near-black border border-champagne-gold/20 overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1UDl2QD-9QXwBAMdYgaZUHRczCEqdlkLaJ5FVgtPb-EntqyAaoRJd1IfU1xL9JBXRiO673hkeejfbzIsh91Voh27BmtnCfeW-1_XYFgPogwRc21k74DUwFmIIgQWtefWoRtw3vpOC6w8JzP0KZtBlu6PewkVvq1fJhVeRXMaNZw8Uk7Az-QsrnjyCcd9b1L6-UnfBuJuApu-eomv6jIF90w-w3p41WFyBvQLu855EltHJko__RGslxTJA"
                alt="Atmospheric Salon Visual Study"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-near-black/80 px-2 py-0.5 text-[8.5px] font-sans text-warm-ivory/60 tracking-wider">
                Salon Ambience Study
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 11: WHATSAPP ENQUIRY CONCIERGE
          ======================================================== */}
      <section className="w-full py-24 px-6 lg:px-14 bg-gradient-to-b from-near-black to-[#170b0c] border-t border-champagne-gold/15">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          <div className="w-12 h-12 rounded-full border border-champagne-gold/40 flex items-center justify-center text-champagne-gold shadow-[0_0_24px_rgba(216,180,106,0.3)]">
            <MessageCircle className="w-6 h-6" />
          </div>
          <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase">
            DIRECT CONCIERGE DIALOGUE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-warm-ivory">
            Personal Jewellery Inquiries
          </h2>
          <p className="font-sans text-warm-ivory/80 text-sm sm:text-base max-w-xl font-light leading-relaxed">
            Interested in discovering piece availability or visiting our Parvatsar salon? Reach out directly via WhatsApp or phone.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href={getWhatsAppProductUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-champagne-gold text-near-black font-sans text-xs tracking-monumental font-semibold uppercase hover:bg-soft-gold transition-colors flex items-center gap-2.5 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message on WhatsApp (+91 88540 00203)</span>
            </a>
            <a
              href={SITE_CONFIG.phoneTel}
              className="px-8 py-4 border border-champagne-gold text-champagne-gold font-sans text-xs tracking-monumental uppercase font-semibold hover:bg-champagne-gold/10 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: +91 88540 00203</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 12: CINEMATIC EXIT
          ======================================================== */}
      <section className="w-full py-28 px-6 lg:px-14 bg-near-black border-t border-champagne-gold/15 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <span className="font-sans text-[10px] tracking-monumental text-champagne-gold/70 uppercase">
            BALAJI JEWELLERS &amp; SHYAM DIAMONDS
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-warm-ivory uppercase tracking-wide leading-tight">
            Holding the Moment.
          </h2>
          <p className="font-sans text-xs text-warm-ivory/60 tracking-widest uppercase">
            PARVATSAR · RAJASTHAN
          </p>
        </div>
      </section>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
