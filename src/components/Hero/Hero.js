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

export default function Hero() {
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
            className="absolute top-20 xs:left-4 sm:left-6 md:left-4 "
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: -15 }}
              transition={{ yoyo: Infinity, duration: 3 }}
            >
              <StaticImage
                src="../../images/keyboard.png"
                draggable={false}
                alt="avatar"
                quality="100"
                className="xs:w-24 sm:w-32 md:w-40"
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.8, duration: 0.2 }}
            className="absolute top-20 xs:right-4 sm:right-6 md:right-6 "
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: -15 }}
              transition={{ yoyo: Infinity, duration: 3 }}
            >
              <StaticImage
                src="../../images/camera.png"
                draggable={false}
                alt="avatar"
                quality="100"
                className="xs:w-24 sm:w-32 md:w-40"
              />
            </motion.div>
          </motion.div>
          <StaticImage
            src="../../images/DomAvatar (1).png"
            draggable={false}
            alt="avatar"
            quality="100"
            className="absolute translate-x-1/2 mx-4 max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={avatarVariants}
          />
        </div>
      </div>
    </div>
  );
}
