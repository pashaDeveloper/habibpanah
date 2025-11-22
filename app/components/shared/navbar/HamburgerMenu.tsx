"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { 
  HomeIcon, 
  InfoIcon, 
  PhoneIcon, 
  StoreIcon
} from 'lucide-react';

export function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('navigation');

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-foreground p-2 rounded-md focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg 
          className="h-6 w-6" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          ) : (
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          )}
        </svg>
      </button>

      {/* Side sliding menu fitted to content */}
      <div 
        className={`fixed top-16 right-4 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="relative w-64 bg-white dark:bg-[#1A1A1A] shadow-xl rounded-lg">
          <div className="p-4">
            <div className="flex justify-end">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground p-2 rounded-md focus:outline-none"
                aria-label="Close menu"
              >
                <svg 
                  className="h-6 w-6" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>
            
            <div className="mt-4 space-y-3 pb-4">
              {/* Navigation links with icons */}
              <a 
                href="/" 
                className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <HomeIcon className="h-5 w-5" />
                <span>{t('home')}</span>
              </a>
              
              <a 
                href="/about" 
                className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <InfoIcon className="h-5 w-5" />
                <span>{t('about')}</span>
              </a>
              
              <a 
                href="/contact" 
                className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>{t('contact')}</span>
              </a>
              
              {/* Store item */}
              <a 
                href="/products" 
                className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <StoreIcon className="h-5 w-5" />
                <span>{t('products')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* No backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}