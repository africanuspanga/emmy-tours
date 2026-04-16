"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { kilimanjaroRoutes } from "@/data/kilimanjaroRoutes";
import { ArrowLeft, Mountain, Clock, TrendingUp, Tent, ArrowRight } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

function ClimbDayCard({
  day,
  index,
}: {
  day: (typeof kilimanjaroRoutes)[0]["itinerary"][0];
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.6 }}
      className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-[#ae9231]/15 overflow-hidden group hover:border-[#ae9231]/40 transition-colors duration-300"
    >
      {/* Image */}
      {day.image && (
        <div className="lg:col-span-2 relative h-52 lg:h-auto overflow-hidden">
          <Image
            src={day.image}
            alt={day.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2e2419]/20" />
        </div>
      )}

      {/* Content */}
      <div className={`${day.image ? "lg:col-span-3" : "lg:col-span-5"} p-7`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs tracking-widest uppercase text-[#ae9231] font-body font-semibold">
            Day {day.day}
          </span>
          <span className="w-6 h-px bg-[#ae9231]/40" />
          {day.zone && (
            <span className="text-xs tracking-wider text-[#f5f0e8]/30 font-body">{day.zone}</span>
          )}
        </div>

        <h3 className="font-display text-xl font-light text-[#f5f0e8] mb-2">{day.title}</h3>

        {/* Meta chips */}
        <div className="flex flex-wrap gap-3 mb-4">
          {day.altitude && (
            <span className="flex items-center gap-1 text-xs text-[#ae9231] font-body">
              <Mountain size={10} />
              {day.altitude}
            </span>
          )}
          {day.trekTime && (
            <span className="flex items-center gap-1 text-xs text-[#f5f0e8]/40 font-body">
              <Clock size={10} />
              {day.trekTime}
            </span>
          )}
        </div>

        <p className="text-[#f5f0e8]/55 font-body text-sm leading-relaxed">{day.description}</p>
      </div>
    </motion.div>
  );
}

export default function KilimanjaroDetailClient({
  slug,
}: {
  slug: string;
}) {
  
  const t = useTranslations("kilimanjaro");
  const locale = useLocale();
  const { openModal } = useBooking();

  const route = kilimanjaroRoutes.find((r) => r.slug === slug);
  if (!route) notFound();

  return (
    <div className="bg-[#2e2419]">
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[560px] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={route.heroImage}
            alt={route.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2e2419]/20 to-[#2e2419]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2e2419]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Link
            href={`/${locale}/kilimanjaro`}
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#f5f0e8]/50 hover:text-[#ae9231] transition-colors duration-300 font-body mb-6"
          >
            <ArrowLeft size={12} />
            {t("backToRoutes")}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#ae9231]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">Kilimanjaro Route</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light text-[#f5f0e8] leading-tight max-w-3xl mb-6">
              {route.name}
            </h1>

            {/* Route stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { icon: Clock, label: t("duration"), value: route.duration },
                { icon: Mountain, label: t("difficulty"), value: route.difficulty },
                { icon: Tent, label: t("type"), value: route.type },
                { icon: TrendingUp, label: t("successRate"), value: route.successRate },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <stat.icon size={16} className="text-[#ae9231]" />
                  <div>
                    <div className="text-[10px] tracking-wider uppercase text-[#f5f0e8]/30 font-body">{stat.label}</div>
                    <div className="font-body text-[#f5f0e8] font-medium text-sm">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description + Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-[#f5f0e8]/70 font-body text-lg leading-relaxed">
                {route.description}
              </p>
            </div>

            {/* Book sidebar */}
            <div>
              <div className="border border-[#ae9231]/20 p-8 sticky top-24">
                {route.mapImage && (
                  <div className="relative h-48 mb-6 overflow-hidden">
                    <Image
                      src={route.mapImage}
                      alt={`${route.name} map`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <h3 className="font-display text-xl font-light text-[#f5f0e8] mb-4">Book This Route</h3>
                <button
                  onClick={() => openModal(route.name, "kilimanjaro")}
                  className="group flex items-center justify-center gap-2 w-full py-4 bg-[#ae9231] text-[#1a1410] text-xs tracking-widest uppercase font-body font-semibold hover:bg-[#c9a94e] transition-colors duration-300 mb-3"
                >
                  {t("bookClimb")}
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1 duration-300" />
                </button>
                <a
                  href="https://wa.me/255784305008"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-4 border border-[#ae9231]/40 text-[#ae9231] text-xs tracking-widest uppercase font-body hover:bg-[#ae9231] hover:text-[#1a1410] transition-all duration-300"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-16 bg-[#241c14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#ae9231]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">Route Itinerary</span>
              <span className="w-8 h-px bg-[#ae9231]" />
            </div>
            <h2 className="font-display text-4xl font-light text-[#f5f0e8]">Day-by-Day Ascent</h2>
          </div>

          <div className="space-y-4">
            {route.itinerary.map((day, i) => (
              <ClimbDayCard key={day.day} day={day} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light text-[#f5f0e8] mb-4">
            Ready for the summit?
          </h2>
          <p className="text-[#f5f0e8]/50 font-body mb-8 leading-relaxed">
            Our expert guides will get you to Uhuru Peak safely. Contact us to book or ask any questions.
          </p>
          <button
            onClick={() => openModal(route.name, "kilimanjaro")}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#ae9231] text-[#1a1410] text-sm tracking-widest uppercase font-body font-semibold hover:bg-[#c9a94e] transition-colors duration-300"
          >
            Book This Climb
            <ArrowRight size={14} />
          </button>
        </div>
      </section>
    </div>
  );
}
