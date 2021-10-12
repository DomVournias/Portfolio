import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ContactButton from "../components/Buttons/ContactButton";

export default function about() {
  return (
    <main className="flex flex-row max-w-6xl justify-between m-auto items-center px-4 py-14">
      <section className="w-3/5">
        <h3 className="text-5xl font-bold pb-12">Hey 👋</h3>
        <p className="about-paragraphs">
          My name is Rick. I'm a designer and developer from The Netherlands.
          I'm a father of 2. I love being in the outdoors; fishing, hiking and
          mountainbiking are some of the things I do to clear my mind and relax.
        </p>
        <p className="about-paragraphs">
          I've been a designer and developer for over 20 years now. In the past,
          I’ve coded in a lot of different languages like ObjC, Swift, PHP,
          Java, C#. I’m currently focusing on designing 3D graphics using Cinema
          4D and building applications using Javascript/React.
        </p>
        <p className="about-paragraphs">
          The project I'm the most proud of is Flitsmeister, which started as an
          app I built with Sjoerd and Jorn to prevent us from getting speeding
          tickets. It's now a profitable business and has over 1.800.000 active
          users in The EU.
        </p>
        <p className="about-paragraphs">
          Being able to both design and develop is a lot of fun. When you have
          an idea, there’s nothing holding you back from building it.
        </p>
        <p className="about-paragraphs">
          You can view my previous personal website over here.
        </p>
      </section>
      <section className="w-2/5 self-start">
        <h3 className="text-5xl font-bold pb-12">Contact</h3>
        <p className="about-paragraphs">
          You can follow me on Twitter. I post some my work on Instagram and
          Dribbble.
        </p>
        <div>
          <StaticImage
            src="../../images/about.png"
            alt="about"
            quality="90"
            placeholder="tracedSVG"
            className="w-full mb-12 rounded-xl"
          />
        </div>

        <p className="about-paragraphs">
          If you want to work together you can also get in touch with me via
          email below.
        </p>

        <ContactButton />
      </section>
    </main>
  );
}
