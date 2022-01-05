import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";

const BlogPostHero = (props) => {
  return (
    <BackgroundImage
      Tag="section"
      fluid={props.backImage}
      backgroundColor=""
      className="rounded-xl bg-cover"
    >
      <div className="flex bg-gradient-to-t from-transparent via-transparent to-black">
        <div className="xs:mt-32 lg:mt-40 xs:mb-20 lg:mb-10 xs:ml-5 xs:mr-5 lg:ml-10 flex flex-col xs:w-[100%] lg:w-[45%] rounded-xl shadow-2xl bg-opacity-40 py-6 px-8 bg-black bg-clip-padding backdrop-filter backdrop-blur-md border border-gray-600 border-opacity-40 ">
          <h1 className="text-4xl pb-2 capitalize">{props.title}</h1>
          <p className="pb-2 font-segoe">{props.desc}</p>
          <div className="flex gap-2 pb-4">
            <span className="leading-none w-[fit-content] font-segoeLight text-sm items-center text-gray-300 italic">
              #{props.cat1}
            </span>
            <span className="leading-none w-[fit-content] font-segoeLight text-sm items-center text-gray-300 italic">
              #{props.cat2}
            </span>
            <span className="leading-none w-[fit-content] font-segoeLight text-sm items-center text-gray-300 italic">
              #{props.cat3}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <GatsbyImage
              image={props.authPic}
              alt={props.authAlt}
              className="w-8 h-8 rounded-full"
            />
            <div className="flex flex-col">
              <span className="leading-none">{props.author}</span>
              <div className="leading-none">
                <span className="font-segoeLight text-sm ">Updated on: </span>
                <span className="text-sm font-segoeSemiBold">{props.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default BlogPostHero;
