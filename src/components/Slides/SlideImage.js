import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const SlideImage = (props) => {
  return (
    <div
      ref={props.ref1}
      className="text-center h-[fit-content] flex items-center justify-center "
    >
      <motion.div animate={props.animate} className="py-24">
        <span id={props.id} ref={props.ref2}>
          <Link to={"/projects/" + props.slug}>
            <GatsbyImage
              image={getImage(props.pic)}
              draggable={false}
              placeholder="blurred"
              alt="image 1"
              quality="100"
              className="md:w-2/3 lg:w-full mb-32"
            />
          </Link>
        </span>
      </motion.div>
    </div>
  );
};

export default SlideImage;
