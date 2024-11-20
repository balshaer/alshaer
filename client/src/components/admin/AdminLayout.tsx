import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface AdminLayoutProps {
  isOpen: any;
}

const AdminLayout: FunctionComponent<AdminLayoutProps> = () => {
  return (
    <div dir="ltr" className="flex min-h-screen bg-[var(--background)]">
      <Sidebar />

      <div className="flex w-full flex-1 flex-col">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default AdminLayout;
