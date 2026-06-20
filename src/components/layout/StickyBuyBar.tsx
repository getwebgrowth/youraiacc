"use client";

import { useEffect, useState } from "react";
import { productData } from "@/config/product";
import Image from "next/image";

export function StickyBuyBar({ onOpenCart }: { onOpenCart: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-neutral-200 p-3 sm:p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-40 md:hidden animate-in slide-in-from-bottom-full">
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-lg overflow-hidden relative flex-shrink-0 bg-neutral-100">
            <Image src="/hero-product.png" alt={productData.name} fill className="object-cover" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-neutral-500 font-bold truncate">{productData.duration}</p>
            <p className="text-xl sm:text-2xl font-black text-neutral-900">${productData.price}</p>
          </div>
        </div>
        <button
          onClick={onOpenCart}
          className="flex-1 max-w-[140px] py-4 bg-rose-500 hover:bg-rose-600 active:bg-rose-600 text-white rounded-2xl font-black text-center transition-colors active:scale-95 min-h-[48px] flex items-center justify-center"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
