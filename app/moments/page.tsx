import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, ArrowRight, MessageCircle, Phone, Store, Diamond } from "lucide-react";
import { getWhatsAppProductUrl } from "@/lib/utils/whatsapp";
import MomentsClient from "./MomentsClient";

export const metadata: Metadata = {
  title: "Living Moments — Fine Jewellery Celebrations",
  description:
    "Contemporary lifestyle editorial exploring handcrafted Gold and Silver jewellery as living memories across Rajasthan celebrations.",
  alternates: {
    canonical: "/moments",
  },
  openGraph: {
    title: "Living Moments — Balaji Jewellers & Shyam Diamonds",
    description:
      "Contemporary lifestyle editorial exploring handcrafted Gold and Silver jewellery as living memories.",
    url: "https://balajijewellers.com/moments",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Living Moments — Balaji Jewellers & Shyam Diamonds",
    description:
      "Contemporary lifestyle editorial exploring handcrafted Gold and Silver jewellery as living memories.",
    images: ["/og-image.jpg"],
  },
};

export default function MomentsPage() {
  return (
    <div className="w-full bg-near-black text-warm-ivory selection:bg-deep-burgundy selection:text-soft-gold pt-20">
      {/* ========================================================
          SECTION 01: HERO NARRATIVE (~85vh)
          ======================================================== */}
      <section className="relative min-h-[85vh] w-full bg-[#170b0c] flex flex-col justify-center items-center text-center px-6 lg:px-14 py-24 overflow-hidden">
        {/* Background Image with Vignette */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkdJn3dkQCAYahDGgFtW9LfWKNKt336zsgeFq-CE9BIs04ZIf7P44ZGd2dHtn7jD7BPNOeX2o3VSviBY8MZJyUAknKI3spTF2lI4dvulXQ0iL5ZyU78PyrQspPlf6vLPP0Bs7b3wRhwxMENtilamkLpr5-xTDj7T8VLNbBDsfs3j75FRY8kY6WQeBZ-trxTOUJVTctUB0z0XBMubCX8_N5LumwsKdJ5P-4Wr94YIZuorKFjGFIxjVq"
            alt="Moments Made Imperishable Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.3] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-near-black via-[#170b0c]/60 to-[#170b0c]/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(18,7,8,0.85)_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 bg-near-black/75 border border-champagne-gold/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-champagne-gold" />
            <span className="font-sans text-[10px] tracking-monumental uppercase font-semibold text-champagne-gold">
              CHRONICLES OF LIFE &amp; ADORNMENT
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-warm-ivory font-normal leading-[1.05] uppercase">
            Moments Made <br />
            <span className="italic text-soft-gold font-light">Imperishable.</span>
          </h1>

          <p className="font-sans text-warm-ivory/80 text-base md:text-xl font-light leading-relaxed max-w-2xl mt-2">
            Jewellery lives when it is worn. Explore an editorial monograph depicting fine adornment across milestones of poise, gathering, and quiet intimacy.
          </p>

          <div className="flex items-center gap-4 mt-4">
            <span className="w-12 h-px bg-champagne-gold/40"></span>
            <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase">
              HAUTE JOAILLERIE ARCHIVE · PARVATSAR
            </span>
            <span className="w-12 h-px bg-champagne-gold/40"></span>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 02: 01 / REFLECTION — Courtyard Soirée
          ======================================================== */}
      <section className="w-full py-28 px-6 lg:px-14 border-t border-champagne-gold/15 bg-[#170b0c]">
        <div className="max-w-[1460px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Frame */}
          <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] bg-near-black border border-champagne-gold/30 overflow-hidden shadow-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVa9Ig73NRGQ31WplIAMUj2HAOivbkVegUQ47qC02ghCJN8mfWFx5jB_j5zRZkT_2FCaWta8_F5MOpWfiE3iN-FxoEsr2aIFFNpXSadpdCT1bmRLENNmipJWWkBOYwqkXgJqFXO2fzXwmC4VPebtiQLWPNlccoE_9wlNS1X5NZpfX7FtMsgzmb3JQVy_tkfn4kyKwgFtONfG9FqhGl6AMjrHw5tm4wWlYt-2LgjKYz8zrkaydEEtSq"
              alt="When Joy Catches The Evening Flame"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-sans text-champagne-gold uppercase tracking-widest bg-near-black/85 px-3 py-1 border border-champagne-gold/20 backdrop-blur-md">
              <span>01 / REFLECTION · REF. BJ-CEL-81</span>
              <span className="text-warm-ivory/60">Courtyard Soirée · 2025</span>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase font-semibold">
              01 / REFLECTION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-warm-ivory leading-tight font-normal">
              When Joy Catches The <span className="italic text-soft-gold">Evening Flame.</span>
            </h2>
            <p className="font-sans text-warm-ivory/80 text-base md:text-lg font-light leading-relaxed">
              Laughter echoing across an evening courtyard under amber lanterns. A sculpted gold necklace rests effortlessly, catching natural candlelight with each gesture of joy.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppProductUrl("Evening Courtyard Soirée Sculpted Collar")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans tracking-widest text-champagne-gold hover:text-soft-gold uppercase font-semibold"
              >
                <span>Request Piece Curation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 03: INTIMATE MACRO FOCUS — The Unseen Reverse
          ======================================================== */}
      <section className="relative w-full bg-[#110507] text-warm-ivory py-28 px-6 lg:px-14 border-t border-champagne-gold/15">
        <div className="max-w-[1320px] mx-auto flex flex-col items-center text-center">
          <span className="font-sans text-xs text-champagne-gold tracking-[0.35em] uppercase mb-4 font-semibold">
            Intimate Macro Focus
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-warm-ivory max-w-2xl mb-12">
            The Unseen Reverse: Micro-Pearls &amp; Hand-Crimped Collet Craft
          </h3>

          {/* Macro Visual Hero Card */}
          <div className="w-full max-w-3xl relative p-4 sm:p-6 bg-[#1a080a] border border-champagne-gold/25 shadow-2xl">
            <div className="relative w-full aspect-square sm:aspect-[4/3] overflow-hidden bg-near-black border border-champagne-gold/20">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRAeYuy6CHG_5Slp5Fr9jh2XmbS7BZs4V1BfdgMbOH8ahueAaXF_IgWYO_rP78jCC5Aifk1tvWtEwpEUnTicSrWCURWknN6nxaQduP21WjFtOGsHbG27gx1Y7x_uPyYYsMskW5RTRoqdYMm9dEGz7F2Kl6mFxmN1YburRKjPuAZJLqVcXKB7gDMpG0_0n7O6QNXZBYvkXM90HL2hChzuRdoUnR47w7lYyp7JTh6MXM1MpVifm6LrDh"
                alt="Extreme macro fine jewellery photograph of uncut diamond collet setting with micro-pearl edge"
                fill
                sizes="(max-width: 768px) 100vw, 750px"
                className="object-cover object-center"
              />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-2 text-left">
              <div>
                <h4 className="font-serif text-lg text-champagne-gold font-medium">Uncut Polki &amp; Basra Seed Pearls</h4>
                <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 max-w-lg mt-1 font-light leading-relaxed">
                  Set within pure 24K gold foil (Jadau) over deep burgundy velvet. Every gem collet is hand-crimped without mechanical prongs—the ancient Marwar discipline preserved intact.
                </p>
              </div>
              <div className="shrink-0 text-right sm:text-right">
                <span className="font-sans text-[10px] tracking-[0.25em] text-champagne-gold uppercase block font-medium">
                  Parvatsar Atelier
                </span>
                <span className="font-sans text-[10px] text-warm-ivory/60 tracking-widest uppercase block mt-0.5">
                  Single-Artisan Provenance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 04: 02 / BEGINNINGS — Subtle Rites of Quiet Renewal
          ======================================================== */}
      <section className="w-full py-28 px-6 lg:px-14 border-t border-champagne-gold/15 bg-near-black">
        <div className="max-w-[1460px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
            <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase font-semibold">
              02 / BEGINNINGS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-warm-ivory leading-tight font-normal">
              Subtle Rites of <span className="italic text-soft-gold">Quiet Renewal.</span>
            </h2>
            <p className="font-sans text-warm-ivory/80 text-base md:text-lg font-light leading-relaxed">
              Dressed in minimalist raw silk, a serene posture welcomes the morning. A gentle sunbeam falls across the collarbone, highlighting an understated modern lariat pendant against warm ivory plaster.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppProductUrl("Solitary Dawn Ceremony Lariat Pendant")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans tracking-widest text-champagne-gold hover:text-soft-gold uppercase font-semibold"
              >
                <span>Request Piece Curation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Visual Frame */}
          <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] bg-near-black border border-champagne-gold/30 overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLAdle9AGvuGgPKVh9QJBFyHMxJYH6k7Ef6t5lhclMbfDTAA4Lb69qHKIM9udUcm7U7SEa7PO8NVLf05cgJOJLDwbZzjPCUFk7UYO9a4EUxc2DuSZkLMoT5V9CqDQc8CdWTKbIZxnDgkN8QTK32LZDbl05UAQe99rCeXmR0vv4Hr5Y1RNfTq4eRzz3CsKWBzplDDYtbJqICMol7HyCSjG-KsyoDaeIOti3Fsk6NsZ34MCx0HJ_ei67"
              alt="Subtle Rites of Quiet Renewal"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-sans text-champagne-gold uppercase tracking-widest bg-near-black/85 px-3 py-1 border border-champagne-gold/20 backdrop-blur-md">
              <span>02 / BEGINNINGS · REF. BJ-DAW-04</span>
              <span className="text-warm-ivory/60">Solitary Dawn Ceremony</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 05: 03 / EXPRESSION — Sculptural Autonomy
          ======================================================== */}
      <section className="w-full py-28 px-6 lg:px-14 border-t border-champagne-gold/15 bg-[#170b0c]">
        <div className="max-w-[1460px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Frame */}
          <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] bg-near-black border border-champagne-gold/30 overflow-hidden shadow-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXsQhUbsgzrVV4PKlKKdsI2COrnnryntY8PDsXMKlOIzBttAx5wIO93Lnir7bD8f-5dqaoDrQJu_TVPXjKOze6hQNDADUWJnlygmm9ezYERcWBpH9mAoNjj56-rgI6eOdUclUJfpv5LzhHX8YJikdx2f0W9pMgvwtNl4IhzqHs7UwRVon0yr4HDDFk2KLOvTEhpWM3UklYoecSBXsGrSRwlfledzQjY5Lr_OG5kjcekHctXOHDFHhE"
              alt="Sculptural Autonomy & Architectural Contrast"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-sans text-champagne-gold uppercase tracking-widest bg-near-black/85 px-3 py-1 border border-champagne-gold/20 backdrop-blur-md">
              <span>03 / EXPRESSION · REF. BJ-EXP-27</span>
              <span className="text-warm-ivory/60">Brutalist Cuffs &amp; Signets</span>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase font-semibold">
              03 / EXPRESSION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-warm-ivory leading-tight font-normal">
              Sculptural Autonomy &amp; <span className="italic text-soft-gold">Architectural Contrast.</span>
            </h2>
            <p className="font-sans text-warm-ivory/80 text-base md:text-lg font-light leading-relaxed">
              Asymmetrical sterling silver cuffs paired with sculptural geometric rings. Confident lines and architectural stillness against a dark studio backdrop.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppProductUrl("Brutalist Cuffs & Signets")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans tracking-widest text-champagne-gold hover:text-soft-gold uppercase font-semibold"
              >
                <span>Request Piece Curation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 06: ATELIER PERSONA CONSULTATION (CLIENT COMPONENT)
          ======================================================== */}
      <MomentsClient />

      {/* ========================================================
          SECTION 07: 04 / MEMORY — Passed from Hand to Hand
          ======================================================== */}
      <section className="w-full py-28 px-6 lg:px-14 border-t border-champagne-gold/15 bg-near-black">
        <div className="max-w-[1460px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
            <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase font-semibold">
              04 / MEMORY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-warm-ivory leading-tight font-normal">
              Passed from Hand to Hand, <span className="italic text-soft-gold">Never Diminished.</span>
            </h2>
            <p className="font-sans text-warm-ivory/80 text-base md:text-lg font-light leading-relaxed">
              Heirloom gold bracelets resting against hand-loomed raw linen in evening light. Solid Rajasthani gold crafted to withstand generations of loving touch and family celebrations.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppProductUrl("Heirloom Gold Bracelet")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans tracking-widest text-champagne-gold hover:text-soft-gold uppercase font-semibold"
              >
                <span>Request Piece Curation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Visual Frame */}
          <div className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] bg-near-black border border-champagne-gold/30 overflow-hidden shadow-2xl order-1 lg:order-2">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZPUO03csrRNPL4zzXKNkbYpEFS59XlCuecc5szQcvqcAyPs32_0FUCYkBLlt4_GHpTE2bREKEECz6noKRVMz4XvgkZ9kZdEZ-WMLmSxAVEjpFVgvDjCw-kmGrQgFmYRNmhZzxo3YWLrmqj4CvcpWYrrPkoiYUErATD56HnPMUgToDA7u-Hnve_7WDcCj_SJfIm5dy--tDSamgDN8QilnoBztDPvIguqF8XfPkK96j-C9zhJ4evnj7"
              alt="Passed from Hand to Hand Never Diminished"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-1000 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-sans text-champagne-gold uppercase tracking-widest bg-near-black/85 px-3 py-1 border border-champagne-gold/20 backdrop-blur-md">
              <span>04 / MEMORY · REF. BJ-MEM-12</span>
              <span className="text-warm-ivory/60">The Patina of Generations</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 08: ATELIER VISUAL ANTHOLOGY — THE MOMENT WALL
          ======================================================== */}
      <section className="relative w-full bg-[#110507] text-warm-ivory py-32 px-6 lg:px-14 overflow-hidden border-t border-champagne-gold/15">
        <div className="max-w-[1520px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs text-champagne-gold tracking-[0.35em] uppercase block mb-3 font-semibold">
              Atelier Visual Anthology
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-warm-ivory mb-4">The Moment Wall</h2>
            <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 font-light leading-relaxed">
              Fragments of light, laughter, craft, and ceremony captured in unhurried synchrony across Parvatsar and beyond.
            </p>
          </div>

          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Column 1 (Left): 4 cols */}
            <div className="md:col-span-4 flex flex-col gap-6 lg:gap-8">
              {/* Card 1: CELEBRATE */}
              <div className="relative group overflow-hidden bg-[#1a080a] border border-champagne-gold/20 shadow-xl">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVa9Ig73NRGQ31WplIAMUj2HAOivbkVegUQ47qC02ghCJN8mfWFx5jB_j5zRZkT_2FCaWta8_F5MOpWfiE3iN-FxoEsr2aIFFNpXSadpdCT1bmRLENNmipJWWkBOYwqkXgJqFXO2fzXwmC4VPebtiQLWPNlccoE_9wlNS1X5NZpfX7FtMsgzmb3JQVy_tkfn4kyKwgFtONfG9FqhGl6AMjrHw5tm4wWlYt-2LgjKYz8zrkaydEEtSq"
                    alt="Evening Courtyard Soiree"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-near-black/85 backdrop-blur-md text-[10px] font-sans tracking-[0.25em] text-champagne-gold uppercase border border-champagne-gold/30">
                    [CELEBRATE]
                  </span>
                </div>
                <div className="p-4 bg-[#1e0a0d] border-t border-champagne-gold/15">
                  <span className="font-serif text-sm text-warm-ivory block">Evening Courtyard Soiree</span>
                  <span className="font-sans text-[11px] text-warm-ivory/60 mt-0.5 block">Sculpted 22K Collar</span>
                </div>
              </div>

              {/* Card 2: MACRO DETAIL */}
              <div className="relative group overflow-hidden bg-[#1a080a] border border-champagne-gold/20 shadow-xl">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRAeYuy6CHG_5Slp5Fr9jh2XmbS7BZs4V1BfdgMbOH8ahueAaXF_IgWYO_rP78jCC5Aifk1tvWtEwpEUnTicSrWCURWknN6nxaQduP21WjFtOGsHbG27gx1Y7x_uPyYYsMskW5RTRoqdYMm9dEGz7F2Kl6mFxmN1YburRKjPuAZJLqVcXKB7gDMpG0_0n7O6QNXZBYvkXM90HL2hChzuRdoUnR47w7lYyp7JTh6MXM1MpVifm6LrDh"
                    alt="Basra Pearls & Collet"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-[#1e0a0d] border-t border-champagne-gold/15 flex justify-between items-center">
                  <div>
                    <span className="font-sans text-[10px] tracking-widest text-champagne-gold block uppercase font-medium">
                      Basra Pearls &amp; Collet
                    </span>
                    <span className="font-sans text-[11px] text-warm-ivory/60 mt-0.5 block">Hand-crimped 24K Jadau</span>
                  </div>
                  <Diamond className="w-4 h-4 text-champagne-gold shrink-0" />
                </div>
              </div>
            </div>

            {/* Column 2 (Center): 4 cols */}
            <div className="md:col-span-4 flex flex-col gap-6 lg:gap-8 md:-mt-6">
              {/* Card 3: BEGIN */}
              <div className="relative group overflow-hidden bg-[#1a080a] border border-champagne-gold/20 shadow-xl">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLAdle9AGvuGgPKVh9QJBFyHMxJYH6k7Ef6t5lhclMbfDTAA4Lb69qHKIM9udUcm7U7SEa7PO8NVLf05cgJOJLDwbZzjPCUFk7UYO9a4EUxc2DuSZkLMoT5V9CqDQc8CdWTKbIZxnDgkN8QTK32LZDbl05UAQe99rCeXmR0vv4Hr5Y1RNfTq4eRzz3CsKWBzplDDYtbJqICMol7HyCSjG-KsyoDaeIOti3Fsk6NsZ34MCx0HJ_ei67"
                    alt="Solitary Dawn Ceremony"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-near-black/85 backdrop-blur-md text-[10px] font-sans tracking-[0.25em] text-champagne-gold uppercase border border-champagne-gold/30">
                    [BEGIN]
                  </span>
                </div>
                <div className="p-4 bg-[#1e0a0d] border-t border-champagne-gold/15">
                  <span className="font-serif text-sm text-warm-ivory block">Solitary Dawn Ceremony</span>
                  <span className="font-sans text-[11px] text-warm-ivory/60 mt-0.5 block">Natural Solitaire Thread</span>
                </div>
              </div>

              {/* Card 4: ARCHITECTURAL CUFF */}
              <div className="relative group overflow-hidden bg-[#1a080a] border border-champagne-gold/20 shadow-xl">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdEK8oN4OmIe861Un84MwmA9EqlNEeZm2nows0OdiUA7QZ21vi7tRG_K_POs4Q6PydH1NntodjFHPYJQRSA6y_9KiUXFHaI6jqkgTOaRHqiRragpg7csDDaQQzpbbxBUjRP_4KktczAA_v0spDic0TCjvAAB9mmhvJmxwZnpG-7meTW8k-QOEibRAYn7scXjH7Rx8k8n8gw8q5mv-srMv_pmHK85-NhmHzc2hZKHmUyFVn7OPZSYDi"
                    alt="22K Billet Ear Sculpture"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-[#1e0a0d] border-t border-champagne-gold/15 flex justify-between items-center">
                  <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase font-medium">
                    22K Billet Ear Sculpture
                  </span>
                  <span className="font-sans text-[9px] text-warm-ivory/50 tracking-wider">ARCHIVE &apos;25</span>
                </div>
              </div>
            </div>

            {/* Column 3 (Right): 4 cols */}
            <div className="md:col-span-4 flex flex-col gap-6 lg:gap-8">
              {/* Card 5: EXPRESS */}
              <div className="relative group overflow-hidden bg-[#1a080a] border border-champagne-gold/20 shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXsQhUbsgzrVV4PKlKKdsI2COrnnryntY8PDsXMKlOIzBttAx5wIO93Lnir7bD8f-5dqaoDrQJu_TVPXjKOze6hQNDADUWJnlygmm9ezYERcWBpH9mAoNjj56-rgI6eOdUclUJfpv5LzhHX8YJikdx2f0W9pMgvwtNl4IhzqHs7UwRVon0yr4HDDFk2KLOvTEhpWM3UklYoecSBXsGrSRwlfledzQjY5Lr_OG5kjcekHctXOHDFHhE"
                    alt="Brutalist Cuffs & Signets"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-near-black/85 backdrop-blur-md text-[10px] font-sans tracking-[0.25em] text-champagne-gold uppercase border border-champagne-gold/30">
                    [EXPRESS]
                  </span>
                </div>
                <div className="p-4 bg-[#1e0a0d] border-t border-champagne-gold/15">
                  <span className="font-serif text-sm text-warm-ivory block">Brutalist Cuffs &amp; Signets</span>
                  <span className="font-sans text-[11px] text-warm-ivory/60 mt-0.5 block">Asymmetric Sterling &amp; Gold</span>
                </div>
              </div>

              {/* Card 6: COCKTAIL RING PLINTH */}
              <div className="relative group overflow-hidden bg-[#1a080a] border border-champagne-gold/20 shadow-xl">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBycYxg-OrxWUu-gqERTydwfr_ryuVjX6flGfh4-Jdt_PjADbTj8wm_zRRqLXkvwuZIM2Oe2SIXvjkL1p6HUzv8nPbDAQnP9z81MsvgWMPWORsURjnX-cegeji6nPW2VWYGKeHHkFUmkb3KF3v1Yea_8aZccwWLDY9pmI3BGAsdsUZUJzxQ7KnR31y8ZTrDtstw9XMYW9mwb18iF3MT77fUwl0nbjWXqgSD04_yo90S-0ApRCq_6Yi"
                    alt="Cabochon on Sandstone"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-[#1e0a0d] border-t border-champagne-gold/15">
                  <span className="font-sans text-[10px] tracking-widest text-champagne-gold block uppercase font-medium">
                    Cabochon on Sandstone
                  </span>
                  <span className="font-sans text-[11px] text-warm-ivory/60 mt-0.5 block">Stepped Bezel Architecture</span>
                </div>
              </div>

              {/* Card 7: REMEMBER */}
              <div className="relative group overflow-hidden bg-[#1a080a] border border-champagne-gold/20 shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQCy9AZRG8Y2Ij8vgGLF5JBvIcb0ricbR8nAx59vszwGuIazLYBOHc687kjrLZTaO0_2eo8H7_ukwgqLk5122r7gIIJvR6HjGMqVM98CigDaO20qVHmKh6CZyAHkGH2GebaJP6Vx_vaTNBNbvKo3-IBz_uRmyNmVtAvM4WWux68qiRj7F6xIYQtseDTM7O_l2I1DIR030bLvz0OZqlPZ5Yd2yyjxDL9ULK3yC4l1T_ZBdhepDHu-Cq"
                    alt="Lariat on Pale Sandstone"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-near-black/85 backdrop-blur-md text-[10px] font-sans tracking-[0.25em] text-champagne-gold uppercase border border-champagne-gold/30">
                    [REMEMBER]
                  </span>
                </div>
                <div className="p-4 bg-[#1e0a0d] border-t border-champagne-gold/15">
                  <span className="font-serif text-sm text-warm-ivory block">Lariat on Pale Sandstone</span>
                  <span className="font-sans text-[11px] text-warm-ivory/60 mt-0.5 block">Quiet Morning Raking Light</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 09: ATELIER MEDITATION
          ======================================================== */}
      <section className="relative w-full bg-[#FAF7EF] text-[#120708] py-32 px-6 lg:px-14 text-center border-t border-champagne-gold/20">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="font-sans text-xs text-[#5c4300] tracking-[0.35em] uppercase mb-4 font-semibold">
            Atelier Meditation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#120708] mb-6 tracking-tight max-w-3xl leading-[1.15] uppercase">
            SOME MOMENTS <br />
            <span className="italic font-light text-[#5c4300]">DON’T NEED WORDS.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#3c2d2e] max-w-xl mb-12 leading-relaxed font-light">
            A slow breath before entering the hall. The chill of gold warming to the skin. The unspoken assurance of knowing who you are, carved in light and precious metal.
          </p>

          {/* Minimal Centerpiece Image on Pale Surface */}
          <div className="relative w-full max-w-2xl aspect-[16/10] overflow-hidden shadow-2xl bg-[#e8e2d0] border border-[#d8b46a]/30">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQCy9AZRG8Y2Ij8vgGLF5JBvIcb0ricbR8nAx59vszwGuIazLYBOHc687kjrLZTaO0_2eo8H7_ukwgqLk5122r7gIIJvR6HjGMqVM98CigDaO20qVHmKh6CZyAHkGH2GebaJP6Vx_vaTNBNbvKo3-IBz_uRmyNmVtAvM4WWux68qiRj7F6xIYQtseDTM7O_l2I1DIR030bLvz0OZqlPZ5Yd2yyjxDL9ULK3yC4l1T_ZBdhepDHu-Cq"
              alt="Editorial jewellery still life of modern diamond and gold lariat necklace"
              fill
              sizes="(max-width: 768px) 100vw, 680px"
              className="object-cover"
            />
          </div>
          <div className="pt-8">
            <span className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#5c4300] font-medium">
              Purity · Restraint · Rajputana Legacy
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 10: PRIVATE SALON APPOINTMENTS (FLAGSHIP DOSSIER)
          ======================================================== */}
      <section className="relative w-full bg-[#170b0c] text-warm-ivory py-28 px-6 lg:px-14 overflow-hidden border-t border-champagne-gold/15">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Main Headline and CTA Buttons */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full bg-champagne-gold"></span>
                <span className="font-sans text-xs text-champagne-gold tracking-[0.3em] uppercase font-semibold">
                  Private Salon Appointments
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-warm-ivory mb-6 leading-tight">
                Find the Piece That Becomes <br />
                <span className="italic text-soft-gold font-light">Part of Your Story.</span>
              </h2>
              <p className="font-sans text-xs sm:text-base text-warm-ivory/70 max-w-xl mb-10 leading-relaxed font-light">
                Every consultation is private, deliberate, and free of haste. Whether you seek an auspicious bridal parure or an everyday solitaire, our salon curators in Parvatsar are at your service.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/collections"
                  className="px-8 py-3.5 bg-champagne-gold text-near-black font-sans text-xs uppercase tracking-widest font-semibold hover:bg-soft-gold transition-all text-center"
                >
                  Explore Collections
                </Link>
                <a
                  href="https://wa.me/918854000203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-[#250d0f] border border-champagne-gold/30 text-champagne-gold font-sans text-xs uppercase tracking-widest font-semibold hover:bg-champagne-gold/15 transition-all flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
                <a
                  href="tel:+918854000203"
                  className="px-8 py-3.5 bg-[#1b0709] border border-champagne-gold/20 text-warm-ivory/80 font-sans text-xs uppercase tracking-widest font-semibold hover:text-champagne-gold transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Direct</span>
                </a>
              </div>
            </div>

            {/* Verified Salon Details & Heritage Badge */}
            <div className="lg:col-span-5 bg-[#1f0a0d] border border-champagne-gold/25 p-8 sm:p-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-champagne-gold/20">
                <Store className="w-6 h-6 text-champagne-gold" />
                <div>
                  <span className="font-serif text-base text-warm-ivory uppercase tracking-wider block">
                    Flagship Showroom
                  </span>
                  <span className="font-sans text-[10px] text-champagne-gold tracking-widest uppercase font-medium">
                    Parvatsar, Nagaur District
                  </span>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div>
                  <span className="font-sans text-[10px] text-warm-ivory/50 block uppercase tracking-wider">
                    Coordinates
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-warm-ivory font-medium mt-0.5">
                    Bank Wali Gali, Parvatsar, Rajasthan — 341512
                  </p>
                </div>
                <div>
                  <span className="font-sans text-[10px] text-warm-ivory/50 block uppercase tracking-wider">
                    Salon Hours
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-warm-ivory font-medium mt-0.5">
                    Open Daily · 9:00 AM – 8:00 PM IST
                  </p>
                  <p className="font-sans text-[11px] text-warm-ivory/60 mt-1 font-light">
                    Bridal viewings and bespoke vault previews by prior consultation.
                  </p>
                </div>
                <div>
                  <span className="font-sans text-[10px] text-warm-ivory/50 block uppercase tracking-wider">
                    Direct Concierge
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-champagne-gold font-medium mt-0.5">+91 88540 00203</p>
                </div>
              </div>
              <div className="pt-4 border-t border-champagne-gold/20 flex items-center justify-between">
                <span className="font-sans text-[10px] text-warm-ivory/60 tracking-widest uppercase">
                  Certified Natural Diamonds
                </span>
                <span className="font-sans text-[10px] text-champagne-gold tracking-widest uppercase font-medium">
                  BIS 916 Hallmark
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
