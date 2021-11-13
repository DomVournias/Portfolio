import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BestFeature = (props) => {
  return (
    <div className="flex h-screen place-content-center bg-white">
      <div className="max-w-6xl flex flex-row-reverse gap-20 items-center">
        <div className="w-1/2 text-center">
          <GatsbyImage
            image={getImage(props.pic)}
            draggable={false}
            alt={props.slug}
            quality="100"
            className="w-full"
          />
        </div>
        <div className="w-1/2">
          <div className="flex items-center gap-2 py-3">
            <h3 className="text-xl text-black">Complexity of </h3>
            <span className="py-2 px-4 rounded-lg bg-black bg-opacity-10 text-black text-xl">
              {props.feature}
            </span>
          </div>
          <p className="text-xl leading-relaxed text-black">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default BestFeature;
