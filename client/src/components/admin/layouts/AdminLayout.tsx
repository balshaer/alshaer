/* eslint-disable @typescript-eslint/no-unused-vars */
import i18n from "@/i18n";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { MenuContext } from "@/context/MenuContext";

export default function AdminLayout() {
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  const isOpen = useContext(MenuContext);

  return (
    <div className="flex min-h-screen w-full">
      <div className="fixed left-0 top-0 z-0 h-full w-full max-md:z-50 max-md:hidden">
        <Sidebar />
      </div>

      {/* mobile view  */}

      {isOpen && (
        <AnimatePresence>
          <motion.div
            initial={{
              x: "-100vw",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.2,
            }}
            exit={{
              x: "-100vw",
            }}
            className="fixed left-0 top-0 z-0 h-full w-full max-md:z-0"
          >
            <Sidebar />
          </motion.div>
        </AnimatePresence>
      )}

      <div className="ml-[20%] flex w-4/5 flex-col max-md:ml-0 max-md:w-full">
        <Navbar />

        <motion.div
          dir={direction}
          initial={{ opacity: "0%" }}
          animate={{ opacity: "100%" }}
          transition={{ duration: "0.5" }}
          className="z-50 flex-grow overflow-y-auto bg-[var(--background)] px-5 py-0"
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
}
