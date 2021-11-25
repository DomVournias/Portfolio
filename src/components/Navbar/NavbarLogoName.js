import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

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
      delay: 1,
      bounce: 0.5,
      ease: "easeInOut",
    },
  },
};

const NavbarLogoName = () => {
  return (
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
          src="../../images/DomFav-512x512.png"
          alt="Dom Vournias Portfolio"
          quality="90"
          className="w-8"
        />

        <div className="pl-3 text-lg font-bold text-gray xs:hidden sm:block">
          Dom Vournias
        </div>
      </Link>
    </motion.div>
  );
};

export default NavbarLogoName;
