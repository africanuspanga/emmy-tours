"use client";

import { BookingProvider } from "@/context/BookingContext";
import BookingModal from "@/components/BookingModal";
import { ReactNode } from "react";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <BookingProvider>
      {children}
      <BookingModal />
    </BookingProvider>
  );
}
