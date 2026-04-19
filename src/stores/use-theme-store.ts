import { create } from 'zustand';

interface ThemeState {
  isAvailable: boolean;
  reducedMotion: boolean;
  setAvailable: (available: boolean) => void;
  setReducedMotion: (reduced: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isAvailable: true,
  reducedMotion: false,
  setAvailable: (isAvailable) => set({ isAvailable }),
  setReducedMotion: (reducedMotion) => set({ reducedMotion }),
}));
