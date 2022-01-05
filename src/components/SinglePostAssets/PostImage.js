import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const PostImage = (props) => {
  return (
    <>
      <GatsbyImage
        image={props.img}
        alt={props.alt}
        className="w-full h-full"
      />
    </>
  );
};

export default PostImage;
