import * as React from "react";
import "../styles/global.css";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slides/Slider";

const IndexPage = () => (
  <main className="text-center">
    <Hero />
    <Slider className="h-screen w-auto" />
  </main>
);

export default IndexPage;
