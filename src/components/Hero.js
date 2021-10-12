import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {
  return (
    <div className="pb-20">
      <h1 className="text-7xl text-white pt-16 pb-4">Hello, I'm Dom</h1>
      <h2 className="text-4xl text-gray pb-10">
        A front-end developer,
        <br /> who loves building web apps
      </h2>
      <StaticImage
        src="../images/Screenshot_106.jpg"
        alt="avatar"
        className=""
      />
    </div>
  );
}