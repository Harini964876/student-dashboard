"use client";

import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  FileCode,
  Database,
  LucideIcon,
} from "lucide-react";

interface CourseCardProps {
  title: string;
  progress: number;
  iconName: string;
}

const iconMap: Record<string, LucideIcon> = {
  Code,
  Rocket,
  FileCode,
  Database,
};

export default function CourseCard({
  title,
  progress,
  iconName,
}: CourseCardProps) {
  const Icon = iconMap[iconName] || Code;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 14,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 0 40px rgba(34,211,238,0.15)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        relative overflow-hidden
        rounded-3xl p-6
        border border-zinc-800
        bg-zinc-950/60
        backdrop-blur-xl
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-cyan-500/10" />

      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div className="p-2 rounded-2xl bg-white/5 border border-white/10">
            <Icon
              size={22}
              className="text-cyan-300"
            />
          </div>

          <span className="text-xs text-zinc-400">
            {progress}%
          </span>
        </div>

        <h2 className="mt-5 text-lg font-medium">
          {title}
        </h2>

        <div className="mt-4 h-1.5 rounded-full bg-white/5 overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: progress / 100,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            style={{ originX: 0 }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          />
        </div>

        <p className="mt-3 text-xs text-zinc-500">
          {progress}% completed
        </p>
      </div>
    </motion.article>
  );
}