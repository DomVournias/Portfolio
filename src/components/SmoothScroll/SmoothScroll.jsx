import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    scrollRef && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useViewportScroll(); //
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 20, mass: 1.25, stiffness: 55 }; // easing of smooth scroll
  const spring = useSpring(transform, physics); // apply easing to the negative scroll value
  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }} // translateY of scroll container using negative scroll value
        className="fixed top-0 left-0 w-full overflow-hidden transition-transform"
      >
        {children}
      </motion.div>
      <div style={{ height: pageHeight }} />
    </>
  );
};

export default SmoothScroll;