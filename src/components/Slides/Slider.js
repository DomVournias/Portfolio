import React, { useRef, useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

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
    threshold: 0.8,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.8,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.8,
  });

  // First Box Animation

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
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
        opacity: 0,
      });
    }
  }, [animation, inView]);

  // Second Box Animation

  useEffect(() => {
    if (inView2) {
      animation2.start({
        opacity: 1,

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
        opacity: 0,
      });
    }
  }, [animation2, inView2]);

  // Third Box Animation

  useEffect(() => {
    if (inView3) {
      animation3.start({
        opacity: 1,

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
        opacity: 0,
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
    if (inViewTop + inViewBottom) {
      animation10.start({
        scale: 0,
        transition: {
          duration: 0.3,
        },
      });
    } else {
      animation10.start({
        scale: 1,
        transition: {
          duration: 0.3,
        },
      });
    }
  }, [animation10, inViewTop, inViewBottom]);

  // Sidebar Animations

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

  const textVariants = {
    rest: {
      y: 7,
      opacity: 0,
    },
    hover: {
      y: 0,
      opacity: 1,
      color: "white",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };

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

  return (
    <section className="text-center">
      <div className="fixed z-50 m-0 w-full xs:left-0 xs:bottom-0 h-44 box-border md:top-3/3 md:bottom-0 ">
        <motion.div
          animate={animation}
          className="absolute w-full h-full  justify-between text-left  xs:bg-white xs:bg-opacity-10 backdrop-blur-md  "
        >
          <div className="flex items-center py-4 px-6">
            <div className="w-4/5">
              <h3 className="xs:text-2xl md:text-5xl pb-3 xs:pb-2">{title1}</h3>
              <h4 className="xs:text-xl md:text-2xl pb-8 xs:pb-4">{desc1}</h4>
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

            <div className="w-1/5">
              <svg
                className="w-1/2 float-right fill-current text-white opacity-30 hover:opacity-60 duration-200"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <rect fill="none" x="0" y="0" stroke="none" />
                <g transform="rotate(-90 8 8)">
                  <g>
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={animation2}
          className="absolute w-full h-full  justify-between text-left  xs:bg-white xs:bg-opacity-10 backdrop-blur-md  "
        >
          <div className="flex items-center py-4 px-6">
            <div className="w-4/5">
              <h3 className="xs:text-2xl md:text-5xl pb-3 xs:pb-2">{title2}</h3>
              <h4 className="xs:text-xl md:text-2xl pb-8 xs:pb-4">{desc2}</h4>
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

            <div className="w-1/5">
              <svg
                className="w-1/2 float-right fill-current text-white opacity-30 hover:opacity-60 duration-200"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <rect fill="none" x="0" y="0" stroke="none" />
                <g transform="rotate(-90 8 8)">
                  <g>
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </motion.div>
        <motion.div
          animate={animation3}
          className="absolute w-full h-full  justify-between text-left  xs:bg-white xs:bg-opacity-10 backdrop-blur-md  "
        >
          <div className="flex items-center py-4 px-6">
            <div className="w-4/5">
              <h3 className="xs:text-2xl md:text-5xl pb-3 xs:pb-2">{title3}</h3>
              <h4 className="xs:text-xl md:text-2xl pb-8 xs:pb-4">{desc3}</h4>
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

            <div className="w-1/5">
              <svg
                className="w-1/2 float-right fill-current text-white opacity-30 hover:opacity-60 duration-200"
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 16 16"
              >
                <rect fill="none" x="0" y="0" stroke="none" />
                <g transform="rotate(-90 8 8)">
                  <g>
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col overflow-hidden max-w-2xl m-auto items-center">
        <span id="first" ref={refFirst} />
        <div
          ref={ref}
          className="text-center h-screen flex items-center justify-center "
        >
          <motion.div animate={animation4} className="">
            <GatsbyImage
              image={getImage(image1)}
              alt="image 1"
              quality="100"
              className="md:w-2/3 lg:w-full mb-32"
            />
          </motion.div>
        </div>
        <span id="second" ref={refSecond} />
        <div
          ref={ref2}
          className="text-center h-screen flex items-center justify-center"
        >
          <motion.div animate={animation5} className="">
            <GatsbyImage
              image={getImage(image2)}
              alt="image 2"
              quality="100"
              className="w-full mb-32"
            />
          </motion.div>
        </div>
        <span id="third" ref={refThird} />
        <div
          ref={ref3}
          className="text-center h-screen flex items-center justify-center"
        >
          <motion.div animate={animation6}>
            <GatsbyImage
              quality="100"
              image={getImage(image3)}
              alt="image 3"
              className="w-full mb-32"
            />
          </motion.div>
        </div>
      </div>

      <div className="sidebar xs:hidden md:block md:right-10 md:top-1/3">
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
      </div>
    </section>
  );
}
