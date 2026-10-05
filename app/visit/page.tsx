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
            src="https://lh3.googleusercontent.com/aida/AEtjO1UDl2QD-9QXwBAMdYgaZUHRczCEqdlkLaJ5FVgtPb-EntqyAaoRJd1IfU1xL9JBXRiO673hkeejfbzIsh91Voh27BmtnCfeW-1_XYFgPogwRc21k74DUwFmIIgQWtefWoRtw3vpOC6w8JzP0KZtBlu6PewkVvq1fJhVeRXMaNZw8Uk7Az-QsrnjyCcd9b1L6-UnfBuJuApu-eomv6jIF90w-w3p41WFyBvQLu855EltHJko__RGslxTJA"
            alt="Atmospheric Salon Architecture Study"
            fill
            priority
            className="object-cover object-center filter brightness-[0.35] contrast-125 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#170b0c] via-[#170b0c]/70 to-[#170b0c]/40"></div>
        </div>

        {/* Top Eyebrow */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-near-black/80 backdrop-blur-md border border-champagne-gold/30">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-gold animate-pulse"></span>
            <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase">
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
            <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase">
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
            <span className="font-sans text-xs tracking-monumental text-champagne-gold uppercase mb-2">
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
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={SITE_CONFIG.social.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-champagne-gold text-near-black font-sans text-xs tracking-widest uppercase font-semibold hover:bg-soft-gold transition-colors flex items-center gap-2 shadow-md"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions (Maps)</span>
                  </a>

                  <a
                    href={SITE_CONFIG.social.googleBusiness}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 border border-champagne-gold text-champagne-gold font-sans text-xs tracking-widest uppercase font-semibold hover:bg-champagne-gold/10 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Google Business Profile</span>
                  </a>

                  <a
                    href={getWhatsAppShowroomUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 border border-champagne-gold text-champagne-gold font-sans text-xs tracking-widest uppercase font-semibold hover:bg-champagne-gold/10 transition-colors flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Concierge</span>
                  </a>

                  <a
                    href={SITE_CONFIG.phoneTel}
                    className="px-6 py-3.5 border border-champagne-gold text-champagne-gold font-sans text-xs tracking-widest uppercase font-semibold hover:bg-champagne-gold/10 transition-colors flex items-center gap-2"
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
          SECTION 03: THE SALON AMBIENCE STUDY
          (Framed clearly as atmospheric aesthetic visual study)
          ======================================================== */}
      <section className="w-full py-28 px-6 lg:px-14 bg-near-black border-t border-champagne-gold/15">
        <div className="max-w-[1460px] mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-champagne-gold/15">
            <div>
              <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase block mb-2">
                ATMOSPHERIC VISUAL STUDY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-warm-ivory">
                The Salon Environment
              </h2>
            </div>
            <p className="font-sans text-xs text-warm-ivory/60 max-w-sm font-light">
              Atmospheric architectural study reflecting our aesthetic dedication to quiet luxury, warm stone, and thoughtful viewing vitrines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-[16/10] bg-[#260003] border border-champagne-gold/25 overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1Ui9KOtUau8hkRtezqG0STzUA1JCXeCEHiTGPqSgKbFiYa3OtDm_sIiAE1DfjoitFYraSn2Gt8XIqGFUM9bttlkol4yB6U20TUjt_XbxMzc1EUDJD2GKRZNDMM5cmKq6OhZJTH0--StmQwo_XqnUJ4_vajrwXPiGNB4VOV2PW06Uq8ptilMgJ0EPrq8TCiqcd6yQL0U-0eH_bN99GM-r_Ud_MsCmnAleo2HmK-gVQYmHFaA5N3OUYt3veQ"
                alt="Atmospheric Salon Interior Study"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-near-black/85 px-2.5 py-1 text-[9px] font-sans text-champagne-gold uppercase tracking-wider border border-champagne-gold/20">
                Salon Ambience Concept
              </div>
            </div>

            <div className="relative aspect-[16/10] bg-[#260003] border border-champagne-gold/25 overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida/AEtjO1V0p-aQOluSFcBbzmCc-yNkdHtCwOCAIivRklAnBZqmLFLqN5WqKwm5tYF652_73yIpX2VQb5DHrOxLWbv8lDkodSm8q_hL1uKMr5rFGB7CK-WG9c5gf031UB3DRyrccqFv81UmNOkfE_9UdfpC3DpPIeiBTXWaMsUNmetaQ8kkvlY0zK_sv5f2ikz0dyWVwgiAbXLxX9I-Z50dZ3H8x-wOxHmqgVdLu2GJhZ9ypgKqGdTeEIaQyp3GCUY"
                alt="Atmospheric Viewing Vitrine Study"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-near-black/85 px-2.5 py-1 text-[9px] font-sans text-champagne-gold uppercase tracking-wider border border-champagne-gold/20">
                Viewing Vitrine Concept
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 04: DIRECT CONCIERGE DIALOGUE
          ======================================================== */}
      <section className="w-full py-20 px-6 lg:px-14 bg-gradient-to-b from-near-black to-[#170b0c] border-t border-champagne-gold/15 text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
          <Sparkles className="w-6 h-6 text-champagne-gold" />
          <h3 className="font-serif text-3xl text-warm-ivory">
            Planning Your Visit to Parvatsar?
          </h3>
          <p className="font-sans text-warm-ivory/80 text-sm font-light leading-relaxed">
            Feel free to message our team directly on WhatsApp prior to your visit for directions or piece availability.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href={getWhatsAppShowroomUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-champagne-gold text-near-black font-sans text-xs tracking-monumental uppercase font-semibold hover:bg-soft-gold transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>
            <a
              href={SITE_CONFIG.phoneTel}
              className="px-8 py-3.5 border border-champagne-gold text-champagne-gold font-sans text-xs tracking-monumental uppercase font-semibold hover:bg-champagne-gold/10 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
