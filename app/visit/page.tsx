import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants/siteConfig";
import { getWhatsAppShowroomUrl } from "@/lib/utils/whatsapp";
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Navigation,
  ExternalLink,
  Sparkles,
  CheckCircle,
  Store,
  Diamond,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Visit Our Showroom — Bank Wali Gali, Parvatsar",
  description:
    "Visit Balaji Jewellers & Shyam Diamonds at Bank Wali Gali, Parvatsar, Rajasthan (341512). Open Monday – Sunday 9:00 AM – 8:00 PM. Call +91 88540 00203.",
  alternates: {
    canonical: "/visit",
  },
  openGraph: {
    title: "Visit Our Showroom — Balaji Jewellers & Shyam Diamonds | Parvatsar",
    description:
      "Experience our fine Gold and Silver jewellery collections in person at Bank Wali Gali, Parvatsar, Rajasthan.",
    url: "https://balajijewellers.com/visit",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visit Our Showroom — Balaji Jewellers & Shyam Diamonds | Parvatsar",
    description:
      "Experience our fine Gold and Silver jewellery collections in person at Bank Wali Gali, Parvatsar, Rajasthan.",
    images: ["/og-image.jpg"],
  },
};

export default function VisitPage() {
  return (
    <div className="w-full bg-near-black text-warm-ivory selection:bg-deep-burgundy selection:text-soft-gold pt-20">
      {/* ========================================================
          SECTION 01: CINEMATIC OPENING HERO (~92vh)
          ======================================================== */}
      <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden px-6 lg:px-14 py-16 bg-[#170b0c]">
        {/* Background atmospheric image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida/AEtjO1UDl2QD-9QXwBAMdYgaZUHRczCEqdlkLaJ5FVgtPb-EntqyAaoRJd1IfU1xL9JBXRiO673hkeejfbzIsh91Voh27BmtnCfeW-1_XYFgPogwRc21k74DUwFmIIgQWtefWoRtw3vpOC6w8JzP0KZtBlu6PewkVvq1fJhVeRXMaNZw8Uk7Az-QsrnjyCcd9b1L6-UnfBuJuApu-eomv6jIF90w-w3p41WFyBvQLu855EltHJko__RGslxTJA=s0"
            alt="Atmospheric Salon Architecture Study"
            fill
            priority
            className="object-cover object-center filter brightness-[0.35] contrast-125 scale-105"
           quality={90} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#170b0c] via-[#170b0c]/70 to-[#170b0c]/40"></div>
        </div>

        {/* Top Eyebrow */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-near-black/80 backdrop-blur-md border border-champagne-gold/30">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-pulse"></span>
            <span className="font-sans text-[9px] sm:text-[10px] tracking-wider sm:tracking-monumental text-champagne-gold uppercase">
              PHYSICAL SHOWROOM · PARVATSAR
            </span>
          </div>
          <span className="font-sans text-xs text-warm-ivory/60 tracking-widest hidden md:inline">
            NAGAUR DISTRICT, RAJASTHAN
          </span>
        </div>

        {/* Center Narrative */}
        <div className="relative z-10 max-w-7xl mx-auto w-full py-12">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="font-sans text-[11px] sm:text-xs tracking-wider sm:tracking-monumental text-champagne-gold uppercase">
              BALAJI JEWELLERS &amp; SHYAM DIAMONDS
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-warm-ivory tracking-tight leading-[1.05]">
              COME FIND US.
            </h1>
            <p className="font-sans text-warm-ivory/80 text-base md:text-xl font-light leading-relaxed max-w-2xl">
              Your jewellery journey continues in Parvatsar. An intimate salon where fine Gold and Silver pieces can be examined in dedicated natural light.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 bg-dark-wine/80 backdrop-blur-md border border-champagne-gold/25 text-xs font-sans">
                <MapPin className="w-3.5 h-3.5 text-champagne-gold" />
                <span>Bank Wali Gali, Parvatsar, Rajasthan</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-near-black/80 backdrop-blur-md border border-champagne-gold/25 text-xs font-sans text-champagne-gold">
                <Clock className="w-3.5 h-3.5 text-champagne-gold" />
                <span>Open Daily: {SITE_CONFIG.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Cue */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-t border-champagne-gold/15 pt-6">
          <div className="flex items-center gap-3 text-champagne-gold">
            <span className="font-sans text-[10px] tracking-widest uppercase">
              SCROLL TO SALON CARTOGRAPHY ↓
            </span>
            <div className="w-8 h-px bg-champagne-gold/40"></div>
          </div>
          <span className="font-sans text-xs text-warm-ivory/40">
            {SITE_CONFIG.address.coordinates}
          </span>
        </div>
      </section>

      {/* ========================================================
          SECTION 02: CARTOGRAPHY & GEOLOCATION
          ======================================================== */}
      <section className="relative w-full py-28 px-6 lg:px-14 bg-gradient-to-b from-[#170b0c] via-dark-wine to-near-black border-t border-champagne-gold/15">
        <div className="max-w-[1460px] mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-sans text-[11px] sm:text-xs tracking-wider sm:tracking-monumental text-champagne-gold uppercase mb-2">
              FLAGSHIP GEOLOCATION
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl text-warm-ivory uppercase tracking-wide">
              PARVATSAR
            </h2>
            <span className="font-serif text-lg text-champagne-gold tracking-widest uppercase mt-1">
              Rajasthan · India — 341512
            </span>
          </div>

          <div className="relative w-full bg-near-black/90 border border-champagne-gold/30 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
            {/* SVG Cartographic Radar Background */}
            <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
              <svg className="w-[680px] h-[680px] text-champagne-gold" viewBox="0 0 800 800">
                <circle cx="400" cy="400" r="380" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 6" />
                <circle cx="400" cy="400" r="280" fill="none" stroke="currentColor" strokeWidth="0.75" />
                <circle cx="400" cy="400" r="180" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 4" />
                <circle cx="400" cy="400" r="80" fill="none" stroke="currentColor" strokeWidth="0.75" />
                <line x1="400" y1="20" x2="400" y2="780" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" />
                <line x1="20" y1="400" x2="780" y2="400" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" />
              </svg>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Address and Direct Navigation Actions */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-champagne-gold"></span>
                  <span className="font-sans text-xs tracking-widest text-champagne-gold uppercase">
                    PHYSICAL SALON
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl text-warm-ivory leading-tight">
                  Bank Wali Gali, Main Bazar
                </h3>

                <p className="font-sans text-warm-ivory/80 text-base leading-relaxed font-light">
                  Located in Bank Wali Gali, Parvatsar, Rajasthan. Conceived as a quiet desert sanctuary where patrons can inspect gold and silver craftsmanship at an unhurried pace.
                </p>

                {/* Logistics Key-Values */}
                <div className="flex flex-col gap-2.5 py-3 border-y border-champagne-gold/20 font-sans text-xs">
                  <div className="flex items-center justify-between py-1 bg-dark-wine/40 px-3 border border-champagne-gold/10">
                    <span className="text-warm-ivory/60 uppercase tracking-wider">Address</span>
                    <span className="text-warm-ivory">{SITE_CONFIG.address.street}, Parvatsar</span>
                  </div>
                  <div className="flex items-center justify-between py-1 bg-dark-wine/40 px-3 border border-champagne-gold/10">
                    <span className="text-warm-ivory/60 uppercase tracking-wider">Postal Code</span>
                    <span className="text-champagne-gold">341512, Rajasthan</span>
                  </div>
                  <div className="flex items-center justify-between py-1 bg-dark-wine/40 px-3 border border-champagne-gold/10">
                    <span className="text-warm-ivory/60 uppercase tracking-wider">Opening Hours</span>
                    <span className="text-champagne-gold font-medium">{SITE_CONFIG.hours}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 bg-dark-wine/40 px-3 border border-champagne-gold/10">
                    <span className="text-warm-ivory/60 uppercase tracking-wider">GPS Coordinates</span>
                    <span className="text-warm-ivory/80 font-mono">{SITE_CONFIG.address.coordinates}</span>
                  </div>
                </div>

                {/* Primary Conversion Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
                  <a
                    href={SITE_CONFIG.social.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 bg-champagne-gold text-near-black font-sans text-xs tracking-widest uppercase font-semibold hover:bg-soft-gold transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions (Maps)</span>
                  </a>

                  <a
                    href={SITE_CONFIG.social.googleBusiness}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 border border-champagne-gold text-champagne-gold font-sans text-xs tracking-widest uppercase font-semibold hover:bg-champagne-gold/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Google Business Profile</span>
                  </a>

                  <a
                    href={getWhatsAppShowroomUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 border border-champagne-gold text-champagne-gold font-sans text-xs tracking-widest uppercase font-semibold hover:bg-champagne-gold/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Concierge</span>
                  </a>

                  <a
                    href={SITE_CONFIG.phoneTel}
                    className="w-full sm:w-auto px-6 py-3.5 border border-champagne-gold text-champagne-gold font-sans text-xs tracking-widest uppercase font-semibold hover:bg-champagne-gold/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Showroom</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Radar Focal Display */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center relative min-h-[380px]">
                <div className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-champagne-gold/5 animate-ping duration-1000"></div>
                  <div className="absolute inset-6 rounded-full bg-deep-burgundy/40 blur-xl"></div>
                  <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-dark-wine/95 border border-champagne-gold/30 flex flex-col items-center justify-center p-6 text-center shadow-2xl relative">
                    <div className="w-12 h-12 rounded-full bg-champagne-gold text-near-black flex items-center justify-center mb-3 shadow-[0_0_24px_rgba(216,180,106,0.5)]">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="font-serif text-lg text-champagne-gold font-medium">Flagship Showroom</span>
                    <span className="font-sans text-[10px] text-warm-ivory/60 tracking-widest uppercase mt-1">
                      {SITE_CONFIG.address.coordinates}
                    </span>
                    <span className="font-sans text-xs text-warm-ivory/80 mt-2">
                      Bank Wali Gali, Parvatsar
                    </span>
                    <div className="mt-4 inline-flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-champagne-gold bg-near-black/80 px-3 py-1 border border-champagne-gold/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold"></span>
                      <span>Open Daily: 9:00 AM – 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 03: SPATIAL NARRATIVE — YOUR JOURNEY STARTS HERE
          (Vertical Timeline Waypoints from Stitch)
          ======================================================== */}
      <section className="relative w-full py-28 px-6 lg:px-14 bg-[#120708] text-warm-ivory border-t border-champagne-gold/15 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="font-sans text-[10px] tracking-wider sm:tracking-monumental text-champagne-gold uppercase mb-2">
              SPATIAL NARRATIVE
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-warm-ivory uppercase tracking-wide">
              YOUR JOURNEY STARTS HERE
            </h2>
            <div className="w-16 h-[2px] bg-champagne-gold/50 mt-4"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Timeline Hairline */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-champagne-gold/20 via-champagne-gold to-champagne-gold/20 -translate-x-1/2"></div>

            <div className="flex flex-col gap-16 sm:gap-20">
              {/* Waypoint 01 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                <div className="md:w-1/2 md:text-right md:pr-10 pl-12 md:pl-0">
                  <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase">
                    Waypoint 01 · Provenance
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-warm-ivory mt-1">
                    The Atelier Heritage
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 mt-2 font-light leading-relaxed">
                    Rooted in the lapidary heart of Rajasthan, preserving sovereign Rajasthani goldcraft, Kundan traditions, and certified natural diamonds.
                  </p>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-dark-wine border border-champagne-gold/40 flex items-center justify-center shadow-lg">
                  <span className="w-3 h-3 rounded-full bg-champagne-gold"></span>
                </div>
                <div className="md:w-1/2 md:pl-10 pl-12">
                  <div className="bg-[#260003] p-5 border border-champagne-gold/20 shadow-md">
                    <span className="font-sans text-[9px] text-champagne-gold/80 uppercase tracking-widest block mb-1">
                      Historical Continuity
                    </span>
                    <p className="font-sans text-xs text-warm-ivory/70 leading-relaxed font-light">
                      Families from across Nagaur, Ajmer, and Jaipur travel to Parvatsar for ceremonial bridal trousseaux.
                    </p>
                  </div>
                </div>
              </div>

              {/* Waypoint 02 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                <div className="md:w-1/2 md:order-2 md:pl-10 pl-12">
                  <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase">
                    Waypoint 02 · Tactility
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-warm-ivory mt-1">
                    The Physical Encounter
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 mt-2 font-light leading-relaxed">
                    Experiencing authentic weight, 22K luster, hand-chased repoussé surfaces, and real skin warmth in an unhurried, private environment.
                  </p>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-champagne-gold text-near-black flex items-center justify-center shadow-[0_0_16px_rgba(216,180,106,0.5)]">
                  <Diamond className="w-4 h-4" />
                </div>
                <div className="md:w-1/2 md:order-1 md:text-right md:pr-10 pl-12 md:pl-0">
                  <div className="bg-[#260003] p-5 border border-champagne-gold/20 shadow-md">
                    <span className="font-sans text-[9px] text-champagne-gold/80 uppercase tracking-widest block mb-1">
                      Sensory Assessment
                    </span>
                    <p className="font-sans text-xs text-warm-ivory/70 leading-relaxed font-light">
                      Pieces are inspected through gemological loupes under verified natural daylight, confirming internal fire and flawless cuts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Waypoint 03 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                <div className="md:w-1/2 md:text-right md:pr-10 pl-12 md:pl-0">
                  <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase">
                    Waypoint 03 · Consultation
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-warm-ivory mt-1">
                    The Sacred Appointment
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 mt-2 font-light leading-relaxed">
                    Unhurried private daylight vitrine consultation hosted directly by our experienced salon team in our Parvatsar lounge.
                  </p>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-dark-wine border border-champagne-gold/40 flex items-center justify-center shadow-lg">
                  <span className="w-3 h-3 rounded-full bg-champagne-gold"></span>
                </div>
                <div className="md:w-1/2 md:pl-10 pl-12">
                  <div className="bg-[#260003] p-5 border border-champagne-gold/20 shadow-md">
                    <span className="font-sans text-[9px] text-champagne-gold/80 uppercase tracking-widest block mb-1">
                      Salon Hospitality
                    </span>
                    <p className="font-sans text-xs text-warm-ivory/70 leading-relaxed font-light">
                      Warm hospitality, discrete private viewing booths, and complete transparent guidance for every hallmarked curation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 04: THE SHOWROOM SANCTUARY — SEE IT. FEEL IT. CHOOSE IT.
          (7-Col Lounge Hero + 5-Col Editorial from Stitch)
          ======================================================== */}
      <section className="relative w-full py-28 px-6 lg:px-14 bg-gradient-to-b from-[#120708] via-dark-wine/70 to-near-black border-t border-champagne-gold/15">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="relative overflow-hidden shadow-2xl bg-near-black border border-champagne-gold/25 group">
                <div className="relative w-full h-[460px]">
                  <Image
                    alt="Atmospheric luxury jewellery showroom lounge with dark walnut, brass vitrines, amber cove lighting, and burgundy velvet armchairs"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj7MCesmYQP1ztj8KvnPfIS1nfqAHz0WqrFJRvinabIge6NS_UBD_4vnqn7KrmfMyoCG31PGGimiodrnQtV3kjR9AyD5kWnu8kqQhnJVBZQQfXKSyQ-vot_jEBW66xvWCPEBMxIMxA5z3S02CjXr2X4tP2ZloeWOJn4_Wvj5-lVYutaDIP9R3TBDI2-ze459a3TaXLcwyI9Q9daUOyhMSpvj_57XlmH_iAqrutrCFZ8VR6CobWibgp=s0"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                   quality={90} />
                  <div className="absolute inset-0 bg-gradient-to-t from-near-black/85 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-warm-ivory">
                    <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase bg-near-black/80 px-3 py-1 border border-champagne-gold/20">
                      The Main Lounge · Parvatsar
                    </span>
                    <span className="font-sans text-xs text-warm-ivory/70 tracking-widest uppercase">
                      Bespoke Salons
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-champagne-gold rounded-full"></span>
                <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase">
                  The Showroom Sanctuary
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-warm-ivory leading-none">
                SEE IT.<br />FEEL IT.<br /><span className="text-soft-gold italic">CHOOSE IT.</span>
              </h2>
              <p className="font-sans text-sm sm:text-base text-warm-ivory/80 leading-relaxed font-light">
                Fine jewellery is never a two-dimensional decision. True gold whispers its weight in the palm; natural gemstones require true daylight to disclose their chromatic spirit. Inside our Parvatsar showroom, every curation is presented unhurriedly in quiet, private comfort.
              </p>

              <div className="relative overflow-hidden border border-champagne-gold/25 shadow-lg bg-[#260003] group mt-2">
                <div className="relative w-full h-44">
                  <Image
                    alt="Private vitrine with champagne velvet bust and hand-carved stone alcove in warm evening light"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCECQ4EyZiUdswKVBLyaeHHFxdklzpiDKKimvMIPk0X4gpZsxIPjHM3sBFwD9VDnNQs_ZIYOGJ8s_AqNd2toDJr8ZLsLcDT-2YB8E3UpdFhrN6x_jyJpyIQZwzf2oX5sbIokwP1aYqsuz6QZR4wVyCZnVRAzZavCIU48Td8vXKwGSgiWZ7vrO_d4rDraF5z1UHNtPLbidloPs8VgM0WoHCYchv7-H7pUzM_Rz6M9-Q9XoiHpUMnM57Z=s0"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                   quality={90} />
                </div>
                <div className="p-4 bg-dark-wine/90">
                  <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase block mb-1">
                    Exclusive Vitrine Loupes
                  </span>
                  <p className="font-sans text-xs text-warm-ivory/70 font-light">
                    Private consultation vitrines with daylight loupe sessions &amp; carat purity testing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 05: SANCTUARY DOSSIER — VISIT US
          (Monumental Dossier & Verified Coordinates from Stitch)
          ======================================================== */}
      <section className="relative w-full py-28 px-6 lg:px-14 bg-[#120708] text-warm-ivory border-t border-champagne-gold/15">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Column 1: Monumental Typography */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              <div>
                <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase block mb-3">
                  Sanctuary Dossier
                </span>
                <h2 className="font-serif text-5xl sm:text-6xl text-warm-ivory leading-none tracking-tight">
                  VISIT<br /><span className="text-champagne-gold">US</span>
                </h2>
                <p className="font-sans text-sm sm:text-base text-warm-ivory/80 mt-4 font-light leading-relaxed">
                  A physical journey into certified gold craftsmanship and rare natural solitaires in Central Rajasthan.
                </p>
              </div>
              <div className="hidden lg:flex flex-col gap-2 pt-12">
                <div className="w-12 h-[2px] bg-champagne-gold"></div>
                <span className="font-sans text-xs text-warm-ivory/50 tracking-widest uppercase">
                  Balaji Jewellers &amp; Shyam Diamonds
                </span>
              </div>
            </div>

            {/* Column 2: Verified Coordinates & Showroom Specs */}
            <div className="lg:col-span-8 flex flex-col gap-6 bg-[#260003]/80 p-6 sm:p-10 border border-champagne-gold/25 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Box 1 */}
                <div className="p-5 bg-near-black/70 border border-champagne-gold/15 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-champagne-gold">
                    <Store className="w-4 h-4" />
                    <span className="font-sans text-[10px] uppercase tracking-widest">Atelier Title</span>
                  </div>
                  <h3 className="font-serif text-lg text-warm-ivory">BALAJI JEWELLERS &amp; SHYAM DIAMONDS</h3>
                  <p className="font-sans text-xs text-warm-ivory/60 font-light">Fine Jewellery &amp; Solitaire Atelier</p>
                </div>

                {/* Box 2 */}
                <div className="p-5 bg-near-black/70 border border-champagne-gold/15 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-champagne-gold">
                    <MapPin className="w-4 h-4" />
                    <span className="font-sans text-[10px] uppercase tracking-widest">Verified Address</span>
                  </div>
                  <p className="font-serif text-lg text-warm-ivory">Bank Wali Gali, Main Bazar</p>
                  <p className="font-sans text-xs text-warm-ivory/60 font-light">
                    Parvatsar, Nagaur District, Rajasthan – 341512, India
                  </p>
                </div>

                {/* Box 3 */}
                <div className="p-5 bg-near-black/70 border border-champagne-gold/15 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-champagne-gold">
                    <Clock className="w-4 h-4" />
                    <span className="font-sans text-[10px] uppercase tracking-widest">Showroom Hours</span>
                  </div>
                  <p className="font-serif text-lg text-warm-ivory">Monday – Sunday</p>
                  <p className="font-sans text-xs text-champagne-gold font-medium">9:00 AM – 8:00 PM (All 7 Days)</p>
                </div>

                {/* Box 4 */}
                <div className="p-5 bg-near-black/70 border border-champagne-gold/15 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-champagne-gold">
                    <Phone className="w-4 h-4" />
                    <span className="font-sans text-[10px] uppercase tracking-widest">Direct Concierge</span>
                  </div>
                  <a className="font-serif text-lg text-champagne-gold hover:underline" href="tel:+918854000203">
                    +91 88540 00203
                  </a>
                  <p className="font-sans text-xs text-warm-ivory/60 font-light">
                    Priority Telephone &amp; WhatsApp Support
                  </p>
                </div>
              </div>

              {/* Permanent Showroom Vault Curations */}
              <div className="p-5 bg-near-black/90 border border-champagne-gold/20 flex flex-col gap-3">
                <span className="font-sans text-[10px] tracking-widest text-champagne-gold uppercase">
                  Permanent Showroom Vault Curations
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2 text-xs font-sans text-warm-ivory">
                    <Sparkles className="w-3.5 h-3.5 text-champagne-gold shrink-0" />
                    <span>22K Solid Gold</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-sans text-warm-ivory">
                    <Sparkles className="w-3.5 h-3.5 text-champagne-gold shrink-0" />
                    <span>Pure 925 Sterling Silver</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-sans text-warm-ivory">
                    <Sparkles className="w-3.5 h-3.5 text-champagne-gold shrink-0" />
                    <span>Certified Natural Solitaires</span>
                  </div>
                </div>
                <p className="font-sans text-[11px] text-warm-ivory/50 pt-1 font-light">
                  *Private bridal suite viewings available by advance request with our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 06: ARCHITECTURAL MONUMENT — A MONUMENT TO CRAFT
          (Parvatsar Pin Monument from Stitch)
          ======================================================== */}
      <section className="relative w-full py-28 px-6 lg:px-14 bg-gradient-to-b from-[#120708] to-near-black text-warm-ivory border-t border-champagne-gold/15 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase mb-2">
              Architectural Monument
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-warm-ivory uppercase tracking-wide">
              A Monument to Craft
            </h2>
            <div className="w-12 h-[1px] bg-champagne-gold my-4"></div>

            <div className="w-full my-6 overflow-hidden shadow-2xl relative bg-near-black border border-champagne-gold/30 max-w-lg">
              <div className="relative w-full h-[440px]">
                <Image
                  alt="Hyper-minimalist 3D architectural sculpture of a faceted champagne-gold gemological location marker pin suspended above a dark sculpted raw burgundy marble topo pedestal"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkYAJ95Q41DqibXgLCr9DnwR48_E03xRYmHssTQ38KxbebWC3znPpd7uciy4LvfEQ5ruADYDTxcN8exkZZ8lfi1sPZLmqa3cTTp5rQlcLNSVaXRA_QAti6Mu3ncRpRo800VQT726GxbPElvlKencwbpC8Rwqc4SDQHPopK_6DG-ZbFXyLusnmLwDdMcD_xYXF8fd79yf_qMYHKAmd-hIkFBNWcuQhWPSpClJ9gHCI6QKiRpfcpeQpO=s0"
                  fill
                  className="object-cover"
                 quality={90} />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase block">
                    PARVATSAR PIN
                  </span>
                  <span className="font-serif text-lg text-warm-ivory">
                    Sovereign Archival Point
                  </span>
                </div>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 max-w-xl text-center font-light leading-relaxed">
              Crafted to signify our permanent anchor in Parvatsar—where every piece is measured, tested, and transformed with sovereign reverence.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 07: WELCOME TO OUR SALON — READY TO VISIT?
          (Trio Concierge Actions from Stitch)
          ======================================================== */}
      <section className="relative w-full py-24 px-6 lg:px-14 bg-gradient-to-r from-deep-burgundy/80 via-dark-wine to-deep-burgundy/80 text-warm-ivory border-t border-champagne-gold/25">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase mb-2">
            Welcome to our Salon
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-warm-ivory tracking-tight">
            READY TO VISIT?
          </h2>
          <p className="font-sans text-sm sm:text-base text-warm-ivory/80 max-w-2xl mt-3 mb-8 leading-relaxed font-light">
            Whether you seek an archival bridal suite, bespoke sizing, or private gemological guidance, our doors are open daily in Bank Wali Gali.
          </p>

          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="w-full sm:w-auto px-8 py-4 bg-champagne-gold text-near-black font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 hover:bg-soft-gold shadow-lg flex items-center justify-center gap-2"
              href={SITE_CONFIG.social.googleMaps}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions (Google Maps)</span>
            </a>
            <a
              className="w-full sm:w-auto px-8 py-4 bg-dark-wine border border-champagne-gold/40 text-warm-ivory font-sans text-xs tracking-widest uppercase transition-all duration-300 hover:bg-near-black flex items-center justify-center gap-2"
              href="tel:+918854000203"
            >
              <Phone className="w-4 h-4" />
              <span>Call Atelier: +91 88540 00203</span>
            </a>
            <a
              className="w-full sm:w-auto px-8 py-4 bg-near-black border border-champagne-gold text-champagne-gold font-sans text-xs tracking-widest uppercase transition-all duration-300 hover:bg-champagne-gold hover:text-near-black flex items-center justify-center gap-2 shadow-md"
              href={getWhatsAppShowroomUrl()}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 08: ARTISANAL DIAL / SHOWROOM SCHEDULE
          (12-Hour SVG Dial & 7 Days Schedule from Stitch)
          ======================================================== */}
      <section className="relative w-full py-24 px-6 lg:px-14 bg-[#170b0c] text-warm-ivory border-t border-champagne-gold/15">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#260003]/90 border border-champagne-gold/25 p-8 lg:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left: Artistic Dial Display */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 shrink-0 flex items-center justify-center">
              {/* Dial SVG */}
              <svg className="w-full h-full text-champagne-gold" viewBox="0 0 200 200">
                <circle cx="100" cy="100" fill="none" r="90" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1"></circle>
                <circle cx="100" cy="100" fill="none" r="76" stroke="currentColor" strokeDasharray="280 100" strokeLinecap="round" strokeOpacity="0.8" strokeWidth="2"></circle>
                {/* 12 Hours Ticks */}
                <line stroke="currentColor" strokeWidth="2" x1="100" x2="100" y1="14" y2="24"></line>
                <line stroke="currentColor" strokeWidth="2" x1="186" x2="176" y1="100" y2="100"></line>
                <line stroke="currentColor" strokeWidth="2" x1="100" x2="100" y1="186" y2="176"></line>
                <line stroke="currentColor" strokeWidth="2" x1="14" x2="24" y1="100" y2="100"></line>
                {/* Hands */}
                <line stroke="currentColor" strokeLinecap="round" strokeWidth="2" x1="100" x2="100" y1="100" y2="45"></line>
                <line stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" x1="100" x2="145" y1="100" y2="100"></line>
                <circle cx="100" cy="100" fill="currentColor" r="4"></circle>
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="font-sans text-[10px] text-champagne-gold tracking-widest uppercase">
                  7 Days
                </span>
                <span className="font-serif text-xl text-warm-ivory">
                  Daily
                </span>
              </div>
            </div>

            {/* Right: Hours Narrative */}
            <div className="flex flex-col gap-4 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-champagne-gold"></span>
                <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase">
                  Showroom Schedule
                </span>
              </div>
              <h3 className="font-serif text-4xl sm:text-5xl text-warm-ivory leading-tight">
                09:00 AM <span className="text-champagne-gold">→</span> 08:00 PM
              </h3>
              <div className="flex flex-col gap-2">
                <span className="font-sans text-xs tracking-widest text-champagne-gold uppercase font-semibold">
                  OPEN DAILY · 7 DAYS A WEEK
                </span>
                <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 leading-relaxed font-light">
                  Dedicated Valet &amp; Private Consultation Suites Available Throughout Showroom Hours. Walk-ins always graciously greeted; advance bridal appointments recommended for customized trousseau curation.
                </p>
              </div>
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2 text-xs font-sans text-warm-ivory/70">
                  <CheckCircle className="w-4 h-4 text-champagne-gold" />
                  <span>No lunch closures</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-sans text-warm-ivory/70">
                  <CheckCircle className="w-4 h-4 text-champagne-gold" />
                  <span>Sunday fully open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 09: THE ROYAL DESERT ATELIER — YOUR NEXT DISCOVERY AWAITS.
          (Closing Monumental Banner from Stitch)
          ======================================================== */}
      <section className="relative w-full py-28 px-6 lg:px-14 bg-gradient-to-b from-near-black via-[#170b0c] to-near-black text-warm-ivory border-t border-champagne-gold/20 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Centered Official Logo */}
          <div className="relative w-20 h-20 mb-6 rounded-full overflow-hidden border border-champagne-gold/40 shadow-[0_0_24px_rgba(216,180,106,0.3)] bg-near-black">
            <Image
              alt="Balaji Jewellers &amp; Shyam Diamonds official emblem"
              src="/logo.png"
              fill
              className="object-contain p-2"
             quality={90} />
          </div>

          <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase mb-2">
            The Royal Desert Atelier
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl text-warm-ivory uppercase tracking-tight">
            YOUR NEXT DISCOVERY AWAITS.
          </h2>
          <p className="font-sans text-sm sm:text-base text-warm-ivory/80 max-w-xl mt-3 mb-6 font-light">
            Visit Balaji Jewellers &amp; Shyam Diamonds in Parvatsar.
          </p>

          {/* Pill Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <span className="px-4 py-1.5 bg-[#260003] border border-champagne-gold/30 rounded-full font-sans text-[10px] text-champagne-gold tracking-widest uppercase">
              GOLD
            </span>
            <span className="text-champagne-gold/40">·</span>
            <span className="px-4 py-1.5 bg-[#260003] border border-champagne-gold/30 rounded-full font-sans text-[10px] text-champagne-gold tracking-widest uppercase">
              SILVER
            </span>
            <span className="text-champagne-gold/40">·</span>
            <span className="px-4 py-1.5 bg-[#260003] border border-champagne-gold/30 rounded-full font-sans text-[10px] text-champagne-gold tracking-widest uppercase">
              GEMSTONES
            </span>
          </div>

          {/* Trio Action Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a
              className="px-6 py-3 bg-champagne-gold text-near-black font-sans text-xs tracking-widest uppercase font-semibold hover:bg-soft-gold transition-colors shadow-md"
              href={SITE_CONFIG.social.googleMaps}
              rel="noopener noreferrer"
              target="_blank"
            >
              GET DIRECTIONS
            </a>
            <a
              className="px-6 py-3 bg-[#260003] border border-champagne-gold text-champagne-gold font-sans text-xs tracking-widest uppercase hover:bg-champagne-gold hover:text-near-black transition-colors"
              href={getWhatsAppShowroomUrl()}
              rel="noopener noreferrer"
              target="_blank"
            >
              WHATSAPP CONCIERGE
            </a>
            <a
              className="px-6 py-3 bg-near-black border border-champagne-gold/40 text-warm-ivory font-sans text-xs tracking-widest uppercase hover:border-champagne-gold transition-colors"
              href="tel:+918854000203"
            >
              CALL +91 88540 00203
            </a>
          </div>

          <div className="pt-4 border-t border-champagne-gold/15 text-warm-ivory/50 font-sans text-[10px] tracking-monumental uppercase">
            PARVATSAR · RAJASTHAN | 9:00 AM — 8:00 PM | AUTHENTICITY ASSURED
          </div>
        </div>
      </section>
    </div>
  );
}
