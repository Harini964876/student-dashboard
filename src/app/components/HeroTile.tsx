"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.01,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 16,
      }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      border border-zinc-800
      bg-zinc-950/70
      backdrop-blur-xl
      p-10
      min-h-[260px]
      "
    >
      {/* Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

      {/* Cyan Blob */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-0
        right-0
        h-72
        w-72
        rounded-full
        bg-cyan-500/10
        blur-3xl
        "
      />

      {/* Purple Blob */}
      <motion.div
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-0
        left-0
        h-64
        w-64
        rounded-full
        bg-purple-500/10
        blur-3xl
        "
      />

      <div className="relative z-10">
        <h1 className="text-5xl font-bold tracking-tight text-white">
          Welcome Back, Harini 👋
        </h1>

        <p className="mt-4 text-xl text-zinc-400">
          Learning Streak 🔥 12 Days
        </p>

        <div className="mt-10 flex gap-12">
          <div>
            <p className="text-sm text-zinc-500">
              Courses Active
            </p>

            <p className="text-4xl font-bold text-white mt-1">
              4
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-500">
              Completion Rate
            </p>

            <p className="text-4xl font-bold text-white mt-1">
              65%
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}