"use client";

import { ThemeToggle } from "./theme-toggle";
import { FavoriteIcon } from "@/app/components/shared/userAccount/favorite";
import { CartIcon } from "@/app/components/shared/userAccount/cart";
import { NotificationIcon } from "@/app/components/shared/userAccount/notification";
import { Navigation } from "./shared/language/Navigation";
import { useTranslations } from 'next-intl';
import { HamburgerMenu } from "@/app/components/shared/navbar/HamburgerMenu";

export function Navbar() {
  // Use translations based on the current locale
  const t = useTranslations('home');
  
  return (
    <>
      <nav className="top-nav z-20 font-Vazir! bg-white bg-background border dark:bg-[#1A1A1A] border-gray-400/20 dark:border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 flex-row-reverse">
            <div className="flex items-center">
              <div className="hidden md:flex justify-center items-center gap-x-4">
                <ThemeToggle />
                <FavoriteIcon />
                <CartIcon />
                <NotificationIcon />
              </div>
              
              {/* Hamburger menu for mobile */}
              <HamburgerMenu />
            </div>
            
            <div className="flex items-center gap-x-4">
              <div className="shrink-0 text-4xl" style={{ fontFamily: 'DigiNozha, var(--font-digi-nozha), Vazir, var(--font-vazir), sans-serif' }}>
                {t('title')}
              </div>
              <div className="hidden md:block">
                <Navigation />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}