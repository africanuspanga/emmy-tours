"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, User, Mail, Phone, Calendar, BedDouble,
  Users, MessageSquare, CheckCircle, CreditCard,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

const safariAccommodation = [
  "Budget Camping",
  "Midrange Lodge",
  "Luxury Tented Camp",
  "Ultradeluxe / Private Camp",
];

const kiliAccommodation = [
  "Camping (all routes)",
  "Marangu Huts (Marangu Route)",
];

export default function BookingModal() {
  const { isOpen, tourName, tourType, closeModal } = useBooking();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    accommodation: "",
    adults: "1",
    children: "0",
    requests: "",
  });

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", email: "", phone: "", date: "", accommodation: "", adults: "1", children: "0", requests: "" });
      }, 400);
    }
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  const accommodationOptions = tourType === "kilimanjaro" ? kiliAccommodation : safariAccommodation;
  const isKili = tourType === "kilimanjaro";
  const title = isKili ? "Book Your Climb" : "Book Your Safari";

  const inputClass =
    "w-full bg-white border border-[#5a4c43]/15 rounded-lg px-4 py-3.5 text-[#2e2419] placeholder-[#5a4c43]/35 font-body text-sm outline-none focus:border-[#ae9231] focus:ring-2 focus:ring-[#ae9231]/10 transition-all duration-200";
  const selectClass =
    "w-full bg-white border border-[#5a4c43]/15 rounded-lg px-4 py-3.5 text-[#2e2419] font-body text-sm outline-none focus:border-[#ae9231] focus:ring-2 focus:ring-[#ae9231]/10 transition-all duration-200 appearance-none cursor-pointer";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-2xl max-h-[95vh] sm:max-h-[92vh] overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl shadow-black/40 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* ── Header ── */}
              <div className="relative bg-[#2e2419] px-4 sm:px-7 py-4 sm:py-5 flex items-center gap-3 sm:gap-4 shrink-0">
                {/* Logo */}
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#ae9231]/30 shrink-0 bg-white flex items-center justify-center p-1">
                  <div className="relative w-full h-full">
                    <Image
                      src="/Emmy tours Nav Bar logo.png"
                      alt="Emmy Safaris"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <h2 className="font-display text-2xl font-light text-[#f5f0e8] leading-tight">
                    {title}
                  </h2>
                  <p className="text-[#ae9231] text-xs font-body tracking-wider mt-0.5">
                    Emmy Safaris &amp; Tours — Arusha, Tanzania
                  </p>
                  {tourName && (
                    <p className="text-[#f5f0e8]/50 text-xs font-body mt-1 truncate">
                      {tourName}
                    </p>
                  )}
                </div>

                {/* Close */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#f5f0e8]/50 hover:text-[#f5f0e8] hover:bg-white/10 rounded-full transition-all duration-200"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Gold accent line */}
              <div className="h-px bg-gradient-to-r from-transparent via-[#ae9231] to-transparent shrink-0" />

              {/* ── Body ── */}
              <div className="bg-[#faf8f5] overflow-y-auto flex-1 overscroll-contain">
                {submitted ? (
                  // ── Success state ──
                  <div className="flex flex-col items-center justify-center text-center py-16 px-8">
                    <div className="w-16 h-16 rounded-full bg-[#ae9231]/10 flex items-center justify-center mb-5">
                      <CheckCircle size={32} className="text-[#ae9231]" />
                    </div>
                    <h3 className="font-display text-3xl font-light text-[#2e2419] mb-3">
                      Booking Request Sent!
                    </h3>
                    <p className="text-[#5a4c43]/70 font-body text-sm leading-relaxed max-w-sm mb-2">
                      Thank you, <strong className="text-[#2e2419]">{form.name}</strong>. Our team will review your
                      request and get back to you within 24 hours.
                    </p>
                    <p className="text-[#5a4c43]/50 font-body text-xs">
                      A confirmation has been sent to {form.email}
                    </p>
                    <button
                      onClick={closeModal}
                      className="mt-8 px-8 py-3 bg-[#ae9231] text-[#1a1410] text-xs tracking-widest uppercase font-body font-semibold rounded-lg hover:bg-[#c9a94e] transition-colors duration-300"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  // ── Form ──
                  <form onSubmit={handleSubmit} className="px-4 sm:px-7 py-5 sm:py-6 space-y-6 sm:space-y-7">

                    {/* Personal Information */}
                    <div>
                      <div className="flex items-center gap-2.5 mb-4">
                        <div className="w-7 h-7 rounded-md bg-[#ae9231]/10 flex items-center justify-center shrink-0">
                          <User size={14} className="text-[#ae9231]" />
                        </div>
                        <h3 className="font-body font-semibold text-[#2e2419] text-sm tracking-wide">
                          Personal Information
                        </h3>
                        <div className="flex-1 h-px bg-[#5a4c43]/10" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-body text-[#5a4c43] mb-1.5">
                            Full Name <span className="text-[#ae9231]">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Your full name"
                            required
                            value={form.name}
                            onChange={set("name")}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-body text-[#5a4c43] mb-1.5">
                            <span className="flex items-center gap-1.5">
                              <Mail size={11} className="text-[#ae9231]" />
                              Email Address <span className="text-[#ae9231]">*</span>
                            </span>
                          </label>
                          <input
                            type="email"
                            placeholder="john@example.com"
                            required
                            value={form.email}
                            onChange={set("email")}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-body text-[#5a4c43] mb-1.5">
                            <span className="flex items-center gap-1.5">
                              <Phone size={11} className="text-[#ae9231]" />
                              Phone Number <span className="text-[#ae9231]">*</span>
                            </span>
                          </label>
                          <input
                            type="tel"
                            placeholder="+1 234 567 8900"
                            required
                            value={form.phone}
                            onChange={set("phone")}
                            className={inputClass}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Travel Details */}
                    <div>
                      <div className="flex items-center gap-2.5 mb-4">
                        <div className="w-7 h-7 rounded-md bg-[#ae9231]/10 flex items-center justify-center shrink-0">
                          <Calendar size={14} className="text-[#ae9231]" />
                        </div>
                        <h3 className="font-body font-semibold text-[#2e2419] text-sm tracking-wide">
                          Travel Details
                        </h3>
                        <div className="flex-1 h-px bg-[#5a4c43]/10" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-body text-[#5a4c43] mb-1.5">
                            Preferred Travel Date <span className="text-[#ae9231]">*</span>
                          </label>
                          <input
                            type="date"
                            required
                            value={form.date}
                            onChange={set("date")}
                            min={new Date().toISOString().split("T")[0]}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-body text-[#5a4c43] mb-1.5">
                            <span className="flex items-center gap-1.5">
                              <BedDouble size={11} className="text-[#ae9231]" />
                              Accommodation Type
                            </span>
                          </label>
                          <div className="relative">
                            <select
                              value={form.accommodation}
                              onChange={set("accommodation")}
                              className={selectClass}
                            >
                              <option value="">Select accommodation</option>
                              {accommodationOptions.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#5a4c43]/50">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Group Size */}
                    <div>
                      <div className="flex items-center gap-2.5 mb-4">
                        <div className="w-7 h-7 rounded-md bg-[#ae9231]/10 flex items-center justify-center shrink-0">
                          <Users size={14} className="text-[#ae9231]" />
                        </div>
                        <h3 className="font-body font-semibold text-[#2e2419] text-sm tracking-wide">
                          Group Size
                        </h3>
                        <div className="flex-1 h-px bg-[#5a4c43]/10" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-body text-[#5a4c43] mb-1.5">
                            Number of Adults <span className="text-[#ae9231]">*</span>
                          </label>
                          <div className="relative">
                            <select
                              required
                              value={form.adults}
                              onChange={set("adults")}
                              className={selectClass}
                            >
                              {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                                <option key={n} value={n}>{n} {n === 1 ? "Adult" : "Adults"}</option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#5a4c43]/50">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-body text-[#5a4c43] mb-1.5">
                            Number of Children
                          </label>
                          <div className="relative">
                            <select
                              value={form.children}
                              onChange={set("children")}
                              className={selectClass}
                            >
                              {Array.from({ length: 11 }, (_, i) => i).map((n) => (
                                <option key={n} value={n}>{n} {n === 1 ? "Child" : "Children"}</option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#5a4c43]/50">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <div className="flex items-center gap-2.5 mb-4">
                        <div className="w-7 h-7 rounded-md bg-[#ae9231]/10 flex items-center justify-center shrink-0">
                          <MessageSquare size={14} className="text-[#ae9231]" />
                        </div>
                        <h3 className="font-body font-semibold text-[#2e2419] text-sm tracking-wide">
                          Special Requests
                        </h3>
                        <div className="flex-1 h-px bg-[#5a4c43]/10" />
                      </div>
                      <label className="block text-xs font-body text-[#5a4c43] mb-1.5">
                        Any special requirements or questions?
                      </label>
                      <textarea
                        rows={3}
                        value={form.requests}
                        onChange={set("requests")}
                        placeholder="Dietary requirements, mobility needs, specific interests, questions about the tour…"
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-1 pb-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="group w-full flex items-center justify-center gap-3 py-4 bg-[#ae9231] hover:bg-[#c9a94e] disabled:opacity-60 text-[#1a1410] text-sm tracking-widest uppercase font-body font-semibold rounded-lg transition-colors duration-300"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-[#1a1410]/20 border-t-[#1a1410] rounded-full animate-spin" />
                            Submitting…
                          </span>
                        ) : (
                          <>
                            <CreditCard size={15} />
                            Submit Booking Request
                          </>
                        )}
                      </button>
                      <p className="text-center text-[10px] text-[#5a4c43]/45 font-body mt-3 leading-relaxed">
                        By submitting this form, you agree to be contacted by Emmy Safaris &amp; Tours regarding your booking enquiry.
                      </p>
                    </div>

                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
