"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { safariPackages } from "@/data/safariPackages";
import { MapPin, Clock, ArrowRight, Calendar } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

function PackageCard({ pkg, index }: { pkg: (typeof safariPackages)[0]; index: number }) {
  const t = useTranslations("packages");
  const locale = useLocale();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { openModal } = useBooking();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative ${index % 3 === 1 ? "lg:mt-12" : ""}`}
    >
      <div className="relative overflow-hidden bg-[#241c14] border border-[#ae9231]/10 hover:border-[#ae9231]/40 transition-all duration-500">
        {/* Image */}
        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
          <Image
            src={pkg.cardImage}
            alt={pkg.shortTitle}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241c14] via-transparent to-transparent" />

          {/* Duration badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#ae9231] px-3 py-1.5">
            <Calendar size={12} className="text-[#1a1410]" />
            <span className="text-[#1a1410] text-xs tracking-wider font-body font-semibold">
              {pkg.days} {t("days")} / {pkg.nights} {t("nights")}
            </span>
          </div>

          {pkg.featured && (
            <div className="absolute top-4 right-4 bg-[#2e2419]/80 backdrop-blur-sm px-3 py-1.5">
              <span className="text-[#ae9231] text-xs tracking-widest uppercase font-body">Featured</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-7">
          {/* Destinations */}
          <div className="flex flex-wrap gap-2 mb-4">
            {pkg.destinations.slice(0, 3).map((dest, i) => (
              <span
                key={i}
                className="flex items-center gap-1 text-[10px] tracking-wider uppercase text-[#ae9231]/80 font-body"
              >
                <MapPin size={9} />
                {dest}
              </span>
            ))}
            {pkg.destinations.length > 3 && (
              <span className="text-[10px] text-[#f5f0e8]/30 font-body">+{pkg.destinations.length - 3} more</span>
            )}
          </div>

          <h3 className="font-display text-2xl font-light text-[#f5f0e8] leading-tight mb-3 group-hover:text-[#ae9231] transition-colors duration-300">
            {pkg.shortTitle}
          </h3>

          <p className="text-[#f5f0e8]/50 font-body text-sm leading-relaxed mb-6 line-clamp-3">
            {pkg.highlight}
          </p>

          {/* Actions */}
          <div className="flex gap-3">
            <Link
              href={`/${locale}/packages/${pkg.slug}`}
              className="group/btn flex-1 flex items-center justify-center gap-2 py-3 border border-[#ae9231]/40 text-[#ae9231] text-xs tracking-widest uppercase font-body hover:bg-[#ae9231] hover:text-[#1a1410] transition-all duration-300"
            >
              {t("viewDetails")}
              <ArrowRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
            <button
              onClick={() => openModal(pkg.shortTitle, "safari")}
              className="flex-1 flex items-center justify-center py-3 bg-[#ae9231] text-[#1a1410] text-xs tracking-widest uppercase font-body font-semibold hover:bg-[#c9a94e] transition-colors duration-300"
            >
              {t("bookNow")}
            </button>
          </div>
        </div>

        {/* Left accent line */}
        <div className="absolute left-0 top-0 w-px h-0 bg-[#ae9231] group-hover:h-full transition-all duration-500" />
      </div>
    </motion.div>
  );
}

export default function PackagesPage() {
  const t = useTranslations("packages");
  const locale = useLocale();

  return (
    <div className="bg-[#2e2419]">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/safari packages images/serengeti.jpg"
            alt="Safari Packages"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2e2419]/30 to-[#2e2419]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2e2419]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#ae9231]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">{t("badge")}</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-[#f5f0e8] leading-tight">
              {t("title").split("\n").map((line, i) => (
                <span key={i} className={`block ${i === 1 ? "italic text-[#ae9231]" : ""}`}>
                  {line}
                </span>
              ))}
            </h1>
            <p className="text-[#f5f0e8]/60 font-body mt-4 max-w-xl">{t("subtitle")}</p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/safari packages images/serengeti.jpg"
            alt="Plan your safari"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1a1410]/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#ae9231]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">Bespoke Safaris</span>
              <span className="w-8 h-px bg-[#ae9231]" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light text-[#f5f0e8] leading-tight mb-6">
              Don&apos;t see what<br />
              <span className="italic text-[#ae9231]">you&apos;re looking for?</span>
            </h2>
            <p className="text-[#f5f0e8]/70 font-body text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Every Emmy Safari is fully customisable. Tell us your dream itinerary, your dates, your group size — and we&apos;ll craft the perfect Tanzania experience, just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="group relative overflow-hidden px-10 py-4 bg-[#ae9231] text-[#1a1410] text-sm tracking-widest uppercase font-semibold font-body hover:shadow-[0_0_40px_rgba(174,146,49,0.4)] transition-all duration-300"
              >
                <span className="relative z-10">Plan Your Safari</span>
                <span className="absolute inset-0 bg-[#c9a94e] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="tel:+255769683062"
                className="px-10 py-4 border border-[#f5f0e8]/30 text-[#f5f0e8] text-sm tracking-widest uppercase font-body hover:border-[#ae9231] hover:text-[#ae9231] transition-all duration-300"
              >
                Call Us Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
