import React from "react";
import Navbar from "../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";

const duration = 0.5;

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration },
  },
};
export const Layout = ({ children, location }) => {
  return (
    <div className="bg-black">
      <Navbar />

      <AnimatePresence>
        <motion.main
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="max-w-6xl justify-center text-center m-auto items-center opacity-loader bg-black"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
