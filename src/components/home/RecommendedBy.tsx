"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const logos = [
  { src: "/recommeded by section logos copy/TANAPA.jpg", alt: "TANAPA" },
  { src: "/recommeded by section logos copy/TTB.png", alt: "Tanzania Tourism Board" },
  { src: "/recommeded by section logos copy/TripAdvisor_Logo.svg.png", alt: "TripAdvisor" },
  { src: "/recommeded by section logos copy/google-reviews-logo.png", alt: "Google Reviews" },
  { src: "/recommeded by section logos copy/trust-pilot-stacked-black.svg", alt: "Trustpilot" },
  { src: "/recommeded by section logos copy/Safari-Booking-Logo.png", alt: "SafariBooking" },
  { src: "/recommeded by section logos copy/GetYourGuide_2018.webp", alt: "GetYourGuide" },
];

export default function RecommendedBy() {
  const t = useTranslations("home.recommended");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-20 bg-[#f5f0e8] border-y border-[#ae9231]/20 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#ae9231]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">
              {t("badge")}
            </span>
            <span className="w-8 h-px bg-[#ae9231]" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-light text-[#2e2419]">
            {t("title").split("\n").map((line, i) => (
              <span key={i} className={`block ${i === 1 ? "italic text-[#ae9231]" : ""}`}>
                {line}
              </span>
            ))}
          </h2>
        </motion.div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="relative h-8 w-20 sm:h-10 sm:w-28 opacity-75 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
