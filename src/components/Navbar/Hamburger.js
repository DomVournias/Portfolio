import React from "react";

const Hamburger = (props) => {
  return (
    <div onClick={() => props.btn(true)} className="xs:block md:hidden">
      <svg
        aria-hidden="true"
        role="img"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1536 1280"
        className="w-6 group cursor-pointer"
      >
        <path
          className="text-gray-naiveLight group-hover:text-white transition duration-200 ease-in-out"
          d="M1536 1088v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 704V576q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19H64q-26 0-45-19T0 192V64q0-26 19-45T64 0h1408q26 0 45 19t19 45z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Hamburger;
