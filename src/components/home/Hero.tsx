"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const t = useTranslations("home.hero");
  const locale = useLocale();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure all autoplay attributes are set before play() — needed on some Android browsers
    video.muted = true;
    video.playsInline = true;

    const attemptPlay = () => {
      video.play().catch(() => {
        // Some browsers block autoplay until user interaction; retry on first touch/click
        const retry = () => {
          video.play().catch(() => {});
          document.removeEventListener("touchstart", retry);
          document.removeEventListener("click", retry);
        };
        document.addEventListener("touchstart", retry, { once: true });
        document.addEventListener("click", retry, { once: true });
      });
    };

    if (video.readyState >= 2) {
      attemptPlay();
    } else {
      video.addEventListener("loadeddata", attemptPlay, { once: true });
    }

    return () => {
      video.removeEventListener("loadeddata", attemptPlay);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] overflow-hidden pt-[88px]"
    >
      {/* Video Background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Fallback gradient when video loads */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d1f15] via-[#2e2419] to-[#1a1410]" />
        )}

        {/* Overlay */}
        <div className="video-overlay absolute inset-0" />

        {/* Subtle grain */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-[#ae9231]" />
          <span className="text-xs tracking-[0.3em] uppercase text-white font-body">
            Emmy Safaris & Tours
          </span>
          <span className="w-8 h-px bg-[#ae9231]" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light text-[#f5f0e8] leading-[0.9] tracking-tight mb-6"
        >
          {t("title").split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.8 }}
              className={`inline-block mr-[0.25em] last:mr-0 ${
                i === 0 ? "italic text-white" : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-base md:text-lg text-white/90 font-body max-w-md mb-10 leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href={`/${locale}/packages`}
            className="group relative overflow-hidden px-8 py-4 bg-[#ae9231] text-[#1a1410] text-sm tracking-widest uppercase font-semibold font-body transition-all duration-300 hover:shadow-[0_0_40px_rgba(174,146,49,0.4)]"
          >
            <span className="relative z-10">{t("cta")}</span>
            <span className="absolute inset-0 bg-[#c9a94e] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <Link
            href={`/${locale}/about`}
            className="px-8 py-4 border border-[#f5f0e8]/30 text-[#f5f0e8] text-sm tracking-widest uppercase font-body hover:border-[#ae9231] hover:text-[#ae9231] transition-all duration-300"
          >
            {t("ctaSecondary")}
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} className="text-[#ae9231]" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2e2419] to-transparent pointer-events-none" />
    </section>
  );
}
