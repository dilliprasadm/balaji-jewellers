"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MessageCircle,
  Phone,
  MapPin,
  Clock,
  Navigation as NavIcon,
  ZoomIn,
} from "lucide-react";
import { getWhatsAppProductUrl, getWhatsAppShowroomUrl } from "@/lib/utils/whatsapp";
import { SITE_CONFIG } from "@/lib/constants/siteConfig";

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
  // Chapter I: Gold & Grain
  {
    id: "g1",
    chapter: "CHAPTER I: GOLD & GRAIN",
    title: "The Monumental Rani Haar",
    subtitle: "TRAVERTINE ARCHIVE STUDY",
    medium: "Gold Jewellery Archive",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBVXL4YJnbYvU5r_GtYCMlq2seEkQpemytKG5M8Lple4M6luZgoVwBDzUMDwOuv9YLWXWVkj3ffRLKch3MFFqS9psqm4eAC8M5kyMJZP_8-sEhYFHPW3ZWwI66OPUeA5X6UZBRGY9QT2NsTT5C4gzdvIM2IO9eNUEHfO4CQOqWGifxQyyo-hGfcMXcoLXf3aHM-0XIICko-pt7mdXQq9qTKlJIfdOUULd0FC8ffT40AQLO6zkKpvt4",
    description:
      "Grand tiered necklace cascading vertically across raw travertine ivory marble under natural side daylight.",
  },
  {
    id: "g2",
    chapter: "CHAPTER I: GOLD & GRAIN",
    title: "Antique Torque Choker on Slate",
    subtitle: "MINERAL CONTRAST STUDY",
    medium: "Gold Jewellery Archive",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDyItnmhCyybpxtTr-UQEGnFUxygGjMCGcjWz8JmXO19sJN9VIiL6u11LDCT4g7l8eAQ-YA57ic6RBQNkDj26rA3B-cbdZ7PUBh8DQS5SGWhkSKXC9HWjLYG7PESqJ2XkIELSHgA9CP4XS3DUg0QNuHJFI461uDEP20PSkJCgs2tk17WUFiIGmB5eIXU_0tO8eSwQoKdUwZrsj2rk4HjUhDGCAbpPXRjrLaHpLJSvboYIlplVqk4TUw",
    description:
      "Heavy torque necklace draped across raw dark mineral stone catching warm amber highlights.",
  },
  {
    id: "g3",
    chapter: "CHAPTER I: GOLD & GRAIN",
    title: "Hand-Chiseled Repoussé Masterwork Cuff",
    subtitle: "MASTERWORK GOLDSMITHING",
    medium: "Gold Jewellery Archive",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9T5PCwpHSHpiNPS52Fup5p8_GpA1xY3RBkCf1Fx5NgdzPZb9rOyVBI5JWVf41bSBHfy5ENGCqgeNxMbjxYcb0jEPGfIS_puMZrRqZSP0ps7b5Qf0jsjA40zHDU72LZqiHJJxYG1gGiqGduZYCy6jg6W-rlQpYBatysoJLZ3U5HwYG9FtCfJd1EpO9x6D7orJt9-Z2LEZoo6QpfNxEAjxW5LBQ1XAW7_uzUapUmHwRCddJZJ3YAQn2",
    description:
      "Solid gold cuff bracelet featuring embossed relief motifs and delicate hand-granulated perimeter wire.",
  },

  // Chapter II: Colour in Form & Architectural Silver
  {
    id: "g4",
    chapter: "CHAPTER II: COLOUR IN FORM",
    title: "Kundan Blossom Collar on Slate",
    subtitle: "MINERAL BLOSSOM STUDY",
    medium: "Polki & Gemstone Archive",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCVkrq9JXDFbI2PBBrGFI8AINKK8copWnSqyaPTabMpyC5fqlGYnm0Hf4l8B_uShXrPKiOiQg9wUbWAEetYWhcJLUkDleH3KCTLTia1-SlfoITYCRP6a4yNmyCd6cJ2BiZlVySdVqVy_I7ahdYwngWC4l0oMotqPf2Q8kvOuKYqX2C5CJRodopU1ZOV39M9R3rNhjNvAoNggg9UWTQWpZ5K_i-nd8jk96s3hwhjbaEhpjLoHc2u8Kni",
    description:
      "Hand-set gemstones mounted in pure 24K gold foil bezels resting against charcoal slate.",
  },
  {
    id: "g5",
    chapter: "CHAPTER II: ARCHITECTURAL SILVER",
    title: "Sterling Silver Coin Choker",
    subtitle: "TERRACOTTA PLINTH STUDY",
    medium: "Silver Jewellery Archive",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDF9J1Jjt-rfGIgb_Cj7sjvKDdp_OXVXVJ_6yCMI2yHW4caJ47h8Jlxi-R0bvqZVLEkKC-FQvJlVODBORoVrdhR45Io2xjxtZUQg434ydmBWJyNUVnYh7zoZHkNkMLJ0qvRbB8I4ciQXpbNeAw2NOsgD_w_0RaXDt1yKJ-3AoJNJCdHm0e33kqVXZ4rrpBv74iCqtFmI_H-GQVA1E3yVt2_0DOxzG3eBtOlWzfa683-0qtJQdqS1zPv",
    description:
      "Authentic 925 sterling silver coin choker arranged vertically on an untreated terracotta desert plinth.",
  },
  {
    id: "g6",
    chapter: "CHAPTER II: ARCHITECTURAL SILVER",
    title: "Sterling Silver Hasli & Jhumkis",
    subtitle: "PLASTER CURVE ARCHIVE",
    medium: "Silver Jewellery Archive",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UKrzlekFvxpeaLN9pjJBRCnAZLX2OuAB4_lv-evEcc8xzyXxie2hc-mwrXPgXDxo8jkJXnBIPerbuigChE5zsk7l83J9u-0qnwMoQCtGHAkN41-rDv4kIU8rLGXkcQCsBp0iIh5DPE3pXQ3TiB0K0Seo5iZmvAwJtefeZLTJZdmSB89KCKouF5xoJJNWKCd_M_ktWRDtwDJiV6nDqatKYJaawIyafGr79DXTCbRgna3Wc_GphEGMEd0fo",
    description:
      "Sculptural silver cuff bracelets and jhumki drops positioned against ivory plaster architectural curves.",
  },

  // Chapter III: Light & Form / The Trilogy of Craft
  {
    id: "g7",
    chapter: "CHAPTER III: THE TRILOGY OF CRAFT",
    title: "Natural Emerald Cluster on Gold Dust",
    subtitle: "GEMOLOGY ARCHIVE",
    medium: "Fine Gemstone Study",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDMSLKSRylvMGFckLl6IZW_EUMsZULWsc6OEPpO63cHem8Y2AD6E2qf_4niZnzATi7Cl1Uv4p4U9Bq3u6g2q2WLZO7LiBG7ibr2v7QFOMzmWrADnwQKIpf_lBm9r8HmX0sDlhE0QgmNYNVEbh8qzxUYZRy8IKc9i9DlIRyiC4XsyE1MOOpQr-g9y-xT6UjLzCs0hdxaPI4Gv94-Wuwpupb1hFUQlWBrQz0fLDuXJs1vf1i047Fv7CIT",
    description:
      "Rough and faceted natural emerald crystals set into a heavy gold armature over shimmering gold dust stone.",
  },
  {
    id: "g8",
    chapter: "CHAPTER III: LIGHT & FORM",
    title: "Cocktail Ring on Sandstone",
    subtitle: "SOLITARY ARCHIVE",
    medium: "Jewellery Form Study",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1Xlvevv13UmWc7Qw1mTo1riTcCRA0MyKSvd6BBvwl3c-nbSRSraVTvqmQgcWdCrRHhRw0ZspGPOQ-kGHagRsvI01A7gYGg_xHcmw7Jqqz1DIUM4LgVcTWnyDszyodKEIvHxFal3pMM7N-3C5ASvlufptBZSrH3f4thfJrU4YmGI6dn14QaN9nEmt-UiXvurGQQeS8QFNy2Zlk1duPym3IRXPpy3s5ju-zz7ZBk9196GGInn0aSqk07GbFU",
    description:
      "Cocktail ring resting on desert sandstone plinth bathed in soft morning raking light.",
  },
  {
    id: "g9",
    chapter: "CHAPTER III: LIGHT & FORM",
    title: "Flagship Salon Vitrine Perspective",
    subtitle: "ATELIER ARCHIVE STUDY",
    medium: "Showroom Vitrine Archive",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlO7BGb8hd4rNW45B916hScfmkGUO32m10xSmnehC1ZsXU7eY8MQCg_Ph4HHXcNsOFHb8uEZZRWo4O0fN7xtx_kmCqLYQ0e9j8hcEylEURHokijMwbb0Rb9KGat19TBAnh5Jeg_HaITowWvTwacBjmmDjh7myUutuRWb018gNqaSOgdEAh7NwJmJ57OvGDij0y6PYGm2haa7S1qlNoOLl-fc5IMG-mAbNn4nKyAM3-GvfEmq5hCFjB",
    description:
      "Archival jewellery pieces presented inside the dark walnut and brass viewing vitrines of our Parvatsar salon.",
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
              BALAJI JEWELLERS &amp; SHYAM DIAMONDS · CURATED EXHIBITION
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
              EXHIBITION FOLIO 01 / 0{GALLERY_ITEMS.length}
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
          SECTION 02: THE PINNED HORIZONTAL GALLERY (9 Panels)
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
          SECTION 03: SIGNATURE DETAILS — CLOSE INSPECTION
          (Asymmetric 4-Card 10X Loupe Inspection from Stitch)
          ======================================================== */}
      <section className="w-full bg-[#1c1011] text-warm-ivory py-24 px-6 lg:px-14 border-t border-champagne-gold/20 relative">
        <div className="max-w-[1460px] mx-auto flex flex-col">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-champagne-gold/15">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-champagne-gold rounded-full"></span>
                <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase">
                  SIGNATURE DETAILS
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-warm-ivory leading-tight">
                CLOSE INSPECTION.
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 max-w-md font-light leading-relaxed">
              Every setting, solder, and bezel tells a quiet story of patience. Hover to examine the raw micro-craftsmanship behind each piece.
            </p>
          </div>

          {/* Asymmetric Editorial Grid / Collage */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* DETAIL CARD 01: Chandbali granulation (Col 1-6) */}
            <div className="md:col-span-6 bg-[#260003] p-4 sm:p-6 border border-champagne-gold/25 shadow-xl group">
              <div className="relative w-full aspect-square overflow-hidden bg-near-black">
                <Image
                  alt="Chandbali Granulation Detail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4XFXqLBERSZhu1cYbrPZYgvQVydiSk1_B4D9RSCiw0Jfq1E_T-JqKHIaYKeDr7qYtFIfoOwb_pzm7II8zuv-JlexROg5Loeolg2H7_kgsqskNsyUDVEEPhBt5D3JlNTkOF0KFfQeKNEh0RJVZC3uOejLwCOi3cTBpsYfYNOrKYznfSvyrPioZwaoYdt9GlWVUdjr4XJNy0yTGAMsfsjlcvPcz2Dn5abZUtCndSDd7ukCaQwyum6Wr"
                />
                <div className="absolute top-4 right-4 bg-near-black/85 backdrop-blur-md px-3 py-1 flex items-center gap-1.5 border border-champagne-gold/30">
                  <ZoomIn className="w-3.5 h-3.5 text-champagne-gold" />
                  <span className="font-sans text-[10px] text-warm-ivory tracking-widest uppercase">
                    10X LOUPE
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase block mb-1">
                  DETAIL 01 · GOLDSMITHING
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-warm-ivory">
                  Micro-Granulation &amp; Basra Pearl Knotting
                </h3>
                <p className="font-sans text-xs text-warm-ivory/70 mt-1 leading-relaxed">
                  Individual spheres of 22K gold fused without visible solder seams, holding micro-seed pearls on silk threads.
                </p>
              </div>
            </div>

            {/* DETAIL CARD 02: Tourmaline Kundan Setting (Col 7-12, Staggered) */}
            <div className="md:col-span-6 md:mt-16 bg-[#260003] p-4 sm:p-6 border border-champagne-gold/25 shadow-xl group">
              <div className="relative w-full aspect-square overflow-hidden bg-near-black">
                <Image
                  alt="Tourmaline Kundan Setting Detail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVkrq9JXDFbI2PBBrGFI8AINKK8copWnSqyaPTabMpyC5fqlGYnm0Hf4l8B_uShXrPKiOiQg9wUbWAEetYWhcJLUkDleH3KCTLTia1-SlfoITYCRP6a4yNmyCd6cJ2BiZlVySdVqVy_I7ahdYwngWC4l0oMotqPf2Q8kvOuKYqX2C5CJRodopU1ZOV39M9R3rNhjNvAoNggg9UWTQWpZ5K_i-nd8jk96s3hwhjbaEhpjLoHc2u8Kni"
                />
                <div className="absolute top-4 right-4 bg-near-black/85 backdrop-blur-md px-3 py-1 flex items-center gap-1.5 border border-champagne-gold/30">
                  <ZoomIn className="w-3.5 h-3.5 text-champagne-gold" />
                  <span className="font-sans text-[10px] text-warm-ivory tracking-widest uppercase">
                    10X LOUPE
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase block mb-1">
                  DETAIL 02 · LAPIDARY
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-warm-ivory">
                  Pure 24K Kundan Foil Bezel Encapsulation
                </h3>
                <p className="font-sans text-xs text-warm-ivory/70 mt-1 leading-relaxed">
                  Pure refined 24-karat gold foil cold-burnished layer by layer around the carved tourmaline blossom.
                </p>
              </div>
            </div>

            {/* DETAIL CARD 03: Sterling Moonstone (Col 1-5) */}
            <div className="md:col-span-5 bg-[#260003] p-4 sm:p-6 border border-champagne-gold/25 shadow-xl group">
              <div className="relative w-full aspect-square overflow-hidden bg-near-black">
                <Image
                  alt="Sterling Moonstone Filigree Detail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC23rrJWZu9h_YmkXhG1e2VkgSNuC0eVGGQMyBMf_ICrZdjfMnWoJSuu4WOhsNxo-eLbfa4cJ_rQdFTDIek-hRXGwvwHRMslASZ9p16ultHWcBrHtkT9G8ZAzypM5xVmAwNjzV99CHGcyUNWONUF3WczvuH2aEXXx2XtbBaO5vJRB_PSDKMHh4InK2SX5jNdiv2x-1_6mRE0nhOy2gPuZo6O4u5HhpMZoBe_JfwvXRU7d08SUGvhfFt"
                />
                <div className="absolute top-4 right-4 bg-near-black/85 backdrop-blur-md px-3 py-1 flex items-center gap-1.5 border border-champagne-gold/30">
                  <ZoomIn className="w-3.5 h-3.5 text-champagne-gold" />
                  <span className="font-sans text-[10px] text-warm-ivory tracking-widest uppercase">
                    SILVER WORK
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase block mb-1">
                  DETAIL 03 · STERLING
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-warm-ivory">
                  Oxidised Wire Filigree &amp; Adularescent Glow
                </h3>
                <p className="font-sans text-xs text-warm-ivory/70 mt-1 leading-relaxed">
                  High-contrast patina highlighting twisted 925 silver wires surrounding a raw untreated moonstone cabochon.
                </p>
              </div>
            </div>

            {/* DETAIL CARD 04: Emerald Claw Work (Col 6-12, Staggered) */}
            <div className="md:col-span-7 md:-mt-10 bg-[#260003] p-4 sm:p-6 border border-champagne-gold/25 shadow-xl group">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-near-black">
                <Image
                  alt="Emerald Claw Setting Detail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMSLKSRylvMGFckLl6IZW_EUMsZULWsc6OEPpO63cHem8Y2AD6E2qf_4niZnzATi7Cl1Uv4p4U9Bq3u6g2q2WLZO7LiBG7ibr2v7QFOMzmWrADnwQKIpf_lBm9r8HmX0sDlhE0QgmNYNVEbh8qzxUYZRy8IKc9i9DlIRyiC4XsyE1MOOpQr-g9y-xT6UjLzCs0hdxaPI4Gv94-Wuwpupb1hFUQlWBrQz0fLDuXJs1vf1i047Fv7CIT"
                />
                <div className="absolute top-4 right-4 bg-near-black/85 backdrop-blur-md px-3 py-1 flex items-center gap-1.5 border border-champagne-gold/30">
                  <ZoomIn className="w-3.5 h-3.5 text-champagne-gold" />
                  <span className="font-sans text-[10px] text-warm-ivory tracking-widest uppercase">
                    GEMOLOGY
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase block mb-1">
                  DETAIL 04 · GEMOLOGY
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-warm-ivory">
                  Zambian Organic Emerald Prongs &amp; Gold Luster
                </h3>
                <p className="font-sans text-xs text-warm-ivory/70 mt-1 leading-relaxed">
                  Rough-faceted raw crystal terminations secured by hand-filed gold claws, resting on weathered gold-dusted matrix.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 04: PERSONAL CURATION & INQUIRY
          (Atelier Consultation Bridge from Stitch)
          ======================================================== */}
      <section className="w-full bg-[#251819] text-warm-ivory py-24 px-6 lg:px-14 border-t border-champagne-gold/25 relative overflow-hidden">
        {/* Decorative Ambient Glow */}
        <div className="absolute -right-24 top-0 w-96 h-96 rounded-full bg-deep-burgundy/40 blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <Sparkles className="w-8 h-8 text-champagne-gold mb-3" />
          <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase mb-2">
            PERSONAL CURATION &amp; INQUIRY
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-warm-ivory leading-tight mb-4">
            FOUND SOMETHING YOU LOVE?
          </h2>
          <p className="font-sans text-base sm:text-lg text-warm-ivory/80 max-w-2xl font-light mb-10 leading-relaxed">
            Speak directly with our team and curators to learn more about specific archive pieces, custom gold weight adaptations, sizing, and private viewing appointments.
          </p>

          {/* Luxury CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/918854000203"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-champagne-gold text-near-black font-sans text-xs tracking-widest font-semibold uppercase hover:bg-soft-gold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP CONCIERGE (+91 88540 00203)</span>
            </a>
            <a
              href="tel:+918854000203"
              className="w-full sm:w-auto px-8 py-4 border border-champagne-gold/40 text-warm-ivory hover:border-champagne-gold hover:bg-dark-wine font-sans text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>CALL DIRECT LINE (+91 88540 00203)</span>
            </a>
          </div>

          <p className="font-sans text-xs text-warm-ivory/50 mt-8 tracking-wider uppercase">
            DISCREET COMPLIMENTARY SHIPPING &amp; HAND-DELIVERY WITHIN RAJASTHAN &amp; PAN-INDIA
          </p>
        </div>
      </section>

      {/* ========================================================
          SECTION 05: FLAGSHIP ATELIER — SEE IT IN PERSON
          (Physical Verification & Flagship Sanctuary from Stitch)
          ======================================================== */}
      <section className="relative w-full bg-near-black text-warm-ivory border-t border-champagne-gold/25 overflow-hidden">
        {/* Atmospheric High-Resolution Vitrine Background */}
        <div className="relative w-full min-h-[580px] lg:min-h-[640px] flex items-center py-20 px-6 lg:px-14">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlO7BGb8hd4rNW45B916hScfmkGUO32m10xSmnehC1ZsXU7eY8MQCg_Ph4HHXcNsOFHb8uEZZRWo4O0fN7xtx_kmCqLYQ0e9j8hcEylEURHokijMwbb0Rb9KGat19TBAnh5Jeg_HaITowWvTwacBjmmDjh7myUutuRWb018gNqaSOgdEAh7NwJmJ57OvGDij0y6PYGm2haa7S1qlNoOLl-fc5IMG-mAbNn4nKyAM3-GvfEmq5hCFjB"
              alt="Balaji Jewellers Showroom Flagship"
              fill
              className="object-cover object-center brightness-[0.38] contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-near-black via-near-black/85 to-transparent"></div>
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-near-black/90"></div>
          </div>

          {/* Foreground Architectural Card */}
          <div className="relative z-10 max-w-2xl bg-dark-wine/90 backdrop-blur-xl p-6 sm:p-10 border border-champagne-gold/30 shadow-2xl">
            <div className="flex items-center gap-2 mb-2 text-champagne-gold">
              <MapPin className="w-5 h-5" />
              <span className="font-sans text-[10px] tracking-monumental uppercase font-semibold">
                FLAGSHIP ATELIER
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-warm-ivory leading-tight mb-2">
              SEE IT IN PERSON.
            </h2>
            <p className="font-sans text-xs tracking-widest text-champagne-gold uppercase mb-6">
              Balaji Jewellers &amp; Shyam Diamonds Flagship Atelier
            </p>

            {/* Confirmed Showroom Details */}
            <div className="space-y-4 mb-8 border-t border-b border-champagne-gold/20 py-4 font-sans text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-champagne-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-warm-ivory/60 uppercase tracking-wider text-[10px]">SALON ADDRESS</p>
                  <p className="text-warm-ivory font-light mt-0.5">
                    {SITE_CONFIG.address.street}, Parvatsar, Nagaur District, Rajasthan – 341512, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-champagne-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-warm-ivory/60 uppercase tracking-wider text-[10px]">SHOWROOM HOURS</p>
                  <p className="text-warm-ivory font-light mt-0.5">
                    Monday – Sunday: {SITE_CONFIG.hours} (Private Vitrine viewing available)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-champagne-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-warm-ivory/60 uppercase tracking-wider text-[10px]">DIRECT SALON DESK</p>
                  <p className="text-champagne-gold font-medium mt-0.5">{SITE_CONFIG.phone}</p>
                </div>
              </div>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={SITE_CONFIG.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-champagne-gold text-near-black font-sans text-xs tracking-widest uppercase font-semibold hover:bg-soft-gold transition-colors flex items-center gap-2"
              >
                <NavIcon className="w-3.5 h-3.5" />
                <span>VISIT SHOWROOM</span>
              </a>
              <a
                href={getWhatsAppShowroomUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-champagne-gold text-champagne-gold hover:bg-champagne-gold hover:text-near-black font-sans text-xs tracking-widest uppercase transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WHATSAPP</span>
              </a>
              <a
                href={SITE_CONFIG.phoneTel}
                className="px-6 py-3 border border-champagne-gold/40 text-warm-ivory hover:border-champagne-gold font-sans text-xs tracking-widest uppercase transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CALL NOW</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 06: BOTTOM FOOTER CONVERSIONS
          ======================================================== */}
      <section className="w-full py-16 px-6 lg:px-14 bg-[#170b0c] border-t border-champagne-gold/15 text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-5">
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
