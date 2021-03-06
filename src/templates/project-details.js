import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Seo } from "../components/Seo";
import QuoteSection from "../components/SingleProjectAssets/QuoteSection";
import BestFeature from "../components/SingleProjectAssets/BestFeature";
import KeyFeatures from "../components/SingleProjectAssets/KeyFeatures";
import ProjectStacks from "../components/SingleProjectAssets/ProjectStacks";
import ProjectInfo from "../components/SingleProjectAssets/ProjectInfo";
import ProjectHero from "../components/SingleProjectAssets/ProjectHero";
import BackToTop from "../components/Buttons/BackToTop";

export default function ProjectDetails({ data }) {
  const {
    title,
    website,
    github,
    company,
    date,
    description,
    place,
    slug,
    stack1,
    stack2,
    stack3,
    bestFeature,
    thumbImg,
    featuredImg1,
    featuredImg2,
    featuredImg3,
    featuredImg4,
    featuredImg5,
    bigDescription1,
    bigDescription2,
    bigDescription3,
    infoTitle1,
    infoDescription1,
    infoDescription2,
    infoDescription3,
  } = data.mdx.frontmatter;

  console.log(data);

  return (
    <>
      <Seo title={title} description={description} />
      <section className="justify-between -mt-20 w-full items-center ">
        <ProjectHero
          title={title}
          description={description}
          pic={thumbImg}
          slug={slug}
          github={github}
          website={website}
        />
        <ProjectInfo
          company={company}
          place={place}
          date={date}
          description={bigDescription1}
        />
        <ProjectStacks
          pic={featuredImg1}
          slug={slug}
          stackA={stack1}
          stackB={stack2}
          stackC={stack3}
          description={infoDescription1}
        />
        <QuoteSection quote={bigDescription2} />
        <KeyFeatures
          title={infoTitle1}
          description={infoDescription2}
          phoneA={featuredImg2}
          phoneB={featuredImg3}
          phoneC={featuredImg4}
          slug={slug}
        />
        <BestFeature
          pic={featuredImg5}
          slug={slug}
          feature={bestFeature}
          description={infoDescription3}
        />
        <QuoteSection quote={bigDescription3} />
        <BackToTop showBelow={800} />
      </section>
    </>
  );
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        bigDescription1
        bigDescription2
        bigDescription3
        bestFeature
        company
        date(formatString: "DD MMM YYYY")
        description
        github
        infoDescription1
        infoDescription2
        infoDescription3
        infoTitle1
        place
        slug
        stack1
        stack2
        stack3
        title
        website
        thumbImg {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, formats: WEBP)
          }
        }
        featuredImg1 {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, formats: WEBP)
          }
        }
        featuredImg2 {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, formats: WEBP)
          }
        }
        featuredImg3 {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, formats: WEBP)
          }
        }
        featuredImg4 {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, formats: WEBP)
          }
        }
        featuredImg5 {
          childImageSharp {
            gatsbyImageData(quality: 100, placeholder: BLURRED, formats: WEBP)
          }
        }
      }
    }
  }
`;
