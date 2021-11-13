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
      className="absolute w-full h-full justify-between text-left  bg-gray-naive bg-opacity-30 lg:bg-opacity-0 backdrop-filter backdrop-blur-md border-solid border-2 border-white border-opacity-10 lg:border-none "
    >
      <div className="flex xs:flex-row lg:flex-col items-center py-4 pl-6 pr-10 md:pr-20 place-content-between">
        <div className="xs:w-4/5 lg:w-full">
          <h3 className="xs:text-4xl xs:pb-2 lg:text-5xl lg:pb-3 ">
            {props.title}
          </h3>
          <h4 className="xs:text-xl md:text-2xl xs:pb-4 md:pb-6 ">
            {props.description}
          </h4>
          <span className="px-2 pb-1 text-center bg-blue-600">
            {props.stackA}
          </span>
          <span className="px-2 pb-1 text-center bg-green-600">
            {props.stackB}
          </span>
          <span className="px-2 pb-1 text-center bg-purple-600">
            {props.stackC}
          </span>
        </div>

        <Link
          to={"/projects/" + props.slug}
          className="flex flex-col xs:self-center lg:self-start"
        >
          <CaseStudyBtn />
        </Link>
      </div>
    </motion.div>
  );
};

export default SlideCard;
