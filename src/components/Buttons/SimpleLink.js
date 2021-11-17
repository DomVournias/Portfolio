import React from "react";

const SimpleLink = (props) => {
  return (
    <a href={props.url} className="text-third hover:text-white">
      {props.text}
    </a>
  );
};

export default SimpleLink;
