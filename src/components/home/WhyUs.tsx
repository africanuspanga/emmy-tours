"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Users, Compass, Shield, Leaf } from "lucide-react";

const icons = [Users, Compass, Shield, Leaf];

export default function WhyUs() {
  const t = useTranslations("home.whyUs");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const cardData = [
    { title: t("card1Title"), body: t("card1Body") },
    { title: t("card2Title"), body: t("card2Body") },
    { title: t("card3Title"), body: t("card3Body") },
    { title: t("card4Title"), body: t("card4Body") },
  ];

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#241c14]">
      {/* Large background image with very low opacity */}
      <div className="absolute inset-0">
        <Image
          src="/Why choose us section.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#241c14] via-transparent to-[#241c14]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-8 h-px bg-[#ae9231]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">
              {t("badge")}
            </span>
            <span className="w-8 h-px bg-[#ae9231]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#f5f0e8] leading-tight"
          >
            {t("title").split("\n").map((line, i) => (
              <span key={i} className={`block ${i === 1 ? "italic text-[#ae9231]" : ""}`}>
                {line}
              </span>
            ))}
          </motion.h2>
        </div>

        {/* Cards — non-boring asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cardData.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.7 }}
                className={`group relative overflow-hidden ${
                  i === 0 ? "md:mt-0" :
                  i === 1 ? "md:mt-8" :
                  i === 2 ? "md:mt-0" :
                  "md:mt-8"
                }`}
              >
                {/* Card inner */}
                <div className="relative border border-[#ae9231]/15 bg-[#2e2419]/60 backdrop-blur-sm p-8 h-full transition-all duration-500 group-hover:border-[#ae9231]/40 group-hover:bg-[#2e2419]/80">
                  {/* Number accent */}
                  <span className="absolute top-6 right-8 font-display text-7xl font-light text-[#ae9231]/5 select-none leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="relative w-12 h-12 mb-6">
                    <div className="absolute inset-0 bg-[#ae9231]/10 rotate-45 transition-transform duration-500 group-hover:rotate-[135deg]" />
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <Icon size={20} className="text-[#ae9231]" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl font-light text-[#f5f0e8] mb-3 group-hover:text-[#ae9231] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-[#f5f0e8]/50 font-body text-sm leading-relaxed">
                    {card.body}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[#ae9231] transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
