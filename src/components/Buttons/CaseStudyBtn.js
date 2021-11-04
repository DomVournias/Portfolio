import React from "react";
import { motion } from "framer-motion";

const CaseStudyBtn = () => {
  const textVariants = {
    rest: {
      x: 0,
      opacity: 0,
    },
    hover: {
      x: 3,
      opacity: 1,
      color: "white",
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };
  const arrowVariants = {
    rest: {
      x: 0,
      strokeWidth: 8,
      stroke: "#333",
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeInOut",
      },
    },

    hover: {
      x: 3,
      stroke: "#fff",
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <motion.div
        className="xs:hidden xs:w-1/5 lg:block lg:w-full text-left flex flex-col items-center justify-center"
        initial="rest"
        whileHover="hover"
        exit="rest"
      >
        <motion.svg
          variants={arrowVariants}
          transition="hover"
          className="w-16 md:hidden lg:block mt-10 mb-2 overflow-visible"
          viewBox="0 0 61 41"
          fill="none"
        >
          <motion.path
            variants={arrowVariants}
            transition="hover"
            d="M39.813 37.806l15.312-17.018L39.813 3.775M56.5 20.787H.5"
            stroke-width="8"
          />
        </motion.svg>

        <motion.h3 variants={textVariants} className="text-sm">
          Case Study
        </motion.h3>
      </motion.div>

      <svg
        className="xs:w-14 lg:hidden fill-current text-white duration-200 opacity-30 hover:opacity-60  "
        aria-hidden="true"
        role="img"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 16 16"
      >
        <rect fill="none" x="0" y="0" stroke="none" />
        <g transform="rotate(-90 8 8)">
          <g>
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
          </g>
        </g>
      </svg>
    </>
  );
};
export default CaseStudyBtn;
