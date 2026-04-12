"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const CountUp = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-display font-light text-[#ae9231]"
    >
      {value}{suffix}
    </motion.div>
  );
};

export default function AboutSection() {
  const t = useTranslations("home.about");
  const locale = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const stats = [
    { value: t("stat1"), label: t("stat1Label") },
    { value: t("stat2"), label: t("stat2Label") },
    { value: t("stat3"), label: t("stat3Label") },
  ];

  return (
    <section
      ref={(el) => {
        // @ts-expect-error - dual ref
        containerRef.current = el;
        sectionRef(el);
      }}
      className="relative py-24 lg:py-32 bg-[#2e2419] overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, #ae9231 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative h-[320px] md:h-[420px] lg:h-[600px] overflow-hidden">
              <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
                <Image
                  src="/About us section image .jpg"
                  alt="Emmy Safaris Tanzania"
                  fill
                  className="object-cover"
                />
              </motion.div>
              {/* Gold frame accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#ae9231]/40" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#ae9231]/40" />
            </div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-8 -right-2 lg:right-auto lg:-left-8 glass p-4 sm:p-6 w-64 sm:w-72"
            >
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-display font-light text-white">
                      {stat.value}
                    </div>
                    <div className="text-[10px] tracking-wider uppercase text-white/70 font-body mt-1 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="pt-8 lg:pt-0"
          >
            {/* Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#ae9231]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">
                {t("badge")}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-5xl md:text-6xl font-light text-[#f5f0e8] leading-tight mb-6">
              {t("title").split("\n").map((line, i) => (
                <span key={i} className={`block ${i === 1 ? "italic text-[#ae9231]" : ""}`}>
                  {line}
                </span>
              ))}
            </h2>

            {/* Divider */}
            <div className="divider-gold mb-6" />

            {/* Body */}
            <p className="text-[#f5f0e8]/60 font-body text-base leading-relaxed mb-10">
              {t("body")}
            </p>

            <Link
              href={`/${locale}/about`}
              className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase text-[#ae9231] font-body font-semibold"
            >
              {t("cta")}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
