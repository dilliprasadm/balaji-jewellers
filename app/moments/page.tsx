import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppProductUrl } from "@/lib/utils/whatsapp";

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

const MOMENTS_STORIES = [
  {
    id: "m1",
    tag: "MOMENT 01 · EVENING CELEBRATION",
    title: "Light in Motion",
    prose:
      "Laughter echoing across an evening courtyard under amber lanterns. A sculpted gold necklace rests effortlessly, catching natural candlelight with each gesture of joy.",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1WheJkVyuZZIGkxhZ4LmEgraNW4KKSVueXZn_rlpqRqVoNJbQmRJrLTLtDkpETVI7f9VQY5xwHK6cr3jSV7Tg6w5i5jacNk4-rQWhtwE8YerYbPVtTrLEUUi1wWLtYr0YSyB2dNuatdN_5a9Dyh0k0adU9AUjZJzlYKf6xXRAZxRClQTN-5RMUGUPbGH_1XYuSs5CmJRxQAXe8nGRCZ_51YHVGCf42TXQHrmyLNgx9I7uDzlU1_oG6zpMs",
    palette: "Warm Amber & Deep Velvet",
  },
  {
    id: "m2",
    tag: "MOMENT 02 · INTIMATE DINNER",
    title: "Quiet Radiance",
    prose:
      "At an intimate celebratory dinner, a close crop highlights an ornate contemporary choker and delicate ear cuff. A serene, radiant presence framed by velvet shadows.",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1UqRE931sPjKOtn7WYFGssYm7KV06AExGsZpstJW-sLuvt1rtC3gY8i5-UG7OHVb_BBTHzxYJzSmJoOSyL2xWJ4DuCCwpF7u0ZrqCRuqwiNkBs7DdukS0haY4TrqF2jBQib9lF3Qj7ijWk0DRCqbpBzwyI8b0bwJzWWnNd8UnE-pQhX8d4EqA3fSEa7VjxiNkLNRjQ_A8t4DRkThjPT7BIoXKINC2Hnr4_f14vlAPC3tRQEDHoacWCu5A",
    palette: "Chiaroscuro & Champagne Glow",
  },
  {
    id: "m3",
    tag: "MOMENT 03 · THE QUIET DAWN",
    title: "First Light",
    prose:
      "Dressed in minimalist raw silk, a serene posture welcomes the morning. A gentle sunbeam falls across the collarbone, highlighting an understated modern lariat pendant against warm ivory plaster.",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1Ufc3jxWEDGaGF17dSjSk5I_jRZAA20X8_oc1sIHSA7QJzdd-BEUT5IPTIP2wTJ9NC8Qlj40maME6Udd4gJQqJCRb6XKo9az01m6VpglYLdXE0YiEEADxcn62uJJqTUsbLph8HinWhEjax0FON9GOdiXCtRvBReAOQakcimMHn8n2TA1AVsUwbpeOGaJlfrfBMVKAjcs_fUYuhYRJEHXAcn5K7F1iX-9PWrOLr3X3eye9-guFij77RuN80",
    palette: "Morning Sunbeam & Raw Silk",
  },
  {
    id: "m4",
    tag: "MOMENT 04 · CONTEMPORARY POISE",
    title: "Architectural Presence",
    prose:
      "Asymmetrical sterling silver cuffs paired with sculptural geometric rings. Confident lines and architectural stillness against a dark studio backdrop.",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1U9Rh4mWy_2vGLPwPOQPqVxRWtjJxpSe99NrXP0Iq5NR7VU_JhjkzOHWbkDgFfJ0MsuG14Qpioal6oZkTFVw-SO7SJNL39-lpVGXFiGYeSQBix78NXRa2x-qktssJ1D_rkJV6-34uc_FZJvD2j09iHLJKwPa5W_2oQeCuIyGi_J4lmtcGEdP3Jq0a1u-eVliGuzK-w5axPyhArUv3haVdVLmzUnr6Udgz3yxrjCtNFg7UIE9XsgYoQwPIs",
    palette: "Solid Silver & Architectural Form",
  },
];

