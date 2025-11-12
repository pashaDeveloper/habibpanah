"use client";

import { ThemeToggle } from "./theme-toggle";
import { FavoriteIcon } from "@/app/components/shared/userAccount/favorite";
import { CartIcon } from "@/app/components/shared/userAccount/cart";
import { NotificationIcon } from "@/app/components/shared/userAccount/notification";

export function Navbar() {
  return (
    <>
      <nav className="top-nav z-20 bg-white bg-background border dark:bg-[#1A1A1A] border-gray-400/20 dark:border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="shrink-0 font-bold text-xl">
                Fabric Store
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline gap-x-4 justify-center">
                  <a href="/" className="text-foreground hover:bg-foreground/10 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                  <a href="/products" className="text-foreground/80 hover:bg-foreground/10 px-3 py-2 rounded-md text-sm font-medium">Products</a>
                  <a href="#" className="text-foreground/80 hover:bg-foreground/10 px-3 py-2 rounded-md text-sm font-medium">About</a>
                  <a href="#" className="text-foreground/80 hover:bg-foreground/10 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex justify-center items-center gap-x-4">
                <ThemeToggle />
                <FavoriteIcon />
                <CartIcon />
                <NotificationIcon />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}