import React from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import Browseroom from "../parts/HomePage/Browseroom";
import Justarrived from "../parts/HomePage/Justarrived";
import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

export default function HomePage(props) {
  return (
    <>
      <Header />
      <Hero />
      <Browseroom />
      <Justarrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
