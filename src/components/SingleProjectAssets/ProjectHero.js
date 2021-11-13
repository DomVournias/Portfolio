import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectHero = (props) => {
  return (
    <div className="flex flex-col h-full  text-center items-center bg-secondary ">
      <div className="max-w-6xl pt-20 h-full">
        <div className="">
          <h1 className="xs:text-5xl md:text-7xl text-white pt-16 pb-4">
            {props.title}
          </h1>
          <h2 className="xs:text-2xl md:text-4xl text-white pb-10 max-w-lg">
            {props.description}
          </h2>
        </div>
        <div className="w-full pb-20">
          <GatsbyImage
            image={getImage(props.pic)}
            draggable={false}
            alt={props.slug}
            quality="100"
            className="max-w-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
