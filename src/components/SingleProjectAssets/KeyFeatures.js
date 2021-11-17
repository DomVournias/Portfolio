import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const KeyFeatures = (props) => {
  return (
    <div className="flex flex-col place-content-center items-center h-full bg-silver xs:py-32 gap-28">
      <div className="xs:px-[8vw] sm:px-[10vw] md:px-[8vw] lg:px-[15vw] lap:px-[22vw] desk:px-[24vw] ">
        <h3 className="text-2xl  text-graph pb-4">{props.title}</h3>
        <p className="font-nova xs:text-[18px] lg:text-xl xs:leading-[33px] lap:leading-[40px] text-graph">
          {props.description}
        </p>
      </div>
      <div className="flex xs:flex-col lg:flex-row xs:gap-10 lg:gap-10 xl:gap-14 place-content-center h-[fit-content] xs:px-[8vw] sm:px-[10vw] md:px-[8vw] xl:px-[10vw] xxl:px-[13vw] lap:px-[18vw] desk:px-[20vw] ">
        <div className="flex relative">
          <span className="absolute -left-6 -top-6 z-10 bg-secondary p-3 rounded-full text-center bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 shadow-lg ">
            <h3 className="text-4xl pb-2">(a)</h3>
          </span>
          <GatsbyImage
            image={getImage(props.phoneA)}
            placeholder="blurred"
            draggable={false}
            alt={props.slug}
            quality="100"
            className="xs:w-[18em] lg:w-full"
          />
        </div>

        <div className="flex relative">
          <span className="absolute -left-6 -top-6 z-10 bg-secondary p-3 rounded-full text-center bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 shadow-lg ">
            <h3 className="text-4xl pb-2">(b)</h3>
          </span>
          <GatsbyImage
            image={getImage(props.phoneB)}
            placeholder="blurred"
            draggable={false}
            alt={props.slug}
            quality="100"
            className="xs:w-[18em] lg:w-full"
          />
        </div>

        <div className="flex relative">
          <span className="absolute -left-6 -top-6 z-10 bg-secondary p-3 rounded-full text-center bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 shadow-lg ">
            <h3 className="text-4xl pb-2">(c)</h3>
          </span>

          <GatsbyImage
            image={getImage(props.phoneC)}
            placeholder="blurred"
            draggable={false}
            alt={props.slug}
            quality="100"
            className="xs:w-[18em] lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
