import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectStacks = (props) => {
  return (
    <div className="flex flex-row items-center h-[fit-content] place-content-center xs:my-[20vw] lg:my-[16vw] lap:my-[12vw] xs:px-[8vw] sm:px-[10vw] md:px-[8vw] lg:px-[8vw]">
      <div className="max-w-6xl flex xs:flex-col md:flex-row items-center ">
        <div className="xs:w-full md:w-1/2 xs:text-center md:text-left lg:text-center">
          <GatsbyImage
            image={getImage(props.pic)}
            draggable={false}
            alt={props.slug}
            quality="100"
            className="xs:w-[18em] w-full "
          />
        </div>
        <div className="xs:w-full md:w-1/2 xs:pt-20 md:pt-0">
          <div className="flex xs:flex-row md:flex-col lg:flex-row items-center gap-4 pb-8 ">
            <h3 className="text-xl text-left md:w-full lg:w-[fit-content]">
              Made with
            </h3>
            <div className="flex flex-row gap-2 md:w-full lg:w-2/3">
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
          </div>
          <p className="font-nova text-xl xs:leading-[44px] sm:leading-[50px] lap:leading-[40px]">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectStacks;
