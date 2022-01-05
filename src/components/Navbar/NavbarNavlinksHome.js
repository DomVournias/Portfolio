import React from "react";
import { Link } from "gatsby";
import NavbarSocialsHome from "./NavbarSocialsHome";

const activeStyles = {
  color: "white",
};

const NavbarNavlinksHome = () => {
  return (
    <nav className="flex items-center">
      <Link
        to="/projects/"
        className="xs:text-md xs:px-3 md:text-lg md:px-6 py-2   text-gray transition duration-200 ease-in-out hover:text-white"
        activeStyle={activeStyles}
      >
        Projects
      </Link>

      <Link
        to="/about/"
        className="xs:text-md xs:px-3 md:text-lg md:px-6 py-2   text-gray transition duration-200 ease-in-out hover:text-white"
        activeStyle={activeStyles}
      >
        About
      </Link>
      <Link
        to="/blog/"
        className="xs:text-md xs:px-3 md:text-lg md:px-6 py-2   text-gray transition duration-200 ease-in-out hover:text-white"
        activeStyle={activeStyles}
      >
        Blog
      </Link>
      <NavbarSocialsHome />
    </nav>
  );
};

export default NavbarNavlinksHome;
