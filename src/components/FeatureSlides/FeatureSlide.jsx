// import React, { useEffect, useState } from "react";
// import { graphql, useStaticQuery } from "gatsby";

// export default function FeatureSlide() {
//   const data = useStaticQuery(graphql`
//     query MyQuery {
//       allMarkdownRemark {
//         nodes {
//           frontmatter {
//             stack3
//             stack2
//             stack1
//             slug
//             place
//             description
//             date
//             company
//             title
//             thumbImg {
//               childImageSharp {
//                 gatsbyImageData
//                 id
//               }
//             }
//           }
//         }
//       }
//     }
//   `);
//   const titleOne = data.allMarkdownRemark.nodes[0].frontmatter.title;
//   const titleTwo = data.allMarkdownRemark.nodes[1].frontmatter.title;
//   const titleThree = data.allMarkdownRemark.nodes[2].frontmatter.title;

//   const descriptionOne =
//     data.allMarkdownRemark.nodes[0].frontmatter.description;
//   const descriptionTwo =
//     data.allMarkdownRemark.nodes[1].frontmatter.description;
//   const descriptionThree =
//     data.allMarkdownRemark.nodes[2].frontmatter.description;

//   const stackOne = data.allMarkdownRemark.nodes[0].frontmatter.stack1;
//   const stackTwo = data.allMarkdownRemark.nodes[0].frontmatter.stack2;
//   const stackThree = data.allMarkdownRemark.nodes[0].frontmatter.stack3;

//   const stackOneB = data.allMarkdownRemark.nodes[1].frontmatter.stack1;
//   const stackTwoB = data.allMarkdownRemark.nodes[1].frontmatter.stack2;
//   const stackThreeB = data.allMarkdownRemark.nodes[1].frontmatter.stack3;

//   const stackOneC = data.allMarkdownRemark.nodes[2].frontmatter.stack1;
//   const stackTwoC = data.allMarkdownRemark.nodes[2].frontmatter.stack2;
//   const stackThreeC = data.allMarkdownRemark.nodes[2].frontmatter.stack3;

//   const [slide, setSlide] = useState("slide");
//   const listenScrollEvent = (event) => {
//     if (window.scrollY < 900) {
//       return setSlide("slide-one-visible");
//     } else if (window.scrollY > 2000) {
//       return setSlide("slide-one-hidden");
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", listenScrollEvent);

//     return () => window.removeEventListener("scroll", listenScrollEvent);
//   }, []);
//   return (
//     <div className="text-left align-top	relative">
//       <div className={slide}>
//         <h3 className="text-5xl">{titleOne}</h3>
//         <h4 className="text-2xl">{descriptionOne}</h4>

//         <div className="pt-4">
//           <span className="px-2 pb-1 text-center bg-blue-600">{stackOne}</span>
//           <span className="px-2 pb-1 text-center bg-green-600">{stackTwo}</span>
//           <span className="px-2 pb-1 text-center bg-purple-600">
//             {stackThree}
//           </span>
//         </div>
//       </div>
//       <div className="space-y-4 bg-gray-900 px-6 py-8 rounded-xl space-around ">
//         <h3 className="text-5xl">{titleTwo}</h3>
//         <h4 className="text-2xl">{descriptionTwo}</h4>

//         <div className="pt-4">
//           <span className="px-2 pb-1 text-center bg-blue-600">{stackOneB}</span>
//           <span className="px-2 pb-1 text-center bg-green-600">
//             {stackTwoB}
//           </span>
//           <span className="px-2 pb-1 text-center bg-purple-600">
//             {stackThreeB}
//           </span>
//         </div>
//       </div>
//       <div className="space-y-4 bg-gray-900 px-6 py-8 rounded-xl space-around ">
//         <h3 className="text-5xl">{titleThree}</h3>
//         <h4 className="text-2xl">{descriptionThree}</h4>

//         <div className="pt-4">
//           <span className="px-2 pb-1 text-center bg-blue-600">{stackOneC}</span>
//           <span className="px-2 pb-1 text-center bg-green-600">
//             {stackTwoC}
//           </span>
//           <span className="px-2 pb-1 text-center bg-purple-600">
//             {stackThreeC}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }
