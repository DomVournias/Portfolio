import React from "react";
import { motion } from "framer-motion";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

const SmallSidebar = (props) => {
  return (
    <motion.div
      animate={props.animate}
      className="sidebar xs:hidden lg:block lg:right-0 xxl:right-10 lg:top-1/3 desk:right-32 "
    >
      <motion.ul
        className="flex flex-col justify-between gap-4 
        "
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.4,
          delay: 1,
          type: "spring",
          stiffness: 120,
        }}
      >
        <motion.li
          className="text-center"
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 0.4,
            delay: 1,
            type: "spring",
            stiffness: 120,
          }}
        >
          <AnchorLink to="/#first" className="inline-block p-2">
            <motion.span
              animate={props.animate2}
              whileHover={{
                scale: 1.2,
                opacity: 0.8,
                transition: {
                  duration: 0.1,
                },
              }}
              className="sidebar-button"
            />
          </AnchorLink>
        </motion.li>
        <motion.li
          className="text-center"
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 0.4,
            delay: 1.3,
            type: "spring",
            stiffness: 120,
          }}
        >
          <AnchorLink to="/#second" className="inline-block p-2">
            <motion.span
              animate={props.animate3}
              whileHover={{
                scale: 1.2,
                opacity: 0.8,
                transition: {
                  duration: 0.1,
                },
              }}
              className="sidebar-button"
            />
          </AnchorLink>
        </motion.li>
        <motion.li
          className="text-center"
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{
            duration: 0.4,
            delay: 1.6,
            type: "spring",
            stiffness: 120,
          }}
        >
          <AnchorLink to="/#third" className="inline-block p-2">
            <motion.span
              animate={props.animate4}
              whileHover={{
                scale: 1.2,
                opacity: 0.8,
                transition: {
                  duration: 0.1,
                },
              }}
              className="sidebar-button"
            />
          </AnchorLink>
        </motion.li>
        <motion.li
          className="text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 1.9,
            type: "spring",
            stiffness: 120,
          }}
        >
          <Link to="/projects">
            <motion.div
              className="text-center flex flex-col items-center justify-center"
              initial="rest"
              whileHover="hover"
              exit="rest"
            >
              <motion.svg
                variants={props.variants}
                transition="hover"
                className="w-16 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <motion.path
                    variants={props.variants2}
                    transition="hover"
                    d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
                    stroke-linecap="round"
                  />
                </g>
              </motion.svg>

              <motion.h3 variants={props.variants3} className="text-gray-naive">
                All Projects
              </motion.h3>
            </motion.div>
          </Link>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
};

export default SmallSidebar;
