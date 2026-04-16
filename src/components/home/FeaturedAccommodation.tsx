"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { accommodations } from "@/data/accommodations";
import { MapPin, Home, ArrowRight } from "lucide-react";

const featured = accommodations.slice(0, 3);

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
        delay: index * 0.15,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={`group relative ${index === 1 ? "md:mt-10" : ""}`}
    >
      <div className="relative overflow-hidden bg-[#241c14] border border-[#ae9231]/10 hover:border-[#ae9231]/40 transition-all duration-500 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-56 overflow-hidden shrink-0">
          <Image
            src={accommodation.image}
            alt={accommodation.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241c14] via-transparent to-transparent" />

          {/* Type badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#ae9231] px-3 py-1.5">
            <Home size={12} className="text-[#1a1410]" />
            <span className="text-[#1a1410] text-xs tracking-wider font-body font-semibold">
              {accommodation.type}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Location */}
          <div className="flex items-center gap-2 mb-3">
            <MapPin size={12} className="text-[#ae9231]" />
            <span className="text-xs tracking-wider uppercase text-[#ae9231]/80 font-body">
              {accommodation.location}
            </span>
          </div>

          <h3 className="font-display text-2xl font-light text-[#f5f0e8] leading-tight mb-3 group-hover:text-[#ae9231] transition-colors duration-300 flex-1">
            {accommodation.name}
          </h3>

          <p className="text-[#f5f0e8]/50 font-body text-sm leading-relaxed line-clamp-3">
            {accommodation.description}
          </p>
        </div>

        {/* Left accent line */}
        <div className="absolute left-0 top-0 w-px h-0 bg-[#ae9231] group-hover:h-full transition-all duration-500" />
      </div>
    </motion.div>
  );
}

export default function FeaturedAccommodation() {
  const locale = useLocale();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24 lg:py-32 bg-[#2e2419] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#ae9231]/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#ae9231]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">
                Safari Stays
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#f5f0e8] leading-tight">
              Where You <span className="italic text-[#ae9231]">Stay</span>
            </h2>
          </div>
          <Link
            href={`/${locale}/accommodation`}
            className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase text-[#ae9231] font-body font-semibold whitespace-nowrap self-end"
          >
            View All Accommodations
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((accommodation, i) => (
            <AccommodationCard
              key={accommodation.id}
              accommodation={accommodation}
              index={i}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-10 flex justify-center md:hidden"
        >
          <Link
            href={`/${locale}/accommodation`}
            className="group inline-flex items-center gap-3 px-8 py-4 border border-[#ae9231]/40 text-[#ae9231] text-xs tracking-widest uppercase font-body hover:bg-[#ae9231] hover:text-[#1a1410] transition-all duration-300"
          >
            View All Accommodations
            <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
