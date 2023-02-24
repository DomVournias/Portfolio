import React from "react";
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
    hasmoreinfo,
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
    bestfeature,
    thumbimg,
    featuredimg1,
    featuredimg2,
    featuredimg3,
    featuredimg4,
    featuredimg5,
    bigdescription1,
    bigdescription2,
    bigdescription3,
    infodescription1,
    infodescription2,
    infodescription3,
  } = data.wpProject.project;

  return (
    <>
      <Seo title={title} description={description} />
      <section className="justify-between -mt-20 w-full items-center ">
        <ProjectHero
          title={title}
          description={description}
          pic={thumbimg.localFile}
          slug={slug}
          github={github}
          website={website}
        />
        <ProjectInfo
          company={company}
          place={place}
          date={date}
          description={bigdescription1}
        />
        {hasmoreinfo && (
          <>
            <ProjectStacks
              pic={featuredimg1.localFile}
              slug={slug}
              stackA={stack1}
              stackB={stack2}
              stackC={stack3}
              description={infodescription1}
            />
            <QuoteSection quote={bigdescription2} />
            <KeyFeatures
              description={infodescription2}
              phoneA={featuredimg2.localFile}
              phoneB={featuredimg3.localFile}
              phoneC={featuredimg4.localFile}
              slug={slug}
            />
            <BestFeature
              pic={featuredimg5.localFile}
              slug={slug}
              feature={bestfeature}
              description={infodescription3}
            />
            <QuoteSection quote={bigdescription3} />
          </>
        )}

        <BackToTop showBelow={800} />
      </section>
    </>
  );
}

export const query = graphql`
  query Project_Details($slug: String) {
    wpProject(project: { slug: { eq: $slug } }) {
      project {
        title
        website
        github
        stack1
        stack2
        stack3
        slug
        date
        company
        place
        description
        bestfeature
        hasmoreinfo
        bigdescription1
        bigdescription2
        bigdescription3
        infodescription1
        infodescription2
        infodescription3
        thumbimg {
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED, formats: WEBP)
            }
          }
        }
        featuredimg1 {
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED, formats: WEBP)
            }
          }
        }
        featuredimg2 {
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED, formats: WEBP)
            }
          }
        }
        featuredimg3 {
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED, formats: WEBP)
            }
          }
        }
        featuredimg4 {
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED, formats: WEBP)
            }
          }
        }
        featuredimg5 {
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED, formats: WEBP)
            }
          }
        }
      }
    }
  }
`;
