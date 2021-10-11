import React, { useEffect, useState, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import FeatureSlide from "../../components/FeatureSlides/FeatureSlide";

export default function FeatureSlides() {
  const data = useStaticQuery(graphql`
    query myQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            thumbImg {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
                id
              }
            }
          }
        }
      }
    }
  `);

  const pictures = data.allMarkdownRemark.nodes;

  return (
    <div className="flex h-screen justify-center">
      <div className="w-1/3">
        <FeatureSlide />
      </div>

      <div className="w-2/3 h-screen justify-center">
        {pictures.map((picture) => (
          <div className="">
            <GatsbyImage
              image={getImage(picture.frontmatter.thumbImg.childImageSharp)}
              alt="picture"
              className="w-full ml-6"
            />
          </div>
        ))}
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}
