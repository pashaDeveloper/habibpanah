"use client";

import { Bag2 } from "iconsax-react";

export function CartIcon() {
  return (
    <a 
      className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-100/10 text-foreground dark:hover:bg-gray-100/20 hover:bg-gray-200 focus:bg-gray-200 cursor-pointer transition-colors active:bg-gray-200" 
      href="/cart"
    >
      <div className="absolute border-2 border-white -right-1.5 top-0 w-5 h-5 bg-gray-300 rounded-full text-white text-center flex items-center justify-center">
        <h5 className="text-white text-[12px]">0</h5>
      </div>
      <Bag2 size="24" color="#FF8A65" />
    </a>
  );
}