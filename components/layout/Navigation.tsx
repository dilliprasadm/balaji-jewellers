"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SITE_CONFIG } from "@/lib/constants/siteConfig";
import { getWhatsAppProductUrl } from "@/lib/utils/whatsapp";
import { cn } from "@/lib/utils/cn";
import { MessageCircle, Phone, Menu, X } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileOpen(false);
  }

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          isScrolled
            ? "bg-near-black/90 backdrop-blur-xl border-b border-champagne-gold/20 py-3.5 shadow-[0_12px_36px_rgba(0,0,0,0.8)]"
            : "bg-gradient-to-b from-near-black/80 via-near-black/40 to-transparent py-5"
        )}
      >
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <BrandLogo href="/" />

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-7 text-[11px] font-sans tracking-cinematic uppercase">
            {SITE_CONFIG.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "py-1 transition-all duration-300 relative font-medium",
                    isActive
                      ? "text-champagne-gold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-champagne-gold"
                      : "text-warm-ivory/70 hover:text-soft-gold"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-3.5">
            <a
              href={getWhatsAppProductUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-champagne-gold/60 bg-gradient-to-r from-deep-burgundy/60 to-dark-wine/80 text-champagne-gold hover:bg-champagne-gold hover:text-near-black transition-all duration-300 text-[10.5px] font-sans tracking-widest uppercase font-semibold shadow-[0_4px_16px_-4px_rgba(216,180,106,0.3)]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={SITE_CONFIG.phoneTel}
              className="w-8 h-8 flex items-center justify-center border border-champagne-gold/40 text-champagne-gold hover:bg-champagne-gold hover:text-near-black transition-all duration-300"
              aria-label="Call Balaji Jewellers"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-3">
            <a
              href={getWhatsAppProductUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden flex items-center justify-center w-8 h-8 border border-champagne-gold/40 text-champagne-gold"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-1.5 text-warm-ivory hover:text-champagne-gold transition-colors"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[60] bg-near-black/98 backdrop-blur-2xl xl:hidden flex flex-col justify-between pt-24 pb-[max(env(safe-area-inset-bottom),2rem)] px-6 sm:px-8 border-b border-champagne-gold/20 animate-in fade-in duration-300">
          <div className="flex flex-col gap-6 pt-4">
            <span className="font-sans text-[10px] tracking-monumental text-champagne-gold/80 uppercase">
              Curated Navigation
            </span>
            <nav className="flex flex-col gap-4 text-sm font-sans tracking-cinematic uppercase">
              {SITE_CONFIG.navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "py-2 border-b border-champagne-gold/10 flex items-center justify-between text-base font-serif",
                      isActive
                        ? "text-champagne-gold font-normal"
                        : "text-warm-ivory/80 hover:text-soft-gold"
                    )}
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] font-sans text-champagne-gold/40 tracking-widest">
                      0{idx + 1}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-champagne-gold/20">
            <div className="flex items-center justify-between text-xs text-warm-ivory/60 font-sans tracking-wider">
              <span>Parvatsar Showroom</span>
              <span className="text-champagne-gold">{SITE_CONFIG.hours}</span>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={getWhatsAppProductUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-champagne-gold text-near-black font-sans text-xs tracking-widest uppercase font-semibold text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href={SITE_CONFIG.phoneTel}
                className="py-3 px-4 border border-champagne-gold text-champagne-gold font-sans text-xs tracking-widest uppercase font-semibold text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Salon</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
