"use client";

import { useTheme } from "./theme-provider";
import { useState, useEffect } from "react";
import { Sun1, Moon } from "iconsax-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button 
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-100/10"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleTheme();
      }}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-100/10 text-foreground dark:hover:bg-gray-100/20 hover:bg-gray-200 focus:bg-gray-200 dark:focus:bg-gray-100/30 cursor-pointer transition-colors active:bg-gray-300 dark:active:bg-gray-100/40"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon size="24" color="#FF8A65" />
      ) : (
        <Sun1 size="24" color="#FF8A65" />
      )}
    </button>
  );
}