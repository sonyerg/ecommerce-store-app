"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import { IconButton } from "./icon-button";
import { X } from "lucide-react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        open={isOpen}
        onClose={onClose}
        as="div"
        className="relative z-10"
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black bg-opacity-50" />

        {/* Modal */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex h-full items-center justify-center p-4">
            <TransitionChild as={Fragment}>
              <DialogPanel className="max-w-3xl overflow-hidden rounded-lg ">
                <div className="relative flex items-center w-full overflow-hidden bg-white px-4 shadow-2xl">
                  <div className="absolute right-4 top-4 z-10">
                    <IconButton onClick={onClose} icon={<X size={20} />} />
                  </div>
                  {children}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
