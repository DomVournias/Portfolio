import * as React from "react";
import "../styles/global.css";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slides/Slider";
import ContactForm from "../components/Forms/ContactForm";
import { Helmet } from "react-helmet";

const IndexPage = () => (
  <main className="text-center">
    <Helmet>
      <title>Dom Vournias</title>
      <meta name="icon" href="../images/DomFavicon.png" />
    </Helmet>
    <Hero />
    <Slider className="h-screen w-auto" />
    <ContactForm />
  </main>
);

export default IndexPage;
