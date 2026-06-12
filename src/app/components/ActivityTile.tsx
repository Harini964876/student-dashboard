"use client";

import { motion } from "framer-motion";

const levels = [
  1, 3, 2, 4, 0, 2, 1,
  2, 4, 1, 3, 2, 0, 1,
  4, 2, 3, 1, 2, 4, 2,
  1, 0, 2, 4, 3, 2, 1,
  2, 3, 4, 1, 0, 2, 4,
];

const opacityMap = {
  0: "bg-cyan-500/10",
  1: "bg-cyan-500/20",
  2: "bg-cyan-500/40",
  3: "bg-cyan-500/60",
  4: "bg-cyan-400/90",
};

export default function ActivityTile() {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      border border-zinc-800
      bg-zinc-950/70
      backdrop-blur-xl
      p-6
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-cyan-500/5" />

      <div className="relative z-10">
        <h2 className="text-xl font-semibold">
          Activity
        </h2>

        <p className="text-zinc-500 text-sm mt-1 mb-6">
          Last 30 days
        </p>

        <div className="grid grid-cols-7 gap-4">
          {levels.map((level, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: i * 0.02,
              }}
              whileHover={{
                scale: 1.35,
              }}
              className={`
                h-5
                w-5
                rounded-md
                cursor-pointer
                transition-colors
                ${opacityMap[level as keyof typeof opacityMap]}
              `}
            />
          ))}
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          Consistent learning activity throughout the month.
        </p>
      </div>
    </motion.article>
  );
}