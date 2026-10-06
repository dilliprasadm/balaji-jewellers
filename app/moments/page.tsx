import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  MessageCircle,
  Phone,
  Store,
  Diamond,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import MomentsClient from "./MomentsClient";

export const metadata: Metadata = {
  title: "Living Moments — Fine Jewellery Celebrations | Balaji Jewellers",
  description:
    "An unhurried lifestyle editorial exploring handcrafted Gold and Silver jewellery as living memories across Rajasthan celebrations. Balaji Jewellers & Shyam Diamonds, Parvatsar.",
  alternates: {
    canonical: "/moments",
  },
  openGraph: {
    title: "Living Moments — Balaji Jewellers & Shyam Diamonds",
    description:
      "An unhurried lifestyle editorial exploring handcrafted Gold and Silver jewellery as living memories across Rajasthan celebrations.",
    url: "https://balajijewellers.com/moments",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Living Moments — Balaji Jewellers & Shyam Diamonds",
    description:
      "An unhurried lifestyle editorial exploring handcrafted Gold and Silver jewellery as living memories.",
    images: ["/og-image.jpg"],
  },
};

export default function MomentsPage() {
  return (
    <div className="w-full bg-[#120708] text-warm-ivory selection:bg-[#450006] selection:text-[#f1d99a] pt-20">
      {/* ========================================================
          SECTION 01: HERO - CINEMATIC OPENING
          ======================================================== */}
      <section className="relative w-full overflow-hidden bg-[#450006] text-warm-ivory">
        <div className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-end px-4 sm:px-12 lg:px-24 pb-16 sm:pb-20 pt-28 sm:pt-32">
          {/* Background Cinematic Image with Subtle Warm Vignette */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkdJn3dkQCAYahDGgFtW9LfWKNKt336zsgeFq-CE9BIs04ZIf7P44ZGd2dHtn7jD7BPNOeX2o3VSviBY8MZJyUAknKI3spTF2lI4dvulXQ0iL5ZyU78PyrQspPlf6vLPP0Bs7b3wRhwxMENtilamkLpr5-xTDj7T8VLNbBDsfs3j75FRY8kY6WQeBZ-trxTOUJVTctUB0z0XBMubCX8_N5LumwsKdJ5P-4Wr94YIZuorKFjGFIxjVq=s0"
              alt="Cinematic luxury editorial of an elegant Indian woman at an evening celebratory dinner bathed in amber light, wearing a gold and diamond choker"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center filter brightness-[0.78] contrast-[1.05]"
             quality={90} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#170b0c] via-[#450006]/40 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(28,16,17,0.4)_60%,_rgba(23,11,12,0.85)_100%)]"></div>
          </div>

          {/* Hero Typography & Overlapping Editorial Content */}
          <div className="relative z-10 max-w-5xl">
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#170b0c]/70 backdrop-blur-md mb-8 shadow-sm border border-champagne-gold/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e7c276]"></span>
              <span className="font-sans text-[10px] sm:text-[11px] text-[#e7c276] tracking-widest sm:tracking-[0.28em] uppercase font-semibold">
                Chronicles of Life &amp; Adornment
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-warm-ivory mb-6 tracking-tight leading-[1.05] font-normal uppercase">
              Moments Made <br />
              <span className="italic font-light text-[#e7c276]">Imperishable.</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start md:items-end pt-4">
              <p className="md:col-span-8 font-sans text-sm sm:text-base md:text-lg text-warm-ivory/85 max-w-2xl leading-relaxed font-light">
                True jewels do not merely accompany occasions; they absorb laughter, mirror vows, and cradle memory across generations. Each silhouette from our Parvatsar atelier is sculpted as a permanent reliquary of your personal epoch.
              </p>
              <div className="md:col-span-4 flex flex-col items-start md:items-end gap-1.5">
                <span className="font-sans text-xs tracking-widest sm:tracking-[0.24em] uppercase text-[#e7c276] font-semibold">
                  Haute Joaillerie Archive
                </span>
                <span className="font-sans text-xs text-warm-ivory/70 tracking-wider">
                  Parvatsar · Royal Rajasthan
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 02: 01 / REFLECTION (Courtyard Soirée)
          ======================================================== */}
      <section className="relative w-full bg-[#170b0c] text-warm-ivory py-20 sm:py-28 px-4 sm:px-12 lg:px-24 border-t border-champagne-gold/15">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Provenance Marker & Text Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-sans text-xs font-semibold text-[#e7c276] tracking-[0.3em] uppercase">
                01 / REFLECTION
              </span>
              <span className="w-12 h-px bg-[#e7c276]/30"></span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-warm-ivory mb-6 leading-tight font-normal">
              When Joy Catches <br />
              <span className="italic text-[#e7c276]">The Evening Flame.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-warm-ivory/80 mb-6 leading-relaxed font-light">
              The sound of courtyard laughter in late autumn, lanterns kindling against dusk, and hand-beaten 22K gold catching the natural cadence of a celebration. Designed not to overpower the wearer, but to resonate with her spontaneous grace.
            </p>

            <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 mb-8 italic font-light">
              Featured: The Rajputana Courtyard Choker — hand-chiseled yellow gold articulating with every turn of head and heartbeat.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#e7c276] text-[#170b0c] font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#ffdfa0] transition-colors"
                href="https://wa.me/918854000203?text=I%20am%20enquiring%20about%20the%20Celebration%20Necklace%20curation"
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire On Piece</span>
              </a>
              <span className="font-sans text-xs text-warm-ivory/60 tracking-wider uppercase font-medium">
                REF. BJ-CEL-81
              </span>
            </div>
          </div>

          {/* Feature Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden shadow-2xl aspect-[16/10] bg-[#2a1c1d] border border-champagne-gold/25">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVa9Ig73NRGQ31WplIAMUj2HAOivbkVegUQ47qC02ghCJN8mfWFx5jB_j5zRZkT_2FCaWta8_F5MOpWfiE3iN-FxoEsr2aIFFNpXSadpdCT1bmRLENNmipJWWkBOYwqkXgJqFXO2fzXwmC4VPebtiQLWPNlccoE_9wlNS1X5NZpfX7FtMsgzmb3JQVy_tkfn4kyKwgFtONfG9FqhGl6AMjrHw5tm4wWlYt-2LgjKYz8zrkaydEEtSq=s0"
                alt="Indian woman laughing with effortless grace at a festive courtyard gathering wearing sculpted gold necklace"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-center transform transition duration-700 hover:scale-[1.02]"
               quality={90} />
              <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-[#170b0c]/85 backdrop-blur-md border border-champagne-gold/20">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#e7c276] font-medium">
                  Courtyard Soirée · 2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 03: INTIMATE MACRO FOCUS — The Unseen Reverse
          ======================================================== */}
      <section className="relative w-full bg-[#450006] text-warm-ivory py-20 sm:py-32 px-4 sm:px-12 lg:px-24 border-t border-champagne-gold/15">
        <div className="max-w-[1320px] mx-auto flex flex-col items-center text-center">
          <span className="font-sans text-xs text-[#e7c276] tracking-widest sm:tracking-[0.35em] uppercase mb-4 font-semibold">
            Intimate Macro Focus
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl text-warm-ivory max-w-2xl mb-8 sm:mb-12 font-normal">
            The Unseen Reverse: Micro-Pearls &amp; Hand-Crimped Collet Craft
          </h3>

          {/* Macro Visual Hero Card */}
          <div className="w-full max-w-3xl relative p-4 sm:p-6 bg-[#352627]/60 backdrop-blur-md shadow-2xl border border-champagne-gold/25">
            <div className="relative w-full aspect-square sm:aspect-[4/3] overflow-hidden bg-[#170b0c] border border-champagne-gold/20">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRAeYuy6CHG_5Slp5Fr9jh2XmbS7BZs4V1BfdgMbOH8ahueAaXF_IgWYO_rP78jCC5Aifk1tvWtEwpEUnTicSrWCURWknN6nxaQduP21WjFtOGsHbG27gx1Y7x_uPyYYsMskW5RTRoqdYMm9dEGz7F2Kl6mFxmN1YburRKjPuAZJLqVcXKB7gDMpG0_0n7O6QNXZBYvkXM90HL2hChzuRdoUnR47w7lYyp7JTh6MXM1MpVifm6LrDh=s0"
                alt="Extreme macro fine jewellery photograph of gold and uncut diamond collet setting with micro-pearl edge on deep burgundy velvet"
                fill
                sizes="(max-width: 768px) 100vw, 750px"
                className="object-cover object-center"
               quality={90} />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-2 text-left">
              <div>
                <h4 className="font-serif text-lg text-[#e7c276] font-medium">
                  Uncut Polki &amp; Basra Seed Pearls
                </h4>
                <p className="font-sans text-xs sm:text-sm text-warm-ivory/80 max-w-lg mt-1 font-light leading-relaxed">
                  Set within pure 24K gold foil (Jadau) over deep burgundy velvet. Every gem collet is hand-crimped without mechanical prongs—the ancient Marwar discipline preserved intact.
                </p>
              </div>
              <div className="shrink-0 text-left sm:text-right">
                <span className="font-sans text-[10px] tracking-widest sm:tracking-[0.25em] text-[#e7c276] uppercase block font-semibold">
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
          SECTION 04: 02 / BEGINNINGS — Subtle Rites of Quiet Renewal (Warm Ivory Split-Screen)
          ======================================================== */}
      <section className="relative w-full bg-[#FAF7EF] text-[#3c2d2e] py-20 sm:py-28 px-4 sm:px-12 lg:px-24 border-t border-champagne-gold/20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Portrait Photography Column */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto aspect-[3/4] overflow-hidden bg-[#e8e2d0] shadow-xl border border-[#d8b46a]/30">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLAdle9AGvuGgPKVh9QJBFyHMxJYH6k7Ef6t5lhclMbfDTAA4Lb69qHKIM9udUcm7U7SEa7PO8NVLf05cgJOJLDwbZzjPCUFk7UYO9a4EUxc2DuSZkLMoT5V9CqDQc8CdWTKbIZxnDgkN8QTK32LZDbl05UAQe99rCeXmR0vv4Hr5Y1RNfTq4eRzz3CsKWBzplDDYtbJqICMol7HyCSjG-KsyoDaeIOti3Fsk6NsZ34MCx0HJ_ei67=s0"
                alt="Indian woman dressed in minimalist raw silk with morning sunbeam highlighting gold and uncut diamond lariat pendant"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
               quality={90} />
              <div className="absolute top-4 left-4 px-3 py-1 bg-[#120708]/85 backdrop-blur-md">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#e7c276] font-medium">
                  A New Chapter
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Narrative Column */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-sans text-xs font-semibold text-[#7e2a2a] tracking-[0.3em] uppercase">
                02 / BEGINNINGS
              </span>
              <span className="w-12 h-px bg-[#7e2a2a]/30"></span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#120708] mb-6 leading-tight font-normal">
              Subtle Rites of <br />
              <span className="italic text-[#7e2a2a]">Quiet Renewal.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#3c2d2e] mb-6 leading-relaxed font-light">
              Morning light through raw handloom silk. A solitary uncut diamond suspended on an understated lariat thread. Some milestones do not clamor for applause—they rest quietly along the collarbone, marking a new threshold crossed in absolute serenity.
            </p>

            <div className="space-y-4 pt-2 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#7e2a2a] shrink-0 mt-0.5" />
                <div>
                  <span className="font-sans text-sm text-[#120708] font-semibold block">
                    Natural Certified Diamonds
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#554241] mt-0.5 font-light">
                    Ethically sourced, individually hallmarked for clarity and inner brilliance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#7e2a2a] shrink-0 mt-0.5" />
                <div>
                  <span className="font-sans text-sm text-[#120708] font-semibold block">
                    Satin-Finish Modernity
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-[#554241] mt-0.5 font-light">
                    Lightweight fluid articulation made for everyday tactile intimacy.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <a
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#450006] text-[#FAF7EF] font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#260003] transition-colors"
                href="https://wa.me/918854000203?text=I%20would%20like%20to%20view%20everyday%20solitaires%20and%20lariats"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Arrange Salon Viewing</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 05: 03 / EXPRESSION — Sculptural Autonomy & Architectural Contrast
          ======================================================== */}
      <section className="relative w-full bg-[#170b0c] text-warm-ivory py-20 sm:py-28 px-4 sm:px-12 lg:px-24 border-t border-champagne-gold/15">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text & Architectural Details */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-sans text-xs font-semibold text-[#e7c276] tracking-[0.3em] uppercase">
                  03 / EXPRESSION
                </span>
                <span className="w-12 h-px bg-[#e7c276]/30"></span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-warm-ivory mb-6 leading-tight font-normal">
                Sculptural Autonomy &amp; <br />
                <span className="italic text-[#e7c276]">Architectural Contrast.</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-warm-ivory/80 mb-6 leading-relaxed font-light">
                Jewellery as personal armor and self-sovereignty. Asymmetrical 925 sterling cuffs juxtaposed against heavy geometric gold rings; traditional Rajasthani ingot purity translated into avant-garde, brutalist forms.
              </p>

              <div className="p-6 bg-[#251819] border border-champagne-gold/20 mb-8 shadow-sm">
                <span className="font-sans text-[10px] tracking-[0.22em] text-[#e7c276] uppercase block mb-2 font-semibold">
                  Styling Ethos
                </span>
                <p className="font-sans text-xs sm:text-sm text-warm-ivory/85 leading-relaxed font-light italic">
                  “Wear royal gold with structured tailoring or minimalist raw drape. It is never about conformity to costume—it is an assertion of character.”
                </p>
              </div>

              <div className="flex items-center gap-6">
                <a
                  className="inline-flex items-center gap-2 text-[#e7c276] hover:text-[#ffdfa0] font-sans text-xs tracking-[0.22em] uppercase font-semibold transition-colors"
                  href="tel:+918854000203"
                >
                  <Phone className="w-4 h-4" />
                  <span>Speak with Master Craftsman</span>
                </a>
              </div>
            </div>

            {/* Heroic Landscape Image */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden aspect-[16/9] shadow-2xl bg-[#352627] border border-champagne-gold/25">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXsQhUbsgzrVV4PKlKKdsI2COrnnryntY8PDsXMKlOIzBttAx5wIO93Lnir7bD8f-5dqaoDrQJu_TVPXjKOze6hQNDADUWJnlygmm9ezYERcWBpH9mAoNjj56-rgI6eOdUclUJfpv5LzhHX8YJikdx2f0W9pMgvwtNl4IhzqHs7UwRVon0yr4HDDFk2KLOvTEhpWM3UklYoecSBXsGrSRwlfledzQjY5Lr_OG5kjcekHctXOHDFHhE=s0"
                  alt="Confident Indian woman wearing modern silver cuffs and geometric gold rings in dark studio backdrop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center"
                 quality={90} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 06: INTERACTIVE PERSONA CONSULTATION ("WHAT FEELS LIKE YOU?")
          ======================================================== */}
      <MomentsClient />

      {/* ========================================================
          SECTION 07: 04 / MEMORY — Passed from Hand to Hand, Never Diminished
          ======================================================== */}
      <section className="relative w-full bg-[#352627] text-warm-ivory py-20 sm:py-28 px-4 sm:px-12 lg:px-24 border-t border-champagne-gold/15">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image on Left */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden aspect-[4/3] bg-[#2a1c1d] shadow-2xl border border-champagne-gold/25">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZPUO03csrRNPL4zzXKNkbYpEFS59XlCuecc5szQcvqcAyPs32_0FUCYkBLlt4_GHpTE2bREKEECz6noKRVMz4XvgkZ9kZdEZ-WMLmSxAVEjpFVgvDjCw-kmGrQgFmYRNmhZzxo3YWLrmqj4CvcpWYrrPkoiYUErATD56HnPMUgToDA7u-Hnve_7WDcCj_SJfIm5dy--tDSamgDN8QilnoBztDPvIguqF8XfPkK96j-C9zhJ4evnj7=s0"
                alt="Intimate heirloom gold bracelet in warm sunset glow against raw linen"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
               quality={90} />
            </div>
          </div>

          {/* Narrative on Right */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-sans text-xs font-semibold text-[#e7c276] tracking-[0.3em] uppercase">
                04 / MEMORY
              </span>
              <span className="w-12 h-px bg-[#e7c276]/30"></span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-warm-ivory mb-6 leading-tight font-normal">
              Passed from Hand to Hand, <br />
              <span className="italic text-[#e7c276]">Never Diminished.</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-warm-ivory/80 mb-6 leading-relaxed font-light">
              The truest measure of fine jewellery is not its acquisition date, but the hands that cherish it fifty years later. Our Parvatsar goldsmiths formulate 22-karat alloy mixtures with structural memory—built to resist the fatigue of time and stay radiant across weddings, christenings, and milestones yet unwritten.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-4 mb-8">
              <div className="p-4 bg-[#251819] border border-champagne-gold/20 shadow-sm">
                <span className="font-serif text-2xl text-[#e7c276] block mb-1 font-normal">
                  100%
                </span>
                <span className="font-sans text-xs text-warm-ivory/70">
                  BIS Hallmarked Precious Alloys
                </span>
              </div>
              <div className="p-4 bg-[#251819] border border-champagne-gold/20 shadow-sm">
                <span className="font-serif text-2xl text-[#e7c276] block mb-1 font-normal">
                  Generational
                </span>
                <span className="font-sans text-xs text-warm-ivory/70">
                  Bespoke Vault Custody &amp; Care
                </span>
              </div>
            </div>

            <a
              className="self-start inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#450006] text-warm-ivory font-sans text-xs uppercase tracking-widest sm:tracking-[0.2em] font-semibold hover:bg-[#260003] transition-colors border border-champagne-gold/30"
              href="tel:+918854000203"
            >
              <span>Consult Salon Archivist</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 08: THE MOMENT WALL — OVERLAPPING VISUAL ANTHOLOGY
          ======================================================== */}
      <section className="relative w-full bg-[#170b0c] text-warm-ivory py-20 sm:py-32 px-4 sm:px-12 lg:px-20 overflow-hidden border-t border-champagne-gold/15">
        <div className="max-w-[1520px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs text-[#e7c276] tracking-[0.35em] uppercase block mb-3 font-semibold">
              Atelier Visual Anthology
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-warm-ivory mb-4 font-normal">
              The Moment Wall
            </h2>
            <p className="font-sans text-sm sm:text-base text-warm-ivory/70 font-light leading-relaxed">
              Fragments of light, laughter, craft, and ceremony captured in unhurried synchrony across Parvatsar and beyond.
            </p>
          </div>

          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Column 1 (Left): 4 cols */}
            <div className="md:col-span-4 flex flex-col gap-6 lg:gap-8">
              {/* Card 1: CELEBRATE */}
              <div className="relative group overflow-hidden bg-[#2a1c1d] border border-champagne-gold/20 shadow-xl">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVa9Ig73NRGQ31WplIAMUj2HAOivbkVegUQ47qC02ghCJN8mfWFx5jB_j5zRZkT_2FCaWta8_F5MOpWfiE3iN-FxoEsr2aIFFNpXSadpdCT1bmRLENNmipJWWkBOYwqkXgJqFXO2fzXwmC4VPebtiQLWPNlccoE_9wlNS1X5NZpfX7FtMsgzmb3JQVy_tkfn4kyKwgFtONfG9FqhGl6AMjrHw5tm4wWlYt-2LgjKYz8zrkaydEEtSq=s0"
                    alt="Courtyard celebration with sculpted gold necklace"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                   quality={90} />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#170b0c]/85 backdrop-blur-md text-[10px] font-sans tracking-[0.25em] text-[#e7c276] uppercase border border-champagne-gold/30">
                    [CELEBRATE]
                  </span>
                </div>
                <div className="p-4 bg-[#251819] border-t border-champagne-gold/15">
                  <span className="font-serif text-sm text-warm-ivory block font-medium">
                    Evening Courtyard Soiree
                  </span>
                  <span className="font-sans text-xs text-warm-ivory/70 mt-0.5 block font-light">
                    Sculpted 22K Collar
                  </span>
                </div>
              </div>

              {/* Card 2: MACRO DETAIL */}
              <div className="relative group overflow-hidden bg-[#2a1c1d] border border-champagne-gold/20 shadow-xl">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRAeYuy6CHG_5Slp5Fr9jh2XmbS7BZs4V1BfdgMbOH8ahueAaXF_IgWYO_rP78jCC5Aifk1tvWtEwpEUnTicSrWCURWknN6nxaQduP21WjFtOGsHbG27gx1Y7x_uPyYYsMskW5RTRoqdYMm9dEGz7F2Kl6mFxmN1YburRKjPuAZJLqVcXKB7gDMpG0_0n7O6QNXZBYvkXM90HL2hChzuRdoUnR47w7lYyp7JTh6MXM1MpVifm6LrDh=s0"
                    alt="Extreme macro gold and uncut diamond collet on burgundy velvet"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                   quality={90} />
                </div>
                <div className="p-4 bg-[#251819] border-t border-champagne-gold/15 flex justify-between items-center">
                  <div>
                    <span className="font-sans text-[10px] tracking-widest text-[#e7c276] block uppercase font-medium">
                      Basra Pearls &amp; Collet
                    </span>
                    <span className="font-sans text-xs text-warm-ivory/70 mt-0.5 block font-light">
                      Hand-crimped 24K Jadau
                    </span>
                  </div>
                  <Diamond className="w-4 h-4 text-[#e7c276] shrink-0" />
                </div>
              </div>
            </div>

            {/* Column 2 (Center): 4 cols with negative offset for editorial pacing */}
            <div className="md:col-span-4 flex flex-col gap-6 lg:gap-8 md:-mt-8">
              {/* Card 3: BEGIN */}
              <div className="relative group overflow-hidden bg-[#2a1c1d] border border-champagne-gold/20 shadow-xl">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLAdle9AGvuGgPKVh9QJBFyHMxJYH6k7Ef6t5lhclMbfDTAA4Lb69qHKIM9udUcm7U7SEa7PO8NVLf05cgJOJLDwbZzjPCUFk7UYO9a4EUxc2DuSZkLMoT5V9CqDQc8CdWTKbIZxnDgkN8QTK32LZDbl05UAQe99rCeXmR0vv4Hr5Y1RNfTq4eRzz3CsKWBzplDDYtbJqICMol7HyCSjG-KsyoDaeIOti3Fsk6NsZ34MCx0HJ_ei67=s0"
                    alt="Indian woman in raw silk with understated gold lariat pendant"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                   quality={90} />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#170b0c]/85 backdrop-blur-md text-[10px] font-sans tracking-[0.25em] text-[#e7c276] uppercase border border-champagne-gold/30">
                    [BEGIN]
                  </span>
                </div>
                <div className="p-4 bg-[#251819] border-t border-champagne-gold/15">
                  <span className="font-serif text-sm text-warm-ivory block font-medium">
                    Solitary Dawn Ceremony
                  </span>
                  <span className="font-sans text-xs text-warm-ivory/70 mt-0.5 block font-light">
                    Natural Solitaire Thread
                  </span>
                </div>
              </div>

              {/* Card 4: ARCHITECTURAL CUFF */}
              <div className="relative group overflow-hidden bg-[#2a1c1d] border border-champagne-gold/20 shadow-xl">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdEK8oN4OmIe861Un84MwmA9EqlNEeZm2nows0OdiUA7QZ21vi7tRG_K_POs4Q6PydH1NntodjFHPYJQRSA6y_9KiUXFHaI6jqkgTOaRHqiRragpg7csDDaQQzpbbxBUjRP_4KktczAA_v0spDic0TCjvAAB9mmhvJmxwZnpG-7meTW8k-QOEibRAYn7scXjH7Rx8k8n8gw8q5mv-srMv_pmHK85-NhmHzc2hZKHmUyFVn7OPZSYDi=s0"
                    alt="Sculpted modern 22K gold architectural ear cuff"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                   quality={90} />
                </div>
                <div className="p-4 bg-[#251819] border-t border-champagne-gold/15 flex justify-between items-center">
                  <span className="font-sans text-[10px] tracking-widest text-[#e7c276] uppercase font-medium">
                    22K Billet Ear Sculpture
                  </span>
                  <span className="font-sans text-[9px] text-warm-ivory/50 tracking-wider">
                    ARCHIVE &apos;25
                  </span>
                </div>
              </div>
            </div>

            {/* Column 3 (Right): 4 cols */}
            <div className="md:col-span-4 flex flex-col gap-6 lg:gap-8">
              {/* Card 5: EXPRESS */}
              <div className="relative group overflow-hidden bg-[#2a1c1d] border border-champagne-gold/20 shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXsQhUbsgzrVV4PKlKKdsI2COrnnryntY8PDsXMKlOIzBttAx5wIO93Lnir7bD8f-5dqaoDrQJu_TVPXjKOze6hQNDADUWJnlygmm9ezYERcWBpH9mAoNjj56-rgI6eOdUclUJfpv5LzhHX8YJikdx2f0W9pMgvwtNl4IhzqHs7UwRVon0yr4HDDFk2KLOvTEhpWM3UklYoecSBXsGrSRwlfledzQjY5Lr_OG5kjcekHctXOHDFHhE=s0"
                    alt="Indian woman wearing asymmetrical modern silver cuffs and gold rings"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                   quality={90} />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#170b0c]/85 backdrop-blur-md text-[10px] font-sans tracking-[0.25em] text-[#e7c276] uppercase border border-champagne-gold/30">
                    [EXPRESS]
                  </span>
                </div>
                <div className="p-4 bg-[#251819] border-t border-champagne-gold/15">
                  <span className="font-serif text-sm text-warm-ivory block font-medium">
                    Brutalist Cuffs &amp; Signets
                  </span>
                  <span className="font-sans text-xs text-warm-ivory/70 mt-0.5 block font-light">
                    Asymmetric Sterling &amp; Gold
                  </span>
                </div>
              </div>

              {/* Card 6: COCKTAIL RING PLINTH */}
              <div className="relative group overflow-hidden bg-[#2a1c1d] border border-champagne-gold/20 shadow-xl">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBycYxg-OrxWUu-gqERTydwfr_ryuVjX6flGfh4-Jdt_PjADbTj8wm_zRRqLXkvwuZIM2Oe2SIXvjkL1p6HUzv8nPbDAQnP9z81MsvgWMPWORsURjnX-cegeji6nPW2VWYGKeHHkFUmkb3KF3v1Yea_8aZccwWLDY9pmI3BGAsdsUZUJzxQ7KnR31y8ZTrDtstw9XMYW9mwb18iF3MT77fUwl0nbjWXqgSD04_yo90S-0ApRCq_6Yi=s0"
                    alt="Modern gold cocktail ring with cabochon stone on sandstone plinth"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                   quality={90} />
                </div>
                <div className="p-4 bg-[#251819] border-t border-champagne-gold/15">
                  <span className="font-sans text-[10px] tracking-widest text-[#e7c276] block uppercase font-medium">
                    Cabochon on Sandstone
                  </span>
                  <span className="font-sans text-xs text-warm-ivory/70 mt-0.5 block font-light">
                    Stepped Bezel Architecture
                  </span>
                </div>
              </div>

              {/* Card 7: REMEMBER */}
              <div className="relative group overflow-hidden bg-[#2a1c1d] border border-champagne-gold/20 shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQCy9AZRG8Y2Ij8vgGLF5JBvIcb0ricbR8nAx59vszwGuIazLYBOHc687kjrLZTaO0_2eo8H7_ukwgqLk5122r7gIIJvR6HjGMqVM98CigDaO20qVHmKh6CZyAHkGH2GebaJP6Vx_vaTNBNbvKo3-IBz_uRmyNmVtAvM4WWux68qiRj7F6xIYQtseDTM7O_l2I1DIR030bLvz0OZqlPZ5Yd2yyjxDL9ULK3yC4l1T_ZBdhepDHu-Cq=s0"
                    alt="Understated diamond and gold lariat necklace on pale sandstone"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                   quality={90} />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#170b0c]/85 backdrop-blur-md text-[10px] font-sans tracking-[0.25em] text-[#e7c276] uppercase border border-champagne-gold/30">
                    [REMEMBER]
                  </span>
                </div>
                <div className="p-4 bg-[#251819] border-t border-champagne-gold/15">
                  <span className="font-serif text-sm text-warm-ivory block font-medium">
                    Lariat on Pale Sandstone
                  </span>
                  <span className="font-sans text-xs text-warm-ivory/70 mt-0.5 block font-light">
                    Quiet Morning Raking Light
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 09: A QUIET MOMENT (WARM IVORY MINIMALISM)
          ======================================================== */}
      <section className="relative w-full bg-[#FAF7EF] text-[#3c2d2e] py-24 sm:py-36 px-4 sm:px-12 lg:px-24 text-center border-t border-champagne-gold/20">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="font-sans text-xs text-[#7e2a2a] tracking-widest sm:tracking-[0.35em] uppercase mb-6 font-semibold">
            Atelier Meditation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#120708] mb-6 sm:mb-8 tracking-tight max-w-3xl leading-[1.15] font-normal uppercase">
            SOME MOMENTS <br />
            <span className="italic text-[#7e2a2a] font-light">DON’T NEED WORDS.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#554241] max-w-xl mb-10 sm:mb-14 leading-relaxed font-light">
            A slow breath before entering the hall. The chill of gold warming to the skin. The unspoken assurance of knowing who you are, carved in light and precious metal.
          </p>

          {/* Minimal Centerpiece Image on Pale Surface */}
          <div className="w-full max-w-2xl overflow-hidden shadow-2xl bg-[#170b0c] border border-[#d8b46a]/30">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQCy9AZRG8Y2Ij8vgGLF5JBvIcb0ricbR8nAx59vszwGuIazLYBOHc687kjrLZTaO0_2eo8H7_ukwgqLk5122r7gIIJvR6HjGMqVM98CigDaO20qVHmKh6CZyAHkGH2GebaJP6Vx_vaTNBNbvKo3-IBz_uRmyNmVtAvM4WWux68qiRj7F6xIYQtseDTM7O_l2I1DIR030bLvz0OZqlPZ5Yd2yyjxDL9ULK3yC4l1T_ZBdhepDHu-Cq=s0"
                alt="Editorial jewellery still life of modern diamond and gold lariat necklace on smooth pale sandstone"
                fill
                sizes="(max-width: 768px) 100vw, 680px"
                className="object-cover"
               quality={90} />
            </div>
          </div>
          <div className="pt-8">
            <span className="font-sans text-[10px] sm:text-[11px] tracking-widest sm:tracking-[0.25em] uppercase text-[#7e2a2a] font-medium">
              Purity · Restraint · Rajputana Legacy
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 10: FINAL CONCIERGE CTA (DEEP BURGUNDY)
          ======================================================== */}
      <section className="relative w-full bg-[#450006] text-warm-ivory py-20 sm:py-28 px-4 sm:px-12 lg:px-24 overflow-hidden border-t border-champagne-gold/15">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Main Headline and CTA Buttons */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#e7c276]"></span>
                <span className="font-sans text-xs text-[#e7c276] tracking-widest sm:tracking-[0.3em] uppercase font-semibold">
                  Private Salon Appointments
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-warm-ivory mb-6 leading-tight font-normal">
                Find the Piece That Becomes <br />
                <span className="italic text-[#e7c276] font-light">Part of Your Story.</span>
              </h2>
              <p className="font-sans text-sm sm:text-base md:text-lg text-warm-ivory/80 max-w-xl mb-8 sm:mb-10 leading-relaxed font-light">
                Every consultation is private, deliberate, and free of haste. Whether you seek an auspicious bridal parure or an everyday solitaire, our salon curators in Parvatsar are at your service.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#e7c276] text-[#170b0c] font-sans text-xs uppercase tracking-widest sm:tracking-[0.22em] font-bold hover:bg-[#ffdfa0] transition-all text-center"
                  href="/collections"
                >
                  Explore Collections
                </Link>
                <a
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#170b0c] text-[#e7c276] border border-champagne-gold/30 font-sans text-xs uppercase tracking-widest sm:tracking-[0.22em] font-semibold hover:bg-[#2a1c1d] transition-all flex items-center justify-center gap-2 text-center"
                  href="https://wa.me/918854000203"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
                <a
                  className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#352627]/80 text-warm-ivory font-sans text-xs uppercase tracking-widest sm:tracking-[0.22em] font-semibold hover:bg-[#403132] transition-all flex items-center justify-center gap-2 text-center border border-champagne-gold/20"
                  href="tel:+918854000203"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Verified Salon Details & Heritage Badge */}
            <div className="lg:col-span-5 bg-[#170b0c] border border-champagne-gold/25 p-6 sm:p-10 shadow-2xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-champagne-gold/20">
                <Store className="w-6 h-6 text-[#e7c276]" />
                <div>
                  <span className="font-serif text-sm text-warm-ivory uppercase tracking-wider block font-medium">
                    Flagship Showroom
                  </span>
                  <span className="font-sans text-[10px] text-[#e7c276] tracking-widest uppercase font-semibold">
                    Parvatsar, Nagaur District
                  </span>
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div>
                  <span className="font-sans text-[10px] text-warm-ivory/50 block uppercase tracking-wider font-medium">
                    Coordinates
                  </span>
                  <p className="font-sans text-sm text-warm-ivory font-medium mt-0.5">
                    Bank Wali Gali, Parvatsar, Rajasthan — 341512
                  </p>
                </div>
                <div>
                  <span className="font-sans text-[10px] text-warm-ivory/50 block uppercase tracking-wider font-medium">
                    Salon Hours
                  </span>
                  <p className="font-sans text-sm text-warm-ivory font-medium mt-0.5">
                    Open Daily · 9:00 AM – 8:00 PM IST
                  </p>
                  <p className="font-sans text-xs text-warm-ivory/70 mt-1 font-light">
                    Bridal viewings and bespoke vault previews by prior consultation.
                  </p>
                </div>
                <div>
                  <span className="font-sans text-[10px] text-warm-ivory/50 block uppercase tracking-wider font-medium">
                    Direct Concierge
                  </span>
                  <p className="font-sans text-sm text-[#e7c276] font-medium mt-0.5">
                    +91 88540 00203
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-champagne-gold/20 flex items-center justify-between">
                <span className="font-sans text-[9px] text-warm-ivory/60 tracking-widest uppercase font-medium">
                  Certified Natural Diamonds
                </span>
                <span className="font-sans text-[9px] text-[#e7c276] tracking-widest uppercase font-semibold">
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

