import Image from "next/image";

import { Product } from "@/types";
import { IconButton } from "@/components/ui/icon-button";
import { X } from "lucide-react";
import { Currency } from "@/components/ui/currency";

interface CartItemProps {
  product: Product;
  onRemove: () => void;
}

export default function CartItem({ product, onRemove }: CartItemProps) {
  return (
    <li className="flex py-4 border-b">
      <div className="relative h-24 w-24 sm:h-48 sm:w-48 rounded-md ">
        <Image
          src={product.images[0].url}
          fill
          alt={product.name}
          className="object-cover object-center rounded-md"
        />
      </div>
      <div className="relative flex flex-1 flex-col sm:ml-6 ml-4 justify-between">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>

        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="font-semibold text-black text-lg">{product.name}</p>
          </div>

          <div className="flex text-sm mt-1">
            <p className="text-gray-500">{product.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {product.size.name}
            </p>
          </div>

          <Currency value={product.price} />
        </div>
      </div>
    </li>
  );
}
