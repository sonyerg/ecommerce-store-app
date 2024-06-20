import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { Product } from "@/types";

interface CartStore {
  products: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      products: [],
      addItem: (product: Product) => {
        const currentItems = get().products;
        const existingItem = currentItems.find(
          (item) => item.id === product.id
        );

        if (existingItem) {
          return toast("Item already in cart.");
        }

        set({ products: [...currentItems, product] });
        toast.success("Item added to cart.");
      },
      removeItem: (id: string) => {
        const currentItems = get().products;
        const filteredItems = currentItems.filter((item) => item.id !== id);
        set({ products: [...filteredItems] });
        toast.success("Item removed from cart.");
      },
      removeAll: () => {
        set({ products: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
