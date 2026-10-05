"use client";

import React, { useState } from "react";
import Image from "next/image";

interface PersonaTab {
  id: string;
  name: string;
  verve: string;
  title: string;
  description: string;
  detail1Label: string;
  detail1Val: string;
  detail2Label: string;
  detail2Val: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
}

const PERSONAS: PersonaTab[] = [
  {
    id: "timeless",
    name: "01 · Timeless",
    verve: "Verve: Heirloom Permanence",
    title: "The Patina of Generations",
    description:
      "Solid 22K Rajasthani gold cuff with ancestral file-work, engineered to endure decades of daily living and become richer with touch. Designed for patrons who regard adornment as an enduring lineage asset.",
    detail1Label: "ORIGIN",
    detail1Val: "Parvatsar Vault Archive",
    detail2Label: "ALLOY",
    detail2Val: "916 BIS Hallmarked Gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZPUO03csrRNPL4zzXKNkbYpEFS59XlCuecc5szQcvqcAyPs32_0FUCYkBLlt4_GHpTE2bREKEECz6noKRVMz4XvgkZ9kZdEZ-WMLmSxAVEjpFVgvDjCw-kmGrQgFmYRNmhZzxo3YWLrmqj4CvcpWYrrPkoiYUErATD56HnPMUgToDA7u-Hnve_7WDcCj_SJfIm5dy--tDSamgDN8QilnoBztDPvIguqF8XfPkK96j-C9zhJ4evnj7",
    imageAlt: "Heirloom gold bracelet resting gently against natural hand-loomed raw linen in evening light",
    whatsappMessage: "Inquiring about Timeless Heirloom bracelets",
  },
  {
    id: "modern",
    name: "02 · Modern",
    verve: "Verve: Sculptural Clarity",
    title: "Architectural Ear Sculptures",
    description:
      "Weightless tension fit requiring zero piercing, carved from unified solid 22K yellow gold billets. Designed for those who seek high contemporary distinction at gallery openings and modern celebrations.",
    detail1Label: "CONSTRUCTION",
    detail1Val: "Single-Piece Tension Mold",
    detail2Label: "WEIGHT CATEGORY",
    detail2Val: "Ultra-Light Ergonomic",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdEK8oN4OmIe861Un84MwmA9EqlNEeZm2nows0OdiUA7QZ21vi7tRG_K_POs4Q6PydH1NntodjFHPYJQRSA6y_9KiUXFHaI6jqkgTOaRHqiRragpg7csDDaQQzpbbxBUjRP_4KktczAA_v0spDic0TCjvAAB9mmhvJmxwZnpG-7meTW8k-QOEibRAYn7scXjH7Rx8k8n8gw8q5mv-srMv_pmHK85-NhmHzc2hZKHmUyFVn7OPZSYDi",
    imageAlt: "Sculpted 22K modern gold architectural ear cuff on dark plum raw silk",
    whatsappMessage: "Inquiring about Modern Architectural Ear Cuff",
  },
  {
    id: "statement",
    name: "03 · Statement",
    verve: "Verve: Singular Focal Point",
    title: "The Sandstone & Cabochon Ring",
    description:
      "A bespoke high-relief cocktail ring balancing a radiant natural unheated cabochon gemstone against brutalist tiered gold stepped bezel. Commands the room effortlessly with a gesture of the hand.",
    detail1Label: "GEMSTONE",
    detail1Val: "Unheated Cabochon",
    detail2Label: "BEZEL",
    detail2Val: "Stepped Architectural Gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBycYxg-OrxWUu-gqERTydwfr_ryuVjX6flGfh4-Jdt_PjADbTj8wm_zRRqLXkvwuZIM2Oe2SIXvjkL1p6HUzv8nPbDAQnP9z81MsvgWMPWORsURjnX-cegeji6nPW2VWYGKeHHkFUmkb3KF3v1Yea_8aZccwWLDY9pmI3BGAsdsUZUJzxQ7KnR31y8ZTrDtstw9XMYW9mwb18iF3MT77fUwl0nbjWXqgSD04_yo90S-0ApRCq_6Yi",
    imageAlt: "Modern gold cocktail ring with cabochon stone on sandstone plinth",
    whatsappMessage: "Inquiring about Statement Cocktail Rings",
  },
  {
    id: "subtle",
    name: "04 · Subtle",
    verve: "Verve: Whispered Light",
    title: "The Raking Light Lariat",
    description:
      "Delicate platinum-and-gold links cradling bezel-set natural brilliants, descending in a whisper down the decolletage. Designed for daily wear that never announces itself yet is impossible to forget.",
    detail1Label: "DIAMONDS",
    detail1Val: "VVS Natural Solitaires",
    detail2Label: "CHAIN",
    detail2Val: "Laser-Welded 18K Yellow Gold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQCy9AZRG8Y2Ij8vgGLF5JBvIcb0ricbR8nAx59vszwGuIazLYBOHc687kjrLZTaO0_2eo8H7_ukwgqLk5122r7gIIJvR6HjGMqVM98CigDaO20qVHmKh6CZyAHkGH2GebaJP6Vx_vaTNBNbvKo3-IBz_uRmyNmVtAvM4WWux68qiRj7F6xIYQtseDTM7O_l2I1DIR030bLvz0OZqlPZ5Yd2yyjxDL9ULK3yC4l1T_ZBdhepDHu-Cq",
    imageAlt: "Understated modern diamond and gold lariat necklace on smooth pale sandstone slab",
    whatsappMessage: "Inquiring about Subtle Diamond Lariats",
  },
];

