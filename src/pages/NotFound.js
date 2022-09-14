import React from "react";
import PageNotFound from "../parts/Error/PageNotFound";

import Footer from "../parts/Footer";
import Header from "../parts/Header";
import Sitemap from "../parts/Sitemap";

export default function NotFound() {
  return (
    <>
      <Header />
      <PageNotFound />
      <Sitemap />
      <Footer />
    </>
  );
}
