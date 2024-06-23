"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";

export function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex ml-auto items-center gap-x-2">
      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-black px-4 py-2"
      >
        <ShoppingBag size="20" color="white" />
        <span className="text-white ml-2 text-sm font-medium">
          {cart.products.length}
        </span>
      </Button>
    </div>
  );
}
