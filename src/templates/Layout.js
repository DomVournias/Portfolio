import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FooterAbout from "../components/Footer/FooterAbout";

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

export const Layout = ({ children, location, pageContext }) => {
  if (pageContext.layout === "projectsPage") {
    return (
      <main className="bg-black ">
        <AnimatePresence>
          <motion.main
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="opacity-loader"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </main>
    );
  }
  if (pageContext.layout === "special") {
    return (
      <main className="bg-black ">
        <Navbar />
        <AnimatePresence>
          <motion.main
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="opacity-loader"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <FooterAbout />
      </main>
    );
  }
  return (
    <main className="bg-black ">
      <Navbar />
      <AnimatePresence>
        <motion.main
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
          className="opacity-loader"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </main>
  );
};

export default Layout;
