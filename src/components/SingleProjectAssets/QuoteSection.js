import React from "react";

const QuoteSection = (props) => {
  return (
    <div className="flex flex-row items-center place-content-center bg-secondary">
      <div className="max-w-4xl py-60">
        <p className="text-3xl tracking-wide text-white leading-relaxed">
          {props.quote}
        </p>
      </div>
    </div>
  );
};

export default QuoteSection;
