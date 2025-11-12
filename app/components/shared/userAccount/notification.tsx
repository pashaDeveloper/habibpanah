import { Notification } from "iconsax-react";

export function NotificationIcon() {
  return (
    <button 
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-100/10 text-foreground dark:hover:bg-gray-100/20 hover:bg-gray-200 focus:bg-gray-200 cursor-pointer transition-colors active:bg-gray-200"
    >
      <span className="sr-only">View notifications</span>
      <Notification size="24" color="#FF8A65" />
    </button>
  );
}