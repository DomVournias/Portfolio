import React, { useRef, useEffect, useState, forwardRef } from "react";
import { Link } from "gatsby";
import CaseStudyBtn from "../Buttons/CaseStudyBtn";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const SlideCard = (props) => {
  return (
    <motion.div
      animate={props.animate}
      className="block w-full justify-around text-left  bg-gray-naive bg-opacity-30 lg:bg-opacity-0 backdrop-filter backdrop-blur-md border-solid border-2 border-white border-opacity-10 lg:border-none "
    >
      <div className="flex xs:flex-row lg:flex-col items-center pt-4 pb-6 xs:gap-2 xs:px-6 md:px-10 lg:pl-10 lg:pr-0 xl:pr-10 justify-around">
        <div className="xs:w-2/3 lg:w-full">
          <div className="pb-2">
            <h3 className="xs:text-2xl lg:text-5xl lg:pb-3 ">{props.title}</h3>
            <h4 className="xs:text-lg md:text-xl xs:pb-1 md:pb-2 ">
              {props.description}
            </h4>
          </div>
          <div className="">
            <span className="xs:text-sm px-2 pb-1 text-center bg-blue-600">
              {props.stackA}
            </span>
            <span className="xs:text-sm px-2 pb-1 text-center bg-green-600">
              {props.stackB}
            </span>
            <span className="xs:text-sm px-2 pb-1 text-center bg-purple-600">
              {props.stackC}
            </span>
          </div>
        </div>
        <div className="flex xs:w-1/3 lg:w-full xs:place-content-end lg:justify-start">
          <Link
            to={"/projects/" + props.slug}
            className="flex flex-col xs:self-center lg:self-start"
          >
            <CaseStudyBtn />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SlideCard;
