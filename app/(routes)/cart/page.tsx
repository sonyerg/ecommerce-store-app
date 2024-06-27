"use client";

import { useEffect, useState } from "react";

import useCart from "@/hooks/use-cart";
import { Container } from "@/components/ui/container";
import CartItem from "./components/cart-item";
import OrderSummary from "./components/order-summary";

export default function CartPage() {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  function onRemove(productId: string) {
    cart.removeItem(productId);
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="font-bold text-3xl text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.products.length === 0 && (
                <p className="text-neutral-500 pl-1">No items added to cart</p>
              )}

              <ul>
                {cart.products.map((product) => (
                  <CartItem
                    key={product.id}
                    product={product}
                    onRemove={() => onRemove(product.id)}
                  />
                ))}
              </ul>
            </div>
            <OrderSummary />
          </div>
        </div>
      </Container>
    </div>
  );
}
