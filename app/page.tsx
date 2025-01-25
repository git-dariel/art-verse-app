"use client";

import { useState, useEffect } from "react";
import { MainNavigation } from "./components/MainNavigation";
import { HeroSection } from "./components/landing/HeroSection";
import { FeaturedArt } from "./components/landing/FeaturedArt";
import { AboutSection } from "./components/landing/AboutSection";
import { ContactSection } from "./components/landing/ContactSection";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="min-h-screen bg-black relative overflow-hidden pt-10">
      <MainNavigation isLanding />

      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3), transparent 25%)`,
        }}
      />

      <HeroSection />
      <FeaturedArt />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
