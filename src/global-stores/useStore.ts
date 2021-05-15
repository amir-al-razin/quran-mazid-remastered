import create from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";


const sajdaVerseStore = (set) => ({
  sajdaVerse:null,
  addSajdaVerse:(verses)=>set({sajdaVerse:verses}),
  removeAllBears: () => set({ bears: 0 }),
})




export const  useSajdaVerseStore = create(devtools(sajdaVerseStore));


