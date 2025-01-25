"use client";

import { motion } from "framer-motion";

interface NavButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

export function NavButton({ children, active, onClick }: NavButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        relative w-full md:w-auto px-4 py-2.5 rounded-xl md:rounded-full text-sm font-medium
        ${active ? "text-white" : "text-gray-400 hover:text-white"}
      `}
    >
      <span className="relative z-10">{children}</span>
      {active && (
        <motion.div
          className="absolute inset-0 rounded-xl md:rounded-full bg-white/10"
          layoutId="activeTab"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.button>
  );
}
