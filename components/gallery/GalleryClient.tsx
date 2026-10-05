"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ChevronLeft, ChevronRight, ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppProductUrl } from "@/lib/utils/whatsapp";

interface GalleryItem {
  id: string;
  chapter: string;
  title: string;
  subtitle: string;
  medium: string;
  image: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    chapter: "CHAPTER I: GOLD & GRAIN",
    title: "The Monumental Rani Haar",
    subtitle: "TRAVERTINE ARCHIVE STUDY",
    medium: "Gold Jewellery Archive",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBVXL4YJnbYvU5r_GtYCMlq2seEkQpemytKG5M8Lple4M6luZgoVwBDzUMDwOuv9YLWXWVkj3ffRLKch3MFFqS9psqm4eAC8M5kyMJZP_8-sEhYFHPW3ZWwI66OPUeA5X6UZBRGY9QT2NsTT5C4gzdvIM2IO9eNUEHfO4CQOqWGifxQyyo-hGfcMXcoLXf3aHM-0XIICko-pt7mdXQq9qTKlJIfdOUULd0FC8ffT40AQLO6zkKpvt4",
    description: "Grand tiered necklace cascading vertically across raw travertine ivory marble under natural side daylight.",
  },
  {
    id: "g2",
    chapter: "CHAPTER I: GOLD & GRAIN",
    title: "Antique Torque Choker on Slate",
    subtitle: "MINERAL CONTRAST STUDY",
    medium: "Gold Jewellery Archive",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyItnmhCyybpxtTr-UQEGnFUxygGjMCGcjWz8JmXO19sJN9VIiL6u11LDCT4g7l8eAQ-YA57ic6RBQNkDj26rA3B-cbdZ7PUBh8DQS5SGWhkSKXC9HWjLYG7PESqJ2XkIELSHgA9CP4XS3DUg0QNuHJFI461uDEP20PSkJCgs2tk17WUFiIGmB5eIXU_0tO8eSwQoKdUwZrsj2rk4HjUhDGCAbpPXRjrLaHpLJSvboYIlplVqk4TUw",
    description: "Heavy torque necklace draped across raw dark mineral stone catching warm amber highlights.",
  },
  {
    id: "g3",
    chapter: "CHAPTER II: ARCHITECTURAL SILVER",
    title: "Sterling Silver Hasli & Jhumkis",
    subtitle: "PLASTER CURVE ARCHIVE",
    medium: "Silver Jewellery Archive",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1UKrzlekFvxpeaLN9pjJBRCnAZLX2OuAB4_lv-evEcc8xzyXxie2hc-mwrXPgXDxo8jkJXnBIPerbuigChE5zsk7l83J9u-0qnwMoQCtGHAkN41-rDv4kIU8rLGXkcQCsBp0iIh5DPE3pXQ3TiB0K0Seo5iZmvAwJtefeZLTJZdmSB89KCKouF5xoJJNWKCd_M_ktWRDtwDJiV6nDqatKYJaawIyafGr79DXTCbRgna3Wc_GphEGMEd0fo",
    description: "Sculptural silver cuff bracelets and jhumki drops positioned against ivory plaster architectural curves.",
  },
  {
    id: "g4",
    chapter: "CHAPTER II: ARCHITECTURAL SILVER",
    title: "Coin Drop Choker on Raw Terracotta",
    subtitle: "TRIBAL SHADOW STUDY",
    medium: "Silver Jewellery Archive",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1Xa1lbKYQfVaaXn9DaXF5j7617V-nOmWrai8zEVFCyFyojuOzI_bjGXjU8SO0UBh-b_XmsgPViLglRmRzMCdxfWDNEC11m7KUnC0YOD8aHPK5mZZh7Z9PFi6j7jqVTINdykS1zUykR1_dMdjca-4Y2PFGYFYd7QhFGWtckfoStw3ocQBtsZ6beMBGKPSmPF8k6vuYaVhVfA2OPMhIy2URprJ93KY35pGFnw3JCSqFOO8MtmxcydeenvcWs",
    description: "Sterling silver choker with suspended coin drops displayed vertically on a raw terracotta clay plinth.",
  },
  {
    id: "g5",
    chapter: "CHAPTER III: LIGHT & FORM",
    title: "Cocktail Ring on Sandstone",
    subtitle: "SOLITARY ARCHIVE",
    medium: "Jewellery Form Study",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1Xlvevv13UmWc7Qw1mTo1riTcCRA0MyKSvd6BBvwl3c-nbSRSraVTvqmQgcWdCrRHhRw0ZspGPOQ-kGHagRsvI01A7gYGg_xHcmw7Jqqz1DIUM4LgVcTWnyDszyodKEIvHxFal3pMM7N-3C5ASvlufptBZSrH3f4thfJrU4YmGI6dn14QaN9nEmt-UiXvurGQQeS8QFNy2Zlk1duPym3IRXPpy3s5ju-zz7ZBk9196GGInn0aSqk07GbFU",
    description: "Cocktail ring resting on desert sandstone plinth bathed in soft morning raking light.",
  },
  {
    id: "g6",
    chapter: "CHAPTER III: LIGHT & FORM",
    title: "Bezel Setting with Gemstone Accents",
    subtitle: "FACET INSPECTION",
    medium: "Detail Archive",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1UlNvqS8HH4CAOl2KNlYSXoAjxBPMit1dzKSkwqEA0X00A7mXct8Q3TH3OHhL7d4OOEDRSFC2wPypUjAO3Of9n0bqDguYQ4A1Ek_pOofoj6FFd28MIZkB1pDVtvjPXKhgjC9_68rOX2bkejRUwRhmdFMih4fTEet8cSr6X9VXuOpDkXw8GassNGhRb78E1380W8_7jcDaUX8t2eYfr3l_TD_6JuWpwfeGicm9HtYJzG0SlPOVX3I2iq_g",
    description: "Extreme close-up of a handcrafted bezel setting holding an uncut brilliant stone against rich deep velvet.",
  },
];

