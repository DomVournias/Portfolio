import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import GitHubButton from "react-github-btn";

const ProjectHero = (props) => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-secondary py-[8vh] gap-20">
      <div className="flex justify-center w-full  h-[fit-content] ">
        <GatsbyImage
          image={getImage(props.pic)}
          placeholder="blurred"
          draggable={false}
          alt={props.slug}
          quality="100"
          className="overflow-hidden max-w-[45rem]"
        />
      </div>

      <div className="flex flex-row w-full gap-4 justify-center">
        <h3>View </h3>
        {!props.github ? (
          ""
        ) : (
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <GitHubButton data-size="large" aria-label="github">
              Repo
            </GitHubButton>
          </a>
        )}

        <a href={props.website} target="_blank" rel="noopener noreferrer">
          <GitHubButton
            data-icon="octicon-eye"
            data-size="large"
            aria-label="website"
          >
            Live
          </GitHubButton>
        </a>
      </div>
    </div>
  );
};

export default ProjectHero;
