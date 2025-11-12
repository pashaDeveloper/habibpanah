
import { ThemeToggle } from "@/app/components/theme-toggle";
import { FavoriteIcon } from "./favorite";
import { CartIcon } from "./cart";
import { NotificationIcon } from "./notification";

export function UserAccount() {
  return (
    <div className="flex justify-center items-center gap-x-4">
      <ThemeToggle />
      <FavoriteIcon />
      <CartIcon />
      <NotificationIcon />
    </div>
  );
}