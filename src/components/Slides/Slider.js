import React, { useRef, useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";
import ProjectsButton from "../Buttons/ProjectsButton";
import ContactForm from "../Forms/ContactForm";
import CaseStudyBtn from "../Buttons/CaseStudyBtn";

export default function Slider() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 3
      ) {
        nodes {
          frontmatter {
            stack3
            stack2
            stack1
            slug
            place
            description
            date
            company
            title
            thumbImg {
              childImageSharp {
                gatsbyImageData
                id
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allMarkdownRemark.nodes;

  const slug1 = projects[0].frontmatter.slug;
  const slug2 = projects[1].frontmatter.slug;
  const slug3 = projects[2].frontmatter.slug;

  const title1 = projects[0].frontmatter.title;
  const title2 = projects[1].frontmatter.title;
  const title3 = projects[2].frontmatter.title;

  const desc1 = projects[0].frontmatter.description;
  const desc2 = projects[1].frontmatter.description;
  const desc3 = projects[2].frontmatter.description;

  const stack1 = projects[0].frontmatter.stack1;
  const stack2 = projects[0].frontmatter.stack2;
  const stack3 = projects[0].frontmatter.stack3;

  const stack1B = projects[1].frontmatter.stack1;
  const stack2B = projects[1].frontmatter.stack2;
  const stack3B = projects[1].frontmatter.stack3;

  const stack1C = projects[2].frontmatter.stack1;
  const stack2C = projects[2].frontmatter.stack2;
  const stack3C = projects[2].frontmatter.stack3;

  const image1 = projects[0].frontmatter.thumbImg.childImageSharp;
  const image2 = projects[1].frontmatter.thumbImg.childImageSharp;
  const image3 = projects[2].frontmatter.thumbImg.childImageSharp;
  // Animations

  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.7,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.7,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.7,
  });

  // First Box Animation

  useEffect(() => {
    if (inView) {
      animation.start({
        display: "block",
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          bounce: 0.3,
          ease: "easeInOut",
        },
      });
    }
    if (!inView) {
      animation.start({
        display: "none",
        opacity: 0,
        x: -30,
      });
    }
  }, [animation, inView]);

  // Second Box Animation

  useEffect(() => {
    if (inView2) {
      animation2.start({
        display: "block",
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          duration: 2,
          ease: "easeInOut",
          bounce: 0.3,
        },
      });
    }
    if (!inView2) {
      animation2.start({
        display: "none",
        opacity: 0,
        x: -30,
      });
    }
  }, [animation2, inView2]);

  // Third Box Animation

  useEffect(() => {
    if (inView3) {
      animation3.start({
        display: "block",
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          ease: "easeInOut",
          duration: 2,
          bounce: 0.3,
        },
      });
    }
    if (!inView3) {
      animation3.start({
        display: "none",
        opacity: 0,
        x: -30,
      });
    }
  }, [animation3, inView3]);

  // Pictures Animations

  const animation4 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation4.start({
        rotate: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      animation4.start({
        rotate: 10,
        opacity: 0.7,
      });
    }
  }, [animation4, inView]);

  const animation5 = useAnimation();

  useEffect(() => {
    if (inView2) {
      animation5.start({
        rotate: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView2) {
      animation5.start({
        rotate: -10,
        opacity: 0.7,
      });
    }
  }, [animation5, inView2]);

  const animation6 = useAnimation();

  useEffect(() => {
    if (inView3) {
      animation6.start({
        rotate: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView3) {
      animation6.start({
        rotate: -10,
        opacity: 0.7,
      });
    }
  }, [animation6, inView3]);

  const animation7 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation7.start({
        scale: 1.1,
        opacity: 1,
        transition: {
          type: "spring",
          ease: "easeInOut",
          bounce: 0.4,
          duration: 2,
        },
      });
    }
    if (!inView) {
      animation7.start({
        scale: 0.1,
        opacity: 0,
        transition: {
          duration: 0.6,
        },
      });
    }
  }, [animation7, inView]);

  const animation8 = useAnimation();
  const [ref8, inView8] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView2) {
      animation8.start({
        scale: 1.1,
        opacity: 1,
        transition: {
          type: "spring",
          ease: "easeInOut",
          bounce: 0.4,
          duration: 2,
        },
      });
    }
    if (!inView2) {
      animation8.start({
        scale: 0.1,
        opacity: 0,
        transition: {
          duration: 0.6,
        },
      });
    }
  }, [animation8, inView2]);

  const animation9 = useAnimation();
  const [ref9, inView9] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView3) {
      animation9.start({
        scale: 1.1,
        opacity: 1,

        transition: {
          type: "spring",
          ease: "easeInOut",
          bounce: 0.4,
          duration: 2,
        },
      });
    }
    if (!inView3) {
      animation9.start({
        scale: 0.1,
        opacity: 0,

        transition: {
          duration: 0.6,
        },
      });
    }
  }, [animation9, inView3]);

  const Bouncing = {
    initial: {
      opacity: 1,
      zoom: 0,
      y: 0,
    },
    enter: {
      y: 30,
      transition: {
        duration: 3,
        delay: 0.1,
        yoyo: Infinity,
      },
    },
  };

  const animation10 = useAnimation();
  const [refTop, inViewTop] = useInView({ threshold: 0.5 });
  const [refBottom, inViewBottom] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView + inView2 + inView3) {
      animation10.start({
        scale: 1,
        transition: {
          duration: 0.3,
        },
      });
    } else {
      animation10.start({
        scale: 0,
        transition: {
          duration: 0.3,
        },
      });
    }
  }, [animation10, inViewTop, inViewBottom]);

  // Sidebar Animations

  const activeBtn = useAnimation();
  const [refFirst, inViewFirst] = useInView({ threshold: 0.5 });

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
  const [refSecond, inViewSecond] = useInView({ threshold: 0.5 });

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
  const [refThird, inViewThird] = useInView({ threshold: 0.5 });

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

  const plusVariants = {
    rest: {
      strokeWidth: 3,
      stroke: "#333",
      transition: {
        duration: 0.6,
        type: "tween",
        ease: "easeInOut",
      },
    },
    hover: {
      stroke: "#fff",
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      stroke: "#333",
      pathLength: 0.6,
    },
  };

  const textVariants = {
    rest: {
      x: 0,
      opacity: 0,
    },
    hover: {
      x: 3,
      opacity: 1,
      color: "white",
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="text-center">
      <div className="fixed box-border xs:z-50 xs:h-1/4 xs:m-0 xs:w-full xs:left-0 xs:bottom-0 lg:top-1/3 lg:left-10 lg:w-1/3 xxl:left-20 desk:left-32 desk:w-1/4">
        <motion.div
          animate={animation}
          className="absolute w-full h-full justify-between text-left  xs:bg-white xs:bg-opacity-10 backdrop-blur-md lg:bg-opacity-0"
        >
          <div className="flex xs:flex-row lg:flex-col items-center py-4 pl-6 pr-10 md:pr-20 place-content-between">
            <div className="xs:w-4/5 lg:w-full">
              <h3 className="xs:text-4xl xs:pb-2 lg:text-5xl lg:pb-3 ">
                {title1}
              </h3>
              <h4 className="xs:text-xl md:text-2xl xs:pb-4 md:pb-6 ">
                {desc1}
              </h4>
              <span className="px-2 pb-1 text-center bg-blue-600">
                {stack1}
              </span>
              <span className="px-2 pb-1 text-center bg-green-600">
                {stack2}
              </span>
              <span className="px-2 pb-1 text-center bg-purple-600">
                {stack3}
              </span>
            </div>

            <Link
              to={"/projects/" + slug1}
              className="flex flex-col xs:self-center lg:self-start"
            >
              <CaseStudyBtn />
            </Link>
          </div>
        </motion.div>
        <motion.div
          animate={animation2}
          className="absolute w-full h-full justify-between text-left  xs:bg-white xs:bg-opacity-10 backdrop-blur-md lg:bg-opacity-0"
        >
          <div className="flex xs:flex-row lg:flex-col items-center py-4 pl-6 pr-10 md:pr-20 place-content-between">
            <div className="xs:w-4/5 lg:w-full">
              <h3 className="xs:text-4xl xs:pb-2 lg:text-5xl lg:pb-3 ">
                {title2}
              </h3>
              <h4 className="xs:text-xl md:text-2xl xs:pb-4 md:pb-6 ">
                {desc2}
              </h4>
              <span className="px-2 pb-1 text-center bg-blue-600">
                {stack1B}
              </span>
              <span className="px-2 pb-1 text-center bg-green-600">
                {stack2B}
              </span>
              <span className="px-2 pb-1 text-center bg-purple-600">
                {stack3B}
              </span>
            </div>

            <Link
              to={"/projects/" + slug2}
              className="flex flex-col xs:self-center lg:self-start"
            >
              <CaseStudyBtn />
            </Link>
          </div>
        </motion.div>
        <motion.div
          animate={animation3}
          className="absolute w-full h-full justify-between text-left  xs:bg-white xs:bg-opacity-10 backdrop-blur-md lg:bg-opacity-0"
        >
          <div className="flex xs:flex-row lg:flex-col items-center py-4 pl-6 pr-10 md:pr-20 place-content-between">
            <div className="xs:w-4/5 lg:w-full">
              <h3 className="xs:text-4xl xs:pb-2 lg:text-5xl lg:pb-3 ">
                {title3}
              </h3>
              <h4 className="xs:text-xl md:text-2xl xs:pb-4 md:pb-6 ">
                {desc3}
              </h4>
              <span className="px-2 pb-1 text-center bg-blue-600">
                {stack1C}
              </span>
              <span className="px-2 pb-1 text-center bg-green-600">
                {stack2C}
              </span>
              <span className="px-2 pb-1 text-center bg-purple-600">
                {stack3C}
              </span>
            </div>

            <Link
              to={"/projects/" + slug3}
              className="flex flex-col xs:self-center lg:self-start"
            >
              <CaseStudyBtn />
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col overflow-hidden max-w-2xl m-auto items-center lg:pl-40 xl:pl-20">
        <div
          ref={ref}
          className="text-center h-screen flex items-center justify-center "
        >
          <motion.div animate={animation4} className="">
            <span id="first" ref={refFirst}>
              <Link to={"/projects/" + slug1}>
                <GatsbyImage
                  image={getImage(image1)}
                  alt="image 1"
                  quality="100"
                  className="md:w-2/3 lg:w-full mb-32"
                />
              </Link>
            </span>
          </motion.div>
        </div>

        <div
          ref={ref2}
          className="text-center h-screen flex items-center justify-center"
        >
          <motion.div animate={animation5} className="">
            <span id="second" ref={refSecond}>
              <Link to={"/projects/" + slug2}>
                <GatsbyImage
                  image={getImage(image2)}
                  alt="image 2"
                  quality="100"
                  className="w-full mb-32"
                />
              </Link>
            </span>
          </motion.div>
        </div>
        <div
          ref={ref3}
          className="text-center h-screen flex items-center justify-center"
        >
          <motion.div animate={animation6}>
            <span id="third" ref={refThird}>
              <Link to={"/projects/" + slug3}>
                <GatsbyImage
                  quality="100"
                  image={getImage(image3)}
                  alt="image 3"
                  className="w-full mb-32"
                />
              </Link>
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={animation10}
        className="sidebar xs:hidden lg:block lg:right-10 lg:top-1/3 desk:right-32 "
      >
        <ul
          className="flex flex-col justify-between gap-4 
        "
        >
          <li className="text-center">
            <AnchorLink to="/#first" className="inline-block p-2">
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
            <AnchorLink to="/#second" className="inline-block p-2">
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
            <AnchorLink to="/#third" className="inline-block p-2">
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
          <Link to="/projects">
            <motion.li
              className="text-center flex flex-col items-center justify-center"
              initial="rest"
              whileHover="hover"
              exit="rest"
            >
              <motion.svg
                variants={plusVariants}
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
                    variants={plusVariants}
                    transition="hover"
                    d="M12 20v-8m0 0V4m0 8h8m-8 0H4"
                    stroke-linecap="round"
                  />
                </g>
              </motion.svg>

              <motion.h3 variants={textVariants} className="text-gray-naive">
                All Projects
              </motion.h3>
            </motion.li>
          </Link>
        </ul>
      </motion.div>
      <div className="flex self-center max-w-3xl m-auto justify-center">
        <ProjectsButton />
      </div>
      <span ref={refBottom} />
    </section>
  );
}
