"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

import Button from "@/components/ui/button";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Color, Size } from "@/types";
import { Filter } from "./filter";
import { IconButton } from "@/components/ui/icon-button";

export const revalidate = 0;

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

export function MobileFilters({ sizes, colors }: MobileFiltersProps) {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="lg:hidden flex items-center gap-x-2">
        Filter
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        onClose={onClose}
        as="div"
        className="lg:hidden relative z-40"
      >
        {/* Backgroud */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        <div className="fixed inset-0 flex z-40">
          <DialogPanel className="relative flex ml-auto h-full w-full max-w-xs bg-white flex-col overflow-y-auto py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton onClick={onClose} icon={<X size={20} />} />
            </div>

            {/* Render Filters */}
            <div className="p-4">
              <Filter data={sizes} name="Size" valueKey="sizeId" />
              <Filter data={colors} name="Color" valueKey="colorId" />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
