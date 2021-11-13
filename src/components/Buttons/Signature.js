import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Signature() {
  return (
    <>
      <div className="text-center xs:pt-6 md:py-1 ">
        <StaticImage
          src="../../images/domvournias-signaturew.png"
          alt="Dom Vournias signature"
          quality="90"
          className="w-40"
        />
      </div>
    </>
  );
}
