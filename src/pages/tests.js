import React, { useRef, useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

export default function tests({ data }) {
  const projects = data.allMarkdownRemark.nodes;
  return (
    <div>
      <h1>2</h1>
    </div>
  );
}

export const query = graphql`
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
              gatsbyImageData
              id
            }
          }
        }
      }
    }
  }
`;
