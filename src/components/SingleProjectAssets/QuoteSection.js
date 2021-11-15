import React from "react";

const QuoteSection = (props) => {
  return (
    <div className="flex flex-row items-center place-content-center bg-secondary xs:px-[6vw] sm:px-[10vw] md:px-[8vw] lg:px-[15vw] lap:px-[22vw] desk:px-[24vw]">
      <div className="xs:py-40 md:py-48 lap:py-52 desk:py-60">
        <p className="xs:text-[22px]  md:text-[27px] xxl:text-[27px]  lap:text-[32px] xs:leading-[44px] sm:leading-[50px] lap:leading-[55px] font-nova text-white">
          {props.quote}
        </p>
      </div>
    </div>
  );
};

export default QuoteSection;
