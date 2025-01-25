"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavButton } from "./NavButton";
import { useState } from "react";
import Link from "next/link";

interface MainNavigationProps {
  isLanding?: boolean;
  activeSection?: string;
  setActiveSection?: (section: string) => void;
}

export function MainNavigation({
  isLanding = false,
  activeSection,
  setActiveSection,
}: MainNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleNavigation = (item: { id: string; onClick?: () => void }) => {
    if (item.onClick) {
      item.onClick();
    }
    setIsMenuOpen(false);
  };

  const navItems = isLanding
    ? [
        { id: "gallery", label: "Gallery", href: "/gallery" },
        { id: "about", label: "About", onClick: () => scrollToSection("about") },
        { id: "contact", label: "Contact", onClick: () => scrollToSection("contact") },
      ]
    : [
        { id: "visual", label: "Visual Arts", onClick: () => setActiveSection?.("visual") },
        {
          id: "performing",
          label: "Performing Arts",
          onClick: () => setActiveSection?.("performing"),
        },
        { id: "literary", label: "Literary Arts", onClick: () => setActiveSection?.("literary") },
      ];

  return (
    <>
      {/* Mobile Navigation */}
      <div className="fixed top-0 left-0 right-0 md:hidden z-[100]">
        {/* Mobile Header */}
        <div className="bg-black/90 backdrop-blur-xl">
          <div className="flex items-center justify-between p-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <motion.h1
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                whileHover={{ scale: 1.05 }}
              >
                ArtVerse
              </motion.h1>
            </Link>
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
                className="flex items-center justify-center min-h-screen p-4"
              >
                <div className="w-full max-w-sm">
                  <div className="flex flex-col bg-black/50 rounded-2xl p-2 space-y-2">
                    {navItems.map((item) => (
                      <NavButton
                        key={item.id}
                        active={activeSection === item.id}
                        onClick={() => handleNavigation(item)}
                        href={item.href}
                      >
                        {item.label}
                      </NavButton>
                    ))}
                  </div>
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
              <Link href="/">
                <motion.h1
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                  whileHover={{ scale: 1.05 }}
                >
                  ArtVerse
                </motion.h1>
              </Link>

              <div className="flex items-center bg-black/50 rounded-full p-1">
                {navItems.map((item) => (
                  <NavButton
                    key={item.id}
                    active={activeSection === item.id}
                    onClick={item.onClick}
                    href={item.href}
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
