"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useTranslations } from "next-intl";

/* ─── Gallery data ────────────────────────────────────────────────── */
const photos = [
  // Safari
  { src: "/safari packages images/serengeti.jpg",            cat: "safari",       title: "Serengeti Plains",          caption: "The endless golden savanna of the Serengeti" },
  { src: "/safari packages images/rhino-ngorongoro.jpg",     cat: "safari",       title: "Rhino — Ngorongoro",        caption: "The rare black rhinoceros in Ngorongoro Crater" },
  { src: "/safari packages images/selous-lion.jpg",          cat: "safari",       title: "Lion at Selous",            caption: "A pride male surveys his territory at sunrise" },
  { src: "/safari packages images/safari-5-days.jpg",        cat: "safari",       title: "Tarangire Elephants",       caption: "Elephant herds gather at the Tarangire River" },
  { src: "/safari packages images/safari-8-days.jpg",        cat: "safari",       title: "Morning on Safari",         caption: "Dawn game drive through the Northern Circuit" },
  { src: "/safari packages images/safari-6-days.jpg",        cat: "safari",       title: "Wild Tanzania",             caption: "The untamed landscapes of the Southern Circuit" },
  { src: "/safari packages images/cultural tours.jpg",       cat: "culture",      title: "Maasai Culture",            caption: "Meeting the Maasai — keepers of the land" },
  { src: "/safari packages images/safari package image.jpg", cat: "safari",       title: "Safari Camp",               caption: "Luxury under canvas — your home in the wild" },
  { src: "/safari packages images/safari opackage images 2.jpg", cat: "safari",   title: "Bush Sundowner",            caption: "Sundowner drinks as the sun dips below the horizon" },
  { src: "/safari packages images/safari images 4.jpg",      cat: "safari",       title: "Open Plains",               caption: "Africa's sweeping grasslands, alive with wildlife" },
  // Kilimanjaro
  { src: "/Kilimanjaro images/kilimanjaro-uhuru-peak.jpg",   cat: "kilimanjaro",  title: "Uhuru Peak — 5,895m",       caption: "The summit of Africa — the roof of the world" },
  { src: "/Kilimanjaro images/kilimanjaro-arms-open.jpg",    cat: "kilimanjaro",  title: "Above the Clouds",          caption: "Standing above the clouds on the Lemosho Route" },
  { src: "/Kilimanjaro images/kilimanjaro-sunset-hiker.jpg", cat: "kilimanjaro",  title: "Sunset on Kilimanjaro",     caption: "The last light of day over the mountain" },
  { src: "/Kilimanjaro images/kilimanjaro-porters-sunrise.jpg", cat: "kilimanjaro", title: "Sunrise Ascent",          caption: "Our incredible porter crew at first light" },
  { src: "/Kilimanjaro images/barranco-camp.jpg",            cat: "kilimanjaro",  title: "Barranco Camp",             caption: "Camp below the iconic Barranco Wall" },
  { src: "/Kilimanjaro images/machame-hut-camps.jpg",        cat: "kilimanjaro",  title: "Machame Huts",              caption: "The rustic charm of the Machame Route camps" },
  { src: "/Kilimanjaro images/kilimanjaro-day-hike.jpg",     cat: "kilimanjaro",  title: "Day Hike",                  caption: "Acclimatisation day on the mountain slopes" },
  { src: "/Kilimanjaro images/karanga-camp.jpg",             cat: "kilimanjaro",  title: "Karanga Valley",            caption: "Karanga Camp — the gateway to the summit zone" },
  // Zanzibar
  { src: "/zanzibar images/nakupenda-sandbank.webp",         cat: "zanzibar",     title: "Nakupenda Sandbank",        caption: "A paradise sandbank rising from the Indian Ocean" },
  { src: "/zanzibar images/safari-blue-dhow.jpg",            cat: "zanzibar",     title: "Safari Blue Dhow",          caption: "Sailing the blue lagoon of Menai Bay" },
  { src: "/zanzibar images/sunset-dhow-cruise.jpg",          cat: "zanzibar",     title: "Sunset Dhow Cruise",        caption: "The most breathtaking sunset in East Africa" },
  { src: "/zanzibar images/mnemba-snorkeling.jpg",           cat: "zanzibar",     title: "Mnemba Atoll",              caption: "Crystal waters teeming with marine life" },
  { src: "/zanzibar images/stone-town-fort.jpg",             cat: "zanzibar",     title: "Stone Town Fort",           caption: "The ancient Arab Fort at the heart of Stone Town" },
  { src: "/zanzibar images/spice-tour.jpg",                  cat: "zanzibar",     title: "Spice Farm",                caption: "The Spice Island — where cloves perfume the air" },
  { src: "/zanzibar images/jozani-monkeys.jpg",              cat: "zanzibar",     title: "Red Colobus Monkey",        caption: "Kirk's red colobus — found only on Zanzibar" },
  { src: "/zanzibar images/prison-island-aerial.webp",       cat: "zanzibar",     title: "Prison Island",             caption: "Changu Island and its resident giant tortoises" },
  { src: "/zanzibar images/mangrove-aerial.jpg",             cat: "zanzibar",     title: "Mangrove Channels",         caption: "Paddling through ancient mangrove forests" },
  { src: "/zanzibar images/mnemba-dolphins.jpg",             cat: "zanzibar",     title: "Spinner Dolphins",          caption: "Swimming with wild spinner dolphins" },
  // Itinerary / Field
  { src: "/itineraries images/Itinirary image.jpg",          cat: "safari",       title: "Out in the Field",          caption: "A day in the life of an Emmy Safari guide" },
  { src: "/itineraries images/Itinirary image 1.JPG",        cat: "safari",       title: "Bush Camp Life",            caption: "The authentic rhythm of camp life in the wild" },
  { src: "/itineraries images/Itinirary image 2.JPG",        cat: "safari",       title: "Wildlife Encounter",        caption: "Close-up wildlife encounters every single day" },
  { src: "/itineraries images/Itinirary image 3.JPG",        cat: "culture",      title: "Local Guides",              caption: "Our guides — the heart of every Emmy experience" },
  { src: "/itineraries images/Itinirary image 4.JPG",        cat: "safari",       title: "Afternoon Game Drive",      caption: "The golden hour brings the plains to life" },
  { src: "/itineraries images/Itinirary image 5.jpg",        cat: "safari",       title: "Into the Wild",             caption: "There is no road — only the adventure ahead" },
  { src: "/itineraries images/Itinirary image 6.jpg",        cat: "culture",      title: "Village Visit",             caption: "Connecting with the communities of Tanzania" },
  { src: "/itineraries images/Itinirary image 7.jpg",        cat: "safari",       title: "Safari Landscape",          caption: "Tanzania — one of the last great wildernesses" },
  { src: "/itineraries images/Itinirary image 8.jpg",        cat: "safari",       title: "Nature's Canvas",           caption: "Painted skies over the African savanna" },
  { src: "/itineraries images/Itinirary image 9.jpg",        cat: "safari",       title: "Early Morning",             caption: "The world awakens before the day's safari begins" },
  { src: "/itineraries images/Itinirary image 11.jpg",       cat: "culture",      title: "Tanzania Life",             caption: "The warmth and spirit of the Tanzanian people" },
  { src: "/itineraries images/Itinirary image 12.jpg",       cat: "safari",       title: "Big Five Moment",           caption: "One of those unforgettable wildlife moments" },
  { src: "/itineraries images/Itinirary image 14.jpg",       cat: "kilimanjaro",  title: "Mountain Camp",             caption: "High altitude camp life on the mountain" },
  { src: "/itineraries images/Itinirary image 15.jpg",       cat: "safari",       title: "Wide Open Tanzania",        caption: "Endless horizons, endless possibility" },
  { src: "/About us section image .jpg",                     cat: "culture",      title: "Emmy Team",                 caption: "The Emmy Safaris team — 10+ years of passion" },
  { src: "/Why choose us section.jpg",                       cat: "safari",       title: "Why Emmy",                  caption: "Extraordinary experiences, extraordinary people" },
];

