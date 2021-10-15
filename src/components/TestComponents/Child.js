import React from "react";
import { motion } from "framer-motion";

export default function Child(ref1) {
  return (
    <div>
      <motion.div ref={ref1} animate={act} className="absolute p-5 text-left">
        <h3 className="text-5xl pb-3">Title 1</h3>
        <h4 className="text-2xl pb-8">Title 2</h4>
        <span className="px-2 pb-1 text-center bg-blue-600">1</span>
        <span className="px-2 pb-1 text-center bg-green-600">2</span>
        <span className="px-2 pb-1 text-center bg-purple-600">3</span>
      </motion.div>
    </div>
  );
}
