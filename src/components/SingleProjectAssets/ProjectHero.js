import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectHero = (props) => {
  return (
    <div className="flex flex-col  min-h-screen justify-center items-center bg-secondary py-[8vh]">
      {/* <div className="text-center">
        <h1 className="xs:text-5xl md:text-7xl text-white pt-16 pb-4">
          {props.title}
        </h1>
        <h2 className="xs:text-2xl md:text-4xl text-white pb-10 max-w-lg">
          {props.description}
        </h2>
      </div> */}
      <div className="flex justify-center xs:w-full desk:w-[36vw] h-[fit-content] ">
        <GatsbyImage
          image={getImage(props.pic)}
          placeholder="blurred"
          draggable={false}
          alt={props.slug}
          quality="100"
          className="overflow-hidden "
        />
      </div>
    </div>
  );
};

export default ProjectHero;
