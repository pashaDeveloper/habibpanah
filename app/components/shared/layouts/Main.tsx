import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/components/footer";
import ToggleLanguage from "@/app/components/shared/language/ToggleLanguage";
import { ThemeToggle } from "@/app/components/theme-toggle";
import { FavoriteIcon } from "@/app/components/shared/userAccount/favorite";
import { CartIcon } from "@/app/components/shared/userAccount/cart";
import { NotificationIcon } from "@/app/components/shared/userAccount/notification";
import { Navigation } from "@/app/components/shared/language/Navigation";

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 min-h-screen">
      <Navbar />
      <main className="grow ">
        {children}
      </main>
      <Footer />
      <ToggleLanguage />
      
      {/* Mobile navigation bar at the bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-[#1A1A1A] border-t border-gray-200 dark:border-gray-700 z-50">
        <div className="flex justify-around items-center py-3">
          <ThemeToggle />
          <FavoriteIcon />
          <CartIcon />
          <NotificationIcon />
        </div>
      </div>
    </div>
  );
}