"use client";

import axios from "axios";

import useCart from "@/hooks/use-cart";

import Button from "@/components/ui/button";
import { Currency } from "@/components/ui/currency";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

export default function OrderSummary() {
  const { removeAll, products } = useCart();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment Completed");
      removeAll();
    }

    if (searchParams.get("cancelled")) {
      toast.error("Something went wrong");
    }
  }, [removeAll, searchParams]);

  const totalPrice = products.reduce((total, product) => {
    return total + Number(product.price);
  }, 0);

  async function onCheckout() {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: products.map((product) => product.id),
      }
    );

    window.location = response.data.url;
  }

  return (
    <div className="lg:col-span-5 lg:p-8 lg:mt-0 sm:p-6 px-4 py-6 mt-16 rounded-lg bg-gray-100 ">
      <h2 className="font-medium text-lg text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className=" flex justify-between border-t pt-4">
          <div className="text-base font-medium text-gray-900">
            Order Total:
          </div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckout} className="w-full mt-6">
        Checkout
      </Button>
    </div>
  );
}
