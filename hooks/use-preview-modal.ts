import { create } from "zustand";

import { Product } from "@/types";

interface PreviewModalStore {
  isOpen: boolean;
  product?: Product;
  onOpen: (product: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  product: undefined,
  onOpen: (product) => set({ product: product, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
