"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants/siteConfig";
import { getWhatsAppProductUrl } from "@/lib/utils/whatsapp";
import { Phone, MessageCircle } from "lucide-react";

export function MobileConciergeBar() {
  return (
    <aside
      aria-label="Mobile Concierge Actions"
      className="fixed bottom-0 left-0 w-full z-40 xl:hidden bg-near-black/95 backdrop-blur-xl border-t border-champagne-gold/30 shadow-[0_-8px_30px_rgba(0,0,0,0.8)] pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 px-3"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 divide-x divide-champagne-gold/25 items-center">
        {/* Call Action */}
        <a
          href={SITE_CONFIG.phoneTel}
          className="flex items-center justify-center gap-2 py-2 text-warm-ivory hover:text-champagne-gold transition-colors font-sans text-xs tracking-widest uppercase font-medium"
        >
          <Phone className="w-3.5 h-3.5 text-champagne-gold" />
          <span>Call Salon</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={getWhatsAppProductUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2 text-champagne-gold hover:text-soft-gold transition-colors font-sans text-xs tracking-widest uppercase font-semibold"
        >
          <MessageCircle className="w-4 h-4 text-champagne-gold" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
