import React from "react";

export const Break = () => <div className="h-10" />;

// export const Heading2 = (props) => (
//   <h2 className="text-4xl py-2 mb-2">{props.h2}</h2>
// );

// export const Heading3 = (props) => (
//   <h3 className="text-3xl py-2 mb-2 font-segoeSemiBold">{props.h3}</h3>
// );

// export const Heading4 = (props) => (
//   <h4 className="text-2xl py-2 mb-2 font-segoeSemiBold">{props.h4}</h4>
// );

// export const Heading5 = (props) => (
//   <h5 className="text-xl py-2 mb-2 font-segoeSemiBold">{props.h5}</h5>
// );

export const ExLink = (props) => (
  <>
    <a
      href={props.goTo}
      className="text-xl font-segoeSemiBold underline decoration-third underline-offset-4"
    >
      {props.label}
    </a>
  </>
);
