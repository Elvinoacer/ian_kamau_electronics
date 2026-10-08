"use client";

import { create } from "zustand";

interface PortfolioState {
  /** True once the intro preloader has finished and the page is revealed. */
  loaded: boolean;
  setLoaded: (value: boolean) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  loaded: false,
  setLoaded: (value) => set({ loaded: value }),
}));
