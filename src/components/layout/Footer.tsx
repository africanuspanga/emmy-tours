"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { MapPin, Phone, Mail, MessageCircle, CreditCard } from "lucide-react";

const paymentLogos = [
  { src: "/payment logos copy/visa-logo.png",          alt: "Visa",         w: 56,  h: 28 },
  { src: "/payment logos copy/Mastercard-logo.svg",    alt: "Mastercard",   w: 44,  h: 32 },
  { src: "/payment logos copy/PayPal.webp",            alt: "PayPal",       w: 72,  h: 28 },
  { src: "/payment logos copy/M-pesa-logo-removebg-preview copy.png", alt: "M-Pesa", w: 64, h: 28 },
  { src: "/payment logos copy/airtel-money-logo copy.png",            alt: "Airtel Money", w: 68, h: 28 },
  { src: "/payment logos copy/mixx-by-yass-tigo-pesa-400x300 copy.png", alt: "Tigo Pesa", w: 64, h: 28 },
  { src: "/payment logos copy/unionpay-logo.png",      alt: "UnionPay",     w: 52,  h: 28 },
];

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  const navLinks = [
    { href: `/${locale}`,            label: t("nav.home") },
    { href: `/${locale}/about`,      label: t("nav.about") },
    { href: `/${locale}/packages`,   label: t("nav.packages") },
    { href: `/${locale}/kilimanjaro`,label: t("nav.kilimanjaro") },
    { href: `/${locale}/zanzibar`,   label: t("nav.zanzibar") },
    { href: `/${locale}/gallery`,    label: t("nav.gallery") },
    { href: `/${locale}/contact`,    label: t("nav.contact") },
  ];

  return (
    <footer className="relative bg-[#1c1409] overflow-hidden">

      {/* ── Decorative wave boundary ── */}
      <div className="relative h-20 overflow-hidden">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 L0,40 Q180,0 360,40 Q540,80 720,40 Q900,0 1080,40 Q1260,80 1440,40 L1440,80 Z"
            fill="#1c1409" />
        </svg>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 Q180,0 360,40 Q540,80 720,40 Q900,0 1080,40 Q1260,80 1440,40"
            fill="none" stroke="#ae9231" strokeWidth="1" />
        </svg>
      </div>

      <div className="border-t border-[#ae9231]/20">

        {/* Background texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #ae9231 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, #5a4c43 0%, transparent 50%)`,
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

          {/* ── Main grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-10">

            {/* Brand + Pesapal pay button */}
            <div className="lg:col-span-2">
              <div className="relative h-16 w-48 mb-5">
                <Image
                  src="/Emmy tours footer logo.jpg"
                  alt="Emmy Safaris & Tours"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-[#f5f0e8]/50 text-sm leading-relaxed max-w-xs font-body">
                {t("footer.tagline")}
              </p>
              <div className="flex items-center gap-3 mt-5 mb-7">
                <div className="w-8 h-px bg-[#ae9231]" />
                <span className="text-[#ae9231]/60 text-xs tracking-widest uppercase">10+ Years of Excellence</span>
              </div>

              {/* ── Pesapal pay online block ── */}
              <div className="border border-[#ae9231]/20 rounded-sm p-4 bg-[#ae9231]/5 max-w-xs">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#ae9231]/70 font-body mb-3">
                  Secure Online Payment
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-9 w-28 shrink-0">
                    <Image
                      src="/payment logos copy/pesapal-logo.png"
                      alt="Pesapal"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <p className="text-[11px] text-[#f5f0e8]/40 font-body leading-snug">
                    Pay for your safari securely online
                  </p>
                </div>
                <a
                  href="https://payments.pesapal.com/emmysafaris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 w-full py-2.5 bg-[#ae9231] hover:bg-[#c9a94e] text-[#1a1410] text-xs tracking-widest uppercase font-body font-semibold transition-colors duration-300"
                >
                  <CreditCard size={13} />
                  Pay Online
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xs tracking-widest uppercase text-[#ae9231] mb-5 font-body font-semibold">
                {t("footer.quickLinks")}
              </h3>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#f5f0e8]/50 hover:text-[#ae9231] transition-colors duration-300 font-body"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xs tracking-widest uppercase text-[#ae9231] mb-5 font-body font-semibold">
                {t("footer.contact")}
              </h3>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <MapPin size={14} className="text-[#ae9231] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#f5f0e8]/50 font-body leading-relaxed">
                    AICC, Serengeti Wings, Floor 4,<br />
                    Room 453, Arusha, Tanzania
                  </span>
                </li>
                <li>
                  <a href="tel:+255769683062"
                    className="flex items-center gap-3 text-sm text-[#f5f0e8]/50 hover:text-[#ae9231] transition-colors duration-300 font-body">
                    <Phone size={14} className="text-[#ae9231] shrink-0" />
                    +255 769 683 062
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/255784305008" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-[#f5f0e8]/50 hover:text-[#ae9231] transition-colors duration-300 font-body">
                    <MessageCircle size={14} className="text-[#ae9231] shrink-0" />
                    +255 784 305 008
                  </a>
                </li>
                <li>
                  <a href="mailto:emmysafaris@gmail.com"
                    className="flex items-center gap-3 text-sm text-[#f5f0e8]/50 hover:text-[#ae9231] transition-colors duration-300 font-body">
                    <Mail size={14} className="text-[#ae9231] shrink-0" />
                    emmysafaris@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ── We Accept bar ── */}
          <div className="border-t border-[#ae9231]/10 pt-8 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#ae9231]/60 font-body shrink-0">
                We Accept
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {paymentLogos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="flex items-center justify-center bg-white/8 border border-white/8 rounded px-2.5 py-1.5"
                    style={{ minWidth: logo.w + 16 }}
                  >
                    <div className="relative" style={{ width: logo.w, height: logo.h }}>
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="pt-5 border-t border-[#ae9231]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#f5f0e8]/30 font-body">
              © {new Date().getFullYear()} Emmy Safaris &amp; Tours Ltd. {t("footer.rights")}
            </p>
            <p className="text-xs text-[#f5f0e8]/20 font-body">
              Arusha, Tanzania
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
