import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArtVerse - A Journey Through Arts",
  description:
    "Explore the world's most iconic works of visual, performing, and literary arts in a modern digital showcase.",
  icons: [
    {
      rel: 'icon',
      url: '/shakespeare-logo.webp',
      type: 'image/webp'
    },
    {
      rel: 'apple-touch-icon',
      url: '/shakespeare-logo.webp',
      type: 'image/webp'
    }
  ],
  openGraph: {
    title: "ArtVerse - A Journey Through Arts",
    description: "Explore the world's most iconic works of visual, performing, and literary arts in a modern digital showcase.",
    images: ['/shakespeare-logo.webp'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ArtVerse - A Journey Through Arts",
    description: "Explore the world's most iconic works of visual, performing, and literary arts in a modern digital showcase.",
    images: ['/shakespeare-logo.webp'],
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + " min-h-screen bg-[#0a0a0a] text-white antialiased"}>
        {children}
      </body>
    </html>
  );
}
