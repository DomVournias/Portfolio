import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const NavbarLogoName = () => {
  return (
    <div className="">
      <Link
        to="/"
        className="flex flex-row opacity-100 hover:opacity-75 transition duration-200 ease-in-out"
      >
        <StaticImage
          src="../../images/DomFav-512x512.png"
          alt="Dom Vournias Portfolio"
          quality="90"
          className="w-8"
        />

        <div className="pl-3 text-lg font-bold text-gray xs:hidden sm:block">
          Dom Vournias
        </div>
      </Link>
    </div>
  );
};

export default NavbarLogoName;