export function GalleryClient() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState(1);

  const scrollTrack = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const scrollAmount = trackRef.current.clientWidth * 0.75;
    trackRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!trackRef.current) return;
    const scrollLeft = trackRef.current.scrollLeft;
    const itemWidth = 480;
    const index = Math.min(
      Math.max(1, Math.round(scrollLeft / itemWidth) + 1),
      GALLERY_ITEMS.length
    );
    setActivePanel(index);
  };

  return (
    <div className="w-full bg-near-black text-warm-ivory selection:bg-deep-burgundy selection:text-soft-gold pt-20">
      {/* ========================================================
          SECTION 01: IVORY EXHIBITION THRESHOLD (~92vh)
          ======================================================== */}
      <section className="relative w-full min-h-[90vh] bg-[#FAF7EF] text-[#251819] flex flex-col justify-between overflow-hidden px-6 lg:px-14 py-16 select-none">
        {/* Ambient subtle tone */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7EF] via-[#FAF7EF]/90 to-transparent z-10 pointer-events-none"></div>

        {/* Entrance Header */}
        <div className="relative z-20 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#251819]/15">
          <div className="flex items-center gap-2 text-[#450006]">
            <Sparkles className="w-4 h-4 text-champagne-gold" />
            <span className="font-sans text-xs tracking-monumental uppercase font-semibold">
              BALAJI JEWELLERS &amp; SHYAM DIAMONDS · VISUAL MONOGRAPH
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-sans text-[#251819]/70 tracking-widest uppercase">
            <span>PARVATSAR · RAJASTHAN</span>
            <span>•</span>
            <span>VISUAL EXHIBITION</span>
          </div>
        </div>

        {/* Lead Narrative */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-auto py-8">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <span className="font-sans text-xs tracking-widest text-[#450006] uppercase font-semibold">
              EXHIBITION FOLIO 01 / {GALLERY_ITEMS.length}
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-[#251819] leading-[1.05] tracking-tight">
              A Collection <br />
              <span className="italic font-light text-[#450006]">Of Character.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#403132] max-w-xl font-light leading-relaxed">
              Jewellery designed to become part of living moments. An aesthetic exploration of gold, silver, and stone settings, documented in singular isolation.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="p-5 bg-[#F2EDE2] border-l-2 border-[#D8B46A]">
              <span className="font-sans text-[10px] tracking-widest text-[#251819] uppercase font-semibold block mb-1">
                CURATORIAL NOTE
              </span>
              <p className="font-sans text-xs text-[#554241] leading-relaxed font-light">
                Distinct from our product catalogue, the Gallery is conceived as a visual monograph of light, form, and texture.
              </p>
            </div>
          </div>
        </div>

        {/* Peek Preview of Masterpiece on Far Right */}
        <div className="absolute right-[-6%] md:right-[2%] top-1/2 -translate-y-1/2 w-[320px] md:w-[440px] h-[70%] pointer-events-none z-10 shadow-2xl opacity-90 hidden sm:block">
          <div className="relative w-full h-full overflow-hidden border border-[#D8B46A]/30">
            <Image
              src={GALLERY_ITEMS[0].image}
              alt="Gallery Masterpiece Peek"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7EF] via-transparent to-transparent"></div>
          </div>
        </div>

        {/* Bottom Indicator */}
        <div className="relative z-20 flex items-center justify-between border-t border-[#251819]/15 pt-6">
          <div className="flex items-center gap-3 text-[#251819]">
            <div className="w-8 h-px bg-[#D8B46A]"></div>
            <span className="font-sans text-xs tracking-widest uppercase">
              SCROLL DOWN TO ENTER HORIZONTAL MONOGRAPH ↓
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("horizontal-gallery");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-10 h-10 border border-[#251819]/30 flex items-center justify-center text-[#251819] hover:bg-[#251819] hover:text-[#FAF7EF] transition-colors"
            aria-label="Scroll to Gallery"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ========================================================
          SECTION 02: THE PINNED HORIZONTAL GALLERY
          ======================================================== */}
      <section
        id="horizontal-gallery"
        className="relative w-full bg-near-black text-warm-ivory py-16 overflow-hidden border-t border-champagne-gold/20"
      >
        {/* Gallery Navigation Top Bar */}
        <div className="w-full px-6 lg:px-14 flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-champagne-gold animate-ping"></span>
            <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase">
              PERPETUAL ARCHIVE
            </span>
            <span className="text-warm-ivory/30">|</span>
            <span className="font-sans text-xs text-warm-ivory/70 tracking-widest">
              PANEL 0{activePanel} / 0{GALLERY_ITEMS.length}
            </span>
          </div>

          {/* Controls & Progress Indicator */}
          <div className="flex items-center gap-6">
            <div className="w-32 sm:w-48 h-[2px] bg-dark-wine overflow-hidden">
              <div
                className="h-full bg-champagne-gold transition-all duration-300"
                style={{ width: `${(activePanel / GALLERY_ITEMS.length) * 100}%` }}
              ></div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollTrack("left")}
                className="w-9 h-9 border border-champagne-gold/40 text-champagne-gold hover:bg-champagne-gold hover:text-near-black flex items-center justify-center transition-colors"
                aria-label="Previous artwork"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollTrack("right")}
                className="w-9 h-9 border border-champagne-gold/40 text-champagne-gold hover:bg-champagne-gold hover:text-near-black flex items-center justify-center transition-colors"
                aria-label="Next artwork"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <span className="hidden md:inline-block font-sans text-[10px] text-warm-ivory/40 tracking-widest uppercase">
              ← DRAG / SCROLL HORIZONTALLY →
            </span>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto no-scrollbar px-6 lg:px-14 pb-8 pt-2 scroll-smooth cursor-grab active:cursor-grabbing"
        >
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="shrink-0 w-[300px] sm:w-[420px] lg:w-[480px] flex flex-col relative group select-none"
            >
              {/* Giant numeral watermark */}
              <div className="absolute -top-8 -left-4 font-serif text-7xl font-bold text-dark-wine/60 pointer-events-none select-none">
                0{index + 1}
              </div>

              {/* Artwork Frame */}
              <div className="relative w-full aspect-[3/4] bg-[#260003] overflow-hidden border border-champagne-gold/25 shadow-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="font-sans text-[9px] tracking-widest text-champagne-gold bg-near-black/85 px-3 py-1 border border-champagne-gold/20 uppercase">
                    {item.medium}
                  </span>
                  <span className="font-sans text-[10px] text-warm-ivory/70 uppercase tracking-widest">
                    {item.subtitle}
                  </span>
                </div>
              </div>

              {/* Artwork Caption */}
              <div className="mt-4 flex flex-col gap-1">
                <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase">
                  {item.chapter}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-warm-ivory group-hover:text-soft-gold transition-colors">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-warm-ivory/70 font-light leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION 03: FOOTER CONVERSIONS
          ======================================================== */}
      <section className="w-full py-20 px-6 lg:px-14 bg-[#170b0c] border-t border-champagne-gold/15 text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
          <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase">
            COLLECTION INQUIRY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-warm-ivory">
            From Inspiration to Reality
          </h2>
          <p className="font-sans text-warm-ivory/70 text-sm font-light leading-relaxed">
            Interested in viewing pieces inspired by these archival studies? Explore our complete product catalogue or contact our Parvatsar salon directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/collections"
              className="px-6 py-3 bg-champagne-gold text-near-black font-sans text-xs tracking-widest uppercase font-semibold hover:bg-soft-gold transition-colors"
            >
              View Catalogue (Gold &amp; Silver)
            </Link>
            <a
              href={getWhatsAppProductUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-champagne-gold text-champagne-gold font-sans text-xs tracking-widest uppercase font-semibold hover:bg-champagne-gold/10 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiries</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
