import React, { useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion, useAnimation } from "framer-motion";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 10
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

  console.log(data);
  const projects = data.allMarkdownRemark.nodes;

  const title1 = projects[0].frontmatter.title;
  const title2 = projects[1].frontmatter.title;
  const title3 = projects[2].frontmatter.title;
  const title4 = projects[3].frontmatter.title;
  const title5 = projects[4].frontmatter.title;
  const title6 = projects[5].frontmatter.title;
  const title7 = projects[6].frontmatter.title;

  const desc1 = projects[0].frontmatter.description;
  const desc2 = projects[1].frontmatter.description;
  const desc3 = projects[2].frontmatter.description;
  const desc4 = projects[3].frontmatter.description;
  const desc5 = projects[4].frontmatter.description;
  const desc6 = projects[5].frontmatter.description;
  const desc7 = projects[6].frontmatter.description;

  const stack1 = projects[0].frontmatter.stack1;
  const stack2 = projects[0].frontmatter.stack2;
  const stack3 = projects[0].frontmatter.stack3;
  const stack4 = projects[0].frontmatter.stack4;
  const stack5 = projects[0].frontmatter.stack5;
  const stack6 = projects[0].frontmatter.stack6;
  const stack7 = projects[0].frontmatter.stack7;

  const stack1B = projects[1].frontmatter.stack1;
  const stack2B = projects[1].frontmatter.stack2;
  const stack3B = projects[1].frontmatter.stack3;
  const stack4B = projects[1].frontmatter.stack4;
  const stack5B = projects[1].frontmatter.stack5;
  const stack6B = projects[1].frontmatter.stack6;
  const stack7B = projects[1].frontmatter.stack7;

  const stack1C = projects[2].frontmatter.stack1;
  const stack2C = projects[2].frontmatter.stack2;
  const stack3C = projects[2].frontmatter.stack3;
  const stack4C = projects[1].frontmatter.stack4;
  const stack5C = projects[1].frontmatter.stack5;
  const stack6C = projects[1].frontmatter.stack6;
  const stack7C = projects[1].frontmatter.stack7;

  const image1 = projects[0].frontmatter.thumbImg.childImageSharp;
  const image2 = projects[1].frontmatter.thumbImg.childImageSharp;
  const image3 = projects[2].frontmatter.thumbImg.childImageSharp;
  const image4 = projects[3].frontmatter.thumbImg.childImageSharp;
  const image5 = projects[4].frontmatter.thumbImg.childImageSharp;
  const image6 = projects[5].frontmatter.thumbImg.childImageSharp;
  const image7 = projects[6].frontmatter.thumbImg.childImageSharp;

  // Animations

  const animation = useAnimation();
  const animation2 = useAnimation();
  const animation3 = useAnimation();
  const animation4 = useAnimation();
  const animation5 = useAnimation();
  const animation6 = useAnimation();
  const animation7 = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.8,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.8,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.8,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.8,
  });
  const [ref5, inView5] = useInView({
    threshold: 0.8,
  });
  const [ref6, inView6] = useInView({
    threshold: 0.8,
  });
  const [ref7, inView7] = useInView({
    threshold: 0.8,
  });

  // First Box Animation

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        translateY: 0,
        transition: {
          type: "spring",
          duration: 1.8,
          bounce: 0.3,
          ease: "easeInOut",
        },
      });
    }
    if (!inView) {
      animation.start({
        translateY: 20,
        opacity: 0,
      });
    }
  }, [animation, inView]);

  // Second Box Animation

  useEffect(() => {
    if (inView2) {
      animation2.start({
        opacity: 1,
        translateY: 0,
        transition: {
          type: "spring",
          duration: 1.8,
          bounce: 0.3,
          ease: "easeInOut",
        },
      });
    }
    if (!inView2) {
      animation2.start({
        translateY: 20,
        opacity: 0,
      });
    }
  }, [animation2, inView2]);

  // Third Box Animation

  useEffect(() => {
    if (inView3) {
      animation3.start({
        opacity: 1,
        translateY: 0,
        transition: {
          type: "spring",
          duration: 1.8,
          bounce: 0.3,
          ease: "easeInOut",
        },
      });
    }
    if (!inView3) {
      animation3.start({
        translateY: 20,
        opacity: 0,
      });
    }
  }, [animation3, inView3]);

  // Fourth Box Animation

  useEffect(() => {
    if (inView4) {
      animation4.start({
        opacity: 1,
        translateY: 0,
        transition: {
          type: "spring",
          duration: 1.8,
          bounce: 0.3,
          ease: "easeInOut",
        },
      });
    }
    if (!inView4) {
      animation4.start({
        translateY: 20,
        opacity: 0,
      });
    }
  }, [animation4, inView4]);

  // Fifth Box Animation

  useEffect(() => {
    if (inView5) {
      animation5.start({
        opacity: 1,
        translateY: 0,
        transition: {
          type: "spring",
          duration: 1.8,
          bounce: 0.3,
          ease: "easeInOut",
        },
      });
    }
    if (!inView5) {
      animation5.start({
        translateY: 20,
        opacity: 0,
      });
    }
  }, [animation5, inView5]);

  // Sixth Box Animation

  useEffect(() => {
    if (inView6) {
      animation6.start({
        opacity: 1,
        translateY: 0,
        transition: {
          type: "spring",
          duration: 1.8,
          bounce: 0.3,
          ease: "easeInOut",
        },
      });
    }
    if (!inView6) {
      animation6.start({
        translateY: 20,
        opacity: 0,
      });
    }
  }, [animation6, inView6]);

  // Seventh Box Animation

  useEffect(() => {
    if (inView7) {
      animation7.start({
        opacity: 1,
        translateY: 0,
        transition: {
          type: "spring",
          duration: 1.8,
          bounce: 0.3,
          ease: "easeInOut",
        },
      });
    }
    if (!inView7) {
      animation7.start({
        translateY: 20,
        opacity: 0,
      });
    }
  }, [animation7, inView7]);

  // Pictures Animations

  const animation1p = useAnimation();

  useEffect(() => {
    if (inView) {
      animation1p.start({
        rotate: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      animation1p.start({
        rotate: 10,
        opacity: 0.7,
      });
    }
  }, [animation1p, inView]);

  const animation2p = useAnimation();

  useEffect(() => {
    if (inView2) {
      animation2p.start({
        rotate: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView2) {
      animation2p.start({
        rotate: -10,
        opacity: 0.7,
      });
    }
  }, [animation2p, inView2]);

  const animation3p = useAnimation();

  useEffect(() => {
    if (inView3) {
      animation3p.start({
        rotate: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView3) {
      animation3p.start({
        rotate: -10,
        opacity: 0.7,
      });
    }
  }, [animation3p, inView3]);

  const animation4p = useAnimation();

  useEffect(() => {
    if (inView4) {
      animation4p.start({
        rotate: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView4) {
      animation4p.start({
        rotate: -10,
        opacity: 0.7,
      });
    }
  }, [animation4p, inView4]);

  const animation5p = useAnimation();

  useEffect(() => {
    if (inView5) {
      animation5p.start({
        rotate: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView5) {
      animation5p.start({
        rotate: -10,
        opacity: 0.7,
      });
    }
  }, [animation5p, inView5]);

  const animation6p = useAnimation();

  useEffect(() => {
    if (inView6) {
      animation6p.start({
        rotate: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView6) {
      animation6p.start({
        rotate: -10,
        opacity: 0.7,
      });
    }
  }, [animation6p, inView6]);

  const animation7p = useAnimation();

  useEffect(() => {
    if (inView7) {
      animation7p.start({
        rotate: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView7) {
      animation7p.start({
        rotate: -10,
        opacity: 0.7,
      });
    }
  }, [animation7p, inView7]);

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

  const activeBtn4 = useAnimation();
  const [refFourth, inViewFourth] = useInView();

  useEffect(() => {
    if (inViewFourth) {
      activeBtn4.start({
        backgroundColor: "white",
        transition: {
          duration: 0.3,
        },
      });
    }
    if (!inViewFourth) {
      activeBtn4.start({
        backgroundColor: "#333333",
        transition: {
          duration: 0.3,
        },
      });
    }
  }, [activeBtn4, inViewFourth]);

  const activeBtn5 = useAnimation();
  const [refFifth, inViewFifth] = useInView();

  useEffect(() => {
    if (inViewFifth) {
      activeBtn5.start({
        backgroundColor: "white",
        transition: {
          duration: 0.3,
        },
      });
    }
    if (!inViewFifth) {
      activeBtn5.start({
        backgroundColor: "#333333",
        transition: {
          duration: 0.3,
        },
      });
    }
  }, [activeBtn5, inViewFifth]);

  const activeBtn6 = useAnimation();
  const [refSixth, inViewSixth] = useInView();

  useEffect(() => {
    if (inViewSixth) {
      activeBtn6.start({
        backgroundColor: "white",
        transition: {
          duration: 0.3,
        },
      });
    }
    if (!inViewSixth) {
      activeBtn6.start({
        backgroundColor: "#333333",
        transition: {
          duration: 0.3,
        },
      });
    }
  }, [activeBtn6, inViewSixth]);

  const activeBtn7 = useAnimation();
  const [refSeventh, inViewSeventh] = useInView();

  useEffect(() => {
    if (inViewSeventh) {
      activeBtn7.start({
        backgroundColor: "white",
        transition: {
          duration: 0.3,
        },
      });
    }
    if (!inViewSeventh) {
      activeBtn7.start({
        backgroundColor: "#333333",
        transition: {
          duration: 0.3,
        },
      });
    }
  }, [activeBtn7, inViewSeventh]);

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
      pathLength: 0.5,
      transition: {
        duration: 1,
        type: "tween",
        ease: "easeInOut",
      },
    },

    hover: {
      pathLength: [1, 0, 1],
      pathOffset: 0,
      stroke: "#fff",

      transition: {
        duration: 0.6,
      },
    },
    exit: {
      stroke: "#333",
      pathLength: 1,
    },
  };

  return (
    <main className="text-center">
      <div className="pb-20 ">
        <h1 className="text-7xl leading-tight text-white pt-16 pb-4">
          Here's all my work <br /> take a look.
        </h1>
      </div>
      <div className="fixed left-40 top-1/3 bg-gray m-auto w-full">
        <motion.div
          animate={animation}
          className="absolute p-5 text-left w-1/5"
        >
          <h3 className="text-5xl pb-3 ">{title1}</h3>
          <h4 className="text-2xl pb-8">{desc1}</h4>
          <span className="px-2 pb-1 text-center bg-blue-600">{stack1}</span>
          <span className="px-2 pb-1 text-center bg-green-600">{stack2}</span>
          <span className="px-2 pb-1 text-center bg-purple-600">{stack3}</span>
        </motion.div>

        <motion.div
          animate={animation2}
          className="absolute p-5 text-left w-1/5"
        >
          <h3 className="text-5xl pb-3">{title2}</h3>
          <h4 className="text-2xl pb-8">{desc2}</h4>
          <span className="px-2 pb-1 text-center bg-blue-600">{stack1B}</span>
          <span className="px-2 pb-1 text-center bg-green-600">{stack2B}</span>
          <span className="px-2 pb-1 text-center bg-purple-600">{stack3B}</span>
        </motion.div>

        <motion.div
          animate={animation3}
          className="absolute p-5 text-left w-1/5"
        >
          <h3 className="text-5xl pb-3">{title3}</h3>
          <h4 className="text-2xl pb-8">{desc3}</h4>
          <span className="px-2 pb-1 text-center bg-blue-600">{stack1C}</span>
          <span className="px-2 pb-1 text-center bg-green-600">{stack2C}</span>
          <span className="px-2 pb-1 text-center bg-purple-600">{stack3C}</span>
        </motion.div>

        <motion.div
          animate={animation4}
          className="absolute p-5 text-left w-1/5"
        >
          <h3 className="text-5xl pb-3">{title4}</h3>
          <h4 className="text-2xl pb-8">{desc4}</h4>
          <span className="px-2 pb-1 text-center bg-blue-600">{stack1C}</span>
          <span className="px-2 pb-1 text-center bg-green-600">{stack2C}</span>
          <span className="px-2 pb-1 text-center bg-purple-600">{stack3C}</span>
        </motion.div>

        <motion.div
          animate={animation5}
          className="absolute p-5 text-left w-1/5"
        >
          <h3 className="text-5xl pb-3">{title5}</h3>
          <h4 className="text-2xl pb-8">{desc5}</h4>
          <span className="px-2 pb-1 text-center bg-blue-600">{stack1C}</span>
          <span className="px-2 pb-1 text-center bg-green-600">{stack2C}</span>
          <span className="px-2 pb-1 text-center bg-purple-600">{stack3C}</span>
        </motion.div>

        <motion.div
          animate={animation6}
          className="absolute p-5 text-left w-1/5"
        >
          <h3 className="text-5xl pb-3">{title6}</h3>
          <h4 className="text-2xl pb-8">{desc6}</h4>
          <span className="px-2 pb-1 text-center bg-blue-600">{stack1C}</span>
          <span className="px-2 pb-1 text-center bg-green-600">{stack2C}</span>
          <span className="px-2 pb-1 text-center bg-purple-600">{stack3C}</span>
        </motion.div>

        <motion.div
          animate={animation7}
          className="absolute p-5 text-left w-1/5"
        >
          <h3 className="text-5xl pb-3">{title7}</h3>
          <h4 className="text-2xl pb-8">{desc7}</h4>
          <span className="px-2 pb-1 text-center bg-blue-600">{stack1C}</span>
          <span className="px-2 pb-1 text-center bg-green-600">{stack2C}</span>
          <span className="px-2 pb-1 text-center bg-purple-600">{stack3C}</span>
        </motion.div>
      </div>

      <div className="flex flex-col overflow-hidden max-w-2xl m-auto items-center">
        <span id="first" ref={refFirst} />
        <div
          ref={ref}
          className="text-center h-screen flex items-center justify-center "
        >
          <motion.div animate={animation1p} className="">
            <GatsbyImage
              image={getImage(image1)}
              alt="image 1"
              quality="100"
              className="w-full mb-32"
            />
          </motion.div>
        </div>
        <span id="second" ref={refSecond} />
        <div
          ref={ref2}
          className="text-center h-screen flex items-center justify-center"
        >
          <motion.div animate={animation2p} className="">
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
          <motion.div animate={animation3p}>
            <GatsbyImage
              quality="100"
              image={getImage(image3)}
              alt="image 3"
              className="w-full mb-32"
            />
          </motion.div>
        </div>
        <span id="fourth" ref={refFourth} />
        <div
          ref={ref4}
          className="text-center h-screen flex items-center justify-center"
        >
          <motion.div animate={animation4p}>
            <GatsbyImage
              quality="100"
              image={getImage(image4)}
              alt="image 3"
              className="w-full mb-32"
            />
          </motion.div>
        </div>
        <span id="fifth" ref={refFifth} />
        <div
          ref={ref5}
          className="text-center h-screen flex items-center justify-center"
        >
          <motion.div animate={animation5p}>
            <GatsbyImage
              quality="100"
              image={getImage(image5)}
              alt="image 3"
              className="w-full mb-32"
            />
          </motion.div>
        </div>
        <span id="sixth" ref={refSixth} />
        <div
          ref={ref6}
          className="text-center h-screen flex items-center justify-center"
        >
          <motion.div animate={animation6p}>
            <GatsbyImage
              quality="100"
              image={getImage(image6)}
              alt="image 3"
              className="w-full mb-32"
            />
          </motion.div>
        </div>
        <span id="seventh" ref={refSeventh} />
        <div
          ref={ref7}
          className="text-center h-screen flex items-center justify-center"
        >
          <motion.div animate={animation7p}>
            <GatsbyImage
              quality="100"
              image={getImage(image7)}
              alt="image 3"
              className="w-full mb-32"
            />
          </motion.div>
        </div>
      </div>

      <div className="sidebar">
        <ul
          className="flex flex-col justify-between gap-4 
        "
        >
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
          <li className="text-center">
            <AnchorLink to="/projects#fourth" className="inline-block p-2">
              <motion.span
                animate={activeBtn4}
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
            <AnchorLink to="/projects#fifth" className="inline-block p-2">
              <motion.span
                animate={activeBtn5}
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
            <AnchorLink to="/projects#sixth" className="inline-block p-2">
              <motion.span
                animate={activeBtn6}
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
            <AnchorLink to="/projects#seventh" className="inline-block p-2">
              <motion.span
                animate={activeBtn7}
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
    </main>
  );
}
