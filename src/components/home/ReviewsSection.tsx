"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, PenLine, Star } from "lucide-react";

const platforms = [
  {
    name: "Google",
    logo: "/recommeded by section logos copy/google-reviews-logo.png",
    logoHeight: 52,
    logoWidth: 160,
    rating: 4.9,
    maxRating: 5,
    reviewCount: 5,
    reviewLabel: "5 reviews",
    viewUrl: null,
    writeUrl: null,
    accent: "#4285F4",
    buttonBg: "bg-[#4285F4] hover:bg-[#3367D6]",
    buttonBorder: "border-[#4285F4] text-[#4285F4] hover:bg-[#4285F4]/5",
    cardBg: "bg-[#EBF1FB]",
  },
  {
    name: "Tripadvisor",
    logo: "/recommeded by section logos copy/TripAdvisor_Logo.svg.png",
    logoHeight: 48,
    logoWidth: 180,
    rating: 5,
    maxRating: 5,
    reviewCount: 5,
    reviewLabel: "5 reviews",
    viewUrl: "https://www.tripadvisor.com/Attraction_Review-g1602943-d17733129-Reviews-Emmy_Safaris_Tours-Iringa_Iringa_Region.html",
    writeUrl: "https://www.tripadvisor.com/Attraction_Review-g1602943-d17733129-Reviews-Emmy_Safaris_Tours-Iringa_Iringa_Region.html#REVIEWS",
    accent: "#00AA6C",
    buttonBg: "bg-[#00AA6C] hover:bg-[#007A4E]",
    buttonBorder: "border-[#00AA6C] text-[#00AA6C] hover:bg-[#00AA6C]/5",
    cardBg: "bg-[#E8F7F0]",
  },
  {
    name: "SafariBookings",
    logo: "/recommeded by section logos copy/Safari-Booking-Logo.png",
    logoHeight: 52,
    logoWidth: 160,
    rating: 5,
    maxRating: 5,
    reviewCount: 26,
    reviewLabel: "26 reviews",
    viewUrl: "https://www.safaribookings.com/reviews/p6070",
    writeUrl: "https://www.safaribookings.com/reviews/p6070",
    accent: "#C0392B",
    buttonBg: "bg-[#C0392B] hover:bg-[#A93226]",
    buttonBorder: "border-[#C0392B] text-[#C0392B] hover:bg-[#C0392B]/5",
    cardBg: "bg-[#F0F0F0]",
  },
];

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(rating);
        const partial = !filled && i < rating;
        return (
          <span key={i} className="relative inline-block">
            {/* Empty star */}
            <Star size={22} className="text-gray-300" fill="currentColor" />
            {/* Filled overlay */}
            {(filled || partial) && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: filled ? "100%" : `${(rating % 1) * 100}%` }}
              >
                <Star size={22} className="text-[#F5A623]" fill="currentColor" />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default function ReviewsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-[#f5f0e8] mb-6">
            <span className="text-xs tracking-[0.25em] uppercase text-[#ae9231] font-body font-semibold">
              Reviews &amp; Testimonials
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#1a1410] leading-tight mb-4">
            Share Your Experience{" "}
            <span className="italic text-[#ae9231]">With Us</span>
          </h2>
          <p className="text-[#5a4c43]/70 font-body text-base max-w-md mx-auto leading-relaxed">
            Your feedback helps us improve and helps others discover the magic of Tanzania
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`${platform.cardBg} rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col items-center text-center`}
            >
              {/* Logo */}
              <div className="relative mb-6" style={{ height: platform.logoHeight, width: platform.logoWidth }}>
                <Image
                  src={platform.logo}
                  alt={platform.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Stars */}
              <div className="mb-3">
                <StarRating rating={platform.rating} />
              </div>

              {/* Score */}
              <div className="font-display text-4xl font-light text-[#1a1410] mb-1">
                {platform.rating}/5
              </div>
              <div className="text-sm text-[#5a4c43]/60 font-body mb-7">
                {platform.reviewLabel}
              </div>

              {/* Buttons */}
              <div className="w-full flex flex-col gap-3">
                {platform.viewUrl ? (
                  <a
                    href={platform.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white text-sm font-body font-semibold transition-all duration-300 ${platform.buttonBg}`}
                  >
                    <ExternalLink size={15} />
                    View Reviews
                  </a>
                ) : (
                  <span
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white text-sm font-body font-semibold ${platform.buttonBg} opacity-80 cursor-default`}
                  >
                    <ExternalLink size={15} />
                    View Reviews
                  </span>
                )}

                {platform.writeUrl ? (
                  <a
                    href={platform.writeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-transparent border text-sm font-body font-semibold transition-all duration-300 ${platform.buttonBorder}`}
                  >
                    <PenLine size={14} />
                    Write Review
                  </a>
                ) : (
                  <span
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-transparent border text-sm font-body font-semibold ${platform.buttonBorder} opacity-60 cursor-default`}
                  >
                    <PenLine size={14} />
                    Write Review
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
