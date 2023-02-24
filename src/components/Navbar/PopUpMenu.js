import React from "react";
import PopUpMenuNavigation from "./PopUpMenuNavigation";
import { AnimatePresence, motion } from "framer-motion";

const PopUpMenu = (props) => {
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
                fillRule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0z"
              />
              <path
                fillRule="evenodd"
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
