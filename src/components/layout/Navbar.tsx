"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";

const locales = [
  { code: "en", label: "EN", name: "English", flag: "🇬🇧" },
  { code: "it", label: "IT", name: "Italiano", flag: "🇮🇹" },
  { code: "fr", label: "FR", name: "Français", flag: "🇫🇷" },
  { code: "de", label: "DE", name: "Deutsch", flag: "🇩🇪" },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/packages`, label: t("packages") },
    { href: `/${locale}/accommodation`, label: t("accommodation") },
    { href: `/${locale}/kilimanjaro`, label: t("kilimanjaro") },
    { href: `/${locale}/zanzibar`, label: t("zanzibar") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const getLocalizedPath = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  };

  const isActive = (href: string) => {
    if (href === `/${locale}`) return pathname === `/${locale}`;
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#ae9231]/20 shadow-sm py-3"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center">
            <div className="relative h-14 w-36 sm:h-16 sm:w-44 lg:w-52">
              <Image
                src="/Emmy tours Nav Bar logo.png"
                alt="Emmy Safaris & Tours"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm tracking-widest uppercase font-body font-medium transition-colors duration-300 group ${
                  isActive(link.href)
                    ? "text-[#ae9231]"
                    : "text-[#5a4c43] hover:text-[#ae9231]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#ae9231] transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-xs tracking-widest uppercase text-[#5a4c43]/70 hover:text-[#ae9231] transition-colors duration-300"
              >
                <Globe size={14} />
                <span>{locales.find((l) => l.code === locale)?.flag}</span>
                <span className="hidden sm:inline">{locale.toUpperCase()}</span>
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 bg-white border border-[#ae9231]/20 shadow-lg rounded-sm overflow-hidden min-w-[130px]"
                  >
                    {locales.map((loc) => (
                      <Link
                        key={loc.code}
                        href={getLocalizedPath(loc.code)}
                        onClick={() => setLangOpen(false)}
                        className={`flex items-center gap-2 px-4 py-2.5 text-xs tracking-wider uppercase transition-colors duration-200 ${
                          locale === loc.code
                            ? "text-[#ae9231] bg-[#ae9231]/10"
                            : "text-[#5a4c43]/70 hover:text-[#ae9231] hover:bg-[#ae9231]/5"
                        }`}
                      >
                        <span className="text-base">{loc.flag}</span>
                        <span className="font-semibold w-6">{loc.label}</span>
                        <span className="normal-case opacity-70">{loc.name}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Book CTA */}
            <Link
              href={`/${locale}/contact`}
              className="relative overflow-hidden group px-5 py-2.5 text-xs tracking-widest uppercase font-semibold border border-[#ae9231] text-[#ae9231] transition-all duration-300 hover:text-[#1a1410]"
            >
              <span className="relative z-10">{t("bookTour")}</span>
              <span className="absolute inset-0 bg-[#ae9231] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#5a4c43] p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-[#2e2419] flex flex-col justify-center px-8"
          >
            <div className="absolute top-5 right-6">
              <button onClick={() => setMobileOpen(false)} className="text-[#f5f0e8] p-2">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6 mb-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className={`text-4xl font-display font-light tracking-tight ${
                      isActive(link.href) ? "text-[#ae9231]" : "text-[#f5f0e8]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3">
              {locales.map((loc) => (
                <Link
                  key={loc.code}
                  href={getLocalizedPath(loc.code)}
                  className={`text-sm tracking-widest uppercase px-3 py-1.5 border flex items-center gap-2 ${
                    locale === loc.code
                      ? "border-[#ae9231] text-[#ae9231]"
                      : "border-white/20 text-[#f5f0e8]/50"
                  }`}
                >
                  <span className="text-base leading-none">{loc.flag}</span>
                  {loc.label}
                </Link>
              ))}
            </div>

            <Link
              href={`/${locale}/contact`}
              className="mt-8 self-start px-8 py-4 bg-[#ae9231] text-[#1a1410] text-sm tracking-widest uppercase font-semibold"
            >
              {t("bookTour")}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
