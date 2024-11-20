"use client";

import { useNotifications } from "@/context/NotificationContext";
import { Button } from "@/components/ui/button";

export default function NotificationTest() {
  const { addNotification } = useNotifications();

  const handleAddNotification = () => {
    console.log("Adding notification...");
    addNotification("Test Notification", "This is a test notification");
    console.log("Notification added");
  };

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Notification Test</h1>
      <Button onClick={handleAddNotification}>Add Test Notification</Button>
    </div>
  );
}
