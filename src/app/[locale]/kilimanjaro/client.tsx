"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { kilimanjaroRoutes } from "@/data/kilimanjaroRoutes";
import { Mountain, Clock, ArrowRight, TrendingUp } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

const difficultyColor: Record<string, string> = {
  Moderate: "text-green-400",
  Demanding: "text-yellow-400",
  Challenging: "text-red-400",
};

function RouteCard({ route, index }: { route: (typeof kilimanjaroRoutes)[0]; index: number }) {
  const t = useTranslations("kilimanjaro");
  const locale = useLocale();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { openModal } = useBooking();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
    >
      <div className="relative overflow-hidden bg-[#241c14] border border-[#ae9231]/10 hover:border-[#ae9231]/40 transition-all duration-500">
        {/* Image */}
        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
          <Image
            src={route.cardImage}
            alt={route.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241c14] via-transparent to-transparent" />

          {/* Difficulty badge */}
          <div className="absolute top-4 left-4 bg-[#2e2419]/80 backdrop-blur-sm px-3 py-1.5">
            <span className={`text-xs tracking-wider font-body font-semibold ${difficultyColor[route.difficulty] || "text-[#ae9231]"}`}>
              {route.difficulty}
            </span>
          </div>

          {route.featured && (
            <div className="absolute top-4 right-4 bg-[#ae9231] px-3 py-1.5">
              <span className="text-[#1a1410] text-xs tracking-widest uppercase font-body font-semibold">Popular</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-7">
          {/* Meta */}
          <div className="flex items-center gap-5 mb-4">
            <span className="flex items-center gap-1.5 text-xs text-[#f5f0e8]/40 font-body">
              <Clock size={11} className="text-[#ae9231]" />
              {route.days}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#f5f0e8]/40 font-body">
              <TrendingUp size={11} className="text-[#ae9231]" />
              {route.successRate}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#f5f0e8]/40 font-body">
              <Mountain size={11} className="text-[#ae9231]" />
              {route.type}
            </span>
          </div>

          <h3 className="font-display text-2xl font-light text-[#f5f0e8] leading-tight mb-3 group-hover:text-[#ae9231] transition-colors duration-300">
            {route.name}
          </h3>

          <p className="text-[#f5f0e8]/50 font-body text-sm leading-relaxed mb-6 line-clamp-3">
            {route.highlight}
          </p>

          {/* Actions */}
          <div className="flex gap-3">
            <Link
              href={`/${locale}/kilimanjaro/${route.slug}`}
              className="group/btn flex-1 flex items-center justify-center gap-2 py-3 border border-[#ae9231]/40 text-[#ae9231] text-xs tracking-widest uppercase font-body hover:bg-[#ae9231] hover:text-[#1a1410] transition-all duration-300"
            >
              {t("viewRoute")}
              <ArrowRight size={12} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
            <button
              onClick={() => openModal(route.name, "kilimanjaro")}
              className="flex-1 flex items-center justify-center py-3 bg-[#ae9231] text-[#1a1410] text-xs tracking-widest uppercase font-body font-semibold hover:bg-[#c9a94e] transition-colors duration-300"
            >
              {t("bookClimb")}
            </button>
          </div>
        </div>

        {/* Left accent */}
        <div className="absolute left-0 top-0 w-px h-0 bg-[#ae9231] group-hover:h-full transition-all duration-500" />
      </div>
    </motion.div>
  );
}

export default function KilimanjaroPage() {
  const t = useTranslations("kilimanjaro");
  const locale = useLocale();

  return (
    <div className="bg-[#2e2419]">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Kilimanjaro images/kilimanjaro-uhuru-peak.jpg"
            alt="Mount Kilimanjaro"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2e2419]/20 to-[#2e2419]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2e2419]/70 to-transparent" />
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

            {/* Summit stats */}
            <div className="flex flex-wrap gap-4 sm:gap-8 mt-8">
              {[
                { value: "5,895m", label: "Summit Elevation" },
                { value: "Africa #1", label: "Highest Peak" },
                { value: "6 Routes", label: "Available" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-display text-2xl font-light text-[#ae9231]">{s.value}</div>
                  <div className="text-xs tracking-wider uppercase text-[#f5f0e8]/40 font-body">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Routes Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kilimanjaroRoutes.map((route, i) => (
              <RouteCard key={route.id} route={route} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Climb with Emmy */}
      <section className="py-16 bg-[#241c14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#ae9231]" />
                <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">Why Emmy</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[#f5f0e8] leading-tight mb-6">
                Guided by those who <span className="italic text-[#ae9231]">live the mountain</span>
              </h2>
              <p className="text-[#f5f0e8]/60 font-body leading-relaxed mb-6">
                Our Kilimanjaro guides are KINAPA-certified, with hundreds of successful summits between them. We maintain the highest safety standards, excellent crew-to-climber ratios, and all equipment is inspected before every climb.
              </p>
              <ul className="space-y-3">
                {[
                  "KINAPA & TANAPA certified guides",
                  "Portable altitude chambers on every climb",
                  "Full medical checks and acclimatisation monitoring",
                  "Private and group departures available",
                  "All dietary requirements catered for",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ae9231] mt-2 shrink-0" />
                    <span className="text-[#f5f0e8]/60 font-body text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[280px] md:h-[360px] lg:h-[400px] overflow-hidden">
              <Image
                src="/Kilimanjaro images/kilimanjaro-porters-sunrise.jpg"
                alt="Kilimanjaro guides"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border border-[#ae9231]/40" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Kilimanjaro images/kilimanjaro-uhuru-peak.jpg"
            alt="Summit Kilimanjaro"
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
              <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">Your Summit Awaits</span>
              <span className="w-8 h-px bg-[#ae9231]" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light text-[#f5f0e8] leading-tight mb-6">
              Ready to stand on<br />
              <span className="italic text-[#ae9231]">the roof of Africa?</span>
            </h2>
            <p className="text-[#f5f0e8]/70 font-body text-base leading-relaxed mb-10 max-w-xl mx-auto">
              Our expert guides have led thousands of climbers to Uhuru Peak. Let us plan your Kilimanjaro adventure — from route selection to porters, permits, and everything in between.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/contact`}
                className="group relative overflow-hidden px-10 py-4 bg-[#ae9231] text-[#1a1410] text-sm tracking-widest uppercase font-semibold font-body hover:shadow-[0_0_40px_rgba(174,146,49,0.4)] transition-all duration-300"
              >
                <span className="relative z-10">Plan My Climb</span>
                <span className="absolute inset-0 bg-[#c9a94e] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="tel:+255769683062"
                className="px-10 py-4 border border-[#f5f0e8]/30 text-[#f5f0e8] text-sm tracking-widest uppercase font-body hover:border-[#ae9231] hover:text-[#ae9231] transition-all duration-300"
              >
                Speak to a Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
