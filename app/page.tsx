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
                <span className="w-2 h-2 rounded-full bg-champagne-gold animate-pulse shrink-0"></span>
                <span className="font-sans text-[10px] sm:text-xs tracking-wider sm:tracking-monumental text-champagne-gold uppercase">
                  BALAJI JEWELLERS &amp; SHYAM DIAMONDS · PARVATSAR
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-warm-ivory leading-[1.02] sm:leading-[0.98] font-normal tracking-tight mb-8">
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
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-champagne-gold text-near-black font-sans text-xs tracking-widest sm:tracking-monumental font-semibold uppercase hover:bg-soft-gold transition-all duration-300 text-center shadow-[0_6px_28px_-6px_rgba(216,180,106,0.4)]"
                >
                  EXPLORE THE COLLECTION
                </Link>

                <Link
                  href="/visit"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 border border-champagne-gold/60 text-soft-gold font-sans text-xs tracking-widest sm:tracking-monumental uppercase hover:bg-champagne-gold/10 hover:border-champagne-gold transition-all duration-300 text-center"
                >
                  VISIT OUR SHOWROOM
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <div className="pt-6 border-t border-champagne-gold/15 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-warm-ivory/70 tracking-wider font-sans">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-champagne-gold shrink-0" />
                  Gold &amp; Silver Disciplines
                </span>
                <span className="h-3 w-[1px] bg-champagne-gold/30 hidden sm:inline"></span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-champagne-gold shrink-0" />
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
                     quality={90} />

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
          className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-champagne-gold/70 hover:text-champagne-gold transition-colors z-20"
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
            {/* Background 01 Watermark */}
            <span className="absolute -top-6 sm:-top-8 -left-2 sm:-left-3 font-serif text-[85px] sm:text-[120px] md:text-[140px] leading-none text-champagne-gold/10 font-bold select-none pointer-events-none -z-0">
              01
            </span>
            <div className="relative z-10 pt-2 sm:pt-4">
              <span className="font-sans text-[10px] sm:text-xs tracking-wider sm:tracking-monumental text-champagne-gold uppercase block mb-2 font-medium">
                A STUDY IN LIGHT AND FORM
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-warm-ivory leading-tight">
                Not Just Ornaments.
                <br />
                <span className="italic text-soft-gold">Heirlooms of Pause.</span>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-8 lg:pl-12 border-t lg:border-t-0 lg:border-l border-champagne-gold/15 pt-8 lg:pt-0">
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
          SECTION 03: THE THREE DISCIPLINES (MATTER & METALLURGY)
          ======================================================== */}
      <section
        className="relative w-full py-28 lg:py-36 px-6 lg:px-14 bg-gradient-to-b from-near-black via-[#170b0c] to-[#180709] border-t border-champagne-gold/15"
        id="three-disciplines"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase block mb-3 font-semibold">
              MATTER &amp; METALLURGY
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-warm-ivory font-normal tracking-tight">
              The Three Disciplines
            </h2>
            <p className="font-sans text-warm-ivory/70 text-sm sm:text-base mt-4 font-light leading-relaxed">
              Distinct alchemies celebrated under one roof. Touch the warmth of gold, the quiet glow of silver, and the optical fire of certified gemstones.
            </p>
          </div>

          {/* Editorial Triptych Showcase Image */}
          <div className="relative w-full overflow-hidden border border-champagne-gold/30 mb-14 shadow-2xl bg-near-black">
            <div className="relative w-full aspect-[16/9] lg:aspect-auto lg:h-[540px]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI6hHpUV-NwRDZqyOpCKxMbyX1iOHCKLekLht_8Q3jDUjjP-PHCoLkIIPm-lU8c0OU3p6M3HPptpyUMVEcb7n5jv3TLkirP9vWcg5E8uzHCFEodqC_jHFoS3kvPsFHfeFKUI4nDiOG5mVZgOczQr5uzaE7TSHDfO4yOJemwXSLjjrt_UZOj7C1WYZyaz3rZN25WXD3jHsEclF0vv9EclybwgwSisktxr5Ua8DYPN6ky6rrtUKZyfij=s0"
                alt="Three Disciplines - Molten Gold, Sterling Silver, Untreated Gemstones"
                fill
                sizes="(max-width: 1440px) 100vw, 1440px"
                className="object-cover object-center"
               quality={90} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-near-black/85 via-transparent to-near-black/20 pointer-events-none"></div>
            <div className="absolute bottom-2 sm:bottom-6 left-2 sm:left-6 right-2 sm:right-6 flex items-center justify-between text-[8px] sm:text-xs tracking-wider sm:tracking-cinematic font-sans text-soft-gold uppercase">
              <span className="bg-near-black/75 px-1.5 py-0.5 sm:bg-transparent sm:p-0">[ 01 PURE 22K GOLD ]</span>
              <span className="bg-near-black/75 px-1.5 py-0.5 sm:bg-transparent sm:p-0">[ 02 STERLING 925 SILVER ]</span>
              <span className="bg-near-black/75 px-1.5 py-0.5 sm:bg-transparent sm:p-0">[ 03 NATURAL GEMSTONES ]</span>
            </div>
          </div>

          {/* Interactive Material Selector Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Discipline 01 */}
            <Link
              href="/collections#gold"
              className="p-8 bg-[#200b0e]/80 border border-champagne-gold/30 hover:border-champagne-gold hover:bg-[#2b0e13] transition-all duration-300 group block"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-deep-burgundy border border-champagne-gold/40 text-champagne-gold text-[10px] font-sans tracking-widest uppercase font-medium">
                  01 GOLD
                </span>
                <ArrowRight className="w-4 h-4 text-champagne-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl text-warm-ivory mb-3 font-normal">THE WARMTH OF GOLD</h3>
              <p className="font-sans text-warm-ivory/70 text-sm font-light leading-relaxed">
                22K BIS Hallmarked noble alloy, hand-chiseled repoussé and Nakashi wirework designed to retain enduring sovereign weight and warmth upon contact.
              </p>
            </Link>

            {/* Discipline 02 */}
            <Link
              href="/collections#silver"
              className="p-8 bg-[#180709]/80 border border-champagne-gold/20 hover:border-champagne-gold hover:bg-[#230a0d] transition-all duration-300 group block"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-deep-burgundy/60 border border-champagne-gold/40 text-champagne-gold text-[10px] font-sans tracking-widest uppercase font-medium">
                  02 SILVER
                </span>
                <ArrowRight className="w-4 h-4 text-champagne-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl text-warm-ivory mb-3 font-normal">THE QUIET REFLECTION</h3>
              <p className="font-sans text-warm-ivory/70 text-sm font-light leading-relaxed">
                Pure 925 sterling silver, hand-hammered chiseled tribal geometry, cooled desert moonlight luster, and ceremonial heirloom artefacts.
              </p>
            </Link>

            {/* Discipline 03 */}
            <Link
              href="/collections"
              className="p-8 bg-[#180709]/80 border border-champagne-gold/20 hover:border-champagne-gold hover:bg-[#230a0d] transition-all duration-300 group block"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-deep-burgundy/60 border border-champagne-gold/40 text-champagne-gold text-[10px] font-sans tracking-widest uppercase font-medium">
                  03 GEMSTONES
                </span>
                <ArrowRight className="w-4 h-4 text-champagne-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl text-warm-ivory mb-3 font-normal">LIGHT BECOMES COLOUR</h3>
              <p className="font-sans text-warm-ivory/70 text-sm font-light leading-relaxed">
                Certified unheated gemstones, individual bezel cold-burnished mounts, pure spectral dispersion, and untreated astrological stones of exceptional hue.
              </p>
            </Link>
          </div>
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
          SECTION 05: MICROSCOPIC EXCELLENCE (BEAUTY LIVES IN THE DETAIL)
          ======================================================== */}
      <section className="relative w-full py-28 lg:py-36 px-6 lg:px-14 bg-near-black border-t border-champagne-gold/15" id="macro-inspection">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase block mb-3 font-semibold">
              MICROSCOPIC EXCELLENCE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-warm-ivory font-normal leading-tight mb-6">
              BEAUTY LIVES IN THE DETAIL.
            </h2>
            <div className="w-16 h-[1px] bg-champagne-gold/40 mb-8"></div>
            <p className="font-sans text-warm-ivory/80 text-base font-light leading-relaxed mb-8">
              Examining the micro-craftsmanship beneath standard sight: 0.12mm pure gold foil backing, hand-planished collets, and tension-set uncut diamonds preserved for generations.
            </p>
            {/* Macro Progression Steps */}
            <div className="border border-champagne-gold/20 p-5 bg-[#1b080b]/60 mb-6">
              <p className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase mb-3 font-medium">
                INSPECTION TRAJECTORY
              </p>
              <div className="text-xs font-sans tracking-wider text-warm-ivory/80 flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-champagne-gold font-medium">01</span> MACRO GRAIN
                  <ArrowRight className="w-3.5 h-3.5 text-champagne-gold/70" />
                  <span className="text-champagne-gold font-medium">02</span> METALLIC LATTICE
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-champagne-gold font-medium">03</span> BEZEL SETTING
                  <ArrowRight className="w-3.5 h-3.5 text-champagne-gold/70" />
                  <span className="text-champagne-gold font-medium">04</span> SOVEREIGN FINISH
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative border border-champagne-gold/40 p-2 bg-gradient-to-br from-deep-burgundy/40 to-near-black shadow-2xl">
              <div className="relative overflow-hidden aspect-[16/10] bg-black">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPvup1w5oqr9jItA_mIfIo8Bj3CakovjUs_gMIJmhvnufTalX9d4V_C1I2RfOFXf0epiIfyCT72vUyi7F77tqgX4xTgTwYufiAm27u-bG_8RoEukEPqt6iWqHAXdeTIfmZHSQjbkf2vQZEQq0pQRZi20Ro8afHXM7IzcPR4yhSwnGpwZJlCPfoAteon9yGPPcaHH1RgH3kTRbakVJ-V_xFn61HLhM1O6JNU2FkIOnE6n0fw-Tr3pK7=s0"
                  alt="Extreme macro Kundan gold setting holding raw uncut crystal diamonds"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-1000 hover:scale-110"
                 quality={90} />
              </div>
              <div className="p-3 bg-near-black/90 flex items-center justify-between text-xs font-sans text-warm-ivory/60 tracking-widest uppercase">
                <span>Magnification: 24x True Optical</span>
                <span className="text-champagne-gold font-medium">Pure 24K Jadau Foil</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 06: THE EDITORIAL FORM (FOR THE MOMENTS THAT MATTER)
          ======================================================== */}
      <section className="relative w-full py-28 lg:py-36 px-6 lg:px-14 bg-[#FAF7EF] text-[#260003] overflow-hidden border-t border-champagne-gold/20">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: High Fashion Imagery */}
          <div className="lg:col-span-6">
            <div className="relative max-w-[520px] mx-auto shadow-[0_20px_60px_-15px_rgba(38,0,3,0.35)] border border-[#d8b46a]/40 bg-[#f3ece0] p-3">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEnEzNMEyG9a2ps0dLsnE-JoPHo3Xc6Q5RRkXoOXpEz2XcbP1g1gE_EvbnFTNZxP14JIhtUXOfAbtaSMfKo3bhov7r10KybPfNffZsjvziI41BAVx4-l-E-B0gmjjcc5xnjqZNUghxcHr8amvD2WwB4cQA0XHuyK7IWEnoitZwP8PIY4EiWZ8eKqAXmSyGc98xMvkgI1g-YaFmnWYpoYI8r5V-BfNH_VFiiA3Y0bkRBHsNToXJWKtJ=s0"
                  alt="High fashion fine jewellery portrait of an elegant contemporary Indian woman"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                 quality={90} />
              </div>
              <div className="mt-3 flex items-center justify-between text-[10px] font-sans tracking-widest uppercase text-[#450006] font-medium">
                <span>Haute Joaillerie Editorial</span>
                <span>Rajputana Modernity</span>
              </div>
            </div>
          </div>
          {/* Right: Asymmetric Editorial Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-sans text-[10px] sm:text-xs tracking-widest sm:tracking-monumental text-[#450006] uppercase mb-4 font-semibold">
              THE EDITORIAL FORM
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#260003] font-normal leading-[1.02] tracking-tight mb-8">
              FOR THE MOMENTS<br />THAT MATTER.
            </h2>
            <div className="w-20 h-[1.5px] bg-[#450006]/60 mb-8"></div>
            <p className="font-sans text-[#260003]/85 text-base sm:text-lg font-light leading-relaxed mb-6">
              Contemporary poise rooted in royal Rajputana heritage. Adornments sculpted to live effortlessly with the skin.
            </p>
            <p className="font-sans text-[#260003]/75 text-xs sm:text-sm font-light leading-relaxed mb-10 max-w-lg">
              Neither heavy for the sake of excess nor timid in scale. Each piece is proportioned for the woman who commands every room she enters with gentle grace.
            </p>
            <div>
              <Link
                href="/moments"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#260003] text-warm-ivory font-sans text-[11px] sm:text-xs tracking-widest sm:tracking-monumental uppercase hover:bg-[#450006] transition-colors"
              >
                <span>EXPLORE BESPOKE COMMISSIONS</span>
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
          SECTION 08: SOMETIMES THINGS BECOME PART OF YOU
          ======================================================== */}
      <section className="relative w-full py-28 lg:py-36 px-6 lg:px-14 bg-gradient-to-b from-[#180709] via-deep-burgundy/20 to-near-black border-t border-champagne-gold/15">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative w-full border border-champagne-gold/30 shadow-2xl overflow-hidden mb-12 bg-near-black">
            <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[600px]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrP0RK9IuQQsMdPjnTvOB_qdjrn8TDl7U6V2OT9lHPuyMEz8N2av-tA-RiZVzVg91fRYw1QDwtmStxauycPeHlomrvoJlijYPHsTTWe_Er-81KgOP_6ODoz-7FaL8IDt6pBHnRFLPYYWmafhtEKHNi5XqPiNzdYuPriH_1QM1bmu5dYUVt_mNRInGa9A0eVl5Etev_bFRtxcAumfT7Oqu5sRWI0sySRJpPGAV68dGQ-UNX2mjVqqD-=s0"
                alt="Indian women admiring handcrafted heirloom jewellery in an intimate salon setting"
                fill
                sizes="(max-width: 1400px) 100vw, 1400px"
                className="object-cover"
               quality={90} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/50 to-transparent"></div>
            <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-12 right-4 sm:right-12 max-w-2xl">
              <span className="font-sans text-[10px] tracking-widest sm:tracking-monumental text-champagne-gold uppercase block mb-2 sm:mb-3 font-semibold">
                HEIRLOOM TRADITION
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-warm-ivory font-normal leading-tight mb-3 sm:mb-4">
                SOME THINGS BECOME PART OF YOU.
              </h2>
              <p className="font-sans text-warm-ivory/80 text-xs sm:text-sm lg:text-base font-light leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                Jewellery is never merely precious metal—it is the silent keeper of milestones, vows, and familial affection. Designed to be worn, cherished, and handed down across generations.
              </p>
              <a
                href={getWhatsAppProductUrl("Bridal & Heirloom Curations")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 bg-champagne-gold text-near-black font-sans text-[11px] sm:text-xs tracking-widest sm:tracking-monumental uppercase font-semibold hover:bg-soft-gold transition-colors"
              >
                <span>DISCOVER BRIDAL &amp; HEIRLOOM CURATIONS</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 09: FROM CRAFT TO CHARACTER
          ======================================================== */}
      <section className="relative w-full py-28 lg:py-36 px-6 lg:px-14 bg-near-black border-t border-champagne-gold/15" id="brand-story">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="relative p-3 bg-gradient-to-b from-[#2e0b10] to-[#120708] border border-champagne-gold/30">
              <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASQjWwAeYS043A5JOSZqxpPmsvYJAL_SBEe0EOCCHi-kxm5Sn5Iz9FXHX7kjL-Lv91cE3NpviBi992UWM1TeugQqAhtboV65WBWcjVVx0GTRw2tCgatQTERgGrsTIq1wl0V6iEEAS4nWaiaPUCJGMVeQhTLiicV7r-0CKfkjmxAlQ4QylFfEzH_FllPcrpIoFeHC5UuAP5AbFC70SlEK-8LHszr2YV0OLZWaWJvuHyBMbXRTiv4P3c=s0"
                  alt="Sculpture representing the fusion of gold, silver, and gemstones"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover shadow-2xl"
                 quality={90} />
              </div>
              <div className="mt-3 text-right">
                <span className="font-sans text-[9px] tracking-widest text-champagne-gold/70 uppercase">
                  Parvatsar Atelier Philosophy
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase mb-3 font-semibold">
              BALAJI JEWELLERS &amp; SHYAM DIAMONDS · PARVATSAR
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-warm-ivory font-normal leading-tight mb-6">
              FROM CRAFT TO CHARACTER.
            </h2>
            <div className="w-16 h-[1px] bg-champagne-gold/40 mb-8"></div>
            <div className="space-y-5 font-sans text-warm-ivory/80 text-base font-light leading-relaxed mb-10">
              <p>
                In Parvatsar, jewellery is not measured simply by carats and bullion scales. It is an expression of Marwari trust, an intimate dialogue between a family and their goldsmith that spans decades and weddings.
              </p>
              <p>
                At Balaji Jewellers &amp; Shyam Diamonds, we preserve this authentic bond. Every piece is hallmarked with uncompromising BIS rigor, paired with genuine certified stones, and presented without pretense.
              </p>
            </div>
            <div>
              <Link
                href="/story"
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 border border-champagne-gold text-champagne-gold font-sans text-[11px] sm:text-xs tracking-widest sm:tracking-monumental uppercase hover:bg-champagne-gold hover:text-near-black transition-all"
              >
                <span>READ OUR STORY</span>
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
        <div className="max-w-[1460px] mx-auto bg-gradient-to-r from-deep-burgundy/40 via-dark-wine/60 to-near-black border border-champagne-gold/30 p-6 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-champagne-gold"></span>
                <span className="font-sans text-[10px] sm:text-xs tracking-widest sm:tracking-monumental text-champagne-gold uppercase">
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
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
                <Link
                  href="/visit"
                  className="px-6 sm:px-8 py-3.5 bg-champagne-gold text-near-black font-sans text-xs tracking-widest sm:tracking-monumental uppercase font-semibold hover:bg-soft-gold transition-colors text-center"
                >
                  GET DIRECTIONS &amp; GUIDE
                </Link>
                <a
                  href={getWhatsAppProductUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3.5 border border-champagne-gold text-champagne-gold font-sans text-xs tracking-widest sm:tracking-monumental uppercase font-semibold hover:bg-champagne-gold/10 transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Inquiries</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] bg-near-black border border-champagne-gold/20 overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1UDl2QD-9QXwBAMdYgaZUHRczCEqdlkLaJ5FVgtPb-EntqyAaoRJd1IfU1xL9JBXRiO673hkeejfbzIsh91Voh27BmtnCfeW-1_XYFgPogwRc21k74DUwFmIIgQWtefWoRtw3vpOC6w8JzP0KZtBlu6PewkVvq1fJhVeRXMaNZw8Uk7Az-QsrnjyCcd9b1L6-UnfBuJuApu-eomv6jIF90w-w3p41WFyBvQLu855EltHJko__RGslxTJA=s0"
                alt="Atmospheric Salon Visual Study"
                fill
                className="object-cover"
               quality={90} />
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
          <span className="font-sans text-[10px] tracking-widest sm:tracking-monumental text-champagne-gold uppercase">
            DIRECT CONCIERGE DIALOGUE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-warm-ivory">
            Personal Jewellery Inquiries
          </h2>
          <p className="font-sans text-warm-ivory/80 text-sm sm:text-base max-w-xl font-light leading-relaxed">
            Interested in discovering piece availability or visiting our Parvatsar salon? Reach out directly via WhatsApp or phone.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
            <a
              href={getWhatsAppProductUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-champagne-gold text-near-black font-sans text-xs tracking-widest sm:tracking-monumental font-semibold uppercase hover:bg-soft-gold transition-colors flex items-center justify-center gap-2.5 shadow-lg text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
            <a
              href={SITE_CONFIG.phoneTel}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-champagne-gold text-champagne-gold font-sans text-xs tracking-widest sm:tracking-monumental uppercase font-semibold hover:bg-champagne-gold/10 transition-colors flex items-center justify-center gap-2 text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call: +91 88540 00203</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 12: TIMELESS BY NATURE (CINEMATIC DISSOLVE BANNER)
          ======================================================== */}
      <section className="relative w-full pt-20 pb-16 bg-near-black border-t border-champagne-gold/15 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-14 mb-16 text-center">
          <div className="relative w-full overflow-hidden border border-champagne-gold/30 shadow-2xl bg-near-black">
            <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[560px]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRjo0cRdVsxxEAwTa6hOTMQZxz9Go2ky9ysFEY_-KC40z3uVpmYKnp0slkR-tKMlbdEl9zJl5AMn4vNcJHVbqOYZznwh5zbY5Zi-5NrXG2hfWzfPljB-4HiX4VkNrUpgc09GjPYKPV79S5eS0qIW_162cJQuxWV8z708KCgGiKJ2T6EskHq5TwjZNs5T36akWdJaa-BBAtbHWVoKC--UZ3UCNB3WJRq5mIzx0GmPqLwdmHv61J-7Of=s0"
                alt="Cinematic editorial 22K gold necklace dissolving into velvety shadows"
                fill
                sizes="(max-width: 1440px) 100vw, 1440px"
                className="object-cover"
               quality={90} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-near-black via-transparent to-near-black/50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-warm-ivory font-light tracking-wide mb-3">
                TIMELESS BY NATURE.
              </h2>
              <p className="font-sans text-[10px] sm:text-xs tracking-widest sm:tracking-monumental text-champagne-gold uppercase max-w-lg">
                BALAJI JEWELLERS &amp; SHYAM DIAMONDS · PARVATSAR, RAJASTHAN
              </p>
            </div>
          </div>
        </div>

        {/* Hallmark & Authenticity Band */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-14 flex flex-wrap items-center justify-between gap-4 text-xs font-sans tracking-widest text-warm-ivory/60 uppercase pb-6 border-b border-champagne-gold/15">
          <span className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
            BIS Hallmarked 916 Gold &amp; 925 Sterling Silver
          </span>
          <span>Bank Wali Gali, Parvatsar</span>
          <span>Open Daily 9:00 AM – 8:00 PM</span>
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
