import React from "react";
import { graphql } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import CardStacks from "../../components/Cards/ProjectsCards/CardStacks";
import CardButton from "../../components/Cards/ProjectsCards/CardButton";
import { motion } from "framer-motion";
import ProjectsHero from "../../components/Hero/ProjectsHero";
import { Seo } from "../../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

export default function Projects(props) {
  const {
    data: {
      allWpProject: { nodes },
    },
  } = props;

  const projects = nodes.map((el) => el.project);

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

  console.log(projects);

  return (
    <section className="h-[fit-content] xs:max-w-xs md:max-w-2xl lg:max-w-[68rem] xl:max-w-[70rem] m-auto pt-14 pb-32">
      <Seo title="All Projects" />
      <ProjectsHero />
      <div className="grid xs:grid-col md:grid-cols-2 lg:grid-cols-3  max-w-6xl md:gap-x-10 xl:gap-x-14 gap-y-52 pt-40 justify-center ">
        {projects.map((project, i) => (
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
                  {project.thumbimg === null ? (
                    <StaticImage
                      src="../../images/featured/PreviewLoading.png"
                      placeholder="blurred"
                      draggable={false}
                      alt="no"
                      quality="100"
                      className="xs:w-40 md:w-32 xl:w-36 group-hover:rotate-[10deg] transition-all duration-300"
                    />
                  ) : (
                    <GatsbyImage
                      image={getImage(
                        project.thumbimg.localFile.childImageSharp
                      )}
                      placeholder="blurred"
                      draggable={false}
                      alt="no"
                      quality="100"
                      className="xs:w-40 md:w-32 xl:w-36 group-hover:rotate-[10deg] transition-all duration-300"
                    />
                  )}
                </div>
              </div>
              <div className="py-6 text-center h-[270px]">
                <h3 className="text-3xl pb-2">{project.title}</h3>
                <p className="text-lg pb-4 text-white text-opacity-70 font-segoe line-clamp-3">
                  {project.description}
                </p>
                <CardStacks
                  stacks={[project.stack1, project.stack2, project.stack3]}
                />
              </div>
              <CardButton
                slug={project.slug}
                github={project.github}
                website={project.website}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export const query = graphql`
  query All_Projects {
    allWpProject(sort: { order: DESC, fields: project___order }) {
      nodes {
        project {
          title
          website
          github
          stack1
          stack2
          stack3
          slug
          date
          company
          place
          description
          bestfeature
          hasmoreinfo
          bigdescription1
          bigdescription2
          bigdescription3
          infodescription1
          infodescription2
          infodescription3
          thumbimg {
            sourceUrl
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 100
                  placeholder: BLURRED
                  formats: WEBP
                )
              }
            }
          }
        }
      }
    }
  }
`;
