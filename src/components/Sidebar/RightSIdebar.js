import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useInView } from "react-intersection-observer";

export default function RightSidebar() {
  const activeBtn = useAnimation();
  const [refFirst, inViewFirst] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inViewFirst) {
      activeBtn.start({
        backgroundColor: "white",
        transition: {
          duration: 0.3,
        },
      });
    }
    if (!inViewFirst) {
      activeBtn.start({
        backgroundColor: "#333333",
        transition: {
          duration: 0.3,
        },
      });
    }
  }, [activeBtn, inViewFirst]);

  const activeBtn2 = useAnimation();
  const [refSecond, inViewSecond] = useInView();

  useEffect(() => {
    if (inViewSecond) {
      activeBtn2.start({
        backgroundColor: "white",
        transition: {
          duration: 0.3,
        },
      });
    }
    if (!inViewSecond) {
      activeBtn2.start({
        backgroundColor: "#333333",
        transition: {
          duration: 0.3,
        },
      });
    }
  }, [activeBtn2, inViewSecond]);

  const activeBtn3 = useAnimation();
  const [refThird, inViewThird] = useInView();

  useEffect(() => {
    if (inViewThird) {
      activeBtn3.start({
        backgroundColor: "white",
        transition: {
          duration: 0.3,
        },
      });
    }
    if (!inViewThird) {
      activeBtn3.start({
        backgroundColor: "#333333",
        transition: {
          duration: 0.3,
        },
      });
    }
  }, [activeBtn3, inViewThird]);
  return (
    <div className="sidebar">
      <ul className="flex flex-col justify-between gap-4">
        <li className="text-center">
          <AnchorLink to="/projects#first" className="inline-block p-2">
            <motion.span
              animate={activeBtn}
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
        </li>
        <li className="text-center">
          <AnchorLink to="/projects#second" className="inline-block p-2">
            <motion.span
              animate={activeBtn2}
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
        </li>
        <li className="text-center">
          <AnchorLink to="/projects#third" className="inline-block p-2">
            <motion.span
              animate={activeBtn3}
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
        </li>
      </ul>
    </div>
  );
}
