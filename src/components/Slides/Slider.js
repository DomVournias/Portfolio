import React, { useRef, useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

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
  return (
    <section>
      <div ref={refTop} classname="bg-white"></div>
      <motion.div
        animate={animation10}
        className="w-1/6 h-1/4 align-text-top top-1/3 right-20 fixed bg-white"
      ></motion.div>
      <section className="flex gap-20 items-right text-left m-auto relative max-w-6xl pt-40 pb-96">
        <div className="sticky top-60 w-1/3 place-self-start space-y-2 px-6 py-8 rounded-xl space-around ">
          <motion.div animate={animation} className="absolute bg-black p-5">
            <motion.div animate={animation7} className="items-left -ml-28">
              <motion.div
                variants={Bouncing}
                animate={["initial", "enter", "exit"]}
                className="absolute left-0 -top-10 w-1/3"
              >
                <StaticImage
                  src="../../images/ballon.png"
                  className="w-2/3"
                  alt="cube"
                />
              </motion.div>
            </motion.div>
            <h3 className="text-5xl pb-3 ">{title1}</h3>
            <h4 className="text-2xl pb-8">{desc1}</h4>
            <span className="px-2 pb-1 text-center bg-blue-600">{stack1}</span>
            <span className="px-2 pb-1 text-center bg-green-600">{stack2}</span>
            <span className="px-2 pb-1 text-center bg-purple-600">
              {stack3}
            </span>
          </motion.div>
          <motion.div animate={animation8} className="items-left -ml-20">
            <motion.div
              variants={Bouncing}
              animate={["initial", "enter", "exit"]}
              className="absolute left-0 -top-8 w-1/3"
            >
              <StaticImage
                src="../../images/ballon2.png"
                className="w-2/3"
                alt="cube"
              />
            </motion.div>
          </motion.div>

          <motion.div animate={animation2} className="absolute p-5">
            <h3 className="text-5xl pb-3">{title2}</h3>
            <h4 className="text-2xl pb-8">{desc2}</h4>
            <span className="px-2 pb-1 text-center bg-blue-600">{stack1B}</span>
            <span className="px-2 pb-1 text-center bg-green-600">
              {stack2B}
            </span>
            <span className="px-2 pb-1 text-center bg-purple-600">
              {stack3B}
            </span>
          </motion.div>
          <motion.div animate={animation9} className="items-left -ml-20">
            <motion.div
              variants={Bouncing}
              animate={["initial", "enter", "exit"]}
              className="absolute left-0 -top-8 w-1/3"
            >
              <StaticImage
                src="../../images/ballon3.png"
                className="w-2/3"
                alt="cube"
              />
            </motion.div>
          </motion.div>
          <motion.div animate={animation3} className="absolute  p-5">
            <h3 className="text-5xl pb-3">{title3}</h3>
            <h4 className="text-2xl pb-8">{desc3}</h4>
            <span className="px-2 pb-1 text-center bg-blue-600">{stack1C}</span>
            <span className="px-2 pb-1 text-center bg-green-600">
              {stack2C}
            </span>
            <span className="px-2 pb-1 text-center bg-purple-600">
              {stack3C}
            </span>
          </motion.div>
          {/* </HideOn> */}
        </div>

        <div className="flex flex-col items-end w-2/3 overflow-hidden">
          <div ref={ref} className="text-right">
            <motion.div animate={animation4}>
              <GatsbyImage
                image={getImage(image1)}
                alt="image 1"
                quality="90"
                className="w-4/5 mb-48 "
              />
            </motion.div>
          </div>
          <div ref={ref2} className="text-right">
            <motion.div animate={animation5}>
              <GatsbyImage
                image={getImage(image2)}
                alt="image 2"
                quality="90"
                className="w-4/5 my-36 "
              />
            </motion.div>
          </div>
          <div ref={ref3} className="text-right">
            <motion.div animate={animation6}>
              <GatsbyImage
                quality="90"
                image={getImage(image3)}
                alt="image 3"
                className="w-4/5 mt-36 overflow-hidden "
              />
            </motion.div>
          </div>
        </div>
      </section>
      <div ref={refBottom} classname="bg-white"></div>
    </section>
  );
}
