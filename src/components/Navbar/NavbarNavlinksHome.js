import React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import NavbarSocialsHome from "./NavbarSocialsHome";

const activeStyles = {
  color: "white",
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
      delay: 1,
      bounce: 0.5,
      ease: "easeInOut",
    },
  },
};
const NavbarNavlinksHome = () => {
  return (
    <motion.nav
      variants={variants2}
      initial="initial"
      animate="enter"
      className="flex items-center"
    >
      <Link
        to="/projects/"
        className="xs:text-md xs:px-3 md:text-lg md:px-6 py-2 font-bold  text-gray transition duration-200 ease-in-out hover:text-white"
        activeStyle={activeStyles}
      >
        Projects
      </Link>

      <Link
        to="/about/"
        className="xs:text-md xs:px-3 md:text-lg md:px-6 py-2 font-bold  text-gray transition duration-200 ease-in-out hover:text-white"
        activeStyle={activeStyles}
      >
        About
      </Link>
      <NavbarSocialsHome />
    </motion.nav>
  );
};

export default NavbarNavlinksHome;
