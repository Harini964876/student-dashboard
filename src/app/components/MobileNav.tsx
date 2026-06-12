"use client";

import {
  Home,
  BookOpen,
  BarChart3,
} from "lucide-react";

export default function MobileNav() {
  return (
    <nav
      className="
      fixed bottom-0 left-0 right-0
      md:hidden
      bg-zinc-950/90
      backdrop-blur-xl
      border-t border-zinc-800
      flex justify-around
      py-4
      z-50
      "
    >
      <Home />
      <BookOpen />
      <BarChart3 />
    </nav>
  );
}