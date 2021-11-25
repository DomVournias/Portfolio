import React from "react";
import { Link } from "gatsby";

const CardButton = (props) => {
  return (
    <div className="flex justify-center -mb-6 gap-6">
      {!props.github ? null : (
        <div className="flex w-[17%] transition-all duration-500 ease-in-out bg-black  rounded-full p-[0.2rem] self-center ">
          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full flex justify-center opacity-40 group-hover:opacity-100 hover:animate-spin transition-all duration-300"
          >
            <svg viewBox="0 0 128 128" className="fill-current">
              <g fill="">
                <path
                  className="text-github "
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                ></path>
              </g>
            </svg>
          </a>
        </div>
      )}

      {props.github ? null : (
        <div className="w-[17%] p-[0.2rem] self-center ">
          <Link to={props.github}></Link>
        </div>
      )}
      <div className="flex transition-all duration-500 ease-in-out ">
        <Link to={props.slug} className="w-full h-full flex flex-col">
          <h3 className="bg-gray-card rounded-full px-[22px] py-2 border-b-4 border-gray-outline md:text-sm lg:text-base group-hover:border-[3px] group-hover:border-third transition-all duration-100 hover:bg-third ">
            Case Study
          </h3>
        </Link>
      </div>
      <div className="flex w-[17%] transition-all duration-500 ease-in-out bg-black rounded-full p-[0.2rem] self-center">
        <a
          href={props.website}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full block opacity-40 group-hover:opacity-100 hover:animate-spin transition-all duration-300"
        >
          <svg viewBox="0 0 128 128" className="text-site">
            <circle
              className="text-site "
              fill="text-site"
              cx="63.624"
              cy="64.474"
              r="22.634"
            ></circle>
            <path
              className="fill-current text-site "
              fill=""
              d="M64 37h54.186c-9.944-20-30.64-33.633-54.562-33.633-19.367 0-36.619 9.173-47.764 23.271l21.123 35.748C38.015 48.48 48 37.07 64 37zm56.126 4H78.294c7.403 6 12.299 13.884 12.299 23.369 0 4.663-1.183 8.631-3.268 13.631h.015l-27.757 47.511c1.335.087 2.682-.022 4.04-.022 33.609 0 60.855-27.746 60.855-61.355.001-8-1.546-15.134-4.352-23.134zM63.624 91.445c-11.672 0-21.611-7.414-25.368-17.789L13.07 30.585C6.565 40.271 2.767 51.93 2.767 64.474c0 30.632 22.634 55.972 52.089 60.224l20.996-36.179a26.853 26.853 0 01-12.228 2.926z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CardButton;
