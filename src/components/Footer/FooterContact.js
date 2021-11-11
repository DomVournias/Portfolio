import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Signature from "../Buttons/Signature";

export default function FooterContact() {
  return (
    <div className="max-w-lg">
      <h2 className="flex flex-row text-white text-2xl mb-2 items-center">
        <StaticImage
          src="../../images/DomFav-512x512.png"
          alt="Dom Vournias Portfolio"
          quality="90"
          className="w-6 h-6 mr-2"
        />
        Get in touch
      </h2>
      <div className="flex flex-row flex-wrap m-0 p-0 mb-5 flex-start justify-center">
        <div className="w-3/5 ">
          <p className="text-xl leading-snug mr-5">
            If you want to work together on a project or just have a chat,
            please don't hesitate to contact me via email below.
          </p>
        </div>
        <div className="w-2/5">
          <StaticImage
            src="../../images/DomAvatarBigger.png"
            alt="about"
            quality="90"
            className="w-full rounded-xl"
          />
        </div>
      </div>
      <Signature />
    </div>
  );
}
