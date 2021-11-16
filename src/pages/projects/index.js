import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectCardInfo from "../../components/Cards/ProjectsCards/ProjectCardInfo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import CardStacks from "../../components/Cards/ProjectsCards/CardStacks";
import CardButton from "../../components/Cards/ProjectsCards/CardButton";

export default function Projects() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }

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

  return (
    <section className="h-[fit-content] xs:max-w-xs md:max-w-2xl lg:max-w-[60rem] xl:max-w-[68rem] m-auto py-32">
      <div className="grid xs:grid-col md:grid-cols-2 lg:grid-cols-3  max-w-6xl md:gap-10 xl:gap-14 pt-40 justify-center ">
        {projects.map((project) => (
          <div className="flex flex-col bg-graph rounded-2xl xs:px-16 md:px-6    lg:px-6 mb-40 ">
            <div className="place-self-center w-[fit-content] lg:px-6 -mt-28 ">
              <div className=" bg-black border-2 border-graph rounded-full xs:p-8 lg:p-6 ">
                <GatsbyImage
                  image={getImage(project.frontmatter.thumbImg.childImageSharp)}
                  draggable={false}
                  alt="no"
                  quality="100"
                  className="xs:w-48 md:w-32 xl:w-36"
                />
              </div>
            </div>
            <div className="py-6 text-center">
              <h3 className="text-3xl pb-2">{project.frontmatter.title}</h3>

              {/* <ProjectCardInfo
                place={project.frontmatter.place}
                date={project.frontmatter.date}
              /> */}

              <p className="text-xl pb-4">{project.frontmatter.description}</p>
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
        ))}
      </div>
    </section>
  );
}
