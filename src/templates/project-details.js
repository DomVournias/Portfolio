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
    featuredImg,
    bigDescription1,
    bigDescription2,
    infoTitle1,
    infoDescription1,
    infoTitle2,
    infoDescription2,
  } = data.markdownRemark.frontmatter;

  return (
    <div>
      <h2>{title}</h2>
      <h3>{stack1}</h3>
      <div></div>
      {/* <div dangerouslySetInnerHTML={} /> */}
    </div>
  );
}

export const query = graphql`
  query ProjectDetails($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        company
        date
        description
        place
        slug
        stack1
        stack2
        stack3
        featuredImg {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
