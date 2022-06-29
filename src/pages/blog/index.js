import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyIcon, ReactIcon, StyledComponentsIcon } from "../../components/Devicon/Devicons";

const BlogPosts = () => {
  const data = useStaticQuery(graphql`
    query AllBlogPosts {
      allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { regex: "/(blogposts)/" } }
      ) {
        nodes {
          id
          slug
          frontmatter {
            category1
            category2
            category3
            date
            description
            slug
            stack3
            title
          }
        }
      }
    }
  `);
  // console.log(data);
  const blogposts = data.allMdx.nodes;
  return (
    <div className="block w-full ">
      <div className="flex flex-col max-w-6xl m-auto px-4 my-10 ">
        <div className="block w-full my-10 ">
          <h2 className="text-5xl font-bold">Blog</h2>
        </div>
        <div className="flex xs:flex-col lg:flex-row flex-wrap gap-y-12 gap-x-[5%] py-10 mb-40">
          {blogposts.map((blogpost) => {
            const title = blogpost.frontmatter.title;
            const slug = blogpost.frontmatter.slug;
            const description = blogpost.frontmatter.description;
            const category1 = blogpost.frontmatter.category1;

            return (
              <div
                className="flex xs:flex-col xs:w-2/2 lg:w-[47.5%] h-[fit-content] bg-gray-naive bg-opacity-60 rounded-[8px] "
                key={blogpost.id}
              >
                <div className="flex gap-6 p-6 border-3 border-gray-naiveHover items-center self-center ">
                  <div className="w-[20%] self-center">
                    {category1 == "Styled-Components" ? <StyledComponentsIcon/> : category1 == "Gatsby" ? (
                      <GatsbyIcon />
                    ) : category1 == "React" ? (
                      <ReactIcon />
                    ) : (
                      "Loading..."
                    )}
                  </div>
                  <div className="w-[80%] h-full">
                    <h3 className=" text-2xl pb-2">{title}</h3>

                    <p className="text-base font-segoe opacity-50 line-clamp-2">
                      {description}
                    </p>

                    {/* <div className="flex flex-row gap-2 opacity-50 items-center">
                        <span className=" font-segoe">#{category1}</span>
                        <span className="font-segoe">
                          {category2 == "none" ? null : `# ${category2}`}
                        </span>
                        <span className="font-segoe">
                          {category3 == "none" ? null : `# ${category3}`}
                        </span>
                      </div> */}
                    <div className="pt-4">
                      <Link
                        className="bg-gray-naiveLight py-1 px-3 rounded-[8px] shadow-2xl "
                        to={`/blog/${slug}`}
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
