import React from "react";
import FacebookLink from "./FacebookLink";
import GithubLink from "./GithubLink";
import Linkedin from "./Linkedin";
import TwitterLink from "./TwitterLink";
import UpworkLink from "./UpworkLink";

const FooterSocialLinks = () => {
  return (
    <li className="flex flex-row text-xl py-2 text-right justify-end xs:justify-center xs:gap-10 xs:pt-10 md:justify-end md:gap-3 md:pt-2">
      <GithubLink />
      <TwitterLink />
      <FacebookLink />
      <Linkedin />
      <UpworkLink />
    </li>
  );
};

export default FooterSocialLinks;
