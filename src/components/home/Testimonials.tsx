"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marco Pellegrini",
    country: "Italy",
    avatar: "/reveiews people profile photos/avatar-1.jpg",
    rating: 5,
    text: "Emmy Safaris exceeded every expectation. Our guide Emmanuel knew every animal, every behaviour, every story. Standing at the crater rim of Ngorongoro at dawn — I will never forget it. Absolute perfection.",
    tour: "8-Day Northern Circuit",
  },
  {
    id: 2,
    name: "Sophie Müller",
    country: "Germany",
    avatar: "/reveiews people profile photos/avatar-2.jpg",
    rating: 5,
    text: "From the moment we arrived in Arusha to the last sunset in the Serengeti, Emmy Safaris made every detail flawless. We witnessed the river crossing — something we will tell our grandchildren about. Simply extraordinary.",
    tour: "10-Day Best of Tanzania",
  },
  {
    id: 3,
    name: "James & Claire Thornton",
    country: "United Kingdom",
    avatar: "/reveiews people profile photos/avatar-3.jpg",
    rating: 5,
    text: "We climbed Kilimanjaro via the Lemosho Route and reached Uhuru Peak in perfect conditions. The Emmy crew — guides, cooks, porters — were incredible human beings. We feel humbled and deeply grateful.",
    tour: "Lemosho Route, Kilimanjaro",
  },
  {
    id: 4,
    name: "Isabelle Fontaine",
    country: "France",
    avatar: "/reveiews people profile photos/avatar-4.jpg",
    rating: 5,
    text: "A truly bespoke experience. Emmy Safaris listened to exactly what we wanted and delivered far beyond our dreams. The camps were beautiful, the food was extraordinary, and the wildlife encounters were spiritual.",
    tour: "5-Day Tarangire & Serengeti",
  },
];

export default function Testimonials() {
  const t = useTranslations("home.testimonials");
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 lg:py-32 bg-[#2e2419] overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#ae9231]/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#ae9231]/8" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#ae9231]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">
              {t("badge")}
            </span>
            <span className="w-8 h-px bg-[#ae9231]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#f5f0e8] leading-tight">
            {t("title").split("\n").map((line, i) => (
              <span key={i} className={`block ${i === 1 ? "italic text-[#ae9231]" : ""}`}>
                {line}
              </span>
            ))}
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative glass rounded-none p-6 sm:p-8 md:p-10 lg:p-14"
            >
              {/* Quote mark */}
              <Quote
                size={60}
                className="absolute top-8 right-10 text-[#ae9231]/10"
                aria-hidden
              />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <Star key={i} size={14} fill="#ae9231" className="text-[#ae9231]" />
                ))}
              </div>

              {/* Text */}
              <p className="font-display text-xl md:text-2xl font-light text-[#f5f0e8] leading-relaxed italic mb-8">
                &ldquo;{testimonials[active].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#ae9231]/30">
                  <Image
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-body font-semibold text-[#f5f0e8] text-sm">
                    {testimonials[active].name}
                  </div>
                  <div className="text-xs text-[#ae9231] font-body">
                    {testimonials[active].country} · {testimonials[active].tour}
                  </div>
                </div>

                {/* TripAdvisor badge */}
                <div className="ml-auto hidden sm:block">
                  <div className="relative h-8 w-24 opacity-50">
                    <Image
                      src="/reveiews people profile photos/tripadvisor-badge.png"
                      alt="TripAdvisor"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-px transition-all duration-300 ${
                    i === active ? "w-8 bg-[#ae9231]" : "w-4 bg-[#ae9231]/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 border border-[#ae9231]/30 flex items-center justify-center text-[#f5f0e8]/60 hover:text-[#ae9231] hover:border-[#ae9231] transition-colors duration-300"
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-[#ae9231]/30 flex items-center justify-center text-[#f5f0e8]/60 hover:text-[#ae9231] hover:border-[#ae9231] transition-colors duration-300"
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
