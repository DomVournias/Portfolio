import React from "react";
import { Link } from "gatsby";

export default function ProjectsButton() {
  return (
    <div className="flex xs:flex-col md:flex-row items-center rounded-xl xs:bg-gradient-to-t md:bg-gradient-to-l from-black to-fifth xs:py-10 md:py-20 xs:mx-6 xs:my-32 md:px-20 md:mb-40 md:gap-20 gap-10 xs:shadow-glowUp md:shadow-glow ">
      <div className="w-3/4 xs:text-center md:text-left">
        <h3 className="text-5xl pb-4">All Projects</h3>
        <h4 className="text-2xl">
          Have a look at the full list of the projects I've worked.
        </h4>
      </div>

      <div className="xs:w-14 xs:text-center md:w-14 transform hover:scale-95 transition-all duration-500 ease-in-out">
        <Link to="/projects/" className="w-full h-full block">
          <svg
            className="xs:w-full "
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <rect fill="current" />
            <g transform="rotate(-90 8 8)">
              <path
                className="fill-current text-white text-opacity-100 hover:text-opacity-90 transition-all duration-200 "
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
              />
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
}
{
  /* <Link to="/projects">
          <div id="all-projects-button-overlay">All my Work</div>
        </Link> */
}

{
  /* <svg
              className="w-1/2 transform transition-transform duration-200 ease-in-out translate-x-0 hover:translate-x-1.5"
              viewBox="0 0 61 41"
              fill="none"
            >
              <title>Arrow Right Large Icon</title>
              <path
                className="stroke-current text-white text-opacity-60 hover:text-opacity-100 transition-all duration-200 ease-in-out"
                d="M39.813 37.806l15.312-17.018L39.813 3.775M56.5 20.787H.5"
                stroke-width="8"
              ></path>
            </svg> */
}
