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
    <section className="h-[fit-content] max-w-6xl m-auto py-32">
      <div className="grid grid-cols-3 max-w-6xl justify-between gap-20 m-0 pt-40">
        {projects.map((project) => (
          <div className="bg-graph rounded-2xl w-full px-6 mb-40">
            <div className="place-self-center px-6 -mt-28 ">
              <div className=" bg-black border-2 border-graph w-full h-full rounded-full p-6 ">
                <GatsbyImage
                  image={getImage(project.frontmatter.thumbImg.childImageSharp)}
                  draggable={false}
                  alt="no"
                  quality="100"
                  className="w-full"
                />
              </div>
            </div>
            <div className="py-6 text-center">
              <h3 className="text-3xl">{project.frontmatter.title}</h3>

              {/* <ProjectCardInfo
                place={project.frontmatter.place}
                date={project.frontmatter.date}
              /> */}
              <CardStacks
                stack1={project.frontmatter.stack1}
                stack2={project.frontmatter.stack2}
                stack3={project.frontmatter.stack3}
              />
              <p className="text-xl">{project.frontmatter.description}</p>
            </div>
            <CardButton slug={project.frontmatter.slug} />
          </div>
        ))}
      </div>
    </section>
  );
}
