import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import AboutContactForm from "../components/Forms/AboutContactForm";
import SimpleLink from "../components/Buttons/SimpleLink";
import { Seo } from "../components/Seo";

export default function about() {
  return (
    <main className="about-container">
      <Seo title="About" />
      <section className="xs:w-5/5 md:w-3/5 self-start">
        <div className="flex flex-row gap-2">
          <h3 className="about-headings">Hey </h3>
          <h3 className="xs:text-4xl md:text-5xl">👋</h3>
        </div>

        <p className="about-paragraphs">
         I'm Dom, and my story is a mashup of art and coding. 
          Back when I was 16, I got into making Tumblr themes using HTML and CSS, just for kicks. 
          I'd mess around with the code, throw in some JavaScript here and there to jazz things up. It was all part of the fun!
        </p>
        <p className="about-paragraphs ">
          
        </p>
        <p className="about-paragraphs ">
          I got involved in several big projects in the past, but the one that I
          am most proud of is H.I.C.D. It's a non-profit institute which I was
          fortunate enough to be the lead developer of two of its departments,
          in{" "}
          <SimpleLink
            url={"https://heniculturaldiplomacy.com/"}
            text={"Greece"}
          />{" "}
          and <SimpleLink url={"https://www.hicd-usa.com/"} text={"USA"} />.
        </p>
        <p className="about-paragraphs ">
          I've studied Fine Arts and later on I moved to England to study Film
          Production. From a very young age I was very passionate about painting
          and arts in general.
        </p>
        <p className="about-paragraphs ">
          Having an artistic background helps me everyday in my work. It boosts
          and speeds up my designs, because I trained and developed an artistic
          perspective over the years.
        </p>
      </section>
      <section className="xs:w-5/5 md:w-2/5 self-start">
        <h3 className="about-headings">Contact</h3>
        <p className="about-paragraphs ">
          You can follow me on Facebook or{" "}
          <SimpleLink
            url={"https://twitter.com/Dom_Vournias"}
            text={"Twitter"}
          />
          . You can also check my repositories in{" "}
          <SimpleLink url={"https://github.com/DomVournias"} text={"Github"} />.
        </p>
        <div>
          <StaticImage
            src="../images/domvAvatar.png"
            alt="about"
            quality="90"
            className="w-full mb-12 rounded-xl"
          />
        </div>

        <p className="about-paragraphs ">
          If you want to work together you can also get in touch with me by
          filling the form bellow.
        </p>

        <AboutContactForm />
      </section>
    </main>
  );
}
