import React, { useRef, useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export default function Slider() {
  // const cardVariants = {
  //   hidden: { scale: 0 },
  //   visible: {
  //     scale: 1,
  //     transition: {
  //       duration: 0.5,
  //     },
  //   },
  // };
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
    console.log(inView);
    if (inView) {
      animation.start({
        x: 0,
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
        x: "-10vw",
      });
    }
  }, [animation, inView]);

  // Second Box Animation

  useEffect(() => {
    console.log(inView2);
    if (inView2) {
      animation2.start({
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
        x: "-10vw",
        opacity: 0,
      });
    }
  }, [animation2, inView2]);

  // Third Box Animation

  useEffect(() => {
    console.log(inView3);
    if (inView3) {
      animation3.start({
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
        x: "-10vw",
        opacity: 0,
      });
    }
  }, [animation3, inView3]);

  return (
    <section>
      <section className="flex gap-20 items-right text-left m-auto relative max-w-6xl py-40 ">
        <div className="sticky top-60 w-1/3 place-self-start space-y-2 px-6 py-8 rounded-xl space-around ">
          {/* <HideOn height={1400}> */}
          <motion.div animate={animation} className="absolute bg-black  p-5 ">
            <h3 className="text-5xl">{title1}</h3>
            <h4 className="text-2xl pb-8">{desc1}</h4>
            <span className="px-2 pb-1 text-center bg-blue-600">{stack1}</span>
            <span className="px-2 pb-1 text-center bg-green-600">{stack2}</span>
            <span className="px-2 pb-1 text-center bg-purple-600">
              {stack3}
            </span>
          </motion.div>
          {/* </HideOn> */}

          {/* <HideOn height={2300}> */}
          <motion.div animate={animation2} className="absolute bg-black  p-5">
            <h3 className="text-5xl">{title2}</h3>
            <h4 className="text-2xl pb-8">{desc2}</h4>
            <span className="px-2 pb-1 text-center bg-blue-600">{stack1B}</span>
            <span className="px-2 pb-1 text-center bg-green-600">
              {stack2B}
            </span>
            <span className="px-2 pb-1 text-center bg-purple-600">
              {stack3B}
            </span>
          </motion.div>
          {/* </HideOn> */}
          {/* <HideOn height={3300}> */}
          <motion.div animate={animation3} className="absolute bg-black p-5">
            <h3 className="text-5xl">{title3}</h3>
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

        <div className="flex flex-col items-end w-2/3 overflow-auto ">
          <div ref={ref} className="text-center">
            <GatsbyImage
              image={getImage(image1)}
              alt="image 1"
              className="w-4/5 mb-48 "
            />
          </div>
          <div ref={ref2} className="text-center">
            <GatsbyImage
              id="second"
              image={getImage(image2)}
              alt="image 3"
              className="w-4/5 my-36 "
            />
          </div>
          <div ref={ref3} className="text-center">
            <GatsbyImage
              id="third"
              image={getImage(image3)}
              alt="image 3"
              className="w-4/5 my-36 "
            />
          </div>
        </div>
      </section>
    </section>
  );
}
