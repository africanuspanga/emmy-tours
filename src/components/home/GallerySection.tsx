"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

const previewPhotos = [
  { src: "/zanzibar images/nakupenda-sandbank.webp",         title: "Nakupenda Sandbank",     span: "col-span-2 row-span-2" },
  { src: "/Kilimanjaro images/kilimanjaro-uhuru-peak.jpg",   title: "Uhuru Peak",             span: "" },
  { src: "/safari packages images/serengeti.jpg",            title: "Serengeti",              span: "" },
  { src: "/safari packages images/selous-lion.jpg",          title: "Lion at Selous",         span: "" },
  { src: "/zanzibar images/safari-blue-dhow.jpg",            title: "Safari Blue",            span: "" },
  { src: "/Kilimanjaro images/kilimanjaro-arms-open.jpg",    title: "Above the Clouds",       span: "" },
  { src: "/safari packages images/safari-5-days.jpg",        title: "Tarangire Elephants",    span: "" },
];

export default function GallerySection() {
  const locale = useLocale();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const open = (i: number) => { setLightbox(i); document.body.style.overflow = "hidden"; };
  const close = () => { setLightbox(null); document.body.style.overflow = ""; };
  const prev = () => setLightbox((i) => i === null ? null : (i - 1 + previewPhotos.length) % previewPhotos.length);
  const next = () => setLightbox((i) => i === null ? null : (i + 1) % previewPhotos.length);

  return (
    <section className="relative py-20 lg:py-28 bg-[#1a1410] overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "radial-gradient(circle at 70% 30%, #ae9231, transparent 60%)" }} />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-5"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#ae9231]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">Photo Gallery</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#f5f0e8] leading-tight">
              Life through<br />
              <span className="italic text-[#ae9231]">our lens</span>
            </h2>
          </div>
          <Link
            href={`/${locale}/gallery`}
            className="group inline-flex items-center gap-2 text-sm tracking-widest uppercase text-[#ae9231] font-body font-semibold whitespace-nowrap self-end"
          >
            <Images size={14} />
            Full Gallery
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

        {/* Mosaic grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-rows-auto lg:grid-rows-2 gap-2 sm:gap-3"
          style={{ gridAutoRows: "180px" }}
        >
          {previewPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.6 }}
              onClick={() => open(i)}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xs font-body font-semibold truncate">{photo.title}</p>
              </div>
              {/* Plus icon on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white text-lg font-light">+</span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* View all tile */}
          <Link
            href={`/${locale}/gallery`}
            className="group relative overflow-hidden rounded-xl bg-[#ae9231]/10 border border-[#ae9231]/20 hover:bg-[#ae9231]/20 hover:border-[#ae9231]/50 transition-all duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer"
          >
            <Images size={24} className="text-[#ae9231]" />
            <span className="text-[#ae9231] text-xs tracking-widest uppercase font-body font-semibold text-center px-2">
              View All Photos
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4"
            onClick={close}
          >
            <button onClick={close}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10 transition-colors">
              <X size={18} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10 transition-colors">
              <ChevronLeft size={22} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white z-10 transition-colors">
              <ChevronRight size={22} />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-4xl rounded-xl overflow-hidden"
              style={{ aspectRatio: "16/10" }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={previewPhotos[lightbox].src} alt={previewPhotos[lightbox].title}
                fill className="object-contain" priority />
            </motion.div>
            <div className="absolute bottom-6 text-center">
              <p className="font-display text-lg font-light text-white">{previewPhotos[lightbox].title}</p>
              <p className="text-white/40 text-xs font-body mt-1">{lightbox + 1} / {previewPhotos.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
