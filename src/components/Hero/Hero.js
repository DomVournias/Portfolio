import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

const avatarVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.3,
    delay: 3,
  },
};

const Hero = () => {
  return (
    <div className="pb-20 h-screen m-0 overflow-hidden">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        className="xs:text-5xl md:text-7xl text-white pt-16 pb-4"
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
      <div className="flex self-center place-content-center">
        <div className="relative max-w-3xl">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 0.2 }}
            className="absolute top-10 xs:left-4 sm:left-6 md:-left-10 "
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: -15 }}
              transition={{ yoyo: Infinity, duration: 3 }}
            >
              <StaticImage
                src="../../images/keyboard.png"
                placeholder="blurred"
                draggable={false}
                alt="keyboard-icon"
                quality="100"
                className="xs:w-28 sm:w-32 md:w-36"
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.8, duration: 0.2 }}
            className="absolute top-10 xs:right-4 sm:right-6 md:-right-10 "
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: -15 }}
              transition={{ yoyo: Infinity, duration: 3 }}
            >
              <StaticImage
                src="../../images/camera.png"
                placeholder="blurred"
                draggable={false}
                alt="camera-icon"
                quality="100"
                className="xs:w-28 sm:w-32 md:w-36"
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 10 }}
            transition={{ yoyo: Infinity, duration: 4 }}
          >
            <StaticImage
              src="../../images/DVAVATAR.png"
              placeholder="blurred"
              draggable={false}
              alt="avatar"
              quality="100"
              className=" mx-4 max-w-xl"
              initial="hidden"
              animate="visible"
              variants={avatarVariants}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
