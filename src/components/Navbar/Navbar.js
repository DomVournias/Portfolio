import React from "react";
import NavbarLogoName from "./NavbarLogoName";
import NavbarNavlinksHome from "./NavbarNavlinksHome";
import NavbarSocialsHome from "./NavbarSocialsHome";
import { useState } from "react";
import PopUpMenu from "./PopUpMenu";
import Hamburger from "./Hamburger";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex w-full justify-center">
      <div className="flex flex-[auto] flex-row h-20 max-w-6xl  justify-between items-center mx-4">
        <NavbarLogoName name="logo-name-visible" logo="w-8" logoContainer="" />
        <div className="xs:hidden md:flex items-center">
          <NavbarNavlinksHome />
          <NavbarSocialsHome
            linksContainer="flex gap-2 xs:pl-3 md:pl-6 "
            links="text-gray opacity-80 group-hover:text-white transition duration-200 ease-in-out"
            background="text-black"
          />
        </div>
        <Hamburger btn={setIsOpen} />
      </div>

      <PopUpMenu logic={isOpen} btn={setIsOpen} />
    </header>
  );
}
