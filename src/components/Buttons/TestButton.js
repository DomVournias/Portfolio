import React from "react";

export default function TestButton() {
  return (
    <a
      href="#_"
      class="relative inline-flex items-center justify-center py-3 overflow-hidden transition duration-100 ease-out group"
    >
      <svg
        class="z-10 absolute inset-0 flex items-center justify-center w-full h-full fill-current text-gray-600 duration-200 -translate-x-full group-hover:translate-x-0 ease opacity-0 rounded-lg shadow-xl transform group-hover:opacity-100  transition ease-in-out overflow-hidden "
        aria-hidden="true"
        role="img"
        width="5em"
        height="5em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <g fill="fill-current">
          <path
            d="M21 12l-7-9v4.99L3 8v8h11v5l7-9z"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>

      <svg
        class="z-20 absolute flex items-center justify-center w-full h-full black transition-all duration-300 transform opacity-40 fill-current text-black overflow-hidden"
        aria-hidden="true"
        role="img"
        width="5em"
        height="5em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <g fill="fill-current">
          <path
            class="z-60"
            d="M21 12l-7-9v4.99L3 8v8h11v5l7-9z"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
      <span class="relative invisible">Button Text</span>
    </a>
  );
}
