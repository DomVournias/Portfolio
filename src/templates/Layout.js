import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FooterAbout from "../components/Footer/FooterAbout";
import ProjectsNavbar from "../components/Navbar/ProjectsNavbar";
import { Helmet } from "react-helmet";

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0,
      // when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

export const Layout = ({ children, location, pageContext }) => {
  if (pageContext.layout === "thankyouPage") {
    return (
      <main className="bg-black ">
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <motion.main
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </main>
    );
  }
  if (pageContext.layout === "projectsPage") {
    return (
      <main className="bg-black ">
        <ProjectsNavbar />
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <motion.main
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
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
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <motion.main
            key={location.pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
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
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <motion.main
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </main>
  );
};

export default Layout;
