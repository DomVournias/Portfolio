import React from "react";
import { Link } from "gatsby";

export default function ProjectsButton() {
  return (
    <div className="pt-20 pb-40 overflow-hidden max-w-xs m-auto items-center ">
      <Link to="/projects">
        <div id="all-projects-button-overlay">All my Work</div>
      </Link>
    </div>
  );
}
