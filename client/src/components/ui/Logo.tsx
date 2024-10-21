import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div>
      <div className="flex cursor-pointer items-center justify-start gap-2">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 1 }}
          className="hovered flex h-10 w-10 cursor-pointer items-center justify-start rounded-full text-2xl font-bold text-[var(--link-color)]"
        >
          .b
        </motion.span>
      </div>
    </div>
  );
}