export default function MomentsClient() {
  const [activeTab, setActiveTab] = useState<PersonaTab>(PERSONAS[0]);

  return (
    <section className="relative w-full bg-[#1c1011] text-warm-ivory py-32 px-6 sm:px-12 lg:px-24 border-t border-champagne-gold/15">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-sans text-xs text-[#e7c276] tracking-[0.35em] uppercase block mb-3 font-semibold">
              Atelier Persona Consultation
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-warm-ivory font-normal">
              What Feels <span className="italic text-[#e7c276]">Like You?</span>
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 max-w-md font-light leading-relaxed">
            Select an aesthetic current below to preview corresponding bespoke compositions from our Parvatsar vaults.
          </p>
        </div>

        {/* Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {PERSONAS.map((persona) => {
            const isActive = activeTab.id === persona.id;
            return (
              <button
                key={persona.id}
                type="button"
                onClick={() => setActiveTab(persona)}
                className={`px-7 py-3 font-sans text-xs tracking-[0.22em] uppercase transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? "bg-[#e7c276] text-[#170b0c] font-semibold border-[#e7c276] shadow-lg"
                    : "bg-[#2a1c1d] text-warm-ivory/80 hover:bg-[#352627] font-medium border-transparent"
                }`}
              >
                {persona.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Display Card Container */}
        <div className="relative w-full bg-[#251819] p-6 sm:p-10 shadow-2xl border border-champagne-gold/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Frame */}
            <div className="lg:col-span-7 aspect-[4/3] relative overflow-hidden bg-[#170b0c] border border-champagne-gold/20">
              <Image
                src={activeTab.image}
                alt={activeTab.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-all duration-700"
              />
            </div>

            {/* Persona Details */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="font-sans text-xs text-[#e7c276] tracking-[0.3em] uppercase mb-2 block font-semibold">
                {activeTab.verve}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-warm-ivory mb-4 font-normal">
                {activeTab.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 mb-6 leading-relaxed font-light">
                {activeTab.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-champagne-gold/20 mb-8">
                <div>
                  <span className="font-sans text-[10px] text-warm-ivory/50 block tracking-widest uppercase font-medium">
                    {activeTab.detail1Label}
                  </span>
                  <span className="font-sans text-sm text-warm-ivory font-medium mt-0.5 block">
                    {activeTab.detail1Val}
                  </span>
                </div>
                <div>
                  <span className="font-sans text-[10px] text-warm-ivory/50 block tracking-widest uppercase font-medium">
                    {activeTab.detail2Label}
                  </span>
                  <span className="font-sans text-sm text-warm-ivory font-medium mt-0.5 block">
                    {activeTab.detail2Val}
                  </span>
                </div>
              </div>

              <a
                href={`https://wa.me/918854000203?text=${encodeURIComponent(activeTab.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-2 px-6 py-3 bg-[#e7c276] text-[#170b0c] font-sans text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#ffdfa0] transition-colors"
              >
                Request Private Curation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
