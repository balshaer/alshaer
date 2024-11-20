import { Bell, DeleteIcon, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useNotifications } from "@/context/NotificationContext";
import CompactNumber from "../featuers/CompactNumber";

export const NotificationBell: React.FC = () => {
  const { notifications, removeNotification, clearAllNotifications } =
    useNotifications();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="relative">
          <Bell className="h-5 w-5" />
          {notifications.length > 0 && (
            <span className="absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
              <CompactNumber value={notifications.length} />
            </span>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 rounded-lg border-none p-0">
        <Card className="w-full rounded-lg border-none">
          <CardContent className="p-0">
            <div className="flex items-center justify-between border-b border-gray-600 py-4">
              <h2 className="text-lg font-semibold text-[var(--headline)]">
                Notifications
              </h2>
              {notifications.length > 0 && (
                <button
                  className="hoverd text-sm text-[var(--headline)] opacity-65 hover:text-red-300 hover:opacity-100"
                  onClick={clearAllNotifications}
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              )}
            </div>
            <ScrollArea className="h-[300px]">
              {notifications.length === 0 ? (
                <p className="p-4 text-center text-sm text-gray-500">
                  No notifications
                </p>
              ) : (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start justify-between border-b border-gray-600 py-3"
                  >
                    <div>
                      <h3 className="font-medium text-[var(--headline)]">
                        {notification.title}
                      </h3>
                      <p className="text-sm text-[var(--headline)] opacity-60">
                        {notification.message}
                      </p>
                      <p className="text-xs text-[var(--headline)] opacity-40">
                        {notification.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                    <button
                      className="hoverd text-sm text-[var(--headline)] hover:text-red-400"
                      onClick={() => removeNotification(notification.id)}
                    >
                      <DeleteIcon className="h-4 w-4" />
                    </button>
                  </div>
                ))
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
};
