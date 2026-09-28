import { create } from "zustand";

export const usePanelOpen = create((set) => ({
    isSwitch: () => set({isOpen: true}),
}));
  