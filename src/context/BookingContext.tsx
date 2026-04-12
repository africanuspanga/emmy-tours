"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type TourType = "safari" | "kilimanjaro";

interface BookingState {
  isOpen: boolean;
  tourName: string;
  tourType: TourType;
}

interface BookingContextValue extends BookingState {
  openModal: (tourName: string, tourType?: TourType) => void;
  closeModal: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<BookingState>({
    isOpen: false,
    tourName: "",
    tourType: "safari",
  });

  const openModal = (tourName: string, tourType: TourType = "safari") => {
    setState({ isOpen: true, tourName, tourType });
  };

  const closeModal = () => {
    setState((s) => ({ ...s, isOpen: false }));
  };

  return (
    <BookingContext.Provider value={{ ...state, openModal, closeModal }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider");
  return ctx;
}
