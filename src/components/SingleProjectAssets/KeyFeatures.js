import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const KeyFeatures = (props) => {
  return (
    <div className="flex flex-col relative place-content-center items-center h-full bg-silver pb-60">
      <div className="max-w-4xl pt-40 pb-40">
        <h3 className="text-3xl  text-black pb-4">{props.title}</h3>
        <p className="text-xl  text-black leading-relaxed">
          {props.description}
        </p>
      </div>
      <div className="max-w-6xl flex flex-row gap-20 place-content-center  ">
        <div className="flex flex-col">
          <div className="relative">
            <span className="absolute -left-6 -top-6 z-10 bg-secondary p-3 rounded-full text-center bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 shadow-lg ">
              <h3 className="text-4xl pb-2">(a)</h3>
            </span>
            <GatsbyImage
              image={getImage(props.phoneA)}
              draggable={false}
              alt={props.slug}
              quality="100"
              className="max-w-lg"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <span className="absolute -left-6 -top-6 z-10 bg-secondary p-3 rounded-full text-center bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 shadow-lg ">
              <h3 className="text-4xl pb-2">(b)</h3>
            </span>
            <GatsbyImage
              image={getImage(props.phoneB)}
              draggable={false}
              alt={props.slug}
              quality="100"
              className="max-w-lg "
            />
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="relative">
            <span className="absolute -left-6 -top-6 z-10 bg-secondary p-3 rounded-full text-center bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 shadow-lg ">
              <h3 className="text-4xl pb-2">(a)</h3>
            </span>

            <GatsbyImage
              image={getImage(props.phoneC)}
              draggable={false}
              alt={props.slug}
              quality="100"
              className="max-w-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
