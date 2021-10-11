import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const activeStyles = {
  color: "white",
};

export default function Navbar() {
  return (
    <header className="block w-full">
      <div className="flex flex-row h-20 max-w-6xl  justify-between m-auto items-center px-4">
        <div className="">
          <Link
            to="/"
            className="flex flex-row opacity-100 hover:opacity-75 transition duration-200 ease-in-out"
          >
            <StaticImage src="../images/dovm.png" className="w-8" />
            <div className="pl-3 text-lg font-bold text-gray">Dom Vournias</div>
          </Link>
        </div>
        <div>
          <nav className="relative">
            <Link to="/" className="nav-link" activeStyle={activeStyles}>
              Work
            </Link>
            <Link to="/about/" className="nav-link" activeStyle={activeStyles}>
              About
            </Link>
            <Link to="/tests/" className="nav-link" activeStyle={activeStyles}>
              Tests
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
