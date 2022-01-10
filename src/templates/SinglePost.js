import { graphql } from "gatsby";
import React from "react";
import { getImage } from "gatsby-plugin-image";
import BlogPostHero from "../components/SinglePostAssets/BlogPostHero";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { Seo } from "../components/Seo";
import SinglePostSidebarRight from "../components/SinglePostAssets/SinglePostSidebarRight";
import Comments from "../components/SinglePostAssets/Comments";

const SinglePost = ({ data }) => {
  const {
    title,
    description,
    date,
    author,
    category1,
    category2,
    category3,
    slug,
  } = data.mdx.frontmatter;
  const Image = data.mdx.frontmatter.featuredImage.childImageSharp.fluid;
  const AuthorPicture = getImage(data.mdx.frontmatter.authorImage);
  const LocalImages = data.mdx.frontmatter.embeddedImagesLocal;

  return (
    <>
      <Seo title={title} description={description} image={Image} />
      <div className="block w-full xs:px-4">
        <div className="flex flex-col max-w-6xl m-auto my-10">
          <MDXProvider
            components={{
              h2: (props) => (
                <h2
                  {...props}
                  className="xs:text-[31px] md:text-[38px] lg:text-[43px] mb-8 mt-10 leading-none"
                />
              ),
              h3: (props) => (
                <h3
                  {...props}
                  className="xs:text-[26px] md:text-[29px] lg:text-[33px] mb-8 mt-16 font-segoeBold leading-none"
                />
              ),
              h4: (props) => (
                <h4
                  {...props}
                  className="text-[21px] mb-4 mt-10 font-segoeBold leading-none"
                />
              ),
              h5: (props) => (
                <h5
                  {...props}
                  className="text-xl mb-2 font-segoeSemiBold leading-none"
                />
              ),
              p: (props) => (
                <p {...props} className="text-xl font-segoe leading-8" />
              ),
              ul: (props) => (
                <ul
                  {...props}
                  className=" text-xl font-segoe leading-8 mb-4 list-disc	ml-6"
                />
              ),
              li: (props) => <li {...props} className="mb-2" />,
              a: (props) => (
                <a
                  {...props}
                  className="text-xl font-segoeSemiBold underline decoration-third underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
              blockquote: (props) => (
                <div
                  {...props}
                  className=" border-2 border-dashed p-6 my-8 border-dark-200 w-[fit-content]"
                />
              ),
              hr: (props) => <hr {...props} className="border-none my-4" />,
            }}
          >
            <BlogPostHero
              backImage={Image}
              title={title}
              desc={description}
              cat1={category1}
              cat2={category2}
              cat3={category3}
              authPic={AuthorPicture}
              authAlt={author}
              author={author}
              date={date}
            />
            <div className="my-10 xs:flex-col flex lg:flex-row gap-5">
              <div className="xs:w-4/4 lg:w-3/4">
                <MDXRenderer localImages={LocalImages}>
                  {data.mdx.body}
                </MDXRenderer>
              </div>
              <SinglePostSidebarRight
                site="https://domvournias.com/blog/"
                slug={slug}
                title={title}
              />
            </div>
            <Comments issueTerm={title} />
          </MDXProvider>
        </div>
      </div>
    </>
  );
};

export default SinglePost;

export const query = graphql`
  query SinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        author
        title
        slug
        description
        category1
        category2
        category3
        date(formatString: "DD MMM, YYYY")
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData
          }
        }
        featuredImage {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        authorImage {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, formats: WEBP)
          }
        }
      }
    }
  }
`;
