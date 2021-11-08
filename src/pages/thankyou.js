import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const thankyou = () => {
  return (
    <div className="flex w-full h-screen items-center place-content-center">
      <div className="flex flex-col max-w-3xl xs:px-8">
        <Link
          to="/"
          className="flex flex-row self-center items-center opacity-100 hover:opacity-75 transition duration-200 ease-in-out"
        >
          <StaticImage
            src="../../images/dovm.png"
            alt="Dom Vournias Portfolio"
            quality="90"
            className="w-12"
          />
        </Link>
        <div className="text-center">
          <h1 className="xs:text-5xl md:text-7xl text-white pt-8 pb-8">
            Thank you!
          </h1>
          <h2 className="xs:text-xl md:text-2xl text-gray pb-10">
            I've received your message and I would like to thank you for writing
            to me. If your inquiry is urgent, please don't hesitate to call me
            at the telephone number listed below.
            <br /> <br /> Otherwise, I will reply by email as soon as possible.
            <br /> <br /> Talk to you soon,
          </h2>
          <StaticImage
            src="../images/domvournias-signaturew.png"
            alt="Dom Vournias signature"
            quality="90"
            className="w-40"
          />
        </div>
      </div>
    </div>
  );
};

export default thankyou;
