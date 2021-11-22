import React, { useState, useEffect } from "react";

const BackToTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div className="fixed xs:bottom-5 xs:right-5 lg:bottom-10 lg:right-10 group z-40 shadow-3xl rounded-full">
      {show && (
        <svg
          onClick={handleClick}
          className="w-10 cursor-pointer"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 16 16"
        >
          <g transform="rotate(180 8 8)">
            <g fill="currentColor">
              <path
                className="fill-current text-gray-naive text-opacity-30 group-hover:text-gray-naive transition-all duration-300 ease-in-out"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
              />
            </g>
          </g>
        </svg>
      )}
    </div>
  );
};

export default BackToTop;
