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
import SlideCard from "./SlideCard";
import SlideImage from "./SlideImage";
import SmallSidebar from "./SmallSidebar";

export default function Slider() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 3
        filter: { fileAbsolutePath: { regex: "/(projects)/" } }
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
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
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

  const animation2 = useAnimation();
  const animation3 = useAnimation();

  const [ref2, inView2] = useInView({
    threshold: 0.7,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.7,
  });

  console.log(projects);
  // First Box Animation
  const animation = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.7,
  });
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
  const [refSlider, inViewSlider] = useInView({ threshold: 0.5 });

  // useEffect(() => {
  //   if (inViewFirst + inViewSecond + inViewThird) {
  //     animation10.start({
  //       scale: 1,
  //       transition: {
  //         duration: 0.3,
  //       },
  //     });
  //   } else {
  //     animation10.start({
  //       scale: 0,
  //       transition: {
  //         duration: 0.3,
  //       },
  //     });
  //   }
  // }, [animation10, inViewFirst]);

  // Sidebar Animations

  const activeBtn = useAnimation();
  const [refFirst, inViewFirst] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewFirst) {
      activeBtn.start({
        backgroundColor: "#f64d28",
        transition: {
          duration: 0.3,
        },
      });
    }
    if (!inViewFirst) {
      activeBtn.start({
        backgroundColor: "#333",
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
        backgroundColor: "#f64d28",
        transition: {
          duration: 0.3,
        },
      });
    }
    if (!inViewSecond) {
      activeBtn2.start({
        backgroundColor: "#333",
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
        backgroundColor: "#f64d28",
        transition: {
          duration: 0.3,
        },
      });
    }
    if (!inViewThird) {
      activeBtn3.start({
        backgroundColor: "#333",
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
      stroke: "#ffff",
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
    <section className="text-center " ref={refSlider}>
      <div className="fixed flex items-center mb-0 xs:z-50 xs:m-0 xs:w-full xs:bottom-0 lg:top-0 lg:left-0 lg:w-1/3 xl:left-20 xl:w-1/4 desk:left-32 desk:w-1/4 ">
        <SlideCard
          animate={animation}
          title={title1}
          description={desc1}
          stackA={stack1}
          stackB={stack2}
          stackC={stack3}
          slug={slug1}
        />
        <SlideCard
          animate={animation2}
          title={title2}
          description={desc2}
          stackA={stack1B}
          stackB={stack2B}
          stackC={stack3B}
          slug={slug2}
        />
        <SlideCard
          animate={animation3}
          title={title3}
          description={desc3}
          stackA={stack1C}
          stackB={stack2C}
          stackC={stack3C}
          slug={slug3}
        />
      </div>

      <div className="flex flex-col overflow-hidden xs:max-w-lg md:max-w-3xl lg:max-w-lg xl:max-w-[34rem] m-auto items-center lg:pl-20 xxl:pl-0">
        <SlideImage
          animate={animation4}
          ref1={ref}
          ref2={refFirst}
          id="first"
          slug={slug1}
          pic={image1}
        />
        <SlideImage
          animate={animation5}
          ref1={ref2}
          ref2={refSecond}
          id="second"
          slug={slug2}
          pic={image2}
        />
        <SlideImage
          animate={animation6}
          ref1={ref3}
          ref2={refThird}
          id="third"
          slug={slug3}
          pic={image3}
        />
      </div>

      <SmallSidebar
        animate={animation10}
        animate2={activeBtn}
        animate3={activeBtn2}
        animate4={activeBtn3}
        variants={plusVariants}
        variants2={plusVariants}
        variants3={textVariants}
      />

      <div className="flex self-center max-w-3xl m-auto justify-center">
        <ProjectsButton />
      </div>
    </section>
  );
}
