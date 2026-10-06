"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft, View, Compass, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { getWhatsAppProductUrl } from "@/lib/utils/whatsapp";

interface AngleOption {
  id: string;
  name: string;
  angle: number;
  label: string;
}

const ANGLES: AngleOption[] = [
  { id: "front", name: "01 FRONT FAÇADE", angle: 0, label: "000° POLAR · FAÇADE" },
  { id: "peacock", name: "02 PEACOCK PLUMES", angle: 18, label: "045° PROFILE · PEACOCK" },
  { id: "pearls", name: "03 BASRA PEARLS", angle: -22, label: "315° OBLIQUE · PEARLS" },
  { id: "contour", name: "04 ATELIER CONTOUR", angle: 36, label: "090° LATERAL · CONTOUR" },
];

export default function StoryClient() {
  const [activeAngle, setActiveAngle] = useState<AngleOption>(ANGLES[0]);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTrack = (direction: "left" | "right") => {
    if (trackRef.current) {
      const scrollAmount = trackRef.current.clientWidth * 0.75;
      trackRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* ========================================================
          SECTION 03: SPATIAL ARCHITECTURE — EVERY ANGLE. A NEW PERSPECTIVE.
          ======================================================== */}
      <section className="relative w-full py-28 bg-[#120708] overflow-hidden border-t border-champagne-gold/15">
        {/* Ambient Specular Glow Behind Pedestal */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#450006]/35 blur-[140px] pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-14 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-3 text-champagne-gold">
              <span className="font-sans text-xs tracking-[0.25em] uppercase">03 / SPATIAL ARCHITECTURE</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-warm-ivory uppercase tracking-tight mb-4">
              EVERY ANGLE. <span className="italic font-light text-soft-gold">A NEW PERSPECTIVE.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-warm-ivory/70 font-light leading-relaxed">
              An intimate spatial examination of our signature Rajput ceremonial armlet (Bazuband), featuring royal peacock repoussé reliefs and hand-strung Basra pearls.
            </p>
          </div>

          {/* Vitrine Interaction Chamber */}
          <div className="relative bg-[#1a090b]/80 border border-champagne-gold/25 backdrop-blur-xl p-6 md:p-12 shadow-2xl flex flex-col items-center">
            {/* Vitrine Corner Accents */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-champagne-gold/60"></div>
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-champagne-gold/60"></div>
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-champagne-gold/60"></div>
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-champagne-gold/60"></div>

            {/* 360 Degree Dial Marker Header */}
            <div className="w-full flex justify-between items-center text-champagne-gold/60 font-sans text-[11px] tracking-widest pb-4 mb-4 border-b border-champagne-gold/15">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-champagne-gold animate-ping"></span>
                <span className="text-warm-ivory font-medium">ROTATION: {activeAngle.label}</span>
              </div>
              <span className="hidden sm:inline text-warm-ivory/50">SPECIMEN ID: BZ-RAJ-1926</span>
              <div className="flex items-center gap-1.5 text-champagne-gold">
                <View className="w-4 h-4" />
                <span className="tracking-wider">HIGH FIDELITY ATELIER VIEW</span>
              </div>
            </div>

            {/* Interactive 3D Showcase Frame */}
            <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center select-none my-4">
              {/* Concentric Architectural Degree Rings (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 animate-[spin_120s_linear_infinite]" fill="none" viewBox="0 0 400 400">
                <circle className="text-champagne-gold" cx="200" cy="200" r="190" stroke="currentColor" strokeDasharray="4 8" strokeWidth="0.75" />
                <circle className="text-warm-ivory" cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5" />
                <circle className="text-champagne-gold" cx="200" cy="200" r="90" stroke="currentColor" strokeDasharray="2 4" strokeWidth="0.75" />
              </svg>

              {/* 3D Masterpiece Image Container */}
              <div
                className="relative z-10 w-full h-full flex items-center justify-center transition-all duration-700 ease-out"
                style={{
                  transform: `perspective(1000px) rotateY(${activeAngle.angle}deg) scale(1)`,
                }}
              >
                <div className="relative w-4/5 h-4/5">
                  <Image
                    src="https://lh3.googleusercontent.com/aida/AEtjO1VMISsoHRTRI1zSAPk78W1FzMv7OeZKMpejtlw2372yD-iWa5l2kQ810lfbF9ORzirpxs1pa2fQx6BvzHNHFFoVbaRqGx1-KSTD9wGjmIbVBqG1eL-ofJmQF-ETS0QFzIEBAph63xrj_n0BIoRi09efjeUJEbWsE9fGYJrGC74LS2PMcbrUwfL3tAnX3DejRZh8Y1dC8V-WmZ5j3CnNsUFts39M2TBK1oFctLG4re3ly7dX2TaSWdJebdA=s0"
                    alt="Rajput Ceremonial Armlet Bazuband in 3D Vitrine"
                    fill
                    sizes="(max-width: 768px) 80vw, 550px"
                    className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] pointer-events-none transition-transform duration-500"
                   quality={90} />
                </div>

                {/* Hotspot 1: Royal Meenakari */}
                <button
                  type="button"
                  onClick={() => setActiveHotspot(activeHotspot === 1 ? null : 1)}
                  onMouseEnter={() => setActiveHotspot(1)}
                  onMouseLeave={() => setActiveHotspot(null)}
                  className="absolute top-[28%] left-[45%] w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-near-black/80 border border-champagne-gold/60 backdrop-blur-md flex items-center justify-center group cursor-pointer shadow-lg hover:scale-110 transition-transform z-20"
                  aria-label="View Royal Meenakari Hotspot"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-champagne-gold animate-ping absolute"></span>
                  <span className="w-2 h-2 rounded-full bg-champagne-gold relative z-10"></span>
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-52 sm:w-56 p-3 bg-near-black border border-champagne-gold/40 text-left shadow-2xl z-30 transition-all duration-300 pointer-events-none ${
                      activeHotspot === 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <span className="font-sans text-[10px] text-champagne-gold uppercase tracking-widest block font-medium">
                      ROYAL MEENAKARI
                    </span>
                    <span className="font-sans text-xs text-warm-ivory leading-tight block mt-1 font-light">
                      Hand-chiseled peacock plumes lined with cabochon emeralds &amp; rubies.
                    </span>
                  </div>
                </button>

                {/* Hotspot 2: Basra Pearls */}
                <button
                  type="button"
                  onClick={() => setActiveHotspot(activeHotspot === 2 ? null : 2)}
                  onMouseEnter={() => setActiveHotspot(2)}
                  onMouseLeave={() => setActiveHotspot(null)}
                  className="absolute bottom-[22%] left-[32%] w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-near-black/80 border border-champagne-gold/60 backdrop-blur-md flex items-center justify-center group cursor-pointer shadow-lg hover:scale-110 transition-transform z-20"
                  aria-label="View Basra Pearls Hotspot"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-champagne-gold animate-ping absolute"></span>
                  <span className="w-2 h-2 rounded-full bg-champagne-gold relative z-10"></span>
                  <div
                    className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-52 sm:w-56 p-3 bg-near-black border border-champagne-gold/40 text-left shadow-2xl z-30 transition-all duration-300 pointer-events-none ${
                      activeHotspot === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    <span className="font-sans text-[10px] text-champagne-gold uppercase tracking-widest block font-medium">
                      NATURAL PEARL STRANDS
                    </span>
                    <span className="font-sans text-xs text-warm-ivory leading-tight block mt-1 font-light">
                      Hand-knotted cascading Basra drops designed for regal Rajput movement.
                    </span>
                  </div>
                </button>

                {/* Hotspot 3: Jadau Setting */}
                <button
                  type="button"
                  onClick={() => setActiveHotspot(activeHotspot === 3 ? null : 3)}
                  onMouseEnter={() => setActiveHotspot(3)}
                  onMouseLeave={() => setActiveHotspot(null)}
                  className="absolute top-[38%] right-[28%] w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-near-black/80 border border-champagne-gold/60 backdrop-blur-md flex items-center justify-center group cursor-pointer shadow-lg hover:scale-110 transition-transform z-20"
                  aria-label="View Jadau Setting Hotspot"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-champagne-gold animate-ping absolute"></span>
                  <span className="w-2 h-2 rounded-full bg-champagne-gold relative z-10"></span>
                  <div
                    className={`absolute top-full mt-2.5 right-0 sm:left-1/2 sm:-translate-x-1/2 w-52 sm:w-56 p-3 bg-near-black border border-champagne-gold/40 text-left shadow-2xl z-30 transition-all duration-300 pointer-events-none ${
                      activeHotspot === 3 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <span className="font-sans text-[10px] text-champagne-gold uppercase tracking-widest block font-medium">
                      PURE JADAU SETTING
                    </span>
                    <span className="font-sans text-xs text-warm-ivory leading-tight block mt-1 font-light">
                      Refined 24K hyper-refined gold foil reflecting natural candlelight brilliance.
                    </span>
                  </div>
                </button>
              </div>

              {/* Indicator Pill */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-near-black/85 border border-champagne-gold/25 backdrop-blur-md px-4 py-1.5 flex items-center gap-2 pointer-events-none">
                <Compass className="w-3.5 h-3.5 text-champagne-gold" />
                <span className="font-sans text-[10px] text-champagne-gold tracking-widest uppercase">
                  SELECT ANGLE VIEWPOINT
                </span>
              </div>
            </div>

            {/* Perspective Selector Controls */}
            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 pt-6 mt-4 max-w-2xl border-t border-champagne-gold/15">
              {ANGLES.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setActiveAngle(opt)}
                  className={`py-2.5 px-3 font-sans text-xs tracking-wider transition-all text-center uppercase font-medium cursor-pointer border ${
                    activeAngle.id === opt.id
                      ? "bg-champagne-gold text-near-black border-champagne-gold shadow-lg"
                      : "bg-[#250d0f] text-warm-ivory/80 border-champagne-gold/20 hover:border-champagne-gold/60 hover:text-champagne-gold"
                  }`}
                >
                  {opt.name}
                </button>
              ))}
            </div>

            {/* Technical Specification Plaque */}
            <div className="w-full max-w-2xl mt-8 pt-4 flex flex-wrap justify-between items-center gap-4 text-warm-ivory/60 font-sans text-[11px] tracking-widest border-t border-champagne-gold/15">
              <div className="flex items-center gap-2">
                <span className="text-champagne-gold font-medium">PURITY:</span>
                <span>22KT BIS HALLMARK (916)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-champagne-gold font-medium">GEMOLOGY:</span>
                <span>UNCUT POLKI &amp; CABOCHON EMERALDS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-champagne-gold font-medium">ATELIER ORIGIN:</span>
                <span>PARVATSAR, RAJASTHAN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 04: THE THREE REALMS — THREE EXPRESSIONS. ENDLESS POSSIBILITIES.
          ======================================================== */}
      <section className="relative w-full py-28 bg-[#170b0c] overflow-hidden border-t border-champagne-gold/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-14 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-sans text-xs text-champagne-gold tracking-[0.25em] block mb-2 uppercase">
              04 / THE THREE REALMS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-warm-ivory uppercase tracking-tight">
              THREE EXPRESSIONS. <span className="italic font-light text-soft-gold">ENDLESS POSSIBILITIES.</span>
            </h2>
          </div>
          {/* Navigation Arrows for Track */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollTrack("left")}
              aria-label="Scroll left"
              className="w-12 h-12 bg-[#250d0f] border border-champagne-gold/30 flex items-center justify-center text-warm-ivory hover:bg-champagne-gold hover:text-near-black transition-all cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollTrack("right")}
              aria-label="Scroll right"
              className="w-12 h-12 bg-[#250d0f] border border-champagne-gold/30 flex items-center justify-center text-warm-ivory hover:bg-champagne-gold hover:text-near-black transition-all cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track Container */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto pb-8 px-6 lg:px-14 scroll-smooth snap-x snap-mandatory scrollbar-none"
        >
          {/* Panel 01: Gold */}
          <div className="w-[85vw] md:w-[620px] shrink-0 snap-start bg-[#1f090b] border border-champagne-gold/25 p-6 md:p-8 flex flex-col justify-between shadow-2xl">
            <div className="relative w-full aspect-[16/10] overflow-hidden mb-6 bg-near-black border border-champagne-gold/20">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyItnmhCyybpxtTr-UQEGnFUxygGjMCGcjWz8JmXO19sJN9VIiL6u11LDCT4g7l8eAQ-YA57ic6RBQNkDj26rA3B-cbdZ7PUBh8DQS5SGWhkSKXC9HWjLYG7PESqJ2XkIELSHgA9CP4XS3DUg0QNuHJFI461uDEP20PSkJCgs2tk17WUFiIGmB5eIXU_0tO8eSwQoKdUwZrsj2rk4HjUhDGCAbpPXRjrLaHpLJSvboYIlplVqk4TUw=s0"
                alt="Gold Jewellery Real Chapter"
                fill
                sizes="(max-width: 768px) 85vw, 620px"
                className="object-cover transition-transform duration-700 hover:scale-105"
               quality={90} />
              <div className="absolute top-4 left-4 bg-near-black/85 backdrop-blur-md px-3 py-1 border border-champagne-gold/30">
                <span className="font-sans text-[10px] text-champagne-gold tracking-widest uppercase">CHAPTER · I</span>
              </div>
            </div>
            <div>
              <span className="font-sans text-[10px] text-champagne-gold tracking-[0.2em] block mb-2 uppercase">
                IMMUTABLE LUSTER
              </span>
              <h3 className="font-serif text-2xl text-warm-ivory uppercase mb-3">THE ELEGANCE OF GOLD</h3>
              <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 font-light mb-6 leading-relaxed">
                Warmth forged into heirloom weight. From the deep ceremonial grandeur of royal Rajput wedding torques to fluid contemporary cuffs, gold is the sovereign foundation of our Parvatsar legacy.
              </p>
              <div className="flex items-center justify-between text-warm-ivory/60 font-sans text-[11px] tracking-widest pt-4 border-t border-champagne-gold/20">
                <span>22K BIS HALLMARKED</span>
                <a
                  href={getWhatsAppProductUrl("The Elegance of Gold Chapter")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-champagne-gold hover:text-soft-gold flex items-center gap-1 uppercase font-medium"
                >
                  <span>REQUEST CURATION</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Panel 02: Silver */}
          <div className="w-[85vw] md:w-[620px] shrink-0 snap-start bg-[#1f090b] border border-champagne-gold/25 p-6 md:p-8 flex flex-col justify-between shadow-2xl">
            <div className="relative w-full aspect-[16/10] overflow-hidden mb-6 bg-near-black border border-champagne-gold/20">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOUbqCKO0X42PdTItPUjBmnNn5fw-85O4aa1AUMGWRq6fZE5gF41p6NvW5BVBQBhjPWyoENK63BA28r-mhR_im5anTKRanKZC06RN0zCyqH5JvP6ou3MANU6awhhvT95PLooWPfe_MuvUkb6RQBf2hrFPpSmxFNT6-VeEO29a2iDYw6VQfPJ6_sjAd4WDaUIs0TMlMtDNVYdTGu-kB0SmoqJPEC8-wd5Fpcy5-Fz4qYE6Jgnwszp7g=s0"
                alt="Silver Jewellery Chapter"
                fill
                sizes="(max-width: 768px) 85vw, 620px"
                className="object-cover transition-transform duration-700 hover:scale-105"
               quality={90} />
              <div className="absolute top-4 left-4 bg-near-black/85 backdrop-blur-md px-3 py-1 border border-champagne-gold/30">
                <span className="font-sans text-[10px] text-champagne-gold tracking-widest uppercase">CHAPTER · II</span>
              </div>
            </div>
            <div>
              <span className="font-sans text-[10px] text-champagne-gold tracking-[0.2em] block mb-2 uppercase">
                MOONLIT ARCHITECTURE
              </span>
              <h3 className="font-serif text-2xl text-warm-ivory uppercase mb-3">THE BEAUTY OF SILVER</h3>
              <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 font-light mb-6 leading-relaxed">
                Moonlit coolness and oxidized depth. Hand-carved 925 sterling silver articulated with tactile filigree, regal jhumkis, and statement talismans inspired by the stone arches of Rajasthan.
              </p>
              <div className="flex items-center justify-between text-warm-ivory/60 font-sans text-[11px] tracking-widest pt-4 border-t border-champagne-gold/20">
                <span>STERLING 925 PURITY</span>
                <a
                  href={getWhatsAppProductUrl("The Beauty of Silver Chapter")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-champagne-gold hover:text-soft-gold flex items-center gap-1 uppercase font-medium"
                >
                  <span>REQUEST CURATION</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Panel 03: Gemstones */}
          <div className="w-[85vw] md:w-[620px] shrink-0 snap-start bg-[#1f090b] border border-champagne-gold/25 p-6 md:p-8 flex flex-col justify-between shadow-2xl">
            <div className="relative w-full aspect-[16/10] overflow-hidden mb-6 bg-near-black border border-champagne-gold/20">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcKkJ07guzxwqdH6CnZm1sVXeHCOPaPT4yLhWyMaGJ29YcoXbWuzNszSAJxCe8t2V0An7fjBVT-7lIAtcTFzEOkgcMyOkkrJuuJgwWzYF3V2zQUC05jiEpzn61Qhien5VsXOPhsfhvfORwFz0MNLsZBY_ZyPoEXeektUT_uX1fbyqQoVJhQBY10TuaS9OdmBJ7IDZDh9aljDdJvbqWKmSawsDWHImcVO5u7n0EX1rgQgQ1xNRFc3mQ=s0"
                alt="Gemstones Chapter"
                fill
                sizes="(max-width: 768px) 85vw, 620px"
                className="object-cover transition-transform duration-700 hover:scale-105"
               quality={90} />
              <div className="absolute top-4 left-4 bg-near-black/85 backdrop-blur-md px-3 py-1 border border-champagne-gold/30">
                <span className="font-sans text-[10px] text-champagne-gold tracking-widest uppercase">CHAPTER · III</span>
              </div>
            </div>
            <div>
              <span className="font-sans text-[10px] text-champagne-gold tracking-[0.2em] block mb-2 uppercase">
                GEOLOGICAL POETRY
              </span>
              <h3 className="font-serif text-2xl text-warm-ivory uppercase mb-3">THE COLOUR OF GEMSTONES</h3>
              <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 font-light mb-6 leading-relaxed">
                The Earth&apos;s ancient fire captured in unheated Zambian emeralds, Pigeon Blood Burmese rubies, and untreated polki diamonds. Every facet hand-calibrated to capture living ambient light.
              </p>
              <div className="flex items-center justify-between text-warm-ivory/60 font-sans text-[11px] tracking-widest pt-4 border-t border-champagne-gold/20">
                <span>NATURAL CERTIFIED</span>
                <a
                  href={getWhatsAppProductUrl("The Colour of Gemstones Chapter")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-champagne-gold hover:text-soft-gold flex items-center gap-1 uppercase font-medium"
                >
                  <span>REQUEST CURATION</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 05: PHILOSOPHICAL ANCHOR — MORE THAN JEWELLERY.
          ======================================================== */}
      <section className="relative w-full py-28 bg-[#FAF7EF] text-[#120708] px-6 lg:px-14 overflow-hidden border-t border-champagne-gold/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Column */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#120708]/30"></span>
                <span className="font-sans text-xs text-[#5c4300] tracking-[0.25em] uppercase font-semibold">
                  PHILOSOPHICAL ANCHOR
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#120708] leading-tight mb-6">
                MORE THAN <br />
                <span className="italic font-light text-[#5c4300]">JEWELLERY.</span>
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#3c2d2e] font-light max-w-lg mb-8 leading-relaxed">
                Pieces that celebrate individuality, sacred generational vows, and the fleeting milestones worth remembering across a lifetime. We do not mass-produce artifacts; we crystallize memory.
              </p>

              {/* Quote Plaque */}
              <div className="p-6 bg-[#f0ebd9] border-l-2 border-[#5c4300] shadow-sm mb-8">
                <span className="font-serif text-lg sm:text-xl italic text-[#120708] block mb-2 leading-snug">
                  &ldquo;A talisman carries the silent spirit of its wearer across generations.&rdquo;
                </span>
                <span className="font-sans text-[10px] text-[#5c4300] tracking-widest uppercase font-medium">
                  — BALAJI JEWELLERS &amp; SHYAM DIAMONDS ATELIER ETHOS
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-2">
                <div>
                  <span className="font-serif text-3xl sm:text-4xl block text-[#120708] leading-none mb-1">100%</span>
                  <span className="font-sans text-[11px] text-[#5c4300] tracking-wider block uppercase font-medium">
                    BIS HALLMARKED GOLD
                  </span>
                </div>
                <div>
                  <span className="font-serif text-3xl sm:text-4xl block text-[#120708] leading-none mb-1">IGI / GIA</span>
                  <span className="font-sans text-[11px] text-[#5c4300] tracking-wider block uppercase font-medium">
                    NATURAL DIAMOND AUTHENTICITY
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Column: Sandstone Slab Still Life */}
            <div className="lg:col-span-6 relative mt-6 lg:mt-0">
              <div className="relative aspect-[4/3] overflow-hidden shadow-2xl bg-[#e8e2d0] border border-[#d8b46a]/30">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAblFBJfoHeeFlCjjI5i5jlZOqADJlZajR5x-7tUp7B03Hx0awx1LaE3TOgIKzjs3siKCI1ApqioPC4AciJ50jeGQuWnFsRldtmOnyIopE6uQal-NnwxsZ0gJLkafkdFDVlHxerorRQKXjKJhIZ3kXO4xpw1Kvbp3o-fImGb3BQaQ8vWvtgVSw3x4-Deybd24vdV8DztEH6Ski-AHgrQNJ8PP1dKgNe8vttvGJGnaX2aM5ifuqROZp2=s0"
                  alt="Fine Jewellery Resting on Desert Sandstone Slab"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover filter contrast-[1.05]"
                 quality={90} />
                <div className="absolute bottom-4 right-4 bg-[#FAF7EF]/90 backdrop-blur-md px-4 py-2 shadow-sm border border-[#120708]/10">
                  <span className="font-sans text-[11px] text-[#120708] tracking-widest uppercase font-medium">
                    DESERT SANDSTONE STILL LIFE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 06: FLAGSHIP SALON — YOUR NEXT DISCOVERY AWAITS.
          ======================================================== */}
      <section className="relative w-full py-28 bg-[#120708] px-6 lg:px-14 overflow-hidden border-t border-champagne-gold/15">
        <div className="max-w-7xl mx-auto">
          {/* Atmospheric Architectural Card */}
          <div className="relative bg-[#1c090c] border border-champagne-gold/25 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Interior Architectural Photography */}
              <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[560px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsonJd62XsrsPys7f_ruuXz77W_nlfg5MOln2Dq_UflWLgblveiOXHUAvuJhA39UmuNuTEHgvBXQeteTj_JNSMY5vYLu12LEBd7Evmwpu6Kyk7SP8nP2mGIsoZPqcDsW8k4stHX7-qlT4v5CPteVFvTfTGbipbZqU7vSlGmRJFoBhsDrP6jqNkiMjaOUqlBidNojp7LI_3MNu87I0_DAiu_ovjoRe64Se7PGsu92MzJV-_Pe11LsN_=s0"
                  alt="Atmospheric Luxury Jewellery Salon Lounge in Parvatsar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                 quality={90} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c090c] via-transparent to-transparent lg:hidden"></div>
                {/* Radar Coordinate Badge */}
                <div className="absolute top-6 left-6 bg-[#120708]/85 border border-champagne-gold/30 backdrop-blur-md px-3.5 py-2 flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-champagne-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-champagne-gold"></span>
                  </span>
                  <span className="font-sans text-[10px] text-champagne-gold tracking-widest uppercase">
                    26.8858° N, 74.7679° E · PARVATSAR
                  </span>
                </div>
              </div>

              {/* Direct Salon Consultation Coordinates & Actions */}
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between bg-[#1c090c]">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-champagne-gold">
                    <span className="font-sans text-xs tracking-[0.25em] uppercase">FLAGSHIP SALON</span>
                    <span className="w-8 h-px bg-champagne-gold/40"></span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-warm-ivory uppercase tracking-tight mb-4">
                    YOUR NEXT DISCOVERY <span className="italic font-light text-soft-gold">AWAITS.</span>
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 font-light mb-8 leading-relaxed">
                    Explore regal Polki, certified Shyam Diamonds, and 916 gold heirlooms in person. We invite patrons for an unhurried, private salon consultation.
                  </p>

                  {/* Salon Coordinates */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-champagne-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="font-sans text-xs text-warm-ivory uppercase block font-medium">
                          BALAJI JEWELLERS &amp; SHYAM DIAMONDS
                        </span>
                        <span className="font-sans text-xs text-warm-ivory/60 block mt-0.5">
                          Bank Wali Gali, Main Bazar, Parvatsar, Rajasthan – 341512
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-champagne-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="font-sans text-xs text-warm-ivory uppercase block font-medium">ATELIER HOURS</span>
                        <span className="font-sans text-xs text-warm-ivory/60 block mt-0.5">
                          Monday – Sunday · 9:00 AM – 8:00 PM IST
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-champagne-gold shrink-0 mt-0.5" />
                      <div>
                        <span className="font-sans text-xs text-warm-ivory uppercase block font-medium">DIRECT CONCIERGE LINE</span>
                        <a href="tel:+918854000203" className="font-sans text-xs text-champagne-gold hover:underline block mt-0.5">
                          +91 88540 00203
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Primary Luxury Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-champagne-gold/15">
                  <a
                    href="https://wa.me/918854000203"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-4 bg-champagne-gold text-near-black font-sans text-xs tracking-widest text-center hover:bg-soft-gold transition-colors flex items-center justify-center gap-2 uppercase font-semibold"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WHATSAPP ATELIER</span>
                  </a>
                  <a
                    href="tel:+918854000203"
                    className="flex-1 py-3.5 px-4 bg-[#2b1013] border border-champagne-gold/30 text-warm-ivory font-sans text-xs tracking-widest text-center hover:bg-champagne-gold/15 transition-colors flex items-center justify-center gap-2 uppercase font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    <span>CALL DIRECT</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