export default function MomentsPage() {
  return (
    <div className="w-full bg-near-black text-warm-ivory selection:bg-deep-burgundy selection:text-soft-gold pt-20">
      {/* ========================================================
          HERO NARRATIVE
          ======================================================== */}
      <section className="relative min-h-[85vh] w-full bg-gradient-to-b from-[#1c080a] via-near-black to-[#120708] flex flex-col justify-center items-center text-center px-6 lg:px-14 py-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_40%,_rgba(216,180,106,0.18),_transparent_70%)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-champagne-gold">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-sans text-xs tracking-monumental uppercase font-semibold">
              LIFESTYLE &amp; CONTEMPORARY EDITORIAL
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-warm-ivory font-normal leading-tight">
            Jewellery Becomes <br />
            <span className="italic text-soft-gold">Part of the Moment.</span>
          </h1>

          <p className="font-sans text-warm-ivory/80 text-base md:text-xl font-light leading-relaxed max-w-2xl mt-2">
            Jewellery lives when it is worn. Explore an editorial monograph depicting fine adornment across milestones of poise, gathering, and quiet intimacy.
          </p>

          <div className="w-12 h-px bg-champagne-gold/40 mt-4"></div>
        </div>
      </section>

      {/* ========================================================
          EDITORIAL MOMENTS ESSAYS
          ======================================================== */}
      <div className="w-full flex flex-col">
        {MOMENTS_STORIES.map((moment, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <section
              key={moment.id}
              className={`w-full py-28 px-6 lg:px-14 border-t border-champagne-gold/15 ${
                isEven ? "bg-[#170b0c]" : "bg-near-black"
              }`}
            >
              <div className="max-w-[1460px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Visual Frame */}
                <div
                  className={`lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/11] bg-near-black border border-champagne-gold/30 overflow-hidden shadow-2xl ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    fill
                    className="object-cover transition-transform duration-1000 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-near-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-sans text-champagne-gold uppercase tracking-widest bg-near-black/85 px-3 py-1 border border-champagne-gold/20">
                    <span>{moment.tag}</span>
                    <span className="text-warm-ivory/60">{moment.palette}</span>
                  </div>
                </div>

                {/* Narrative Column */}
                <div
                  className={`lg:col-span-5 flex flex-col gap-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase font-semibold">
                    {moment.tag}
                  </span>
                  <h2 className="font-serif text-4xl sm:text-5xl text-warm-ivory leading-tight font-normal">
                    {moment.title}
                  </h2>
                  <p className="font-sans text-warm-ivory/80 text-base md:text-lg font-light leading-relaxed">
                    {moment.prose}
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/collections"
                      className="inline-flex items-center gap-2 text-xs font-sans tracking-widest text-champagne-gold hover:text-soft-gold uppercase font-medium"
                    >
                      <span>Discover Similar Pieces</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ========================================================
          CLOSING CONCIERGE CALLOUT
          ======================================================== */}
      <section className="w-full py-24 px-6 lg:px-14 bg-gradient-to-b from-[#170b0c] to-near-black border-t border-champagne-gold/15 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase">
            YOUR OWN MOMENTS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-warm-ivory leading-tight">
            Find the Piece for Your Occasion
          </h2>
          <p className="font-sans text-warm-ivory/80 text-base font-light leading-relaxed">
            Whether for celebrations or personal milestones, our Parvatsar salon welcomes your inquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/collections"
              className="px-8 py-3.5 bg-champagne-gold text-near-black font-sans text-xs tracking-widest uppercase font-semibold hover:bg-soft-gold transition-colors"
            >
              Explore Collections
            </Link>
            <a
              href={getWhatsAppProductUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-champagne-gold text-champagne-gold font-sans text-xs tracking-widest uppercase font-semibold hover:bg-champagne-gold/10 transition-colors flex items-center gap-2"
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
