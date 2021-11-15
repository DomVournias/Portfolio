import React from "react";
import { Link } from "gatsby";

const CardButton = (props) => {
  return (
    <div className="flex justify-center -mb-6">
      <div className="flex w-1/5 transition-all duration-500 ease-in-out">
        <Link to={props.slug} className="w-full h-full block">
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
};

export default CardButton;
