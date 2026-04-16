"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { accommodations } from "@/data/accommodations";
import { MapPin, Home, ArrowRight } from "lucide-react";

function AccommodationCard({
  accommodation,
  index,
}: {
  accommodation: (typeof accommodations)[0];
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.1,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden bg-white border border-[#ae9231]/10 hover:border-[#ae9231]/40 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-64 sm:h-72 overflow-hidden shrink-0">
          <Image
            src={accommodation.image}
            alt={accommodation.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Type badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#ae9231] px-3 py-1.5">
            <Home size={12} className="text-[#1a1410]" />
            <span className="text-[#1a1410] text-xs tracking-wider font-body font-semibold">
              {accommodation.type}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-7 flex flex-col flex-1">
          {/* Location */}
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={12} className="text-[#ae9231]" />
            <span className="text-xs tracking-wider uppercase text-[#ae9231]/90 font-body">
              {accommodation.location}
            </span>
          </div>

          <h3 className="font-display text-2xl font-light text-[#2e2419] leading-tight mb-4 group-hover:text-[#ae9231] transition-colors duration-300">
            {accommodation.name}
          </h3>

          <p className="text-[#5a4c43]/70 font-body text-sm leading-relaxed flex-1">
            {accommodation.description}
          </p>
        </div>

        {/* Left accent line */}
        <div className="absolute left-0 top-0 w-px h-0 bg-[#ae9231] group-hover:h-full transition-all duration-500" />
      </div>
    </motion.div>
  );
}

export default function AccommodationPage() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ctaRef, inView: ctaInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-[#f5f0e8]">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/accommodation images/tukaone-1.jpg"
            alt="Accommodation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410]/80 via-[#1a1410]/50 to-[#f5f0e8]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1410]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#ae9231]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">
                Where You Stay
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-[#f5f0e8] leading-tight mb-6 drop-shadow-sm">
              Where You Stay <span className="italic text-[#ae9231]">Matters</span>
            </h1>
            <p className="text-white/80 font-body text-lg max-w-2xl leading-relaxed mb-8 drop-shadow-sm">
              Carefully selected lodges and camps across Tanzania for comfort, safety, and unforgettable safari experiences.
            </p>
            <p className="text-white/70 font-body text-base max-w-2xl leading-relaxed drop-shadow-sm">
              During your journey, your accommodation is more than just a place to sleep. It is part of the experience. From luxury tented camps in the heart of Serengeti to peaceful lodges near Ngorongoro, every stay is chosen to give you comfort, great service, and direct connection to nature.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accommodations Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation, i) => (
              <AccommodationCard
                key={accommodation.id}
                accommodation={accommodation}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/accommodation images/dove-1.jpg"
            alt="Plan your safari stay"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1a1410]/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#ae9231]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">
                Safari Stays
              </span>
              <span className="w-8 h-px bg-[#ae9231]" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light text-[#f5f0e8] leading-tight mb-6">
              Experience the <span className="italic text-[#ae9231]">Perfect</span>
              <br />
              Safari Stay
            </h2>
            <p className="text-[#f5f0e8]/70 font-body text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Every accommodation is carefully selected to match your journey and comfort level. From arrival in Arusha to nights under the Serengeti stars, we ensure every stay is memorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/packages`}
                className="group relative overflow-hidden px-10 py-4 bg-[#ae9231] text-[#1a1410] text-sm tracking-widest uppercase font-semibold font-body hover:shadow-[0_0_40px_rgba(174,146,49,0.4)] transition-all duration-300"
              >
                <span className="relative z-10">View Safari Packages</span>
                <span className="absolute inset-0 bg-[#c9a94e] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex items-center justify-center gap-2 px-10 py-4 border border-[#f5f0e8]/30 text-[#f5f0e8] text-sm tracking-widest uppercase font-body hover:border-[#ae9231] hover:text-[#ae9231] transition-all duration-300"
              >
                Plan Your Safari
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
