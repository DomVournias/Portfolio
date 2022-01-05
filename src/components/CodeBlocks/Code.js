import React, { useEffect } from "react";
import Prism from "prismjs";
import "../../styles/prism.css";

export default function Code({ code, language, title }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className="my-10">
      <div className="Code">
        <pre className={`language-${language}`}>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
