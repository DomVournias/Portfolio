import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectStacks = (props) => {
  return (
    <div className="flex flex-row items-center h-screen place-content-center my-4">
      <div className="max-w-6xl flex flex-row items-center">
        <div className="w-1/2 text-center">
          <GatsbyImage
            image={getImage(props.pic)}
            draggable={false}
            alt={props.slug}
            quality="100"
            className="w-2/4"
          />
        </div>
        <div className="w-1/2">
          <div className="flex items-center gap-2 py-3">
            <h3 className="text-xl">Made with</h3>
            <span className="py-2 px-4 rounded-lg bg-white bg-opacity-10">
              {props.stackA}
            </span>
            <span className="py-2 px-4 rounded-lg bg-white bg-opacity-10">
              {props.stackB}
            </span>
            <span className="py-2 px-4 rounded-lg bg-white bg-opacity-10">
              {props.stackC}
            </span>
          </div>
          <p className="text-xl leading-relaxed">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectStacks;
