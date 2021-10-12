import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

const activeStyles = {
  color: "white",
};

const variants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  enter: {
    opacity: 1,
    y: 0,

    transition: {
      type: "spring",
      duration: 1,
      delay: 0.5,
      bounce: 0.5,
      ease: "easeInOut",
    },
  },
};

const variants2 = {
  initial: {
    opacity: 0,
    y: -100,
  },
  enter: {
    opacity: 1,
    y: 0,

    transition: {
      type: "spring",
      duration: 1,
      delay: 0.8,
      bounce: 0.5,
      ease: "easeInOut",
    },
  },
};

export default function Navbar() {
  return (
    <header className="block w-full">
      <div className="flex flex-row h-20 max-w-6xl  justify-between m-auto items-center px-4">
        <motion.div
          variants={variants}
          initial="initial"
          animate="enter"
          className=""
        >
          <Link
            to="/"
            className="flex flex-row opacity-100 hover:opacity-75 transition duration-200 ease-in-out"
          >
            <StaticImage src="../images/dovm.png" className="w-8" />
            <div className="pl-3 text-lg font-bold text-gray">Dom Vournias</div>
          </Link>
        </motion.div>
        <div>
          <motion.nav
            variants={variants2}
            initial="initial"
            animate="enter"
            className="relative"
          >
            <Link to="/" className="nav-link" activeStyle={activeStyles}>
              Work
            </Link>
            <Link to="/about/" className="nav-link" activeStyle={activeStyles}>
              About
            </Link>
            <Link to="/tests/" className="nav-link" activeStyle={activeStyles}>
              Tests
            </Link>
          </motion.nav>
        </div>
      </div>
    </header>
  );
}