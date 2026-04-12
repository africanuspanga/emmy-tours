"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const t = useTranslations("home.cta");
  const locale = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.0]);

  return (
    <section
      ref={(el) => {
        // @ts-expect-error - dual ref
        containerRef.current = el;
        ref(el);
      }}
      className="relative min-h-[500px] md:h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with parallax */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src="/safari packages images/serengeti.jpg"
          alt="Tanzania Safari"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#2e2419]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2e2419]/80 via-transparent to-[#2e2419]/80" />
      </motion.div>

      {/* Content */}
      <div ref={ref} className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#ae9231]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">
              Emmy Safaris & Tours
            </span>
            <span className="w-8 h-px bg-[#ae9231]" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-light text-[#f5f0e8] leading-tight mb-6">
            {t("title").split("\n").map((line, i) => (
              <span key={i} className={`block ${i === 1 ? "italic text-[#ae9231]" : ""}`}>
                {line}
              </span>
            ))}
          </h2>

          <p className="text-[#f5f0e8]/70 font-body text-base leading-relaxed mb-10 max-w-lg mx-auto">
            {t("body")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/contact`}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ae9231] text-[#1a1410] text-sm tracking-widest uppercase font-body font-semibold hover:bg-[#c9a94e] transition-colors duration-300"
            >
              {t("cta")}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href={`/${locale}/packages`}
              className="inline-flex items-center justify-center px-8 py-4 border border-[#f5f0e8]/30 text-[#f5f0e8] text-sm tracking-widest uppercase font-body hover:border-[#ae9231] hover:text-[#ae9231] transition-all duration-300"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
