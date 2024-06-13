"use client";

import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

export function NavbarActions() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex ml-auto items-center gap-x-2">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size="20" color="white" />
        <span className="text-white ml-2 text-sm font-medium">0</span>
      </Button>
    </div>
  );
}
