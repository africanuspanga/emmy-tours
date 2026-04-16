"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useBooking } from "@/context/BookingContext";
import { ArrowRight, Anchor, TreePine, Camera, Sunset } from "lucide-react";

const experiences = [
  {
    id: "safari-blue",
    category: "Ocean Adventure",
    title: "Safari Blue",
    subtitle: "Blue Lagoon · Dolphins · Sandbars",
    description:
      "Sail through the turquoise waters of Menai Bay aboard a traditional dhow. Swim with spinner dolphins, snorkel vibrant coral gardens, and picnic on a deserted sandbank.",
    image: "/zanzibar images/safari-blue-dhow.jpg",
    galleryImages: ["/zanzibar images/safari-blue-beach.jpg", "/zanzibar images/safari-blue-tour.jpg"],
    accent: "#0e7490",
    tag: "Most Popular",
  },
  {
    id: "nakupenda",
    category: "Beach & Sandbank",
    title: "Nakupenda Sandbank",
    subtitle: "White Sands · Crystal Water · Picnic",
    description:
      "A postcard-perfect white sandbank rising from the Indian Ocean, just 40 minutes from Stone Town. Swim in warm clear waters, enjoy a fresh seafood picnic — pure paradise.",
    image: "/zanzibar images/nakupenda-sandbank.webp",
    galleryImages: ["/zanzibar images/nakupenda-beach.jpg", "/zanzibar images/nakupenda-swimming.jpg"],
    accent: "#0891b2",
    tag: null,
  },
  {
    id: "mnemba",
    category: "Snorkelling & Diving",
    title: "Mnemba Atoll",
    subtitle: "Coral Reef · Sea Turtles · Tropical Fish",
    description:
      "One of Africa's finest snorkelling and diving sites. Mnemba's protected waters are home to green turtles, spinner dolphins, and thousands of tropical fish species.",
    image: "/zanzibar images/mnemba-snorkeling.jpg",
    galleryImages: ["/zanzibar images/mnemba-dolphins.jpg", "/zanzibar images/mnemba-fish.jpg"],
    accent: "#0e7490",
    tag: null,
  },
  {
    id: "sunset-dhow",
    category: "Sundowner Cruise",
    title: "Sunset Dhow Cruise",
    subtitle: "Dhow · Sundowner · Indian Ocean",
    description:
      "Drift across a glass-calm Indian Ocean on a traditional wooden dhow as the sun melts into the horizon. Fresh fruit, local drinks, and the most spectacular sunset in East Africa.",
    image: "/zanzibar images/sunset-dhow-cruise.jpg",
    galleryImages: ["/zanzibar images/sunset-golden.jpg", "/zanzibar images/safari-blue-dhow.jpg"],
    accent: "#d97706",
    tag: "Romantic",
  },
  {
    id: "stone-town",
    category: "UNESCO Heritage",
    title: "Stone Town",
    subtitle: "History · Culture · Spice Markets",
    description:
      "Walk the ancient labyrinth of Stone Town — carved wooden doors, bustling bazaars, old forts, and the layered history of Arab, Persian, Indian, and African culture.",
    image: "/zanzibar images/stone-town-fort.jpg",
    galleryImages: ["/zanzibar images/stone-town-streets.jpg", "/zanzibar images/new-market-street.jpg"],
    accent: "#92400e",
    tag: null,
  },
  {
    id: "spice-tour",
    category: "Spice Island",
    title: "Spice Farm Tour",
    subtitle: "Cloves · Vanilla · Cardamom",
    description:
      "Zanzibar earned its name 'The Spice Island' for good reason. Walk through fragrant farms, taste freshly picked spices, and discover the flavours that once drove world trade routes.",
    image: "/zanzibar images/spice-tour.jpg",
    galleryImages: ["/zanzibar images/spice-market.jpg", "/zanzibar images/spice-annatto.jpg"],
    accent: "#15803d",
    tag: null,
  },
  {
    id: "prison-island",
    category: "History & Wildlife",
    title: "Prison Island",
    subtitle: "Giant Tortoises · Colonial History",
    description:
      "Visit the 19th-century prison turned tortoise sanctuary, home to Aldabra giant tortoises that live to 200 years. Snorkel the coral gardens on the way back.",
    image: "/zanzibar images/prison-island-aerial.webp",
    galleryImages: ["/zanzibar images/prison-building.jpg", "/zanzibar images/prison-courtyard.jpg"],
    accent: "#0e7490",
    tag: null,
  },
  {
    id: "jozani",
    category: "Forest & Wildlife",
    title: "Jozani Forest",
    subtitle: "Red Colobus Monkeys · Ancient Forest",
    description:
      "Home to the rare Kirk's red colobus monkey, found nowhere else on Earth. Walk through ancient mahogany trees and mangroves in Zanzibar's only national park.",
    image: "/zanzibar images/jozani-monkeys.jpg",
    galleryImages: ["/zanzibar images/jozani-forest.jpg", "/zanzibar images/jozani-hiking.jpg"],
    accent: "#15803d",
    tag: "Unique",
  },
  {
    id: "mangrove",
    category: "Eco Adventure",
    title: "Mangrove Kayak Tour",
    subtitle: "Kayak · Birdlife · Tidal Channels",
    description:
      "Paddle silently through towering mangrove channels alive with kingfishers, herons, and mudskippers. One of Zanzibar's most peaceful and otherworldly experiences.",
    image: "/zanzibar images/mangrove-aerial.jpg",
    galleryImages: ["/zanzibar images/mangrove-roots.jpg", "/zanzibar images/mangrove-tour.webp"],
    accent: "#0f766e",
    tag: null,
  },
  {
    id: "mangapwani",
    category: "Historical Site",
    title: "Mangapwani Cave",
    subtitle: "Slave History · Coral Cave · Coastal Walk",
    description:
      "Discover the poignant Mangapwani slave cave and coral cavern — a window into Zanzibar's complex history, ending with a walk along a deserted, wild stretch of coastline.",
    image: "/zanzibar images/mangapwani-entrance.jpg",
    galleryImages: ["/zanzibar images/mangapwani-inside.jpg", "/zanzibar images/mangapwani-slave-cave.jpg"],
    accent: "#78350f",
    tag: null,
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const locale = useLocale();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const { openModal } = useBooking();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Main image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={exp.image}
          alt={exp.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-[#2e2419] text-[10px] tracking-widest uppercase font-body font-semibold px-3 py-1.5 rounded-full">
            {exp.category}
          </span>
        </div>

        {exp.tag && (
          <div className="absolute top-4 right-4">
            <span className="bg-[#ae9231] text-[#1a1410] text-[10px] tracking-widest uppercase font-body font-semibold px-3 py-1.5 rounded-full">
              {exp.tag}
            </span>
          </div>
        )}

        {/* Mini gallery strip */}
        <div className="absolute bottom-3 right-3 flex gap-1.5">
          {exp.galleryImages.map((img, i) => (
            <div key={i} className="relative w-10 h-10 rounded-lg overflow-hidden border-2 border-white/60">
              <Image src={img} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl font-light text-[#2e2419] leading-tight mb-1 group-hover:text-[#ae9231] transition-colors duration-300">
          {exp.title}
        </h3>
        <p className="text-[10px] tracking-wider uppercase font-body text-[#0e7490] mb-3">
          {exp.subtitle}
        </p>
        <p className="text-[#5a4c43]/70 font-body text-sm leading-relaxed mb-4 line-clamp-3">
          {exp.description}
        </p>

        <button
          onClick={() => openModal(`Zanzibar — ${exp.title}`, "safari")}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#ae9231]/40 text-[#ae9231] text-xs tracking-widest uppercase font-body font-semibold hover:bg-[#ae9231] hover:text-[#1a1410] transition-all duration-300"
        >
          Enquire Now
          <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}

export default function ZanzibarPage() {
  const locale = useLocale();
  const { openModal } = useBooking();
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { value: "33", label: "Islands" },
    { value: "1,000+", label: "Years of History" },
    { value: "12°C", label: "Ocean Temp" },
    { value: "UNESCO", label: "Heritage City" },
  ];

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
        <Image
          src="/zanzibar images/nakupenda-sandbank.webp"
          alt="Zanzibar Nakupenda Sandbank"
          fill
          className="object-cover"
          priority
        />
        {/* Ocean blue-tinted dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071e2e]/50 via-[#0c3347]/40 to-[#071e2e]/80" />
        {/* Subtle teal shimmer */}
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(14,116,144,0.25) 0%, transparent 60%)" }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-10 h-px bg-[#ae9231]" />
              <span className="text-xs tracking-[0.4em] uppercase text-[#ae9231] font-body">
                The Spice Island
              </span>
              <span className="w-10 h-px bg-[#ae9231]" />
            </div>

            <h1 className="font-display font-light text-[#f5f0e8] leading-none tracking-tight mb-4">
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]">Zanzibar</span>
              <span className="block text-4xl md:text-6xl italic text-[#67e8f9] mt-2">
                Paradise Found
              </span>
            </h1>

            <p className="text-white/70 font-body text-lg max-w-xl mx-auto leading-relaxed mt-6 mb-8">
              Turquoise waters, white coral sands, ancient Stone Town and the fragrant Spice Island — all at the edge of the Indian Ocean
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal("Zanzibar Bespoke Package", "safari")}
                className="group relative overflow-hidden px-8 py-4 bg-[#ae9231] text-[#1a1410] text-sm tracking-widest uppercase font-semibold font-body hover:shadow-[0_0_40px_rgba(174,146,49,0.4)] transition-all duration-300"
              >
                <span className="relative z-10">Plan My Zanzibar Trip</span>
                <span className="absolute inset-0 bg-[#c9a94e] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <a
                href="https://wa.me/255784305008"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase font-body hover:border-[#67e8f9] hover:text-[#67e8f9] transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full block" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 Q180,80 360,40 Q540,0 720,40 Q900,80 1080,40 Q1260,0 1440,40 L1440,80 L0,80 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── INTRO STATS ── */}
      <section ref={statsRef} className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <p className="font-display text-3xl md:text-4xl font-light text-[#2e2419] leading-snug max-w-2xl mx-auto">
              An archipelago of <span className="italic text-[#0e7490]">33 islands</span> where the Indian Ocean, Swahili culture, and tropical nature collide in extraordinary beauty
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#0e7490]/10">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white text-center px-6 py-8"
              >
                <div className="font-display text-4xl font-light text-[#0e7490] mb-1">{s.value}</div>
                <div className="text-[10px] tracking-widest uppercase text-[#5a4c43]/60 font-body">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OCEAN DIVIDER ── */}
      <div className="h-2 bg-gradient-to-r from-[#0e7490] via-[#67e8f9] to-[#0e7490] opacity-30" />

      {/* ── EXPERIENCES GRID ── */}
      <section className="bg-[#f0f9ff] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#0e7490]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#0e7490] font-body">Island Experiences</span>
              <span className="w-8 h-px bg-[#0e7490]" />
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-light text-[#2e2419] leading-tight">
              Everything Zanzibar<br />
              <span className="italic text-[#ae9231]">has to offer</span>
            </h2>
            <p className="text-[#5a4c43]/60 font-body text-base mt-4 max-w-lg mx-auto leading-relaxed">
              From moonlit dhow cruises to ancient spice farms — every experience on these islands is unlike anywhere else on Earth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL BLEED IMAGE BREAK ── */}
      <section className="relative h-80 md:h-[420px] overflow-hidden">
        <Image
          src="/zanzibar images/sunset-golden.jpg"
          alt="Zanzibar sunset"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071e2e]/70 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="font-display text-5xl md:text-7xl font-light text-white italic leading-tight">
                &ldquo;The perfume of<br />cloves and sea air&rdquo;
              </p>
              <p className="text-white/50 font-body text-sm mt-4 tracking-widest uppercase">— Zanzibar, Indian Ocean</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BESPOKE CTA ── */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#ae9231]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">Bespoke Zanzibar</span>
              <span className="w-8 h-px bg-[#ae9231]" />
            </div>
            <h2 className="font-display text-5xl font-light text-[#2e2419] leading-tight mb-4">
              Craft your perfect<br />
              <span className="italic text-[#0e7490]">island escape</span>
            </h2>
            <p className="text-[#5a4c43]/70 font-body text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Combine any experiences above into a tailor-made Zanzibar itinerary. We handle everything — transfers, accommodation, activities, and private guides. Just show up and discover paradise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal("Zanzibar Bespoke Package", "safari")}
                className="group relative overflow-hidden px-10 py-4 bg-[#ae9231] text-[#1a1410] text-sm tracking-widest uppercase font-semibold font-body hover:shadow-[0_0_40px_rgba(174,146,49,0.3)] transition-all duration-300"
              >
                <span className="relative z-10">Build My Itinerary</span>
                <span className="absolute inset-0 bg-[#c9a94e] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              <Link
                href={`/${locale}/contact`}
                className="px-10 py-4 border border-[#2e2419]/20 text-[#2e2419] text-sm tracking-widest uppercase font-body hover:border-[#ae9231] hover:text-[#ae9231] transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
