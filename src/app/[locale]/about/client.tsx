"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-px bg-[#ae9231]" />
      <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">{children}</span>
    </div>
  );
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();

  const stats = [
    { value: t("stats.s1"), label: t("stats.s1Label") },
    { value: t("stats.s2"), label: t("stats.s2Label") },
    { value: t("stats.s3"), label: t("stats.s3Label") },
    { value: t("stats.s4"), label: t("stats.s4Label") },
  ];

  const values = [
    { title: t("values.v1Title"), body: t("values.v1Body") },
    { title: t("values.v2Title"), body: t("values.v2Body") },
    { title: t("values.v3Title"), body: t("values.v3Body") },
    { title: t("values.v4Title"), body: t("values.v4Body") },
    { title: t("values.v5Title"), body: t("values.v5Body") },
    { title: t("values.v6Title"), body: t("values.v6Body") },
  ];

  return (
    <div className="bg-[#2e2419]">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/About us page .jpg"
            alt="About Emmy Safaris"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2e2419]/40 via-[#2e2419]/20 to-[#2e2419]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2e2419]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <SectionBadge>{t("hero.badge")}</SectionBadge>
            <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-light text-[#f5f0e8] leading-tight">
              {t("hero.title").split("\n").map((line, i) => (
                <span key={i} className={`block ${i === 1 ? "italic text-[#ae9231]" : ""}`}>
                  {line}
                </span>
              ))}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionBadge>{t("story.badge")}</SectionBadge>
              <h2 className="font-display text-4xl sm:text-5xl font-light text-[#f5f0e8] leading-tight mb-6">
                {t("story.title").split("\n").map((line, i) => (
                  <span key={i} className={`block ${i === 1 ? "italic text-[#ae9231]" : ""}`}>
                    {line}
                  </span>
                ))}
              </h2>
              <div className="space-y-5 text-[#f5f0e8]/60 font-body text-base leading-relaxed">
                <p>{t("story.p1")}</p>
                <p>{t("story.p2")}</p>
                <p>{t("story.p3")}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="relative">
              <div className="relative h-[320px] md:h-[420px] lg:h-[500px] overflow-hidden">
                <Image
                  src="/About us section image .jpg"
                  alt="Emmy Safaris story"
                  fill
                  className="object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#ae9231]/40" />
                <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#ae9231]/40" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#241c14]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <SectionBadge>{t("mission.badge")}</SectionBadge>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: t("mission.missionTitle"), body: t("mission.missionBody") },
              { title: t("mission.visionTitle"), body: t("mission.visionBody") },
            ].map((item, i) => (
              <AnimatedSection key={i}>
                <div className="border border-[#ae9231]/20 p-10 h-full relative overflow-hidden group hover:border-[#ae9231]/40 transition-colors duration-300">
                  <div className="absolute top-0 left-0 w-1 h-0 bg-[#ae9231] group-hover:h-full transition-all duration-500" />
                  <h3 className="font-display text-3xl font-light text-[#ae9231] mb-4">{item.title}</h3>
                  <p className="text-[#f5f0e8]/60 font-body leading-relaxed">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/safari packages images/serengeti.jpg"
            alt=""
            fill
            className="object-cover opacity-20"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2e2419] via-[#2e2419]/80 to-[#2e2419]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  className="text-center"
                >
                  <div className="font-display text-5xl md:text-6xl font-light text-[#ae9231] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs tracking-widest uppercase text-[#f5f0e8]/50 font-body">
                    {stat.label}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#241c14]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <SectionBadge>{t("values.badge")}</SectionBadge>
            <h2 className="font-display text-5xl font-light text-[#f5f0e8] leading-tight">
              {t("values.title").split("\n").map((line, i) => (
                <span key={i} className={`block ${i === 1 ? "italic text-[#ae9231]" : ""}`}>
                  {line}
                </span>
              ))}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={i}>
                <div className="group border-b border-[#ae9231]/20 pb-8 hover:border-[#ae9231]/60 transition-colors duration-300">
                  <span className="font-display text-5xl font-light text-[#ae9231]/20 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-light text-[#f5f0e8] mt-2 mb-3 group-hover:text-[#ae9231] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-[#f5f0e8]/50 font-body text-sm leading-relaxed">
                    {value.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Kilimanjaro images/kilimanjaro-arms-open.jpg"
            alt=""
            fill
            className="object-cover opacity-30"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2e2419]/80 to-[#2e2419]/80" />
        </div>

        <AnimatedSection className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-6xl font-light text-[#f5f0e8] mb-6">
            {t("cta.title").split("?").map((part, i, arr) => (
              <span key={i}>{part}{i < arr.length - 1 ? "?" : ""}</span>
            ))}
          </h2>
          <p className="text-[#f5f0e8]/60 font-body mb-10 leading-relaxed">
            {t("cta.body")}
          </p>
          <Link
            href={`/${locale}/packages`}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#ae9231] text-[#1a1410] text-sm tracking-widest uppercase font-body font-semibold hover:bg-[#c9a94e] transition-colors duration-300"
          >
            {t("cta.cta")}
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
