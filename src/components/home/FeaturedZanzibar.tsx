"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const highlights = [
  {
    title: "Safari Blue",
    subtitle: "Dolphins · Sandbars · Dhow",
    image: "/zanzibar images/safari-blue-dhow.jpg",
  },
  {
    title: "Stone Town",
    subtitle: "UNESCO · Culture · History",
    image: "/zanzibar images/stone-town-fort.jpg",
  },
  {
    title: "Spice Farm Tour",
    subtitle: "Cloves · Vanilla · Cardamom",
    image: "/zanzibar images/spice-tour.jpg",
  },
  {
    title: "Mnemba Atoll",
    subtitle: "Snorkelling · Sea Turtles",
    image: "/zanzibar images/mnemba-snorkeling.jpg",
  },
];

export default function FeaturedZanzibar() {
  const locale = useLocale();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative overflow-hidden bg-white">

      {/* Top wave — transitions from previous dark section */}
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full block h-10 md:h-14" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 Q360,60 720,20 Q1080,-20 1440,30 L1440,0 Z" fill="#241c14" />
        </svg>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 pt-20 pb-24">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#0e7490]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#0e7490] font-body">
                Zanzibar · The Spice Island
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#2e2419] leading-tight">
              Extend your safari{" "}
              <span className="italic text-[#ae9231]">to paradise</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            <p className="text-[#5a4c43]/70 font-body text-base leading-relaxed mb-6">
              Just 30 minutes by air from Arusha — white coral beaches, ancient Stone Town, dolphins, spice farms, and the warmest waters of the Indian Ocean await.
            </p>
            <Link
              href={`/${locale}/zanzibar`}
              className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase text-[#ae9231] font-body font-semibold"
            >
              Explore Zanzibar
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>

        {/* Featured image + cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

          {/* Hero image — left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-3 relative rounded-2xl overflow-hidden h-72 lg:h-auto"
          >
            <Image
              src="/zanzibar images/nakupenda-sandbank.webp"
              alt="Nakupenda Sandbank Zanzibar"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071e2e]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-display text-2xl sm:text-3xl font-light text-white italic leading-tight">
                &ldquo;Paradise is closer than you think&rdquo;
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-5 h-px bg-[#67e8f9]" />
                <span className="text-[10px] tracking-widest uppercase text-[#67e8f9] font-body">Nakupenda Sandbank</span>
              </div>
            </div>
          </motion.div>

          {/* 4 experience cards — right */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.7 }}
                className="group relative rounded-xl overflow-hidden h-36 cursor-pointer"
              >
                <Image
                  src={h.image}
                  alt={h.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="font-body font-semibold text-white text-xs leading-tight">{h.title}</p>
                  <p className="text-[#67e8f9] text-[9px] tracking-wider uppercase font-body mt-0.5 opacity-90">{h.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ocean strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-[#0e7490]/15"
        >
          <div className="flex flex-wrap gap-6">
            {["33 Islands", "Indian Ocean Beaches", "UNESCO Stone Town", "World-class Diving"].map((tag) => (
              <span key={tag} className="flex items-center gap-2 text-xs text-[#0e7490]/80 font-body">
                <span className="w-1 h-1 rounded-full bg-[#0e7490]" />
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={`/${locale}/zanzibar`}
            className="group flex items-center gap-3 px-7 py-3 rounded-xl bg-[#0e7490] text-white text-xs tracking-widest uppercase font-body font-semibold hover:bg-[#0c6880] transition-colors duration-300 whitespace-nowrap"
          >
            See All Experiences
            <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Bottom wave to next section */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" className="w-full block h-8 md:h-12" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,50 L0,25 Q360,-10 720,25 Q1080,60 1440,20 L1440,50 Z" fill="#2e2419" />
        </svg>
      </div>
    </section>
  );
}
