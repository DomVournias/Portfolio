import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectHero = (props) => {
  return (
    <div className="flex flex-col  min-h-screen justify-center items-center bg-secondary py-[8vh]">
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
