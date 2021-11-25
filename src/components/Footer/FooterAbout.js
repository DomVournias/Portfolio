import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Signature from "../Buttons/Signature";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterNavLinks from "./FooterNavLinks";

export default function Footer() {
  const activeStyles = {
    color: "#f64d28",
  };

  return (
    <footer className="block w-full pb-24 xs:px-6">
      <div className="border-t-2 border-gray-300 border-opacity-20 max-w-6xl pb-10 m-auto"></div>
      <div className="flex xs:flex-col justify-between m-auto items-center max-w-6xl ">
        <div>
          <ul className="flex flex-row gap-4 gap-4p-0 xs:pt-12 md:pt-0">
            <Link
              to="/"
              className="opacity-100 hover:opacity-75 transition duration-200 ease-in-out"
            >
              <StaticImage
                src="../../images/DomFav-512x512.png"
                className="w-10 mb-2"
              />
            </Link>
            <FooterNavLinks />
          </ul>
        </div>
        <div className="max-w-lg">
          <Signature />
        </div>
        <div>
          <FooterSocialLinks />
        </div>
      </div>
    </footer>
  );
}
