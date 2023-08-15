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
          I'm Dom – a blend of artistry and coding. 
          Let me take you through my journey.
        </p>
        
        <p className="about-paragraphs">
         Back when I was 15, I jumped into creating Tumblr themes with HTML and CSS, just for kicks. 
          And sometimes, I'd toss in some JavaScript here and there to spice things up.
        </p>
        
        <p className="about-paragraphs">
          As time rolled on, my path led me to study Fine Arts
          and later on Film Production. But here's the kicker: the coding bug
          never really left me.
        </p>
        
        <p className="about-paragraphs">
          Life had other plans for me, and in 2017, I found myself
          circling back to coding, this time taking it professionally.
          It's been quite the journey, and I'm excited to keep painting this canvas with code.
        </p>
        
        <p className="about-paragraphs">
          So here I am, a creative coder on a quest to blend
          art and technology in captivating ways.
          Thanks for joining me on this ride!
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
