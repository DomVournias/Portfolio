import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const {
    title,
    company,
    date,
    description,
    place,
    slug,
    stack1,
    stack2,
    stack3,
    thumbImg,
    featuredImg1,
    featuredImg2,
    featuredImg3,
    featuredImg4,
    bigDescription1,
    bigDescription2,
    infoTitle1,
    infoDescription1,
    infoTitle2,
    infoDescription2,
  } = data.markdownRemark.frontmatter;

  return (
    <section className="max-w-6xl  justify-between m-auto items-center ">
      <div className="flex flex-col h-screen text-center items-center">
        <div>
          <h1 className="xs:text-5xl md:text-7xl text-white pt-16 pb-4">
            {title}
          </h1>
          <h2 className="xs:text-2xl md:text-4xl text-gray pb-10 max-w-lg">
            {description}
          </h2>
        </div>
        <div className="w-full pb-20">
          <GatsbyImage
            image={getImage(thumbImg)}
            draggable={false}
            alt={slug}
            quality="100"
            className="max-w-lg "
          />
        </div>
      </div>
      <div className="items-center">
        <p className="text-3xl">{bigDescription1}</p>
      </div>
      <div className="flex flex-row">
        <div>
          <GatsbyImage
            image={getImage(featuredImg2)}
            draggable={false}
            alt={slug}
            quality="100"
            className="max-w-lg "
          />
        </div>
        <div>
          <GatsbyImage
            image={getImage(featuredImg3)}
            draggable={false}
            alt={slug}
            quality="100"
            className="max-w-lg "
          />
        </div>
        <div>
          <GatsbyImage
            image={getImage(featuredImg4)}
            draggable={false}
            alt={slug}
            quality="100"
            className="max-w-lg "
          />
        </div>
      </div>
    </section>
  );
}

export const query = graphql`
  query ProjectDetails($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        bigDescription1
        bigDescription2
        company
        date
        description
        infoDescription1
        infoDescription2
        infoTitle1
        infoTitle2
        place
        slug
        stack1
        stack2
        stack3
        title
        thumbImg {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        featuredImg1 {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        featuredImg2 {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        featuredImg3 {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        featuredImg4 {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
      }
    }
  }
`;
