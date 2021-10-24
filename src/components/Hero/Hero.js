import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {
  return (
    <div className="pb-20">
      <h1 className="xs:text-5xl md:text-7xl text-white pt-16 pb-4">
        Hi, I'm Dom
      </h1>
      <h2 className="xs:text-2xl md:text-4xl text-gray pb-10">
        A front-end developer,
        <br /> who loves building web apps
      </h2>
      <StaticImage
        src="../../images/DomAvatar (1).png"
        alt="avatar"
        quality="100"
        className="mx-4 max-w-3xl"
      />
    </div>
  );
}
