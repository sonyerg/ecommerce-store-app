"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Expand, ShoppingCart } from "lucide-react";
import { MouseEventHandler } from "react";

import { Product } from "@/types";
import { IconButton } from "@/components/ui/icon-button";
import { Currency } from "@/components/ui/currency";
import usePreviewModal from "@/hooks/use-preview-modal";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const previewModal = usePreviewModal();

  function handleClick() {
    router.push(`/products/${product.id}`);
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(product);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Images and actions */}
      <div className="aspect-square relative bg-gray-100 rounded-xl">
        <Image
          src={product.images?.[0]?.url}
          alt={product.name}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full bottom-5 px-6 ">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="text-lg font-semibold">{product.name}</p>
        <p className="text-sm text-gray-6000">{product.category.name}</p>
      </div>
      {/* Price */}
      <div className="flex">
        <Currency value={product.price} />
      </div>
    </div>
  );
}
