"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle } from "lucide-react";

function ContactInfo() {
  const t = useTranslations("contact");

  const items = [
    {
      icon: MapPin,
      label: "Address",
      value: t("address"),
      href: "https://maps.google.com/?q=AICC+Arusha+Tanzania",
    },
    {
      icon: Phone,
      label: "Phone",
      value: t("phone"),
      href: `tel:${t("phone").replace(/\s/g, "")}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: t("whatsapp"),
      href: "https://wa.me/255784305008",
    },
    {
      icon: Mail,
      label: "Email",
      value: t("email"),
      href: `mailto:${t("email")}`,
    },
  ];

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
        >
          <a
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-start gap-4 p-5 border border-[#ae9231]/20 hover:border-[#ae9231] bg-white hover:bg-[#ae9231]/5 transition-all duration-300"
          >
            <div className="w-10 h-10 flex items-center justify-center border border-[#ae9231]/40 group-hover:bg-[#ae9231] group-hover:border-[#ae9231] transition-all duration-300 shrink-0">
              <item.icon
                size={16}
                className="text-[#ae9231] group-hover:text-white transition-colors duration-300"
              />
            </div>
            <div>
              <div className="text-xs tracking-widest uppercase text-[#5a4c43]/50 font-body mb-1">{item.label}</div>
              <div className="text-[#2e2419] font-body text-sm group-hover:text-[#ae9231] transition-colors duration-300">
                {item.value}
              </div>
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  );
}

function ContactForm() {
  const t = useTranslations("contact");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center text-center py-16 border border-[#ae9231]/30 bg-white"
      >
        <CheckCircle size={48} className="text-[#ae9231] mb-4" />
        <h3 className="font-display text-3xl font-light text-[#2e2419] mb-3">Message Sent!</h3>
        <p className="text-[#5a4c43]/70 font-body">{t("formSuccess")}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {[
        { key: "name", type: "text", placeholder: t("formName"), required: true },
        { key: "email", type: "email", placeholder: t("formEmail"), required: true },
        { key: "phone", type: "tel", placeholder: t("formPhone"), required: false },
      ].map((field) => (
        <div key={field.key} className="relative">
          <input
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            value={values[field.key as keyof typeof values]}
            onChange={(e) => setValues({ ...values, [field.key]: e.target.value })}
            className="w-full bg-white border border-[#ae9231]/25 px-5 py-4 text-[#2e2419] placeholder-[#5a4c43]/40 font-body text-sm outline-none focus:border-[#ae9231] transition-colors duration-300"
          />
        </div>
      ))}

      <div className="relative">
        <textarea
          rows={5}
          placeholder={t("formMessage")}
          required
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          className="w-full bg-white border border-[#ae9231]/25 px-5 py-4 text-[#2e2419] placeholder-[#5a4c43]/40 font-body text-sm outline-none focus:border-[#ae9231] transition-colors duration-300 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="group relative overflow-hidden w-full flex items-center justify-center gap-3 py-4 bg-[#ae9231] text-[#1a1410] text-sm tracking-widest uppercase font-body font-semibold hover:bg-[#c9a94e] transition-colors duration-300 disabled:opacity-60"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-[#1a1410]/30 border-t-[#1a1410] rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <>
            {t("formSend")}
            <Send size={14} />
          </>
        )}
      </button>
    </form>
  );
}

export default function ContactPage() {
  const t = useTranslations("contact");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end pb-16 overflow-hidden bg-[#2e2419]">
        <div className="absolute inset-0">
          <Image
            src="/contact page.jpg"
            alt="Contact Emmy Safaris"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2e2419]/30 to-[#2e2419]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2e2419]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#ae9231]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">{t("badge")}</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-light text-[#f5f0e8] leading-tight">
              {t("title").split("\n").map((line, i) => (
                <span key={i} className={`block ${i === 1 ? "italic text-[#ae9231]" : ""}`}>
                  {line}
                </span>
              ))}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 lg:py-24 bg-[#f5f0e8]">
        <div ref={ref} className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-14">
            {/* Left: Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="font-display text-3xl font-light text-[#2e2419] mb-3">
                  Find <span className="italic text-[#ae9231]">Us</span>
                </h2>
                <p className="text-[#5a4c43]/70 font-body text-sm leading-relaxed">
                  Our team is ready to help plan your perfect Tanzania adventure. Reach us via any of the channels below.
                </p>
              </motion.div>

              <ContactInfo />

              {/* Office hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-8 border-t border-[#ae9231]/20 pt-6"
              >
                <h3 className="text-xs tracking-widest uppercase text-[#ae9231] font-body mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm text-[#5a4c43]/80 font-body">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="text-[#2e2419] font-medium">8:00 – 18:00 EAT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-[#2e2419] font-medium">9:00 – 15:00 EAT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-[#5a4c43]/50">By appointment</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="mb-8">
                <h2 className="font-display text-3xl font-light text-[#2e2419] mb-3">
                  Send a <span className="italic text-[#ae9231]">Message</span>
                </h2>
                <p className="text-[#5a4c43]/70 font-body text-sm">
                  We respond to all enquiries within 24 hours.
                </p>
              </div>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#ae9231]" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#ae9231] font-body">
              {t("mapTitle")}
            </span>
          </div>
          <div className="relative h-56 sm:h-72 lg:h-96 overflow-hidden border border-[#ae9231]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.7583!2d36.6821!3d-3.3869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184163e0bc6f5c0f%3A0x4bce2c8c7c5d7c0!2sArusha%20International%20Conference%20Centre!5e0!3m2!1sen!2stz!4v1700000000000!5m2!1sen!2stz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Emmy Safaris Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
