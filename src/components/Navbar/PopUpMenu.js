import React from "react";
import PopUpMenuNavigation from "./PopUpMenuNavigation";
import { AnimatePresence, motion } from "framer-motion";

const PopUpMenu = (props) => {
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        className={
          props.logic
            ? "fixed flex flex-row-reverse w-full h-full bg-third z-[999]"
            : "hidden"
        }
      >
        <div
          className="fixed mr-4 mt-4 w-[fit-content] h-[fit-content]"
          onClick={() => props.btn(false)}
        >
          <svg
            className="w-8 cursor-pointer"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <g fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0z"
              />
              <path
                fill-rule="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0z"
              />
            </g>
          </svg>
        </div>
        <PopUpMenuNavigation />
      </motion.div>
    </AnimatePresence>
  );
};

export default PopUpMenu;
