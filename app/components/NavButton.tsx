"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface NavButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  href?: string;
}

export function NavButton({ children, active, onClick, href }: NavButtonProps) {
  const className = `relative w-full md:w-auto px-4 py-2.5 md:py-2 rounded-xl md:rounded-full text-sm font-medium transition-colors text-center md:text-left ${
    active ? "text-white" : "text-gray-400 hover:text-white"
  }`;

  const content = (
    <>
      {active && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-pink-600/50 rounded-xl md:rounded-full"
          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {content}
    </button>
  );
}
