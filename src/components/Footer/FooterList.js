import React from "react";
import FooterNavLinks from "./FooterNavLinks";
import FooterSocialLinks from "./FooterSocialLinks";

export default function FooterList() {
  return (
    <div>
      <ul className="p-0 xs:pt-12 md:pt-0">
        <FooterNavLinks />
        <FooterSocialLinks />
      </ul>
    </div>
  );
}
