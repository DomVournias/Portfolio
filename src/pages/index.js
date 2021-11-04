import * as React from "react";
import "../styles/global.css";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slides/Slider";
import ContactForm from "../components/Forms/ContactForm";

const IndexPage = () => (
  <main className="text-center">
    <Hero />
    <Slider className="h-screen w-auto" />
    <ContactForm />
  </main>
);

export default IndexPage;
