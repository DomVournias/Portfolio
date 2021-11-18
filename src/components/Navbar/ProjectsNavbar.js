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

export default function ProjectsNavbar() {
  return (
    <header className="block w-full z-10">
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
            <StaticImage
              src="../../images/DomFavBlack-512x512.png"
              alt="Dom Vournias Portfolio"
              quality="90"
              className="w-8"
            />
          </Link>
        </motion.div>
        <div>
          <motion.nav
            variants={variants2}
            initial="initial"
            animate="enter"
            className="relative"
          >
            <Link
              to="/projects/"
              className="xs:text-md xs:px-3 md:text-lg md:px-6 py-2 font-bold  text-white transition duration-200 ease-in-out hover:text-opacity-90"
              activeStyle={activeStyles}
            >
              Projects
            </Link>
            <Link
              to="/about/"
              className="xs:text-md xs:px-3 md:text-lg md:px-6 py-2 font-bold  text-white transition duration-200 ease-in-out hover:text-opacity-90"
              activeStyle={activeStyles}
            >
              About
            </Link>
          </motion.nav>
        </div>
      </div>
    </header>
  );
}
