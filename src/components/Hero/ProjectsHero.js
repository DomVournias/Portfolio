import React from "react";
import { motion } from "framer-motion";

const ProjectsHero = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        className="xs:text-5xl md:text-7xl text-white "
      >
        Hi, I'm Dom
      </motion.h1>
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.6,
          type: "spring",
          stiffness: 100,
        }}
        className="xs:text-2xl md:text-4xl text-gray pb-10"
      >
        A front-end developer,
        <br /> who loves building web apps
      </motion.h2>
    </div>
  );
};

export default ProjectsHero;
