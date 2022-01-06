import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const NavbarLogoName = (props) => {
  return (
    <div className={props.logoContainer}>
      <Link
        to="/"
        className="flex flex-row opacity-100 hover:opacity-75 transition duration-200 ease-in-out shadow-lg"
      >
        <StaticImage
          src="../../images/DomFav-512x512.png"
          alt="Dom Vournias Portfolio"
          quality="90"
          className={props.logo}
        />

        <div className={props.name}>Dom Vournias</div>
      </Link>
    </div>
  );
};

export default NavbarLogoName;
