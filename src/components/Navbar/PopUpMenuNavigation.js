import { Link } from "gatsby";
import React from "react";
import NavbarLogoName from "./NavbarLogoName";
import NavbarSocialsHome from "./NavbarSocialsHome";

const PopUpMenuNavigation = () => {
  const activeStyles = {
    color: "black",
  };
  return (
    <nav className="flex flex-col items-center justify-center w-full ">
      <NavbarLogoName
        name="logo-name-hidden"
        logo="w-10"
        logoContainer="mb-10"
      />
      <Link
        to="/"
        className="xs:text-3xl xs:px-3 md:text-lg md:px-6 py-2 text-white transition duration-200 ease-in-out hover:text-white"
        activeStyle={activeStyles}
      >
        Home
      </Link>
      <Link
        to="/projects/"
        className="xs:text-3xl xs:px-3 md:text-lg md:px-6 py-2 text-white transition duration-200 ease-in-out hover:text-white"
        activeStyle={activeStyles}
      >
        Projects
      </Link>

      <Link
        to="/about/"
        className="xs:text-3xl xs:px-3 md:text-lg md:px-6 py-2 text-white transition duration-200 ease-in-out hover:text-white"
        activeStyle={activeStyles}
      >
        About
      </Link>
      <Link
        to="/blog/"
        className="xs:text-3xl xs:px-3 md:text-lg md:px-6 py-2 text-white transition duration-200 ease-in-out hover:text-white"
        activeStyle={activeStyles}
      >
        Blog
      </Link>
      <NavbarSocialsHome
        linksContainer="flex gap-2 xs:pl-3 md:pl-6 mt-20"
        links="text-white opacity-80 group-hover:opacity-100 transition duration-200 ease-in-out"
        background="text-third"
      />
    </nav>
  );
};

export default PopUpMenuNavigation;
