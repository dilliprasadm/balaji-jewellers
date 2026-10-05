import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SITE_CONFIG } from "@/lib/constants/siteConfig";
import { getWhatsAppProductUrl } from "@/lib/utils/whatsapp";
import { Phone, MessageCircle, MapPin, Clock, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-near-black text-warm-ivory border-t border-champagne-gold/20 pt-20 pb-28 xl:pb-16 px-6 lg:px-14 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-deep-burgundy/40 blur-[160px] rounded-full"></div>

      <div className="max-w-[1520px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-champagne-gold/15">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <BrandLogo href="/" variant="full" />
            <p className="text-warm-ivory/70 text-xs sm:text-sm font-sans font-light leading-relaxed max-w-sm">
              Balaji Jewellers &amp; Shyam Diamonds presents a curated digital exhibition of fine Gold and Silver jewellery in Parvatsar, Rajasthan.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-champagne-gold/30 text-champagne-gold hover:bg-champagne-gold hover:text-near-black transition-all duration-300"
                aria-label="Official Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={SITE_CONFIG.social.googleBusiness}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-champagne-gold/30 text-champagne-gold hover:bg-champagne-gold hover:text-near-black transition-all duration-300"
                aria-label="Google Business Profile"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppProductUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-champagne-gold/30 text-champagne-gold hover:bg-champagne-gold hover:text-near-black transition-all duration-300"
                aria-label="WhatsApp Concierge"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Exhibition Pages */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase font-medium">
              Navigation
            </span>
            <ul className="flex flex-col gap-2.5 text-xs font-sans tracking-wider text-warm-ivory/80">
              {SITE_CONFIG.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-soft-gold transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disciplines & Categories */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase font-medium">
              Disciplines
            </span>
            <ul className="flex flex-col gap-2.5 text-xs font-sans tracking-wider text-warm-ivory/80">
              <li>
                <Link
                  href="/collections#gold"
                  className="hover:text-soft-gold transition-colors inline-block py-0.5"
                >
                  Gold Jewellery
                </Link>
              </li>
              <li>
                <Link
                  href="/collections#silver"
                  className="hover:text-soft-gold transition-colors inline-block py-0.5"
                >
                  Silver Jewellery
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/craft"
                  className="hover:text-soft-gold transition-colors inline-block py-0.5"
                >
                  The Craft
                </Link>
              </li> */}
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-soft-gold transition-colors inline-block py-0.5"
                >
                  Visual Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Showroom & Contact */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-sans text-[10px] tracking-monumental text-champagne-gold uppercase font-medium">
              Showroom &amp; Inquiries
            </span>
            <div className="flex flex-col gap-3 text-xs font-sans text-warm-ivory/80 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-champagne-gold shrink-0 mt-0.5" />
                <span>
                  {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} – {SITE_CONFIG.address.pincode}, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-champagne-gold shrink-0" />
                <span>{SITE_CONFIG.hoursFull}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-champagne-gold shrink-0" />
                <a href={SITE_CONFIG.phoneTel} className="hover:text-soft-gold transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-champagne-gold shrink-0" />
                <a
                  href={getWhatsAppProductUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-champagne-gold hover:text-soft-gold transition-colors"
                >
                  Direct WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-sans tracking-cinematic text-warm-ivory/50 uppercase">
          <p>© {new Date().getFullYear()} Balaji Jewellers &amp; Shyam Diamonds. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Parvatsar, Rajasthan</span>
            <span className="w-1 h-1 rounded-full bg-champagne-gold/40"></span>
            <span>Digital Brand Experience</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
