import create from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

const sajdaVerseStore = (set) => ({
  sajdaVerse: null,
  addSajdaVerse: (verses) => set({ sajdaVerse: verses }),
  removeAllBears: () => set({ bears: 0 }),
});
const loadingStore = (set) => ({
  loading: true,
  setLoadingState: (state) => set({ loading: state }),
});
const settingsStore = (set) => ({
  tafsir: 169,
  setTafsirState: (id) => set((state) => ({ tafsir: id })),
});

export const useSajdaVerseStore = create(devtools(sajdaVerseStore));
export const useLoadingStore = create(devtools(loadingStore));
export const useSettingsStore = create(devtools(settingsStore));
