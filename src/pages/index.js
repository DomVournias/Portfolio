import * as React from "react";
import "../styles/global.css";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slides/Slider";
import ContactForm from "../components/Forms/ContactForm";
import { Helmet } from "react-helmet";
import BackToTop from "../components/Buttons/BackToTop";
import ScrollDown from "../components/Buttons/ScrollDown";

const IndexPage = () => (
  <main className="text-center">
    <Helmet>
      <title>Dom Vournias</title>
      <meta name="icon" href="../images/DomFavicon.png" />
    </Helmet>
    <Hero />
    <Slider className="h-screen w-auto" />
    <ContactForm />
    <ScrollDown hideBelow={200} />
    <BackToTop showBelow={200} />
  </main>
);

export default IndexPage;
