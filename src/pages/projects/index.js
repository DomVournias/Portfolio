import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectCardInfo from "../../components/Cards/ProjectsCards/ProjectCardInfo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import CardStacks from "../../components/Cards/ProjectsCards/CardStacks";
import CardButton from "../../components/Cards/ProjectsCards/CardButton";
import { motion } from "framer-motion";
import ProjectsHero from "../../components/Hero/ProjectsHero";

export default function Projects() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        filter: {
          fileAbsolutePath: { regex: "/(projects)/" }
          frontmatter: { date: { ne: "null" } }
        }
      ) {
        nodes {
          frontmatter {
            stack3
            stack2
            stack1
            slug
            place
            description
            date(formatString: "DD MMM YYYY")
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

  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + i * 0.3,
      },
    }),
    hidden: { opacity: 0, y: -50 },
    transition: {
      delay: 2,
    },
  };

  const projects = data.allMarkdownRemark.nodes;

  return (
    <section className="h-[fit-content] xs:max-w-xs md:max-w-2xl lg:max-w-[60rem] xl:max-w-[68rem] m-auto pt-14 pb-32">
      <ProjectsHero />
      <div className="grid xs:grid-col md:grid-cols-2 lg:grid-cols-3  max-w-6xl md:gap-x-10 xl:gap-x-14 gap-y-52 pt-40 justify-center ">
        {projects.map((project, i) => (
          <Link to={project.frontmatter.slug}>
            <motion.div
              className="group"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <div className="flex flex-col bg-graph rounded-2xl xs:px-12 md:px-6 lg:px-6 border-2 border-white border-opacity-30 group group-hover:border-third group-hover:scale-[1.02] transition-all duration-200">
                <div className="place-self-center w-[fit-content] lg:px-6 -mt-28 ">
                  <div className="bg-black border-2 border-white border-opacity-30 rounded-full xs:p-8 lg:p-6 group-hover:border-third transition-all duration-200">
                    <GatsbyImage
                      image={getImage(
                        project.frontmatter.thumbImg.childImageSharp
                      )}
                      placeholder="blurred"
                      draggable={false}
                      alt="no"
                      quality="100"
                      className="xs:w-40 md:w-32 xl:w-36"
                    />
                  </div>
                </div>
                <div className="py-6 text-center">
                  <h3 className="text-3xl pb-2">{project.frontmatter.title}</h3>
                  <p className="text-lg pb-4 text-white text-opacity-80">
                    {project.frontmatter.description}
                  </p>
                  <ProjectCardInfo
                    date={project.frontmatter.date}
                    place={project.frontmatter.place}
                  />
                  <CardStacks
                    stack1={project.frontmatter.stack1}
                    stack2={project.frontmatter.stack2}
                    stack3={project.frontmatter.stack3}
                  />
                </div>
                <CardButton slug={project.frontmatter.slug} />
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
