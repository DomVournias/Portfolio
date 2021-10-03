import React from "react";
import { Link } from "gatsby";

const activeStyles = {
  color: "white",
};

export default function Navbar() {
  return (
    <header className="block w-full">
      <div className="flex flex-row h-20 max-w-6xl  justify-between m-auto items-center">
        <div className="">
          <Link
            to="/"
            className="flex flex-row opacity-100 hover:opacity-75 transition duration-200 ease-in-out"
          >
            <img src="../images/dovm.png" className="mr-3"></img>
            <div className="text-base font-bold text-dark_light-300">
              Dom Vournias
            </div>
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
          </nav>
        </div>
      </div>
    </header>
  );
}
