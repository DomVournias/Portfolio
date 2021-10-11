import React from "react";

export default function ContactButton() {
  return (
    <>
      <a
        className="bg-green-600 text-lg font-bold text-center py-2 px-6 w-full block transition-2 rounded-lg hover:bg-opacity-80 transition duration-200 ease-in-out"
        href="mailto:domvournias@gmail.com"
      >
        Send me an email
      </a>
    </>
  );
}
