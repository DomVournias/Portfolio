import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Signature from "../Buttons/Signature";

export default function Footer() {
  const activeStyles = {
    color: "#f64d28",
  };

  return (
    <footer className="block w-full pb-24 xs:px-6">
      <div className="border-t-2 border-gray-300 border-opacity-20 max-w-6xl pb-10 m-auto"></div>
      <div className="flex xs:flex-col justify-between m-auto items-center max-w-6xl ">
        <div>
          <ul className="flex flex-row gap-4 gap-4p-0 xs:pt-12 md:pt-0">
            <Link
              to="/"
              className="opacity-100 hover:opacity-75 transition duration-200 ease-in-out"
            >
              <StaticImage
                src="../../images/DomFav-512x512.png"
                className="w-10 mb-2"
              />
            </Link>
            <Link
              exact
              to="/"
              className="footer-links xs:text-center md:text-right"
              activeStyle={activeStyles}
            >
              PROJECTS
            </Link>
            <Link
              exact
              to="/about/"
              className="footer-links xs:text-center md:text-right"
              activeStyle={activeStyles}
            >
              ABOUT
            </Link>
          </ul>
        </div>
        <div className="max-w-lg">
          <Signature />
        </div>
        <div>
          <li className="flex flex-row text-xl py-2 text-right justify-end xs:justify-center xs:gap-10 xs:pt-10 md:justify-end md:gap-3 md:pt-2">
            <a
              href="https://www.facebook.com/dominicvournias/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition duration-200 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://gr.linkedin.com/in/domvournias"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition duration-200 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 2.838A1.838 1.838 0 0 1 2.838 1H21.16A1.837 1.837 0 0 1 23 2.838V21.16A1.838 1.838 0 0 1 21.161 23H2.838A1.838 1.838 0 0 1 1 21.161V2.838zm8.708 6.55h2.979v1.496c.43-.86 1.53-1.634 3.183-1.634c3.169 0 3.92 1.713 3.92 4.856v5.822h-3.207v-5.106c0-1.79-.43-2.8-1.522-2.8c-1.515 0-2.145 1.089-2.145 2.8v5.106H9.708V9.388zm-5.5 10.403h3.208V9.25H4.208v10.54zM7.875 5.812a2.063 2.063 0 1 1-4.125 0a2.063 2.063 0 0 1 4.125 0z"
                    fill="white"
                  />
                </g>
              </svg>
            </a>

            <a
              href="https://www.upwork.com/freelancers/~01f64995dbf453a3c6?s=1044578476142100494"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition duration-200 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  d="M24.75 17.542c-1.469 0-2.849-.62-4.099-1.635l.302-1.432l.01-.057c.276-1.521 1.13-4.078 3.786-4.078a3.605 3.605 0 0 1 3.604 3.604a3.605 3.605 0 0 1-3.604 3.599zm0-10.849c-3.385 0-6.016 2.198-7.083 5.818c-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484a3.403 3.403 0 0 1-3.396 3.396a3.406 3.406 0 0 1-3.396-3.396V4.657H0v9.484c0 3.885 3.161 7.068 7.042 7.068c3.885 0 7.042-3.182 7.042-7.068v-1.589c.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417.906 3.047 1.479 4.917 1.479c4 0 7.25-3.271 7.25-7.266c0-4-3.25-7.25-7.25-7.25z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
        </div>
      </div>
    </footer>
  );
}
