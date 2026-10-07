"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { INSTAGRAM_CONFIG, InstagramFeedItem } from "@/lib/constants/instagramConfig";
import { getWhatsAppProductUrl } from "@/lib/utils/whatsapp";
import {
  ExternalLink,
  MessageCircle,
  Play,
  Heart,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function InstagramFeed() {
  const [activeTab, setActiveTab] = useState<"gallery" | "embeds">("gallery");
  const [selectedPost, setSelectedPost] = useState<InstagramFeedItem | null>(null);

  // Load Instagram official embed script when embeds tab is viewed
  useEffect(() => {
    if (activeTab === "embeds" && typeof window !== "undefined") {
      const existingScript = document.getElementById("instagram-embed-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "instagram-embed-script";
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = () => {
          if ((window as unknown as { instgrm?: { Embeds: { process: () => void } } }).instgrm) {
            (window as unknown as { instgrm: { Embeds: { process: () => void } } }).instgrm.Embeds.process();
          }
        };
        document.body.appendChild(script);
      } else {
        if ((window as unknown as { instgrm?: { Embeds: { process: () => void } } }).instgrm) {
          (window as unknown as { instgrm: { Embeds: { process: () => void } } }).instgrm.Embeds.process();
        }
      }
    }
  }, [activeTab]);

  return (
    <section
      id="instagram-feed"
      className="relative w-full bg-[#120708] text-warm-ivory py-20 sm:py-28 px-4 sm:px-8 lg:px-14 border-t border-champagne-gold/20 overflow-hidden"
    >
      {/* Ambient Lighting */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-deep-burgundy/25 blur-[160px] rounded-full"></div>
      <div className="pointer-events-none absolute -bottom-10 right-10 w-[450px] h-[450px] bg-champagne-gold/5 blur-[140px] rounded-full"></div>

      <div className="max-w-[1460px] mx-auto relative z-10">
        {/* Instagram Header Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-champagne-gold/15 mb-12">
          <div className="flex items-start sm:items-center gap-4 sm:gap-5">
            {/* Instagram Profile Avatar with Royal Ring */}
            <div className="relative shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-lg">
                <div className="w-full h-full rounded-full bg-[#170b0c] p-1 flex items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-[#241315] flex items-center justify-center">
                    <span className="font-serif text-lg sm:text-xl font-bold text-[#e7c276]">
                      BJ
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#170b0c] flex items-center justify-center border border-champagne-gold/30">
                <CheckCircle2 className="w-4 h-4 text-[#e7c276] fill-[#e7c276]/20" />
              </div>
            </div>

            {/* Profile Info */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-sans text-[11px] tracking-widest text-[#e7c276] uppercase font-semibold">
                  Official Instagram Dispatches
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#e7c276] animate-pulse"></span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-warm-ivory font-normal leading-tight">
                @{INSTAGRAM_CONFIG.handle}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-warm-ivory/70 mt-1 font-light">
                {INSTAGRAM_CONFIG.profileName} · {INSTAGRAM_CONFIG.location} · {INSTAGRAM_CONFIG.postsCount}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Switcher Tabs */}
            <div className="inline-flex p-1 bg-[#1e0e10] border border-champagne-gold/25">
              <button
                type="button"
                onClick={() => setActiveTab("gallery")}
                className={`px-4 py-2 text-xs font-sans uppercase tracking-wider transition-all ${
                  activeTab === "gallery"
                    ? "bg-[#e7c276] text-[#120708] font-bold shadow-md"
                    : "text-warm-ivory/70 hover:text-warm-ivory"
                }`}
              >
                Curated Feed
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("embeds")}
                className={`px-4 py-2 text-xs font-sans uppercase tracking-wider transition-all ${
                  activeTab === "embeds"
                    ? "bg-[#e7c276] text-[#120708] font-bold shadow-md"
                    : "text-warm-ivory/70 hover:text-warm-ivory"
                }`}
              >
                Live Embeds
              </button>
            </div>

            {/* Follow on Instagram Button */}
            <a
              href={INSTAGRAM_CONFIG.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-deep-burgundy to-[#5c0b14] border border-champagne-gold/40 text-[#fbf8f2] font-sans text-xs uppercase tracking-widest font-semibold hover:border-[#e7c276] hover:bg-deep-burgundy/80 transition-all shadow-md group"
            >
              <svg className="w-4 h-4 fill-[#e7c276] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Follow on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#e7c276]/80" />
            </a>
          </div>
        </div>

        {/* TAB 1: CURATED INSTAGRAM LOOKBOOK FEED */}
        {activeTab === "gallery" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {INSTAGRAM_CONFIG.posts.map((post) => (
              <div
                key={post.id}
                className="group relative bg-[#170b0c] border border-champagne-gold/25 hover:border-champagne-gold/60 transition-all duration-300 flex flex-col shadow-xl overflow-hidden"
              >
                {/* Visual Image Container */}
                <div className="relative aspect-square w-full bg-[#201012] overflow-hidden">
                  <Image
                    src={post.previewImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    quality={90}
                  />

                  {/* Post Type Badge */}
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 bg-[#120708]/85 border border-champagne-gold/30 backdrop-blur-sm">
                    {post.type === "reel" ? (
                      <>
                        <Play className="w-3 h-3 text-[#e7c276] fill-[#e7c276]" />
                        <span className="font-sans text-[10px] uppercase tracking-wider text-[#e7c276] font-semibold">
                          Reel
                        </span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3 h-3 text-[#e7c276]" />
                        <span className="font-sans text-[10px] uppercase tracking-wider text-[#e7c276] font-semibold">
                          Post
                        </span>
                      </>
                    )}
                  </div>

                  {/* Floating Date Badge */}
                  <div className="absolute top-3 right-3 z-20 px-2 py-0.5 bg-[#120708]/85 border border-champagne-gold/20 text-[9px] font-sans tracking-widest uppercase text-warm-ivory/70">
                    {post.date}
                  </div>

                  {/* Hover Overlay with Stats and Action Buttons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120708] via-[#120708]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex flex-col justify-end p-5">
                    {/* Social Stats */}
                    <div className="flex items-center gap-4 text-warm-ivory mb-3 font-sans text-xs">
                      <div className="flex items-center gap-1.5">
                        <Heart className="w-4 h-4 text-[#e7c276] fill-[#e7c276]" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MessageSquare className="w-4 h-4 text-[#e7c276]" />
                        <span>{post.comments}</span>
                      </div>
                    </div>

                    <p className="font-serif text-sm text-warm-ivory line-clamp-2 mb-4 font-normal leading-snug">
                      {post.title}
                    </p>

                    <div className="flex items-center gap-2">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 bg-[#e7c276] text-[#120708] font-sans text-[10px] uppercase tracking-widest font-bold text-center hover:bg-[#ffdfa0] transition-colors flex items-center justify-center gap-1"
                      >
                        <span>Open on IG</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href={getWhatsAppProductUrl(post.title, post.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-2.5 bg-[#25d366]/20 border border-[#25d366]/50 text-[#25d366] hover:bg-[#25d366]/30 transition-colors"
                        title="Inquire on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card Caption Footer */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#170b0c]">
                  <div>
                    <h3 className="font-serif text-base text-warm-ivory font-normal leading-snug line-clamp-1 group-hover:text-[#e7c276] transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-sans text-xs text-warm-ivory/70 font-light mt-1.5 line-clamp-2 leading-relaxed">
                      {post.caption}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-champagne-gold/15 flex items-center justify-between text-[11px] font-sans">
                    <span className="text-[#e7c276] font-medium tracking-wide">
                      @balajijwellerssshyamdimond
                    </span>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-ivory/60 hover:text-warm-ivory flex items-center gap-1"
                    >
                      <span>View</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: LIVE OFFICIAL INSTAGRAM EMBEDS */}
        {activeTab === "embeds" && (
          <div className="w-full">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#e7c276] font-semibold block mb-2">
                Official Meta Widget
              </span>
              <p className="font-sans text-xs sm:text-sm text-warm-ivory/80 font-light">
                Live interactive embeds directly from Instagram servers. You can interact with reels, read patrons&apos; comments, or tap follow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {INSTAGRAM_CONFIG.posts.slice(0, 3).map((post) => (
                <div
                  key={`embed-${post.id}`}
                  className="w-full max-w-[420px] bg-[#170b0c] border border-champagne-gold/25 p-3 rounded shadow-xl flex flex-col items-center"
                >
                  <blockquote
                    className="instagram-media w-full"
                    data-instgrm-captioned
                    data-instgrm-permalink={post.url}
                    data-instgrm-version="14"
                    style={{
                      background: "#170b0c",
                      border: "none",
                      borderRadius: "3px",
                      boxShadow: "none",
                      margin: "0 auto",
                      maxWidth: "540px",
                      minWidth: "280px",
                      padding: 0,
                      width: "100%",
                    }}
                  >
                    <div className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <svg className="w-5 h-5 fill-[#e7c276]" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        <span className="font-serif text-sm text-[#e7c276]">
                          Balaji Jewellers
                        </span>
                      </div>
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-[#e7c276]/15 border border-[#e7c276]/40 text-[#e7c276] font-sans text-xs uppercase tracking-wider hover:bg-[#e7c276] hover:text-[#120708] transition-all"
                      >
                        Loading Instagram Post...
                      </a>
                    </div>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Guarantee Bar */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-champagne-gold/15 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-warm-ivory/70">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-[#e7c276]" />
            <span>Every featured design is verified BIS 916 Hallmarked Gold or Certified 92.5 Silver</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Direct Instagram Inquiries:</span>
            <a
              href="https://wa.me/918854000203"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e7c276] hover:underline font-medium"
            >
              +91 88540 00203 (WhatsApp)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
