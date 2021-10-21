import React from "react";
import FooterContact from "./FooterContact";
import FooterList from "./FooterList";

export default function Footer() {
  return (
    <footer className="block w-full pb-24 xs:px-6">
      <div className="border-t-2 border-gray-300 border-opacity-20 max-w-6xl pb-10 m-auto"></div>
      <div className="flex xs:flex-col md:flex-row justify-between m-auto items-center max-w-6xl ">
        <FooterContact />
        <FooterList />
      </div>
    </footer>
  );
}
