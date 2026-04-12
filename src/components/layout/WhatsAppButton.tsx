"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/255784305008"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl shadow-green-900/50 overflow-hidden"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <Image
          src="/whatsapp.png"
          alt="WhatsApp"
          fill
          className="object-cover"
        />
      </div>
    </motion.a>
  );
}
