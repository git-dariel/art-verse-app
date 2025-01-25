"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavButton } from "./NavButton";
import { useState } from "react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "visual", label: "Visual Arts" },
    { id: "performing", label: "Performing Arts" },
    { id: "literary", label: "Literary Arts" },
  ];

  return (
    <>
      {/* Mobile Navigation */}
      <div className="fixed top-0 left-0 right-0 md:hidden z-[100]">
        {/* Mobile Header */}
        <div className="bg-black/90 backdrop-blur-xl">
          <div className="flex items-center justify-between p-4">
            <motion.h1
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              whileHover={{ scale: 1.05 }}
            >
              ArtVerse
            </motion.h1>
            <button
              className="p-2 hover:bg-white/5 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="p-4 pt-20"
              >
                <div className="bg-black/50 rounded-2xl p-2 space-y-1">
                  {navItems.map((item) => (
                    <NavButton
                      key={item.id}
                      active={activeSection === item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </NavButton>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Navigation */}
      <div className="fixed top-0 left-0 right-0 hidden md:flex justify-center z-[100] px-4 pt-4">
        <motion.nav
          initial={{ y: -100, scale: 0.8 }}
          animate={{ y: 0, scale: 1 }}
          className="relative"
        >
          <motion.div className="bg-black/90 backdrop-blur-xl border border-white/10 shadow-lg rounded-full px-3 py-2">
            <div className="flex items-center justify-between md:justify-start gap-6">
              <motion.h1
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                whileHover={{ scale: 1.05 }}
              >
                ArtVerse
              </motion.h1>

              <div className="flex items-center bg-black/50 rounded-full p-1">
                {navItems.map((item) => (
                  <NavButton
                    key={item.id}
                    active={activeSection === item.id}
                    onClick={() => setActiveSection(item.id)}
                  >
                    {item.label}
                  </NavButton>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.nav>
      </div>
    </>
  );
}
