import React from "react";
import { Link } from "gatsby";

const FooterNavLinks = () => {
  const activeStyles = {
    color: "#f64d28",
  };
  return (
    <>
      <Link
        exact
        to="/projects/"
        className="footer-links xs:text-center md:text-right"
        activeStyle={activeStyles}
      >
        PROJECTS
      </Link>

      <Link
        exact
        to="/about/"
        className="footer-links xs:text-center md:text-right"
        activeStyle={activeStyles}
      >
        ABOUT
      </Link>
    </>
  );
};

export default FooterNavLinks;
