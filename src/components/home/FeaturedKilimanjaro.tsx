"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { kilimanjaroRoutes } from "@/data/kilimanjaroRoutes";
import { Mountain, TrendingUp, ArrowRight } from "lucide-react";

// Pick Lemosho, Machame, Marangu as the three showcase routes
const featured = kilimanjaroRoutes.filter((r) =>
  ["lemosho", "machame", "marangu"].includes(r.id)
);

export default function FeaturedKilimanjaro() {
  const locale = useLocale();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-24 lg:py-32 bg-[#f5f0e8] overflow-hidden">
      {/* Subtle mountain atmosphere */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 100%, #ae9231 0%, transparent 60%)`,
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
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
                Kilimanjaro Climbs
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#2e2419] leading-tight">
              Reach the{" "}
              <span className="italic text-[#ae9231]">roof of Africa</span>
            </h2>
          </div>
          <Link
            href={`/${locale}/kilimanjaro`}
            className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase text-[#ae9231] font-body font-semibold whitespace-nowrap self-end"
          >
            All Routes
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </motion.div>

        {/* Route Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((route, i) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative"
            >
              <div className="relative overflow-hidden bg-white border border-[#ae9231]/15 hover:border-[#ae9231]/50 shadow-sm hover:shadow-md transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden shrink-0">
                  <Image
                    src={route.cardImage}
                    alt={route.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Featured badge */}
                  {route.featured && (
                    <div className="absolute top-4 right-4 bg-[#ae9231] px-3 py-1.5">
                      <span className="text-[#1a1410] text-xs tracking-widest uppercase font-body font-semibold">Popular</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center gap-5 mb-3">
                    <span className="flex items-center gap-1.5 text-xs text-[#5a4c43]/60 font-body">
                      <TrendingUp size={10} className="text-[#ae9231]" />
                      {route.successRate}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-[#5a4c43]/60 font-body">
                      <Mountain size={10} className="text-[#ae9231]" />
                      {route.days}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-light text-[#2e2419] leading-tight mb-3 group-hover:text-[#ae9231] transition-colors duration-300 flex-1">
                    {route.name}
                  </h3>

                  <p className="text-[#5a4c43]/65 font-body text-sm leading-relaxed mb-5 line-clamp-2">
                    {route.highlight}
                  </p>

                  {/* Difficulty indicator */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-[10px] tracking-wider uppercase text-[#5a4c43]/40 font-body">Difficulty:</span>
                    <span className={`text-xs font-body font-medium ${
                      route.difficulty === "Moderate" ? "text-green-600" :
                      route.difficulty === "Demanding" ? "text-amber-600" : "text-red-600"
                    }`}>
                      {route.difficulty}
                    </span>
                  </div>

                  <Link
                    href={`/${locale}/kilimanjaro/${route.slug}`}
                    className="group/btn flex items-center justify-center gap-2 py-3 border border-[#ae9231]/40 text-[#ae9231] text-xs tracking-widest uppercase font-body hover:bg-[#ae9231] hover:text-[#1a1410] transition-all duration-300"
                  >
                    View Route
                    <ArrowRight size={11} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>

                {/* Left accent */}
                <div className="absolute left-0 top-0 w-px h-0 bg-[#ae9231] group-hover:h-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summit stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#ae9231]/15"
        >
          {[
            { value: "5,895m", label: "Summit — Uhuru Peak" },
            { value: "94%", label: "Emmy Success Rate" },
            { value: "100+", label: "Summits Per Year" },
          ].map((stat, i) => (
            <div key={i} className="bg-[#f5f0e8] px-6 py-6 text-center">
              <div className="font-display text-3xl font-light text-[#ae9231]">{stat.value}</div>
              <div className="text-xs tracking-wider uppercase text-[#5a4c43]/50 font-body mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href={`/${locale}/kilimanjaro`}
            className="group inline-flex items-center gap-3 px-8 py-4 border border-[#ae9231]/40 text-[#ae9231] text-xs tracking-widest uppercase font-body hover:bg-[#ae9231] hover:text-[#1a1410] transition-all duration-300"
          >
            All Routes
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
