import React from "react";

import Header from "../parts/Header";
import Hero from "../parts/Hero";
import Browseroom from "../parts/HomePage/Browseroom";
import Justarrived from "../parts/HomePage/Justarrived";
import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

import useScrollAnchor from "../helpers/hooks/useScrollAnchor";
import useModalDOM from "../helpers/hooks/useModalDOM";

export default function HomePage() {
  useScrollAnchor();
  useModalDOM();
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <Browseroom />
      <Justarrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
