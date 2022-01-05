import React from "react";
import NavbarLogoName from "./NavbarLogoName";
import NavbarNavlinksHome from "./NavbarNavlinksHome";

export default function Navbar() {
  return (
    <header className="flex w-full justify-center">
      <div className="flex flex-[auto] flex-row h-20 max-w-6xl  justify-between items-center mx-4">
        <NavbarLogoName />
        <NavbarNavlinksHome />
      </div>
    </header>
  );
}
