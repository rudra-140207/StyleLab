import { create } from 'zustand';

export type ClothingType = 'top' | 'bottom' | 'shoes' | 'accessory';

export interface ClothingItem {
  id: string;
  type: ClothingType;
  src: string;
  x: number;
  y: number;
}

interface OutfitStore {
  items: ClothingItem[];
  addItem: (item: ClothingItem) => void;
  clearItems: () => void;
}

export const useOutfitStore = create<OutfitStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  clearItems: () => set({ items: [] }),
}));
