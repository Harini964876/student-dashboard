"use client";

import {
  Home,
  BookOpen,
  BarChart3,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";

const items = [
  {
    id: "home",
    icon: Home,
  },
  {
    id: "courses",
    icon: BookOpen,
  },
  {
    id: "analytics",
    icon: BarChart3,
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("home");

  return (
    <aside
      className="
      hidden md:flex
      flex-col
      items-center
      py-8
      gap-4
      border-r
      border-zinc-800
      bg-zinc-950
      md:w-16
      xl:w-24
      "
    >
      {items.map(({ id, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setActive(id)}
          className="relative p-3"
        >
          {active === id && (
            <motion.div
              layoutId="activeTab"
              className="
                absolute inset-0
                rounded-xl
                bg-cyan-500/20
                border border-cyan-500/30
              "
            />
          )}

          <motion.div
            whileHover={{
              scale: 1.1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <Icon
              size={22}
              className={`
              relative z-10
              ${
                active === id
                  ? "text-cyan-400"
                  : "text-zinc-400"
              }
              `}
            />
          </motion.div>
        </button>
      ))}
    </aside>
  );
}