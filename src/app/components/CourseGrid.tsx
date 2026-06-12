"use client";

import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

interface Course {
  id: string | number;
  title: string;
  progress: number;
  icon_name: string;
}

interface Props {
  courses: Course[];
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export default function CourseGrid({ courses }: Props) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="contents"
    >
      {courses.map((course) => (
        <motion.div
          key={course.id}
          variants={item}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <CourseCard
            title={course.title}
            progress={course.progress}
            iconName={course.icon_name}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}