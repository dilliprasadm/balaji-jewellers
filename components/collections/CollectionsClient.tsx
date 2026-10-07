"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PRODUCTS, Product } from "@/lib/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import {
  Sparkles,
  ArrowDown,
  ArrowRight,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Eye,
  Navigation as NavIcon,
} from "lucide-react";
import { getWhatsAppProductUrl, getWhatsAppShowroomUrl } from "@/lib/utils/whatsapp";
import { ProductShareButton } from "@/components/ui/ProductShareButton";

export function CollectionsClient() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const goldProducts = PRODUCTS.filter((p) => p.category === "gold");
  const silverProducts = PRODUCTS.filter((p) => p.category === "silver");

  const scrollToDiscipline = (discipline: "gold" | "silver") => {
    const targetId = discipline === "gold" ? "gold-section" : "silver-section";
    const el = document.getElementById(targetId);
    if (el) {
      const yOffset = -90; // offset for sticky navigation header
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToArchetype = (archetype: string) => {
    const targetId = archetype === "chains" ? "silver-section" : "gold-section";
    const el = document.getElementById(targetId);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Check for product query param (?product=product-id)
      const params = new URLSearchParams(window.location.search);
      const productQuery = params.get("product");
      if (productQuery) {
        const cleanQuery = productQuery.toLowerCase().trim();
        const strippedQuery = cleanQuery.replace(/[^a-z0-9]/g, "");
        const found = PRODUCTS.find((p) => {
          const pId = p.id.toLowerCase();
          const pIdStripped = pId.replace(/[^a-z0-9]/g, "");
          const pNameLower = p.name.toLowerCase();
          const pNameSlug = pNameLower.replace(/[^a-z0-9]+/g, "-");
          const pNameStripped = pNameLower.replace(/[^a-z0-9]/g, "");

          return (
            pId === cleanQuery ||
            pIdStripped === strippedQuery ||
            pNameSlug === cleanQuery ||
            pNameStripped === strippedQuery ||
            pNameLower.includes(cleanQuery.replace(/-/g, " ")) ||
            cleanQuery.includes(pId)
          );
        });
        if (found) {
          setSelectedProduct(found);
          setTimeout(() => {
            const cardEl = document.getElementById(found.id);
            if (cardEl) {
              const yOffset = -120;
              const y = cardEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            } else {
              scrollToDiscipline(found.category);
            }
          }, 350);
          return;
        }
      }

      // 2. Check for hash (#silver, #gold, #showroom, or #product-id)
      const hash = window.location.hash.toLowerCase().replace("#", "");
      if (hash === "silver" || hash === "silver-section") {
        setTimeout(() => scrollToDiscipline("silver"), 200);
      } else if (hash === "gold" || hash === "gold-section") {
        setTimeout(() => scrollToDiscipline("gold"), 200);
      } else if (hash === "showroom") {
        const el = document.getElementById("showroom");
        if (el) {
          const yOffset = -90;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      } else if (hash) {
        const foundByHash = PRODUCTS.find((p) => p.id.toLowerCase() === hash);
        if (foundByHash) {
          setSelectedProduct(foundByHash);
        }
      }
    }
  }, []);

  return (
    <div className="w-full bg-near-black text-warm-ivory selection:bg-deep-burgundy selection:text-soft-gold pt-20">
      {/* ========================================================
          SECTION 01: CINEMATIC INTRO (~90vh)
          ======================================================== */}
      <section className="relative min-h-[88vh] md:min-h-[92vh] w-full bg-gradient-to-b from-deep-burgundy via-dark-wine to-near-black flex flex-col justify-between items-center text-center px-6 lg:px-14 pt-16 pb-10 overflow-hidden">
        {/* Ambient Radial Lighting Glow */}
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_30%,_rgba(216,180,106,0.22),_transparent_70%)]"></div>

        {/* Top Header Eyebrow */}
        <div className="relative z-10 flex flex-col items-center">
          <ScrollReveal direction="down">
            <div className="flex items-center gap-3 mb-4 text-champagne-gold">
              <span className="w-10 h-[1px] bg-champagne-gold/40"></span>
              <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
              <span className="text-[10px] md:text-xs tracking-[0.35em] font-semibold uppercase text-soft-gold">
                The Digital Jewellery Exhibition
              </span>
              <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
              <span className="w-10 h-[1px] bg-champagne-gold/40"></span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl tracking-tight text-warm-ivory uppercase font-light leading-[1.05] max-w-5xl">
              THE <span className="italic font-serif font-normal gold-metallic-text">Collection</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <p className="font-sans text-warm-ivory/80 text-sm md:text-lg tracking-wide max-w-xl mt-4 font-light leading-relaxed">
              Explore our jewellery through gold and silver. Handcrafted with reverence in Parvatsar.
            </p>
          </ScrollReveal>
        </div>

        {/* Large Preview Piece Entering From Bottom */}
        <div className="relative z-10 w-full max-w-3xl -mb-6 md:-mb-12 group">
          <div className="relative mx-auto rounded-t-2xl overflow-hidden shadow-[0_-25px_60px_rgba(0,0,0,0.85)] border-t border-x border-champagne-gold/30 bg-[#260e12]">
            <div className="relative w-full h-[280px] sm:h-[380px] md:h-[440px]">
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1XB2XhfeLWZu0HKdZQfcHEXkCkzsJd2spa9s2wau-CuAlhe5HIz2pQZIK_ZAwlTP2i9HsM-zNOSIqkF2b2zLRqWL7cI9KMRgs8KMqNTMYQifmzO_FoS8TnMM7O2H4MUBx8R_2LbJOrhhjS6cKTQl2zQcH5iYRfcd_AVsp8AMVT5yM6gpkPM0Xs6wk7Zv7Aosz19VGc_O4xfpHAc3fVnhp0avMT8gco6yvE04M3iKeDw1jzX5tlMN_xEng=s0"
                alt="The Archival Rajputana Bridal Collar Necklace preview"
                fill
                priority
                className="object-cover object-top filter brightness-95 group-hover:scale-[1.02] transition-transform duration-1000"
               quality={90} />
              <div className="absolute inset-0 bg-gradient-to-t from-near-black via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                <span className="text-[10px] uppercase tracking-[0.3em] text-champagne-gold/90 font-sans">
                  Archival Suite No. 01 — Kundan Collar Showcase
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 pt-4 flex flex-col items-center">
          <a
            href="#collection-selector"
            className="flex flex-col items-center gap-2 group text-soft-gold/80 hover:text-champagne-gold transition-colors"
          >
            <span className="text-[10px] font-sans uppercase tracking-[0.3em] font-semibold">
              EXPLORE THE COLLECTION
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce text-champagne-gold" />
          </a>
        </div>
      </section>

      {/* ========================================================
          SECTION 02: DUAL DISCIPLINE JUMP CARDS
          ======================================================== */}
      <section
        id="collection-selector"
        className="w-full bg-near-black py-12 md:py-20 border-y border-champagne-gold/20 px-6 lg:px-14"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch divide-y md:divide-y-0 md:divide-x divide-champagne-gold/20 border border-champagne-gold/30 bg-dark-wine/40 backdrop-blur-md">
          {/* Gold Anchor Card */}
          <button
            type="button"
            onClick={() => scrollToDiscipline("gold")}
            className="group flex-1 p-8 sm:p-12 md:p-16 flex flex-col justify-between transition-all duration-500 hover:bg-deep-burgundy/30 relative overflow-hidden text-left cursor-pointer"
          >
            <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-48 h-48 bg-champagne-gold/10 rounded-full blur-3xl pointer-events-none group-hover:bg-champagne-gold/20 transition-all"></div>
            <div>
              <div className="flex items-center justify-between text-champagne-gold mb-6">
                <span className="font-sans text-xs tracking-[0.3em] uppercase">Discipline 01</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-warm-ivory uppercase tracking-tight font-normal">
                01 <span className="gold-metallic-text font-serif italic">Gold</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 mt-3 max-w-sm leading-relaxed font-light">
                Sculpted collar suites, kadas, floral cocktail rings, and temple filigree wrought in warm gold.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-champagne-gold text-[11px] font-sans font-semibold tracking-[0.25em] uppercase">
              <span>Enter Gold Gallery ({goldProducts.length} pieces)</span>
              <span className="text-sm">↗</span>
            </div>
          </button>

          {/* Silver Anchor Card */}
          <button
            type="button"
            onClick={() => scrollToDiscipline("silver")}
            className="group flex-1 p-8 sm:p-12 md:p-16 flex flex-col justify-between transition-all duration-500 hover:bg-slate-900/30 relative overflow-hidden text-left cursor-pointer"
          >
            <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-48 h-48 bg-slate-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-slate-300/20 transition-all"></div>
            <div>
              <div className="flex items-center justify-between text-slate-300 mb-6">
                <span className="font-sans text-xs tracking-[0.3em] uppercase">Discipline 02</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-warm-ivory uppercase tracking-tight font-normal">
                02 <span className="silver-metallic-text font-serif italic">Silver</span>
              </h2>
              <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 mt-3 max-w-sm leading-relaxed font-light">
                Pure 925 sterling silver, deep antique oxidized haslis, hand-chiseled cuffs, and daily adornment.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-slate-300 text-[11px] font-sans font-semibold tracking-[0.25em] uppercase">
              <span>Enter Silver Gallery ({silverProducts.length} pieces)</span>
              <span className="text-sm">↗</span>
            </div>
          </button>
        </div>
      </section>

      {/* ========================================================
          STICKY DISCIPLINE SWITCHER BAR
          ======================================================== */}
      <div className="sticky top-20 z-30 w-full bg-near-black/90 backdrop-blur-md border-b border-champagne-gold/20 py-3 px-3 sm:px-6 shadow-xl">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-6">
          <button
            type="button"
            onClick={() => scrollToDiscipline("gold")}
            className="px-3 sm:px-6 py-2 text-[10px] sm:text-xs font-sans tracking-wider sm:tracking-monumental uppercase font-semibold text-soft-gold border border-champagne-gold/40 hover:bg-champagne-gold/20 hover:border-champagne-gold transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-sm whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-champagne-gold shrink-0"></span>
            <span>01 Gold Atelier ({goldProducts.length})</span>
          </button>
          <button
            type="button"
            onClick={() => scrollToDiscipline("silver")}
            className="px-3 sm:px-6 py-2 text-[10px] sm:text-xs font-sans tracking-wider sm:tracking-monumental uppercase font-semibold text-slate-300 border border-slate-400/40 hover:bg-slate-400/20 hover:border-slate-300 transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-sm whitespace-nowrap"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-300 shrink-0"></span>
            <span>02 Silver Atelier ({silverProducts.length})</span>
          </button>
        </div>
      </div>

      {/* ========================================================
          SECTION 03: GOLD EXHIBITION (ALWAYS VISIBLE)
          ======================================================== */}
      <section id="gold-section" className="w-full py-20 md:py-28 px-6 lg:px-14 bg-near-black border-b border-champagne-gold/15 scroll-mt-28">
        <div className="max-w-7xl mx-auto flex flex-col">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-champagne-gold/20 pb-10">
            <div>
              <div className="flex items-center gap-2 text-champagne-gold mb-3">
                <span className="text-[10px] tracking-[0.3em] font-semibold uppercase text-champagne-gold">
                  01 — PRIMARY EXHIBITION
                </span>
                <span className="text-champagne-gold/40">•</span>
                <span className="text-[10px] tracking-[0.3em] font-semibold uppercase text-warm-ivory/60">
                  FINE GOLD JEWELLERY
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-warm-ivory uppercase tracking-tight">
                GOLD <span className="gold-metallic-text italic font-serif">Jewellery</span>
              </h2>
              <p className="font-sans text-warm-ivory/70 text-sm md:text-base mt-2 max-w-xl font-light">
                Explore our gold jewellery collection. Asymmetrical heirloom creations sculpted with artisanal mastery.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-champagne-gold text-near-black font-semibold text-[11px] tracking-[0.22em] uppercase hover:bg-soft-gold transition-colors shadow-lg"
                href="https://wa.me/918854000203?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Gold%20Jewellery%20collection."
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Asymmetric Editorial Grid (Stitch Spec: 7-col Hero feature + 5-col stacked right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
            {/* Large Hero Feature Card: Rani Haar (Spans 7 cols) */}
            <article id="marwar-temple-rani-haar" className="lg:col-span-7 bg-[#260e12] border border-champagne-gold/30 p-6 sm:p-8 flex flex-col justify-between group shadow-xl scroll-mt-28">
              <div className="relative overflow-hidden bg-near-black h-[380px] sm:h-[500px] mb-6">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XnH8ftKWNSjn5HgVmzUItyXCxoY1XKgyv2x5WZS9UiCkZS4hzeLRYRTgmmEZ-o-F5PHSHYsV27Mbm0IitLEA-lku84ZOkd4iyD54moD4nP4rr4d8i7yTl5Up8rDz-QUhQ4mYGbqcqkv7KXqv85DZOfdj9PoRvYOHvnXyVbonHaLmYWIhd0-GDRGVNZwo1usVmZ-eRGuWCaSjJZpJ-plq3f95_vMwZZ3q7qhsBociB13sTvcd36P2NFffw=s0"
                  alt="Marwar Imperial Temple Rani Haar"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                 quality={90} />
                <div className="absolute top-4 left-4 bg-near-black/80 backdrop-blur-md px-3 py-1 border border-champagne-gold/30 text-champagne-gold text-[10px] tracking-[0.25em] uppercase font-semibold">
                  RANI HAAR
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.25em] text-champagne-gold uppercase font-medium">
                    Showroom Centerpiece
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-warm-ivory mt-1">
                    Marwar Imperial Temple Rani Haar
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 mt-2 leading-relaxed">
                    Layered temple pendant suspended from intricate granulated chains with floral nakashi motifs and delicate seed pearl drops.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-champagne-gold/20 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedProduct(
                          PRODUCTS.find((p) => p.id === "marwar-temple-rani-haar") || null
                        )
                      }
                      className="text-champagne-gold hover:text-soft-gold text-xs tracking-[0.22em] uppercase font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>View Details</span>
                      <Eye className="w-4 h-4" />
                    </button>
                    <ProductShareButton
                      productId="marwar-temple-rani-haar"
                      productName="Marwar Imperial Temple Rani Haar"
                      variant="pill"
                    />
                  </div>
                  <a
                    className="px-5 py-2.5 bg-deep-burgundy text-soft-gold hover:bg-champagne-gold hover:text-near-black transition-all text-[11px] tracking-[0.2em] uppercase font-medium flex items-center gap-1.5 border border-champagne-gold/30"
                    href={getWhatsAppProductUrl(
                      "Marwar Imperial Temple Rani Haar",
                      "marwar-temple-rani-haar"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            </article>

            {/* Right Column Stacked Cards (Spans 5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Card 2: Kundan Bridal Collar */}
              <article id="archival-kundan-collar" className="bg-[#260e12] border border-champagne-gold/30 p-6 flex flex-col justify-between group shadow-lg scroll-mt-28">
                <div className="relative overflow-hidden bg-near-black h-56 sm:h-64 mb-4">
                  <Image
                    src="https://lh3.googleusercontent.com/aida/AEtjO1XB2XhfeLWZu0HKdZQfcHEXkCkzsJd2spa9s2wau-CuAlhe5HIz2pQZIK_ZAwlTP2i9HsM-zNOSIqkF2b2zLRqWL7cI9KMRgs8KMqNTMYQifmzO_FoS8TnMM7O2H4MUBx8R_2LbJOrhhjS6cKTQl2zQcH5iYRfcd_AVsp8AMVT5yM6gpkPM0Xs6wk7Zv7Aosz19VGc_O4xfpHAc3fVnhp0avMT8gco6yvE04M3iKeDw1jzX5tlMN_xEng=s0"
                    alt="Rajputana Kundan Collar"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                   quality={90} />
                  <div className="absolute top-3 left-3 bg-near-black/80 backdrop-blur-md px-2.5 py-0.5 border border-champagne-gold/30 text-champagne-gold text-[10px] tracking-[0.25em] uppercase font-semibold">
                    NECKLACE
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-warm-ivory">Rajputana Kundan Collar</h3>
                  <p className="font-sans text-xs text-warm-ivory/70 mt-1 line-clamp-2">
                    Articulated gold choker with foil-set polki diamonds and south sea pearl tassels.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-champagne-gold/20 flex items-center justify-between gap-2 flex-wrap">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedProduct(goldProducts.find((p) => p.id === "archival-kundan-collar") || null)
                    }
                    className="text-champagne-gold hover:text-soft-gold text-[11px] tracking-[0.2em] uppercase font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Details</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex items-center gap-3">
                    <ProductShareButton
                      productId="archival-kundan-collar"
                      productName="Rajputana Kundan Collar"
                    />
                    <a
                      className="text-warm-ivory/80 hover:text-soft-gold text-[11px] tracking-[0.2em] uppercase font-medium flex items-center gap-1"
                      href={getWhatsAppProductUrl(
                        "Rajputana Kundan Collar",
                        "archival-kundan-collar"
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-champagne-gold" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              </article>

              {/* Card 3: Antique Gokhru Kadas */}
              <article id="sculpted-gokhru-kadas" className="bg-[#260e12] border border-champagne-gold/30 p-6 flex flex-col justify-between group shadow-lg scroll-mt-28">
                <div className="relative overflow-hidden bg-near-black h-56 sm:h-64 mb-4">
                  <Image
                    src="https://lh3.googleusercontent.com/aida/AEtjO1UMhuWnXPvSYfgbTuCK0fWtvYvhgeR7NSgGK3vIldxIyzPwOALPirdcua246jDdkqWnmlgL1XzS-4aQpOcMitO02dDBMag9vqDvx3bzAA0Mp0cSzhExhPDz8p5S4LL30g1eaBz4lAqIy5vwxGXoCRqA9jBdpS1S0p_wy6rIKvo-KZIVY4Ydl21647HREHuhkV2deC5JIUS8oOicg0f1G2uaqTBsJmBCY3VQ-awk5sg1nRPfZOqmdC82j1Y=s0"
                    alt="Hand-Hammered Gokhru Kadas"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                   quality={90} />
                  <div className="absolute top-3 left-3 bg-near-black/80 backdrop-blur-md px-2.5 py-0.5 border border-champagne-gold/30 text-champagne-gold text-[10px] tracking-[0.25em] uppercase font-semibold">
                    KADA
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-warm-ivory">Hand-Hammered Gokhru Kadas</h3>
                  <p className="font-sans text-xs text-warm-ivory/70 mt-1 line-clamp-2">
                    Monumental pair of high-relief repoussé gold bangles with internal pin lock.
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-champagne-gold/20 flex items-center justify-between gap-2 flex-wrap">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedProduct(goldProducts.find((p) => p.id === "sculpted-gokhru-kadas") || null)
                    }
                    className="text-champagne-gold hover:text-soft-gold text-[11px] tracking-[0.2em] uppercase font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Details</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                  <div className="flex items-center gap-3">
                    <ProductShareButton
                      productId="sculpted-gokhru-kadas"
                      productName="Hand-Hammered Gokhru Kadas"
                    />
                    <a
                      className="text-warm-ivory/80 hover:text-soft-gold text-[11px] tracking-[0.2em] uppercase font-medium flex items-center gap-1"
                      href={getWhatsAppProductUrl(
                        "Hand-Hammered Gokhru Kadas",
                        "sculpted-gokhru-kadas"
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-champagne-gold" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Secondary Grid for Rest of Gold Works */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goldProducts.slice(2).map((product) => (
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
          SECTION 04: CINEMATIC METAL TRANSITION (GOLD -> SILVER)
          ======================================================== */}
      <section className="relative w-full py-28 md:py-36 bg-gradient-to-b from-near-black via-[#1E0B0E] to-[#0C0E14] overflow-hidden flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_center,_#FAF7EF,_transparent_70%)]"></div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-champagne-gold font-sans mb-4">
            TONAL METALLIC SHIFT
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light uppercase tracking-tight text-warm-ivory">
            FROM <span className="gold-metallic-text font-serif italic">Warmth</span> TO{" "}
            <span className="silver-metallic-text font-serif italic">Reflection</span>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-champagne-gold via-warm-ivory to-slate-400 my-6"></div>
          <p className="font-sans text-xs sm:text-sm tracking-wide text-warm-ivory/70 max-w-lg leading-relaxed font-light">
            Where the golden sun yields to the crisp moonlit sheen of 925 sterling silver, shaped by traditional artisans in Rajasthan.
          </p>
          <button
            type="button"
            onClick={() => scrollToDiscipline("silver")}
            className="text-xs font-sans tracking-widest text-slate-300 hover:text-white uppercase inline-flex items-center gap-2 cursor-pointer transition-colors mt-6"
          >
            <span>Proceed to Silver Atelier ↓</span>
          </button>
        </div>
      </section>

      {/* ========================================================
          SECTION 05: SILVER EXHIBITION (ALWAYS VISIBLE)
          ======================================================== */}
      <section id="silver-section" className="w-full py-20 md:py-28 px-6 lg:px-14 bg-[#0E1017] border-b border-slate-800/60 scroll-mt-28">
        <div className="max-w-7xl mx-auto flex flex-col">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-slate-800/80 pb-10">
            <div>
              <div className="flex items-center gap-2 text-slate-300 mb-3">
                <span className="text-[10px] tracking-[0.3em] font-semibold uppercase text-slate-300">
                  02 — SECONDARY EXHIBITION
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-[10px] tracking-[0.3em] font-semibold uppercase text-warm-ivory/60">
                  PURE 925 STERLING SILVER
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-warm-ivory uppercase tracking-tight">
                SILVER <span className="silver-metallic-text italic font-serif">Jewellery</span>
              </h2>
              <p className="font-sans text-warm-ivory/70 text-sm md:text-base mt-2 max-w-xl font-light">
                Explore our silver jewellery collection. Quiet luxury, oxidized antique patina, and pure sculptural adornment.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-warm-ivory text-near-black font-semibold text-[11px] tracking-[0.22em] uppercase hover:bg-slate-200 transition-colors shadow-lg"
                href="https://wa.me/918854000203?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20the%20Pure%20Silver%20collection."
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Staggered Showcase Spec from Stitch (Spans 5 cols + 7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
            {/* Silver Hero: Nagaur Tribal Coin Hasli (5 cols) */}
            <article id="coin-drop-silver-choker" className="lg:col-span-5 bg-[#141822] border border-slate-800 p-6 sm:p-8 flex flex-col justify-between group shadow-xl scroll-mt-28">
              <div className="relative overflow-hidden bg-black/60 h-[380px] sm:h-[460px] mb-6">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XA9G-DoGUd0VQ78axYeWb-HLcSZzsQ6roshLWS3VsUVnJShBic_lusj-DpEGSRbVY2kkK0N2bAUsvc-Ccq_q9i7A9h4R1okNvVHgq3DI3-DzBJS_7GiydNBaSfJwTFP2fG9-7SRDKnkXoxv45ETB3Z5nrUQekvFCXehrLyG6kP4csF0_3LS1k24PV_T40C38izGGlr_5-AJzphcxHWc78oz-r53zdnbU2hSF6CTTvVEVmRwPGrIFFf5Qw=s0"
                  alt="Nagaur Tribal Coin Hasli"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                 quality={90} />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-slate-600 text-slate-200 text-[10px] tracking-[0.25em] uppercase font-semibold">
                  ANTIQUE HASLI
                </div>
              </div>
              <div>
                <span className="text-[10px] tracking-[0.25em] text-slate-400 uppercase font-medium">
                  Archival Heritage
                </span>
                <h3 className="font-serif text-2xl text-warm-ivory mt-1">Nagaur Tribal Coin Hasli</h3>
                <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 mt-2">
                  Heavy 925 sterling collar featuring embossed medallion fringe and deep oxidized tribal repoussé engraving.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedProduct(silverProducts.find((p) => p.id === "coin-drop-silver-choker") || null)
                    }
                    className="text-slate-300 hover:text-warm-ivory text-xs tracking-[0.2em] uppercase font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <Eye className="w-4 h-4" />
                  </button>
                  <ProductShareButton
                    productId="coin-drop-silver-choker"
                    productName="Nagaur Tribal Coin Hasli"
                    variant="pill"
                  />
                </div>
                <a
                  className="px-5 py-2.5 bg-slate-800 text-warm-ivory hover:bg-slate-700 transition-all text-[11px] tracking-[0.2em] uppercase font-medium flex items-center gap-1.5 border border-slate-600"
                  href={getWhatsAppProductUrl(
                    "Nagaur Tribal Coin Hasli",
                    "coin-drop-silver-choker"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire</span>
                </a>
              </div>
            </article>

            {/* Silver Right Stack (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-8 justify-between">
              {/* Chevron Cuff */}
              <article id="hammered-silver-tribal-cuff" className="bg-[#141822] border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center group shadow-lg scroll-mt-28">
                <div className="relative overflow-hidden bg-black/60 w-full md:w-1/2 h-56 sm:h-64 shrink-0">
                  <Image
                    src="https://lh3.googleusercontent.com/aida/AEtjO1XPvYHSXDFNB9kbZ_GGX56kMBrYmeXXpV7n5_MBltn5r_Cp0M-to_f4YD4Qq2USJkkN9cJPieapelox9UiV9sWESVxUVeRU4ecnnb8LSFZJJTYu7FT4Qp7avhaVEr1IuYzZkPMd_AgR4VuR9g52Twrkq-PhRFVaQSgM8Qwxqb-rskZCoBJzPTIm1Fw4SMrb04EHQ-Tu2owQGf2D4kRLaKBspKUeHTHHbFmJwOb8TpTqtNCStmoJm072edE=s0"
                    alt="Hammered Chevron Silver Cuff"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                   quality={90} />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-0.5 border border-slate-600 text-slate-200 text-[10px] tracking-[0.25em] uppercase font-semibold">
                    KADA / CUFF
                  </div>
                </div>
                <div className="flex flex-col justify-between flex-1 w-full">
                  <div>
                    <h3 className="font-serif text-xl text-warm-ivory">Hammered Chevron Silver Cuff</h3>
                    <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 mt-2 leading-relaxed">
                      Satin-burnished 925 silver cuff inscribed with rhythmic chevron chevrons and softened natural edges.
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-slate-800 flex items-center justify-between gap-2 flex-wrap">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedProduct(silverProducts.find((p) => p.id === "hammered-silver-tribal-cuff") || null)
                      }
                      className="text-slate-300 hover:text-warm-ivory text-[11px] tracking-[0.2em] uppercase font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Details</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex items-center gap-3">
                      <ProductShareButton
                        productId="hammered-silver-tribal-cuff"
                        productName="Hammered Chevron Silver Cuff"
                      />
                      <a
                        className="text-slate-400 hover:text-warm-ivory text-[11px] tracking-[0.2em] uppercase font-medium flex items-center gap-1"
                        href={getWhatsAppProductUrl(
                          "Hammered Chevron Silver Cuff",
                          "hammered-silver-tribal-cuff"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-slate-300" />
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              {/* Moonstone Ring */}
              <article id="raw-moonstone-silver-ring" className="bg-[#141822] border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center group shadow-lg scroll-mt-28">
                <div className="relative overflow-hidden bg-black/60 w-full md:w-1/2 h-56 sm:h-64 shrink-0">
                  <Image
                    src="https://lh3.googleusercontent.com/aida/AEtjO1WdzzREAZQlhEZ2a2f2MpDOa2_FvEOkmXfaL4p6as1xLhcC-GFleW6UQ8C1X7AKue_s1MSGiqcOQi7KmfPexTTvMVs-CKhaRSkw3QJ7t5vAqZuoHDKLWjQJk-GKQ9Ix_BxTLVLt7SrqTZ8Ax6YjLiK6DykZIX3tcR8XR4OfPSSvq5IfTxror--XG-5ncvAG6O8oz4A2RaKJ9Wi7tkXWajvr9Jb6qiDrXsn9hkW9wH1qJbsXLf67TPU-nDY=s0"
                    alt="Raw Moonstone Filigree Ring"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                   quality={90} />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-0.5 border border-slate-600 text-slate-200 text-[10px] tracking-[0.25em] uppercase font-semibold">
                    RING
                  </div>
                </div>
                <div className="flex flex-col justify-between flex-1 w-full">
                  <div>
                    <h3 className="font-serif text-xl text-warm-ivory">Raw Moonstone Filigree Ring</h3>
                    <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 mt-2 leading-relaxed">
                      Uncut celestial moonstone encapsulated in multi-tiered wirework granulation on 925 silver.
                    </p>
                  </div>
                  <div className="pt-4 mt-6 border-t border-slate-800 flex items-center justify-between gap-2 flex-wrap">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedProduct(silverProducts.find((p) => p.id === "raw-moonstone-silver-ring") || null)
                      }
                      className="text-slate-300 hover:text-warm-ivory text-[11px] tracking-[0.2em] uppercase font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Details</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex items-center gap-3">
                      <ProductShareButton
                        productId="raw-moonstone-silver-ring"
                        productName="Raw Moonstone Filigree Ring"
                      />
                      <a
                        className="text-slate-400 hover:text-warm-ivory text-[11px] tracking-[0.2em] uppercase font-medium flex items-center gap-1"
                        href={getWhatsAppProductUrl(
                          "Raw Moonstone Filigree Ring",
                          "raw-moonstone-silver-ring"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-slate-300" />
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Secondary Grid for Rest of Silver Works */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {silverProducts.slice(2).map((product) => (
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
          SECTION 05: FIND YOUR PIECE (Visual Shortcut Pills)
          ======================================================== */}
      <section className="w-full bg-near-black py-16 px-6 lg:px-14 border-b border-champagne-gold/20">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <span className="text-[10px] tracking-[0.3em] font-semibold uppercase text-champagne-gold font-sans mb-2">
            QUICK JUMP
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-warm-ivory tracking-tight mb-3">
            Find Your Piece
          </h3>
          <p className="font-sans text-xs sm:text-sm text-warm-ivory/65 max-w-md mb-8 font-light">
            Navigate smoothly through our essential jewellery archetypes without cumbersome filters.
          </p>

          {/* Shortcut Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => scrollToArchetype("ring")}
              className="px-6 py-3 border border-champagne-gold/40 bg-[#260e12] hover:bg-champagne-gold hover:text-near-black transition-all text-xs font-semibold tracking-[0.2em] uppercase cursor-pointer"
            >
              RINGS
            </button>
            <button
              type="button"
              onClick={() => scrollToArchetype("earrings")}
              className="px-6 py-3 border border-champagne-gold/40 bg-[#260e12] hover:bg-champagne-gold hover:text-near-black transition-all text-xs font-semibold tracking-[0.2em] uppercase cursor-pointer"
            >
              EARRINGS
            </button>
            <button
              type="button"
              onClick={() => scrollToArchetype("necklace")}
              className="px-6 py-3 border border-champagne-gold/40 bg-[#260e12] hover:bg-champagne-gold hover:text-near-black transition-all text-xs font-semibold tracking-[0.2em] uppercase cursor-pointer"
            >
              NECKLACES
            </button>
            <button
              type="button"
              onClick={() => scrollToArchetype("bangles")}
              className="px-6 py-3 border border-champagne-gold/40 bg-[#260e12] hover:bg-champagne-gold hover:text-near-black transition-all text-xs font-semibold tracking-[0.2em] uppercase cursor-pointer"
            >
              BANGLES &amp; KADAS
            </button>
            <button
              type="button"
              onClick={() => scrollToArchetype("chains")}
              className="px-6 py-3 border border-slate-600 bg-[#141822] hover:bg-warm-ivory hover:text-near-black transition-all text-xs font-semibold tracking-[0.2em] uppercase cursor-pointer"
            >
              SILVER CHAINS &amp; HASLIS
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 06: SELECTED PIECES (MUSEUM HIGHLIGHT VITRINE)
          ======================================================== */}
      <section className="w-full bg-[#1E0B0E] py-24 md:py-32 px-6 lg:px-14 border-b border-champagne-gold/20">
        <div className="max-w-7xl mx-auto flex flex-col">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 text-champagne-gold mb-3">
              <span className="w-6 h-[1px] bg-champagne-gold/50"></span>
              <span className="text-[10px] tracking-[0.3em] font-semibold uppercase font-sans">
                MUSEUM VITRINE
              </span>
              <span className="w-6 h-[1px] bg-champagne-gold/50"></span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-warm-ivory uppercase tracking-tight">
              SELECTED <span className="gold-metallic-text font-serif italic">Pieces</span>
            </h2>
            <p className="font-sans text-xs sm:text-base text-warm-ivory/70 mt-3 font-light">
              Standout archival treasures conserved under the curatorial vision of Shyam Diamonds &amp; Balaji Jewellers.
            </p>
          </div>

          {/* 4 Standout Archival Highlights in Full-width Editorial Frames */}
          <div className="space-y-16">
            {/* Archival Piece 01 */}
            <div className="bg-near-black border border-champagne-gold/30 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center shadow-2xl">
              <div className="lg:col-span-7 h-[280px] sm:h-[400px] lg:h-[460px] relative overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XB2XhfeLWZu0HKdZQfcHEXkCkzsJd2spa9s2wau-CuAlhe5HIz2pQZIK_ZAwlTP2i9HsM-zNOSIqkF2b2zLRqWL7cI9KMRgs8KMqNTMYQifmzO_FoS8TnMM7O2H4MUBx8R_2LbJOrhhjS6cKTQl2zQcH5iYRfcd_AVsp8AMVT5yM6gpkPM0Xs6wk7Zv7Aosz19VGc_O4xfpHAc3fVnhp0avMT8gco6yvE04M3iKeDw1jzX5tlMN_xEng=s0"
                  alt="Archival 01 The Rajputana Kundan Choker Suite"
                  fill
                  className="object-cover object-center filter brightness-95"
                 quality={90} />
              </div>
              <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between h-full bg-[#260e12]">
                <div>
                  <span className="font-serif text-5xl sm:text-6xl text-champagne-gold/30 leading-none block font-light">
                    01
                  </span>
                  <span className="text-[10px] tracking-[0.25em] text-champagne-gold uppercase font-semibold mt-2 block font-sans">
                    22K GOLD BRIDAL MASTERWORK
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-warm-ivory mt-2">
                    The Rajputana Kundan Collar
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-warm-ivory/75 mt-3 leading-relaxed font-light">
                    Sculpted with pure 24K gold foil bezels enclosing uncut Polki diamonds. Flanked by hand-enameled meenakari reverses and south sea baroque pearls.
                  </p>
                </div>
                <div className="pt-8 mt-8 border-t border-champagne-gold/20 flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedProduct(PRODUCTS.find((p) => p.id === "archival-kundan-collar") || null)
                      }
                      className="text-champagne-gold hover:text-soft-gold text-xs tracking-[0.2em] uppercase font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>View Details</span>
                      <Eye className="w-4 h-4" />
                    </button>
                    <ProductShareButton
                      productId="archival-kundan-collar"
                      productName="The Rajputana Kundan Collar"
                      variant="pill"
                    />
                  </div>
                  <a
                    className="text-champagne-gold hover:text-soft-gold text-xs tracking-[0.2em] uppercase font-semibold flex items-center gap-1.5"
                    href={getWhatsAppProductUrl(
                      "The Rajputana Kundan Collar",
                      "archival-kundan-collar"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Enquire Suite</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Archival Piece 02 */}
            <div className="bg-near-black border border-champagne-gold/30 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center shadow-2xl">
              <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between h-full bg-[#260e12] order-2 lg:order-1">
                <div>
                  <span className="font-serif text-5xl sm:text-6xl text-champagne-gold/30 leading-none block font-light">
                    02
                  </span>
                  <span className="text-[10px] tracking-[0.25em] text-champagne-gold uppercase font-semibold mt-2 block font-sans">
                    TEMPLE GOLD ARCHITECTURE
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-warm-ivory mt-2">
                    The Parvatsar Temple Rani Haar
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-warm-ivory/75 mt-3 leading-relaxed font-light">
                    Substantial hand-worked 22K gold wirework presenting mythological motifs framed within delicate gokhru floral creepers and cascading tassels.
                  </p>
                </div>
                <div className="pt-8 mt-8 border-t border-champagne-gold/20 flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedProduct(PRODUCTS.find((p) => p.id === "marwar-temple-rani-haar") || null)
                      }
                      className="text-champagne-gold hover:text-soft-gold text-xs tracking-[0.2em] uppercase font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>View Details</span>
                      <Eye className="w-4 h-4" />
                    </button>
                    <ProductShareButton
                      productId="marwar-temple-rani-haar"
                      productName="The Parvatsar Temple Rani Haar"
                      variant="pill"
                    />
                  </div>
                  <a
                    className="text-champagne-gold hover:text-soft-gold text-xs tracking-[0.2em] uppercase font-semibold flex items-center gap-1.5"
                    href={getWhatsAppProductUrl(
                      "The Parvatsar Temple Rani Haar",
                      "marwar-temple-rani-haar"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Enquire Suite</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-7 h-[280px] sm:h-[400px] lg:h-[460px] relative overflow-hidden order-1 lg:order-2">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XnH8ftKWNSjn5HgVmzUItyXCxoY1XKgyv2x5WZS9UiCkZS4hzeLRYRTgmmEZ-o-F5PHSHYsV27Mbm0IitLEA-lku84ZOkd4iyD54moD4nP4rr4d8i7yTl5Up8rDz-QUhQ4mYGbqcqkv7KXqv85DZOfdj9PoRvYOHvnXyVbonHaLmYWIhd0-GDRGVNZwo1usVmZ-eRGuWCaSjJZpJ-plq3f95_vMwZZ3q7qhsBociB13sTvcd36P2NFffw=s0"
                  alt="Archival 02 The Parvatsar Temple Rani Haar"
                  fill
                  className="object-cover object-center filter brightness-95"
                 quality={90} />
              </div>
            </div>

            {/* Archival Piece 03 */}
            <div className="bg-near-black border border-slate-800 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center shadow-2xl">
              <div className="lg:col-span-7 h-[280px] sm:h-[400px] lg:h-[460px] relative overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XA9G-DoGUd0VQ78axYeWb-HLcSZzsQ6roshLWS3VsUVnJShBic_lusj-DpEGSRbVY2kkK0N2bAUsvc-Ccq_q9i7A9h4R1okNvVHgq3DI3-DzBJS_7GiydNBaSfJwTFP2fG9-7SRDKnkXoxv45ETB3Z5nrUQekvFCXehrLyG6kP4csF0_3LS1k24PV_T40C38izGGlr_5-AJzphcxHWc78oz-r53zdnbU2hSF6CTTvVEVmRwPGrIFFf5Qw=s0"
                  alt="Archival 03 Pure 925 Antique Coin Choker"
                  fill
                  className="object-cover object-center filter brightness-95"
                 quality={90} />
              </div>
              <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between h-full bg-[#141822]">
                <div>
                  <span className="font-serif text-5xl sm:text-6xl text-slate-500/30 leading-none block font-light">
                    03
                  </span>
                  <span className="text-[10px] tracking-[0.25em] text-slate-300 uppercase font-semibold mt-2 block font-sans">
                    STERLING 925 TRIBAL PATINA
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-warm-ivory mt-2">
                    The Nagaur Antique Coin Hasli
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-warm-ivory/75 mt-3 leading-relaxed font-light">
                    Historical rigid torque forged from pure 925 sterling silver, hand-engraved with ritualistic Rajput motifs and weighted coin medallions.
                  </p>
                </div>
                <div className="pt-8 mt-8 border-t border-slate-800 flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedProduct(PRODUCTS.find((p) => p.id === "coin-drop-silver-choker") || null)
                      }
                      className="text-slate-300 hover:text-warm-ivory text-xs tracking-[0.2em] uppercase font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>View Details</span>
                      <Eye className="w-4 h-4" />
                    </button>
                    <ProductShareButton
                      productId="coin-drop-silver-choker"
                      productName="The Nagaur Antique Coin Hasli"
                      variant="pill"
                    />
                  </div>
                  <a
                    className="text-slate-300 hover:text-warm-ivory text-xs tracking-[0.2em] uppercase font-semibold flex items-center gap-1.5"
                    href={getWhatsAppProductUrl(
                      "The Nagaur Antique Coin Hasli",
                      "coin-drop-silver-choker"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Enquire Suite</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Archival Piece 04 */}
            <div className="bg-near-black border border-champagne-gold/30 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center shadow-2xl">
              <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between h-full bg-[#260e12] order-2 lg:order-1">
                <div>
                  <span className="font-serif text-5xl sm:text-6xl text-champagne-gold/30 leading-none block font-light">
                    04
                  </span>
                  <span className="text-[10px] tracking-[0.25em] text-champagne-gold uppercase font-semibold mt-2 block font-sans">
                    SOLID GOLD FORGED REPOUSSÉ
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-warm-ivory mt-2">
                    The Royal Gokhru Pair
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-warm-ivory/75 mt-3 leading-relaxed font-light">
                    Ceremonial pair of heavy 22K bangles, repoussé-chased with interlocking foliage and miniature florets. Finished with internal safety screw clasp.
                  </p>
                </div>
                <div className="pt-8 mt-8 border-t border-champagne-gold/20 flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedProduct(PRODUCTS.find((p) => p.id === "sculpted-gokhru-kadas") || null)
                      }
                      className="text-champagne-gold hover:text-soft-gold text-xs tracking-[0.2em] uppercase font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>View Details</span>
                      <Eye className="w-4 h-4" />
                    </button>
                    <ProductShareButton
                      productId="sculpted-gokhru-kadas"
                      productName="The Royal Gokhru Pair"
                      variant="pill"
                    />
                  </div>
                  <a
                    className="text-champagne-gold hover:text-soft-gold text-xs tracking-[0.2em] uppercase font-semibold flex items-center gap-1.5"
                    href={getWhatsAppProductUrl(
                      "The Royal Gokhru Pair",
                      "sculpted-gokhru-kadas"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Enquire Suite</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-7 h-[280px] sm:h-[400px] lg:h-[460px] relative overflow-hidden order-1 lg:order-2">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1UMhuWnXPvSYfgbTuCK0fWtvYvhgeR7NSgGK3vIldxIyzPwOALPirdcua246jDdkqWnmlgL1XzS-4aQpOcMitO02dDBMag9vqDvx3bzAA0Mp0cSzhExhPDz8p5S4LL30g1eaBz4lAqIy5vwxGXoCRqA9jBdpS1S0p_wy6rIKvo-KZIVY4Ydl21647HREHuhkV2deC5JIUS8oOicg0f1G2uaqTBsJmBCY3VQ-awk5sg1nRPfZOqmdC82j1Y=s0"
                  alt="Archival 04 Pair of 22K Antique Rajasthani Gokhru Kadas"
                  fill
                  className="object-cover object-center filter brightness-95"
                 quality={90} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 07: JEWELLERY IN DETAIL (MACRO PHOTOGRAPHY)
          ======================================================== */}
      <section className="w-full bg-near-black py-20 md:py-28 px-6 lg:px-14 border-b border-champagne-gold/20">
        <div className="max-w-7xl mx-auto flex flex-col">
          <div className="max-w-3xl mb-14">
            <span className="text-[10px] tracking-[0.3em] font-semibold uppercase text-champagne-gold block mb-2 font-sans">
              MACRO PHOTOGRAPHY
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-warm-ivory uppercase tracking-tight">
              JEWELLERY IN <span className="gold-metallic-text font-serif italic">Detail</span>
            </h2>
            <p className="font-sans text-xs sm:text-base text-warm-ivory/70 mt-2 font-light">
              Look closer. Every curve reflects thousands of precise hammer strikes, pure gold foil burnishing, and unhurried Rajasthani patience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Macro 1: Kundan Foil & Stone Setting */}
            <div className="flex flex-col bg-[#260e12] border border-champagne-gold/30 overflow-hidden group shadow-lg">
              <div className="h-64 sm:h-72 relative overflow-hidden bg-near-black">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1X3b7P5UJPR_d-_wj6RMhtl9Uvki-CYiU5CCEw-I-Yr_D_XWWyKFaT-Wb7-pAqkms1PvupelAqE4jfIQzEk5WoMJhovJi8WDJXVsC7S4u77NULsT5AguwX8uGcx3dSsDgGBgOf5KG8vGHRKr8cQscaoqS0tBxJT5Cyn5YdYr4IQ0JzePEt48MfYsJgikAMId_9UwhZzNhq2bUjjD3odxzhLd8Bg6wIpiI5xG9RjkhYJmumNH8amV1m5DkE=s0"
                  alt="Traditional Kundan gold setting with raw uncut diamonds"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                 quality={90} />
              </div>
              <div className="p-6">
                <span className="text-[10px] tracking-[0.25em] text-champagne-gold uppercase font-medium font-sans">
                  DISCIPLINE 01
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-warm-ivory mt-1">
                  24K Kundan Foil Setting
                </h3>
                <p className="font-sans text-xs text-warm-ivory/70 mt-2 leading-relaxed font-light">
                  Sheets of pure 24-karat refined gold foil burnished layer upon layer to hold uncut crystal polki diamonds securely.
                </p>
              </div>
            </div>

            {/* Macro 2: Hand-Chiseled Cuff Edge */}
            <div className="flex flex-col bg-[#260e12] border border-champagne-gold/30 overflow-hidden group shadow-lg">
              <div className="h-64 sm:h-72 relative overflow-hidden bg-near-black">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1WnccR0AyUcmlzu2RWxfGe3bcyYMnnWfriMx_BqGbbZcmlwNgA1mQh1wcJZdf7OcF1Nj96RbBmBDsB0ZIdk5Nq9hfEUvDhkOvoAl6rzJ7ptOeDr0cTARFWnXxRTWOPJ-MI8O2klUsgYkZsxOei0mFPLodz9fzZ7jtvD-BvXHIFq_RD59sgkyKSTYkQs1oZySEWIfgMyaF-pMY7xbJX57XBVZP2d964IIUldivyaI8-DcQ2mpbvSvV8ViB8=s0"
                  alt="Gold metallic grain along a 22K cuff edge"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                 quality={90} />
              </div>
              <div className="p-6">
                <span className="text-[10px] tracking-[0.25em] text-champagne-gold uppercase font-medium font-sans">
                  DISCIPLINE 02
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-warm-ivory mt-1">
                  Hand-Chiseled Stippled Rim
                </h3>
                <p className="font-sans text-xs text-warm-ivory/70 mt-2 leading-relaxed font-light">
                  Intricate stippled granulation and hand-chiseled textured rims forged to catch ambient natural light at subtle angles.
                </p>
              </div>
            </div>

            {/* Macro 3: Gold Repoussé & Micro-Granulation */}
            <div className="flex flex-col bg-[#260e12] border border-champagne-gold/30 overflow-hidden group shadow-lg">
              <div className="h-64 sm:h-72 relative overflow-hidden bg-near-black">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1XP4V2p_xKvgj72X3tXGOn1pqqIGO4iTuk4XQaXxtI17_3OJ3qAZrJNcLnWmrE1XqFqzEUfbiS-_UpdSSL_H0ocKzRVcoZgA255YDTEwEUCiZmMf5w9pfhZV2AhBogMDMlhkI0PkuPbRiM0AYnyPjWIjQr34WWNGVHPJhVVt8ejlp-4LxFjgNaKj1QdO6BS99L8yzv9LM08bIqjUIMZsfo6SzJzQIApR6-B5jhIdnFLO7Y9HyAo2vVpvWc=s0"
                  alt="22K gold repoussé surface with micro-granulation spheres"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                 quality={90} />
              </div>
              <div className="p-6">
                <span className="text-[10px] tracking-[0.25em] text-champagne-gold uppercase font-medium font-sans">
                  DISCIPLINE 03
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-warm-ivory mt-1">
                  Micro-Granulation Relief
                </h3>
                <p className="font-sans text-xs text-warm-ivory/70 mt-2 leading-relaxed font-light">
                  Minute solid gold spheres fused onto beaten gold plaques, creating organic topography reminiscent of royal jewellery courts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 08: ENQUIRE (DEEP BURGUNDY CONCIERGE BLOCK)
          ======================================================== */}
      <section className="w-full bg-deep-burgundy py-20 md:py-28 px-6 lg:px-14 text-center border-b border-champagne-gold/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(241,217,154,0.4),_transparent_70%)]"></div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-soft-gold font-semibold mb-3 font-sans">
            CONCIERGE &amp; ATELIER
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-warm-ivory uppercase tracking-tight">
            FOUND YOUR <span className="gold-metallic-text font-serif italic">Piece?</span>
          </h2>
          <p className="font-sans text-xs sm:text-base text-warm-ivory/80 mt-4 max-w-xl font-light leading-relaxed">
            Talk to us directly about the jewellery you&apos;re interested in. We will personally guide you through custom weights, specifications, and showroom viewings in Parvatsar.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
            <a
              className="w-full sm:w-auto px-5 sm:px-8 py-4 bg-champagne-gold text-near-black font-semibold text-xs tracking-wider sm:tracking-[0.25em] uppercase hover:bg-soft-gold transition-all shadow-xl flex items-center justify-center gap-2"
              href="https://wa.me/918854000203?text=Hello%2C%20I%20am%20interested%20in%20consulting%20on%20Balaji%20Jewellers%20collections."
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP US (+91 88540 00203)</span>
            </a>
            <a
              className="w-full sm:w-auto px-5 sm:px-8 py-4 border border-champagne-gold/40 bg-dark-wine/70 text-soft-gold hover:bg-dark-wine text-xs tracking-wider sm:tracking-[0.25em] uppercase font-semibold transition-all flex items-center justify-center gap-2"
              href="tel:+918854000203"
            >
              <Phone className="w-4 h-4" />
              <span>CALL NOW</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 09: VISIT THE SHOWROOM (WARM IVORY CONTRAST)
          ======================================================== */}
      <section className="w-full bg-warm-ivory text-near-black py-20 md:py-28 px-6 lg:px-14" id="showroom">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 text-deep-burgundy mb-3">
              <span className="w-6 h-[1px] bg-deep-burgundy"></span>
              <span className="text-[10px] tracking-[0.3em] font-semibold uppercase font-sans">
                PARVATSAR FLAGSHIP
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-near-black uppercase tracking-tight font-normal leading-tight">
              SOME PIECES NEED TO BE <span className="italic font-serif text-deep-burgundy">Seen in Person.</span>
            </h2>
            <p className="font-sans text-near-black/75 text-sm sm:text-base mt-4 max-w-xl font-light leading-relaxed">
              Feel the natural heft of pure gold and the cool touch of handcrafted sterling silver under specialized showroom lighting in our private consultation salons.
            </p>
            <div className="mt-8 space-y-3 font-sans text-xs sm:text-sm text-near-black/85">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-deep-burgundy shrink-0" />
                <span><strong>Location:</strong> Bank Wali Gali, Parvatsar, Rajasthan – 341512</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-deep-burgundy shrink-0" />
                <span><strong>Timings:</strong> Open Daily 9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-deep-burgundy shrink-0" />
                <span>Verified Quality Assured • Fine Artisan Craftsmanship</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                className="px-7 py-3.5 bg-deep-burgundy text-warm-ivory text-xs font-semibold tracking-[0.2em] uppercase hover:bg-dark-wine transition-all flex items-center gap-2"
                href="https://maps.google.com/?q=Balaji+Jewellers+Parvatsar+Rajasthan"
                rel="noopener noreferrer"
                target="_blank"
              >
                <NavIcon className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>
              <a
                className="px-7 py-3.5 border border-deep-burgundy text-deep-burgundy hover:bg-deep-burgundy hover:text-warm-ivory text-xs font-semibold tracking-[0.2em] uppercase transition-all flex items-center gap-2"
                href={getWhatsAppShowroomUrl()}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP US</span>
              </a>
            </div>
          </div>

          {/* Showroom Editorial Showcase Plaque */}
          <div className="lg:col-span-5 bg-dark-wine p-8 text-warm-ivory border border-champagne-gold/40 shadow-2xl relative">
            <span className="text-[10px] tracking-[0.25em] text-champagne-gold uppercase font-semibold block mb-2 font-sans">
              PRIVATE SALON CONSULTATION
            </span>
            <h3 className="font-serif text-2xl text-warm-ivory">Balaji Jewellers × Shyam Diamonds</h3>
            <p className="font-sans text-xs text-warm-ivory/70 mt-2 leading-relaxed font-light">
              Patrons travelling from Jaipur, Ajmer, Kishangarh, and Nagaur district can connect directly with us for bespoke bridal jewellery and consultation.
            </p>
            <div className="mt-6 pt-6 border-t border-champagne-gold/20 space-y-2 text-xs font-sans">
              <a
                href="tel:+918854000203"
                className="text-soft-gold font-medium flex items-center gap-2 hover:text-champagne-gold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-champagne-gold" />
                <span>Direct Atelier Line: +91 88540 00203</span>
              </a>
              <p className="text-warm-ivory/60">Dedicated Attention Upon Arrival</p>
            </div>
          </div>
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
