import React from "react";
import FooterContact from "./FooterContact";
import FooterList from "./FooterList";

export default function Footer() {
  return (
    <footer className="flex w-full pb-24 justify-center">
      {/* <div className="border-t-2 border-gray-300 border-opacity-20 max-w-6xl pb-10 m-auto"></div> */}
      <div className="flex flex-[auto] xs:flex-col md:flex-row justify-between items-center max-w-6xl border-t-2 border-gray-300 border-opacity-20 pt-10 mx-4">
        <FooterContact />
        <FooterList />
      </div>
    </footer>
  );
}
