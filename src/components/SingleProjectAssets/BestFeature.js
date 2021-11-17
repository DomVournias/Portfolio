import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BestFeature = (props) => {
  return (
    <div className="flex flex-row items-center h-[fit-content] place-content-center xs:py-[20vw] lg:py-[16vw] lap:py-[12vw] xs:px-[8vw] sm:px-[10vw] md:px-[8vw] lg:px-[8vw] bg-white ">
      <div className="max-w-6xl flex xs:flex-col-reverse md:flex-row-reverse items-center gap-28 py-20">
        <div className="xs:w-full md:w-1/2 xs:text-center md:text-left lg:text-center">
          <GatsbyImage
            image={getImage(props.pic)}
            placeholder="blurred"
            draggable={false}
            alt={props.slug}
            quality="100"
            className="w-full "
          />
        </div>
        <div className="xs:w-full md:w-1/2 xs:pt-20 md:pt-0">
          <div className="flex xs:flex-row items-center gap-4 pb-8 w-full">
            <h3 className="text-xl text-graph text-left ">Complexity of</h3>
            <div className="flex flex-row gap-2 ">
              <span className="py-2 px-4 rounded-lg bg-graph bg-opacity-100">
                {props.feature}
              </span>
            </div>
          </div>
          <p className="font-nova text-xl xs:leading-[44px] sm:leading-[50px] md:leading-[35px] lap:leading-[40px] text-graph">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default BestFeature;
