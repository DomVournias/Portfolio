import React from "react";
import { graphql, useStaticQuery } from "gatsby";

export default function TypeWriter() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(blog)/" } }) {
        nodes {
          html
        }
      }
    }
  `);
  const code = data.allMarkdownRemark.nodes[0].html;
  console.log(data.allMarkdownRemark);
  return (
    <div className="">
      <div dangerouslySetInnerHTML={{ __html: code }} className=" font-code" />
    </div>
  );
}
