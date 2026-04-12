"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { safariPackages } from "@/data/safariPackages";
import { CheckCircle, XCircle, ArrowLeft, MapPin, Calendar, ArrowRight } from "lucide-react";
import { use } from "react";
import { useBooking } from "@/context/BookingContext";

function ItineraryDay({
  day,
  index,
}: {
  day: (typeof safariPackages)[0]["itinerary"][0];
  index: number;
}) {
  const t = useTranslations("packages");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
    >
      {/* Image - alternates sides */}
      {index % 2 === 0 ? (
        <>
          <div className="relative h-72 overflow-hidden">
            {day.image && (
              <Image
                src={day.image}
                alt={day.title}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#2e2419]/30" />
          </div>
          <div className="lg:pl-8">
            <DayContent day={day} t={t} />
          </div>
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1 lg:pr-8">
            <DayContent day={day} t={t} />
          </div>
          <div className="order-1 lg:order-2 relative h-72 overflow-hidden">
            {day.image && (
              <Image
                src={day.image}
                alt={day.title}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#2e2419]/30" />
          </div>
        </>
      )}
    </motion.div>
  );
}

function DayContent({
  day,
  t,
}: {
  day: (typeof safariPackages)[0]["itinerary"][0];
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs tracking-widest uppercase text-[#ae9231] font-body font-semibold">
          {t("day")} {day.day}
        </span>
        <span className="w-8 h-px bg-[#ae9231]/40" />
      </div>
      <h3 className="font-display text-2xl font-light text-[#f5f0e8] mb-3">{day.title}</h3>
      <p className="text-[#f5f0e8]/60 font-body text-sm leading-relaxed mb-4">{day.description}</p>
      <div className="flex flex-wrap gap-4 text-xs font-body">
        {day.accommodation && (
          <span className="flex items-center gap-1.5 text-[#f5f0e8]/40">
            <MapPin size={10} className="text-[#ae9231]" />
            {day.accommodation}
          </span>
        )}
        {day.meals && (
          <span className="flex items-center gap-1.5 text-[#f5f0e8]/40">
            <Calendar size={10} className="text-[#ae9231]" />
            {day.meals}
          </span>
        )}
      </div>
    </div>
  );
}

export default function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = use(params);
  const t = useTranslations("packages");
  const locale = useLocale();
  const { openModal } = useBooking();

  const pkg = safariPackages.find((p) => p.slug === slug);
  if (!pkg) notFound();

  return (
    <div className="bg-[#2e2419]">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={pkg.heroImage}
            alt={pkg.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2e2419]/30 to-[#2e2419]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2e2419]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Link
            href={`/${locale}/packages`}
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#f5f0e8]/50 hover:text-[#ae9231] transition-colors duration-300 font-body mb-6"
          >
            <ArrowLeft size={12} />
            {t("backToPackages")}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Calendar size={14} className="text-[#ae9231]" />
              <span className="text-sm text-[#ae9231] font-body">
                {pkg.days} {t("days")} / {pkg.nights} {t("nights")}
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-light text-[#f5f0e8] leading-tight max-w-3xl">
              {pkg.shortTitle}
            </h1>
            <p className="text-[#f5f0e8]/60 font-body mt-4 max-w-xl text-base leading-relaxed">
              {pkg.highlight}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-[#f5f0e8]/70 font-body text-lg leading-relaxed">
                {pkg.description}
              </p>

              {/* Destinations */}
              <div className="flex flex-wrap gap-3 mt-8">
                {pkg.destinations.map((dest, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1.5 border border-[#ae9231]/30 text-xs tracking-wider uppercase text-[#ae9231] font-body"
                  >
                    <MapPin size={10} />
                    {dest}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Sidebar */}
            <div>
              <div className="border border-[#ae9231]/20 p-8 sticky top-24">
                <h3 className="font-display text-2xl font-light text-[#f5f0e8] mb-6">
                  {t("enquire")}
                </h3>
                <button
                  onClick={() => openModal(pkg.shortTitle, "safari")}
                  className="group flex items-center justify-center gap-2 w-full py-4 bg-[#ae9231] text-[#1a1410] text-xs tracking-widest uppercase font-body font-semibold hover:bg-[#c9a94e] transition-colors duration-300 mb-3"
                >
                  {t("bookNow")}
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
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#ae9231]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">
                {t("itinerary")}
              </span>
              <span className="w-8 h-px bg-[#ae9231]" />
            </div>
            <h2 className="font-display text-4xl font-light text-[#f5f0e8]">
              Day-by-Day Journey
            </h2>
          </div>

          <div className="space-y-20">
            {pkg.itinerary.map((day, i) => (
              <ItineraryDay key={day.day} day={day} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Includes / Excludes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Includes */}
            <div>
              <h3 className="font-display text-3xl font-light text-[#f5f0e8] mb-6 flex items-center gap-3">
                <CheckCircle size={20} className="text-[#ae9231]" />
                {t("includes")}
              </h3>
              <ul className="space-y-3">
                {pkg.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ae9231] mt-2 shrink-0" />
                    <span className="text-[#f5f0e8]/70 font-body text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Excludes */}
            <div>
              <h3 className="font-display text-3xl font-light text-[#f5f0e8] mb-6 flex items-center gap-3">
                <XCircle size={20} className="text-[#f5f0e8]/30" />
                {t("excludes")}
              </h3>
              <ul className="space-y-3">
                {pkg.excludes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f5f0e8]/20 mt-2 shrink-0" />
                    <span className="text-[#f5f0e8]/40 font-body text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#241c14] text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light text-[#f5f0e8] mb-4">
            Ready for this adventure?
          </h2>
          <p className="text-[#f5f0e8]/50 font-body mb-8 leading-relaxed">
            Contact our safari experts to tailor this itinerary to your exact needs and dates.
          </p>
          <button
            onClick={() => openModal(pkg.shortTitle, "safari")}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#ae9231] text-[#1a1410] text-sm tracking-widest uppercase font-body font-semibold hover:bg-[#c9a94e] transition-colors duration-300"
          >
            {t("enquire")}
            <ArrowRight size={14} />
          </button>
        </div>
      </section>
    </div>
  );
}
