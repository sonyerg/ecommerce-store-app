"use client";

import { PreviewModal } from "@/components/preview-modal";
import { useEffect, useState } from "react";

export default function PreviewModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <PreviewModal />
    </div>
  );
}
