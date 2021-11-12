import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Seo } from "../components/Seo";

export default function ProjectDetails({ data }) {
  // const seoImage = data.mdx.frontmatter.featureImage.publicURL;

  const { html } = data.markdownRemark;
  const {
    title,
    company,
    date,
    description,
    place,
    slug,
    stack1,
    stack2,
    stack3,
    thumbImg,
    featuredImg1,
    featuredImg2,
    featuredImg3,
    featuredImg4,
    bigDescription1,
    bigDescription2,
    infoTitle1,
    infoDescription1,
    infoTitle2,
    infoDescription2,
  } = data.markdownRemark.frontmatter;

  return (
    <>
      <Seo title={title} description={description} />
      <section className="justify-between -mt-20 w-full items-center ">
        <div className="flex flex-col h-full  text-center items-center bg-secondary ">
          <div className="max-w-6xl pt-20 h-full">
            <div className="">
              <h1 className="xs:text-5xl md:text-7xl text-white pt-16 pb-4">
                {title}
              </h1>
              <h2 className="xs:text-2xl md:text-4xl text-white pb-10 max-w-lg">
                {description}
              </h2>
            </div>
            <div className="w-full pb-20">
              <GatsbyImage
                image={getImage(thumbImg)}
                draggable={false}
                alt={slug}
                quality="100"
                className="max-w-lg "
              />
            </div>
          </div>
        </div>
        {/* -----1st Section----- */}
        <div className="flex flex-col items-center h-screen place-content-center bg-white">
          <div className="max-w-4xl">
            <div className="flex  place-content-between items-center py-3">
              <span className="self-center">
                <h3 className="text-xl text-secondary">{company}</h3>
              </span>
              <div className="flex self-end gap-3">
                <span className="flex gap-2 py-2 px-4 rounded-lg border-r-2 border-b-2 border-black border-opacity-20 text-black">
                  <svg
                    className="w-6"
                    aria-hidden="true"
                    role="img"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32"
                  >
                    <rect x="0" y="0" />
                    <defs />
                    <path
                      className="text-black text-opacity-70"
                      d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4z"
                      fill="currentColor"
                    />
                    <circle
                      id="_Inner-Path_"
                      cx="16"
                      cy="13"
                      r="4"
                      fill="none"
                    />
                  </svg>
                  {place}
                </span>
                <span className="flex gap-2 py-2 px-4 rounded-lg border-r-2 border-b-2 border-black border-opacity-20 text-black">
                  <svg
                    className="w-6 "
                    aria-hidden="true"
                    role="img"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <rect x="0" y="0" />
                    <path
                      className="text-black text-opacity-70"
                      d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
                      fill="currentColor"
                    />
                  </svg>
                  {date}
                </span>
              </div>
            </div>

            <p className="text-3xl leading-relaxed text-black">
              {bigDescription1}
            </p>
          </div>
        </div>
        {/* -----2nd Section----- */}
        <div className="flex flex-row items-center h-screen place-content-center my-4">
          <div className="max-w-6xl flex flex-row items-center">
            <div className="w-1/2 text-center">
              <GatsbyImage
                image={getImage(featuredImg1)}
                draggable={false}
                alt={slug}
                quality="100"
                className="w-2/4"
              />
            </div>
            <div className="w-1/2">
              <div className="flex items-center gap-2 py-3">
                <h3 className="text-xl">Made with</h3>
                <span className="py-2 px-4 rounded-lg bg-white bg-opacity-10">
                  {stack1}
                </span>
                <span className="py-2 px-4 rounded-lg bg-white bg-opacity-10">
                  {stack2}
                </span>
                <span className="py-2 px-4 rounded-lg bg-white bg-opacity-10">
                  {stack3}
                </span>
              </div>
              <p className="text-xl leading-relaxed">{bigDescription2}</p>
            </div>
          </div>
        </div>
        {/* -----3rd Section----- */}
        <div className="flex flex-row items-center place-content-center bg-secondary">
          <div className="max-w-4xl py-60">
            <p className="text-3xl tracking-wide text-white leading-relaxed">
              {bigDescription2}
            </p>
          </div>
        </div>
        {/* -----4th Section----- */}

        <div className="flex flex-col relative place-content-center items-center h-full bg-silver pb-60">
          <div className="max-w-4xl pt-40 pb-40">
            <h3 className="text-3xl  text-black pb-4">{infoTitle1}</h3>
            <p className="text-xl  text-black leading-relaxed">
              {bigDescription2}
            </p>
          </div>
          <div className="max-w-6xl flex flex-row gap-20 place-content-center  ">
            <div className="flex flex-col">
              <div className="relative">
                <span className="absolute -left-6 -top-6 z-10 bg-secondary p-3 rounded-full text-center bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 shadow-lg ">
                  <h3 className="text-4xl pb-2">(a)</h3>
                </span>
                <GatsbyImage
                  image={getImage(featuredImg2)}
                  draggable={false}
                  alt={slug}
                  quality="100"
                  className="max-w-lg"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="relative">
                <span className="absolute -left-6 -top-6 z-10 bg-secondary p-3 rounded-full text-center bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 shadow-lg ">
                  <h3 className="text-4xl pb-2">(b)</h3>
                </span>
                <GatsbyImage
                  image={getImage(featuredImg3)}
                  draggable={false}
                  alt={slug}
                  quality="100"
                  className="max-w-lg "
                />
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="relative">
                <span className="absolute -left-6 -top-6 z-10 bg-secondary p-3 rounded-full text-center bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 shadow-lg ">
                  <h3 className="text-4xl pb-2">(a)</h3>
                </span>

                <GatsbyImage
                  image={getImage(featuredImg4)}
                  draggable={false}
                  alt={slug}
                  quality="100"
                  className="max-w-lg "
                />
              </div>
            </div>
          </div>
        </div>

        {/* -----5th Section----- */}
        <div className="flex h-screen place-content-center bg-white">
          <div className="max-w-6xl flex flex-row-reverse items-center">
            <div className="w-1/2 text-center">
              <GatsbyImage
                image={getImage(featuredImg1)}
                draggable={false}
                alt={slug}
                quality="100"
                className="w-2/4"
              />
            </div>
            <div className="w-1/2">
              <div className="flex items-center gap-2 py-3">
                <h3 className="text-xl text-black">Complexity of </h3>
                <span className="py-2 px-4 rounded-lg bg-black bg-opacity-10 text-black text-xl">
                  {title}
                </span>
              </div>
              <p className="text-xl leading-relaxed text-black">
                {bigDescription2}
              </p>
            </div>
          </div>
        </div>
        {/* -----6th Section----- */}
        <div className="flex flex-row items-center place-content-center bg-secondary">
          <div className="max-w-4xl py-60">
            <p className="text-3xl tracking-wide text-white leading-relaxed">
              {bigDescription2}
            </p>
          </div>
        </div>
        {/* -----7th Section----- */}

        {/* -----8th Section----- */}
      </section>
    </>
  );
}

export const query = graphql`
  query ProjectDetails($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        bigDescription1
        bigDescription2
        company
        date
        description
        infoDescription1
        infoDescription2
        infoTitle1
        infoTitle2
        place
        slug
        stack1
        stack2
        stack3
        title
        thumbImg {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        featuredImg1 {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        featuredImg2 {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        featuredImg3 {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
        featuredImg4 {
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
      }
    }
  }
`;
