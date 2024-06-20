"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import { Modal } from "@/components/ui/modal";
import { Gallery } from "./gallery";
import { ProductInfo } from "./product-info";

export function PreviewModal() {
  const { isOpen, onClose } = usePreviewModal();
  const product = usePreviewModal((state) => state.product);

  if (!product) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-8 w-full p-4">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <ProductInfo product={product} />
        </div>
      </div>
    </Modal>
  );
}
