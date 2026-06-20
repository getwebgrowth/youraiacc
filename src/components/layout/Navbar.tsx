"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export function Navbar({ onOpenCart }: { onOpenCart: () => void }) {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-neutral-100">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6 sm:gap-12 min-w-0 flex-1">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-lg sm:text-xl font-black italic tracking-tighter text-rose-500 whitespace-nowrap">
              DIGIBRO
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-[13px] font-black uppercase italic text-neutral-400">
            <Link href="/" className="text-neutral-900 hover:text-rose-500 transition-colors">Home</Link>
            <Link href="#support" className="hover:text-rose-500 transition-colors">Support</Link>
            <Link href="#subscription" className="hover:text-rose-500 transition-colors">Subscription</Link>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <button
            onClick={onOpenCart}
            className="p-2 text-indigo-500 hover:bg-indigo-50 rounded-full transition-colors relative flex-shrink-0"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">1</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
