import React from "react";

const ProjectInfo = (props) => {
  return (
    <div className="flex flex-col items-center place-content-center bg-white xs:py-[30vw] xs:px-[6vw] md:py-[14vw] sm:px-[10vw] md:px-[8vw] lg:px-[15vw] lap:px-[22vw] desk:px-[24vw] ">
      <div className="">
        <div className="flex flex-row place-content-between items-center py-3 pb-8">
          <span className="self-center">
            <h3 className="font-boldNova text-xl text-secondary">
              {props.company}
            </h3>
          </span>
          <div className="flex self-end xs:gap-1 md:gap-3">
            <span className="flex xs:gap-1 sm:gap-2 py-2 xs:px-2 sm:px-4 rounded-lg border-r-2 border-b-2 border-black border-opacity-20 text-black xs:text-sm sm:text-base md:text-lg font-boldNova">
              <svg
                className="xs:w-4 md:w-6 "
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <rect x="0" y="0" />
                <defs />
                <path
                  className="text-black text-opacity-70"
                  d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4z"
                  fill="currentColor"
                />
                <circle id="_Inner-Path_" cx="16" cy="13" r="4" fill="none" />
              </svg>
              {props.place}
            </span>
            <span className="flex xs:gap-1 sm:gap-2 py-2 xs:px-2 sm:px-4 rounded-lg border-r-2 border-b-2 border-black border-opacity-20 text-black xs:text-sm sm:text-base md:text-lg font-boldNova">
              <svg
                className="xs:w-4 md:w-6 "
                aria-hidden="true"
                role="img"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <rect x="0" y="0" />
                <path
                  className="text-black text-opacity-70"
                  d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
                  fill="currentColor"
                />
              </svg>
              {props.date}
            </span>
          </div>
        </div>

        <p className="xs:text-[22px]  md:text-[27px] xxl:text-[27px]  lap:text-[32px] xs:leading-[44px] sm:leading-[50px] lap:leading-[55px] text-graph font-semiNova">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;