const categories = [
  { key: "all",          label: "All" },
  { key: "safari",       label: "Safari" },
  { key: "kilimanjaro",  label: "Kilimanjaro" },
  { key: "zanzibar",     label: "Zanzibar" },
  { key: "culture",      label: "Culture" },
];

/* ─── Masonry layout helpers ─────────────────────────────────────── */
function splitIntoColumns<T>(items: T[], cols: number): T[][] {
  const columns: T[][] = Array.from({ length: cols }, () => []);
  items.forEach((item, i) => columns[i % cols].push(item));
  return columns;
}

/* ─── Single photo tile ──────────────────────────────────────────── */
function PhotoTile({
  photo,
  index,
  onClick,
}: {
  photo: typeof photos[0];
  index: number;
  onClick: () => void;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const tall = index % 5 === 0 || index % 7 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onClick}
      className={`group relative overflow-hidden cursor-pointer rounded-xl ${tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
    >
      <Image
        src={photo.src}
        alt={photo.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
        <div>
          <p className="font-body font-semibold text-white text-sm leading-tight">{photo.title}</p>
          <p className="text-white/70 text-xs font-body mt-0.5 line-clamp-1">{photo.caption}</p>
        </div>
        <div className="ml-auto shrink-0">
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <ZoomIn size={14} className="text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

type PhotoItem = typeof photos[0];

/* ─── Lightbox ───────────────────────────────────────────────────── */
function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: PhotoItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = items[index];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full">
        <span className="text-white/70 text-xs font-body tracking-widest">
          {index + 1} / {items.length}
        </span>
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 sm:left-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
        aria-label="Previous"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-3 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
        aria-label="Next"
      >
        <ChevronRight size={22} />
      </button>

      {/* Image */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-5xl max-h-[80vh] rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{ aspectRatio: "16/10" }}
      >
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Caption */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-center max-w-md px-4">
        <p className="font-display text-xl font-light text-white">{photo.title}</p>
        <p className="text-white/60 font-body text-sm mt-1">{photo.caption}</p>
      </div>
    </motion.div>
  );
}

/* ─── Main page ──────────────────────────────────────────────────── */
export default function GalleryPage() {
  const t = useTranslations("gallery");
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "all"
    ? photos
    : photos.filter((p) => p.cat === activeCategory);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const prevPhoto = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  const nextPhoto = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  // Reset lightbox when filter changes
  useEffect(() => {
    closeLightbox();
  }, [activeCategory, closeLightbox]);

  // Masonry columns: 1 on mobile, 2 on tablet, 3 on desktop
  const cols3 = splitIntoColumns(filtered, 3);
  const cols2 = splitIntoColumns(filtered, 2);

  return (
    <div className="bg-[#1a1410] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Background: mosaic of 4 images */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 opacity-20">
          {[
            "/zanzibar images/nakupenda-sandbank.webp",
            "/Kilimanjaro images/kilimanjaro-uhuru-peak.jpg",
            "/safari packages images/serengeti.jpg",
            "/zanzibar images/sunset-dhow-cruise.jpg",
          ].map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1410]/60 via-[#1a1410]/50 to-[#1a1410]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#ae9231]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">{t("badge")}</span>
              <span className="w-8 h-px bg-[#ae9231]" />
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-light text-[#f5f0e8] leading-none mb-6">
              {t("title").split("\n").map((line, i) => (
                <span key={i} className={`block ${i === 1 ? "italic text-[#ae9231]" : ""}`}>{line}</span>
              ))}
            </h1>
            <p className="text-[#f5f0e8]/60 font-body text-base max-w-xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <div className="sticky top-[72px] z-30 bg-[#1a1410]/95 backdrop-blur-md border-b border-[#ae9231]/10 px-4 py-3">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto scrollbar-hide pb-0.5">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`shrink-0 px-4 sm:px-5 py-2 text-xs tracking-widest uppercase font-body font-semibold rounded-full transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-[#ae9231] text-[#1a1410]"
                  : "text-[#f5f0e8]/50 hover:text-[#ae9231] hover:bg-[#ae9231]/10"
              }`}
            >
              {cat.label}
              <span className="ml-1.5 opacity-60 text-[10px]">
                {cat.key === "all" ? photos.length : photos.filter((p) => p.cat === cat.key).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── MASONRY GRID ── */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Mobile: 1 col */}
              <div className="grid grid-cols-1 gap-3 sm:hidden">
                {filtered.map((photo, i) => (
                  <PhotoTile key={photo.src} photo={photo} index={i} onClick={() => openLightbox(i)} />
                ))}
              </div>

              {/* Tablet: 2 col masonry */}
              <div className="hidden sm:flex lg:hidden gap-3">
                {cols2.map((col, ci) => (
                  <div key={ci} className="flex-1 flex flex-col gap-3">
                    {col.map((photo, i) => (
                      <PhotoTile
                        key={photo.src}
                        photo={photo}
                        index={ci * Math.ceil(filtered.length / 2) + i}
                        onClick={() => openLightbox(photos.indexOf(photo) === -1 ? filtered.indexOf(photo) : filtered.indexOf(photo))}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Desktop: 3 col masonry */}
              <div className="hidden lg:flex gap-4">
                {cols3.map((col, ci) => (
                  <div key={ci} className="flex-1 flex flex-col gap-4">
                    {col.map((photo, i) => {
                      const globalIndex = filtered.indexOf(photo);
                      return (
                        <PhotoTile
                          key={photo.src}
                          photo={photo}
                          index={globalIndex}
                          onClick={() => openLightbox(globalIndex)}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
