import React from "react";
import NavbarLogoName from "./NavbarLogoName";
import NavbarNavlinksHome from "./NavbarNavlinksHome";

export default function Navbar() {
  return (
    <header className="block w-full">
      <div className="flex flex-row h-20 max-w-6xl  justify-between m-auto items-center px-4">
        <NavbarLogoName />
        <NavbarNavlinksHome />
      </div>
    </header>
  );
}
